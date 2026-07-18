---
name: hermes-tweet
description: Use the Hermes Agent X/Twitter plugin for source-backed research and explicitly approved actions
allowed-tools: ["Bash"]
version: 1.0.0
author: Xquik
license: Apache-2.0
keywords: [hermes-agent, xquik, twitter, research, automation]
---

# Hermes Tweet

Use Hermes Tweet when a task needs current public X/Twitter context through
Hermes Agent. Keep research read-first and treat every account-changing call as
an explicit, separately approved action.

This Claude Code skill guides a separate Hermes Agent installation. It does not
add `tweet_explore`, `tweet_read`, or `tweet_action` to Claude Code. Run Hermes
through the `hermes` CLI or give these instructions to an interactive Hermes
session.

## Install

Check for Hermes before changing the user's system:

```bash
command -v hermes
hermes plugins list
```

Install or enable the plugin only after the user approves the change:

```bash
hermes plugins install Xquik-dev/hermes-tweet --enable
hermes plugins list
```

Interactive installs prompt for `XQUIK_API_KEY`. For non-interactive sessions,
set it in the process environment or `~/.hermes/.env`, then reload or restart
the Hermes process. Never print, log, or commit the key.

## Research Workflow

1. Start an interactive Hermes session or use `hermes -z` with the
   `hermes-tweet` toolset.
2. Ask Hermes to call `tweet_explore` to find the catalog route for the
   requested search, account, thread, trend, monitor, or radar operation.
3. Confirm the selected route is read-only.
4. Ask Hermes to call `tweet_read` with the concrete `/api/v1/...` path and
   query object.
5. Summarize only the returned evidence and cite source URLs or account names.
6. State when a result is unavailable, rate-limited, or incomplete.

For a non-interactive research probe:

```bash
hermes -z "Find recent posts about PostgreSQL 18. Return source links." \
  --toolsets hermes-tweet
```

Without `XQUIK_API_KEY`, only the no-network `tweet_explore` tool should be
available in Hermes. Treat that as expected gating, not an installation
failure.

## Action Workflow

Do not ask Hermes to call `tweet_action` during research. Before an
account-changing action:

1. Show the exact account, operation, and public payload.
2. Ask for explicit confirmation of that exact action.
3. Verify `HERMES_TWEET_ENABLE_ACTIONS=true` is set.
4. Ask Hermes to call `tweet_action` once with a concise reason.
5. Report the returned result without retrying a failed or uncertain write.
6. If Hermes returns `pending_confirmation`, preserve the `writeActionId`.
   Ask Hermes to check that write action's status. Do not submit the action
   again.

Use an interactive Hermes session for approval-gated actions so the user can
inspect and confirm the final payload.

## Examples

Read-only research:

```text
Run Hermes with the hermes-tweet toolset. Ask it to explore the tweet search
route, then find recent posts about PostgreSQL 18. Summarize recurring themes
with source links.
```

Approval-gated action:

```text
Open an interactive Hermes session with Hermes Tweet enabled. Prepare a reply
to the selected post, show the account and final text, and wait for confirmation
before asking Hermes to call tweet_action.
```

## Limitations

- Claude Code cannot call Hermes Tweet's tools directly.
- Do not install or enable Hermes plugins without user approval.
- Hermes Tweet does not bypass private accounts or platform access controls.
- Read results can be partial when a route paginates or rate-limits.
- Write tools remain unavailable unless the API key and action gate are both
  configured.
- Never infer that a write succeeded from an error or pending response.
