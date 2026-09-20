# rn-component-library-consumer

A separate Expo application that consumes `rn-component-library-demo` directly
from a GitHub tag.

The screen imports `DemoButton`, `StatusCard`, and `ChoiceChips` from the package
name. It contains no copied library source and no Storybook setup.

## Before installing

```sh
npm install
npm run start
```

Project checks:

```sh
npm run verify
```

## Version baseline

- Expo SDK 57.0.24
- React 19.2.3
- React Native 0.86.3
- TypeScript 6.0.3
- ESLint 9.39.5 with Expo's standard configuration

These match Expo's current blank TypeScript template. ESLint 9 is retained
because the React plugin currently used by `eslint-config-expo` is not yet
compatible with ESLint 10's rule API.

The lockfile should be generated after replacing `OWNER`; npm cannot resolve a
placeholder repository into the exact commit required by a lockfile.

## Two different delivery paths

- npm installs component code from the Git repository and tag in `package.json`.
- GitHub Pages hosts the browser-readable Storybook site.

The Pages URL is documentation, not a package registry or install source.

See [how the dependency works](docs/HOW-THE-DEPENDENCY-WORKS.md) and
[troubleshooting](docs/TROUBLESHOOTING.md).
