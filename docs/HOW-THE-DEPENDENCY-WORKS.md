# How the dependency works

The application declares one ordinary dependency:

```json
{
  "rn-component-library-demo": "github:OWNER/rn-component-library-demo#v1.0.0"
}
```

During `npm install`, npm asks GitHub for the commit identified by `v1.0.0`.
The library's root `package.json` points to committed JavaScript and TypeScript
declarations in `dist/`. React and React Native are peers, so this app supplies
the framework instances used by both app and library.

Application code imports from the public package boundary:

```tsx
import {
  ChoiceChips,
  DemoButton,
  StatusCard,
} from 'rn-component-library-demo';
```

Imports such as `rn-component-library-demo/src/components/DemoButton` are deep
imports. They reach into private structure and are intentionally not used.

## GitHub Pages is separate

GitHub Pages serves the static Storybook files for people to browse. npm does
not install components from the Pages site. It downloads the tagged source
snapshot from the Git repository.

Suggested prompt: “Draw the two paths from one component source file to (1) a
Storybook page and (2) an Expo application's node_modules directory.”
