# Troubleshooting

## npm says the repository or tag does not exist

Confirm that `v1.0.0` appears
under the repository's tags. Private repositories also require GitHub access on
the installing machine or CI runner.

## The editor cannot find package information

In the library repository, build and commit `dist/index.d.ts` before creating
the tag. Then install the updated tag in this app.

## The app shows an older component

Tags do not move. Create a new library tag and update the dependency string,
then reinstall dependencies.

## There is an invalid hook call or duplicated native framework

Run:

```sh
npm ls react react-native
```

The dependency tree should show the library using the app's deduplicated React
and React Native packages rather than installing its own copies.

## Metro cannot resolve the library

Confirm the tag includes `dist/` and that the package's `exports`, `main`, and
`react-native` fields point to those files. This project intentionally has no
special Metro workaround.
