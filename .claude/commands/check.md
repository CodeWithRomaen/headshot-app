---
description: Format, lint, and typecheck the project, then fix anything that fails
---

Bring the working tree up to standard before ending the session.

1. Run `npm run fix` — this applies Prettier formatting and ESLint autofixes in place.
2. Run `npm run check` — this verifies formatting, lint, and types with no autofix.
3. If step 2 reports anything, fix the underlying code yourself. Do not silence
   problems with `eslint-disable`, `@ts-ignore`, or `any` unless there is a real
   reason, and say so explicitly if you do.
4. Report what changed. If nothing needed fixing, say so in one line.

Only touch files related to problems the tools actually reported — this command is
a cleanup pass, not an invitation to refactor.

If the user passed arguments, treat them as extra scope for this pass: $ARGUMENTS
