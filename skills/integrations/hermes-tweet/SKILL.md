---
name: hermes-tweet
description: Use the Hermes Agent X/Twitter plugin for source-backed research and explicitly approved actions
allowed-tools: ["Bash", "Read"]
version: 1.0.0
author: Xquik
license: Apache-2.0
keywords: [hermes-agent, xquik, twitter, research, automation]
---

# Hermes Tweet

Use Hermes Tweet when a task needs current public X/Twitter context through
Hermes Agent. Keep research read-first and treat every account-changing call as
an explicit, separately approved action.

## Install

```bash
hermes plugins install Xquik-dev/hermes-tweet --enable
hermes plugins list
```

Interactive installs prompt for `XQUIK_API_KEY`. For non-interactive sessions,
set it in the process environment or `~/.hermes/.env`, then reload or restart
the Hermes process. Never print, log, or commit the key.

## Research Workflow

1. Call `tweet_explore` to find the catalog route for the requested search,
   account, thread, trend, monitor, or radar operation.
2. Confirm the selected route is read-only.
3. Call `tweet_read` with the concrete `/api/v1/...` path and query object.
4. Summarize only the returned evidence and cite source URLs or account names.
5. State when a result is unavailable, rate-limited, or incomplete.

Without `XQUIK_API_KEY`, only the no-network `tweet_explore` tool should be
available. Treat that as expected gating, not an installation failure.

## Action Workflow

Do not call `tweet_action` during research. Before an account-changing action:

1. Show the exact account, operation, and public payload.
2. Ask for explicit confirmation.
3. Verify `HERMES_TWEET_ENABLE_ACTIONS=true` is set.
4. Call `tweet_action` once with a concise reason.
5. Report the returned result without retrying a failed write automatically.

## Examples

Read-only research:

```text
Use tweet_explore to find the tweet search route, then use tweet_read to find
recent posts about PostgreSQL 18. Summarize recurring themes with source links.
```

Approval-gated action:

```text
Prepare a reply to the selected post. Show the account and final text, then
wait for confirmation before calling tweet_action.
```

## Limitations

- Hermes Tweet does not bypass private accounts or platform access controls.
- Read results can be partial when the upstream route paginates or rate-limits.
- Write tools remain unavailable unless the API key and action gate are both
  configured.
- Never infer that a write succeeded when the tool returns an error.
