# Team Projects — example app

A small app built from `templates/starter` using only the starter and the
docs. It shows how Main Brand components compose into real screens.

```bash
bun install
bun run dev -- -p 3001
```

| Route | Shows |
| --- | --- |
| `/` | Overview cards, link actions |
| `/projects` | Search + status filter, loading skeletons, empty (no data / no results) and error-with-retry states. Try `?simulate=error` and `?simulate=empty`. |
| `/projects/new` | Validated form: validation summary that takes focus, per-field errors, live re-validation after first submit, counter, loading submit, server error |
| `/settings` | Settings form, destructive action confirmed in a Dialog |

App logic lives in `lib/` — `projects.ts` (data, simulated latency and
failures) and `validation.ts` (form rules). `components/ui` is unchanged
library code; `components/patterns` holds the starter's page patterns.

Added beyond the starter: `npx shadcn@latest add @main/validation-summary`.
