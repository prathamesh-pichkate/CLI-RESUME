# CLI-Based Resume

A Node.js CLI that prints Prathamesh Pichkate's resume directly in the terminal with ANSI styling. Built with Chalk, Boxen, and Figlet.

## What this project does
- Packages the resume as an npm CLI.
- Renders a styled ASCII title plus boxed sections (contact, education, experience, projects, skills, achievements, links).
- Ships a single executable entrypoint under `bin/index.js` that calls `showResume()` from `src/resume.js`.

## Tech stack
- Node.js (ES modules)
- Chalk for colors, Boxen for boxed layout, Figlet for ASCII art

## Project structure
```
CLI-Based-Resume/
├─ bin/
│  └─ index.js          # CLI entrypoint (bin target)
├─ src/
│  └─ resume.js         # Resume rendering logic
├─ package.json         # Package metadata and bin mapping
├─ package-lock.json
├─ node_modules/
└─ README.md
```

## Running the CLI (npx)
> Replace with the published command that matches your npm bin name.

- Current bin alias (from `package.json`): `@prathamesh-pichkate1208`
- Package name: `@prathameshpichkate/cli-based-resume`

Common ways to execute:
```bash
# Run by bin name (recommended once published)
npx @prathamesh-pichkate1208

# Or fetch the package and execute its bin
npx @prathameshpichkate/cli-based-resume
```
If you see "command not found" when using `npx @prathameshpichkate/cli-based-resume`, use the bin alias shown above.

## Local development
```bash
# Install deps
npm install

# Run directly
node bin/index.js

# Or link and test as a global-style binary
npm link
npx @prathamesh-pichkate1208
```

## How it works
- `bin/index.js` is the executable; it simply imports and calls `showResume()` from `src/resume.js`.
- `src/resume.js` composes the resume sections, adds color and ASCII art, wraps the output in a Boxen container, then prints to stdout.
- The package uses ESM (`"type": "module"`), so imports use `import` syntax.

## Updating the resume content
- Edit the inline template inside `src/resume.js` (contact, education, experience, projects, skills, achievements, links).
- Keep line widths reasonable (Boxen padding + border) for better terminal readability.

## Publishing to npm
```bash
# Login (one-time)
npm login

# Ensure package name and bin are correct in package.json
# Publish publicly under your scope
npm publish --access public

# Verify
npx @prathamesh-pichkate1208
```
If you want the command to be `npx @prathameshpichkate/cli-based-resume`, align the `bin` key to that name in `package.json` before publishing.

## Troubleshooting
- Node version: use Node 18+.
- Permission issues on Unix: `chmod +x bin/index.js`.
- If npx cannot find the binary, confirm the `bin` key and the published package name match, then republish.

## License
MIT
