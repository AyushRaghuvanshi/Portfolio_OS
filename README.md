# AyushOS — portfolio

A desktop-OS style portfolio. All the content lives in plain files under
[`content/`](content/), so you can add experience, projects, skills, etc.
**without touching `AyushOS.dc.html`** — just edit a content file and reload.

## Just open it

Double-click **`AyushOS.dc.html`** (or open it in any browser). No web server
needed — the content files are loaded as `<script>` tags, which browsers allow
over `file://`.

## Editing content

| File | What it controls | How to add an item |
|------|------------------|--------------------|
| `content/about.js` | Name, role, bio, tags, "available" pill | edit the `key: value` fields |
| `content/experience.js` | Career timeline | add a `## Job · Company` block |
| `content/projects.js` | Project cards | add a `## Project Name` block |
| `content/skills.js` | Skill groups | add a `## Group` block |
| `content/trophies.js` | Achievements | add a `## Title` block |
| `content/contact.js` | Contact links | add a `## label` block |

Each file is a thin wrapper: a comment header, then your content as markdown
**between the backticks** ``` `` ```. You only ever edit the text inside the
backticks. Two rules: don't type a backtick `` ` `` or the sequence `${` inside
the text (those have special meaning in the wrapper).

The markdown format itself is just two patterns:

- **`key: value`** — a field. Long values can wrap onto the next line(s).
- **`- bullet`** — a list item (experience bullets). Wrap text in
  `**double asterisks**` to make it bold. A bullet can wrap onto the next lines.

Lines starting with `#` are comments/notes and are ignored.

### Example — add a new project

Open `content/projects.js` and add a block inside the backticks:

```
## My New Project
subtitle: @ Some Company
desc: One or two sentences about what it does and the impact it had.
tech: TypeScript, Postgres, Docker
link: https://github.com/you/repo   # optional — makes the whole card clickable
```

Save, reload the page, and the new card appears. Same idea for experience,
trophies, etc.

### Contact href tips (`content/contact.js`)

- `mailto:you@example.com` — opens the mail app
- `copy://+9112345` — copies that text to the clipboard on click (used for phone)
- `https://...` — opens in a new tab
