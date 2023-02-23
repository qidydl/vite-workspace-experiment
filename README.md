# vite-workspace-experiment

Experimenting with creating a web UI using Vite, workspaces, and Preact or React.

## Getting started

1. Install pnpm. The node.js "corepack" system seems to never work and is not stable, so it's recommended to just use `npm install -g pnpm`
2. Install dependencies from the root directory by running `pnpm install`
3. Start the app in `packages/app` by running `pnpm start`

# TODO

- [x] Get list of VS Code extensions and settings
- [x] Set up library (tsc only) and app (Vite)
- [ ] Set up tests for both library and app (vitest, testing-library)
- [ ] Set up Prettier, ESLint, Stylelint
  - Could do them in Vite: https://bitbucket.org/unimorphic/vite-plugin-linter/src/master/
  - Another option: https://github.com/fi3ework/vite-plugin-checker
- [ ] Set up automated pipeline that builds, runs linting, etc.
- [ ] Can we push most/all deps up to root package.json so they're consistent across the repo?
  - No, but see https://github.com/JamieMason/syncpack which also has more linting
- [ ] Get rid of intermediate "packages" directory

# Reference links

- https://pnpm.io/workspaces
- https://github.com/vitejs/vite
- https://vitejs.dev/guide/
- https://vitest.dev/guide/
- https://cathalmacdonnacha.com/migrating-from-create-react-app-cra-to-vite
- https://cathalmacdonnacha.com/setting-up-eslint-prettier-in-vitejs
- https://cathalmacdonnacha.com/migrating-from-jest-to-vitest
- https://github.com/vitejs/awesome-vite
