import { readFile, readdir } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = join(root, ".claude-plugin", "marketplace.json");

function fail(message) {
  throw new Error(message);
}

async function readJson(path) {
  return JSON.parse(await readFile(path, "utf8"));
}

function frontmatterValue(markdown, field, path) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    fail(`${relative(root, path)} has no YAML frontmatter`);
  }

  const value = match[1]
    .split("\n")
    .find((line) => line.startsWith(`${field}:`))
    ?.slice(field.length + 1)
    .trim();

  if (!value) {
    fail(`${relative(root, path)} has no ${field} frontmatter field`);
  }

  return value;
}

async function findPluginManifests(directory) {
  const manifests = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      manifests.push(...(await findPluginManifests(path)));
    } else if (entry.name === "plugin.json") {
      manifests.push(path);
    }
  }
  return manifests;
}

const marketplace = await readJson(manifestPath);
const registeredSources = new Set();
const registeredNames = new Set();

for (const entry of marketplace.plugins) {
  if (registeredNames.has(entry.name)) {
    fail(`Duplicate marketplace plugin name: ${entry.name}`);
  }
  registeredNames.add(entry.name);

  const source = resolve(root, entry.source);
  if (source !== root && !source.startsWith(`${root}${sep}`)) {
    fail(`Plugin source escapes the repository: ${entry.source}`);
  }

  const sourceKey = relative(root, source);
  if (registeredSources.has(sourceKey)) {
    fail(`Duplicate marketplace plugin source: ${entry.source}`);
  }
  registeredSources.add(sourceKey);

  const pluginPath = join(source, "plugin.json");
  const skillPath = join(source, "SKILL.md");
  const plugin = await readJson(pluginPath);
  const skill = await readFile(skillPath, "utf8");

  if (plugin.name !== entry.name) {
    fail(`${sourceKey}/plugin.json name does not match the marketplace`);
  }
  if (plugin.version !== entry.version) {
    fail(`${sourceKey}/plugin.json version does not match the marketplace`);
  }
  if (plugin.skills?.length !== 1 || plugin.skills[0] !== "./SKILL.md") {
    fail(`${sourceKey}/plugin.json must register ./SKILL.md exactly once`);
  }
  if (frontmatterValue(skill, "name", skillPath) !== entry.name) {
    fail(`${sourceKey}/SKILL.md name does not match the marketplace`);
  }
  if (frontmatterValue(skill, "version", skillPath) !== entry.version) {
    fail(`${sourceKey}/SKILL.md version does not match the marketplace`);
  }
}

const pluginManifests = [
  ...(await findPluginManifests(join(root, "skills"))),
  ...(await findPluginManifests(join(root, "examples"))),
];

for (const path of pluginManifests) {
  const sourceKey = relative(root, dirname(path));
  if (!registeredSources.has(sourceKey)) {
    fail(`Unregistered plugin source: ${sourceKey}`);
  }
}

if (pluginManifests.length !== registeredSources.size) {
  fail("Marketplace entries and plugin manifests are not one-to-one");
}

process.stdout.write(
  `Validated ${registeredSources.size} marketplace plugins.\n`,
);
