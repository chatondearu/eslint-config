# eslint-config

[![CI][ci-src]][ci-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]
[![code style][code-style-src]][code-style-href]

This project extends the excellent flat ESLint config from `@antfu/eslint-config` with a small set of defaults used in my projects.

## Install

```bash
pnpm add -D @chatondearu/eslint-config @antfu/eslint-config eslint eslint-plugin-format
```

### Peer dependencies

Install compatible peers in your project:

- `@antfu/eslint-config` `^9.0.0`
- `eslint` `^9.10.0` or `^10.0.0`
- `eslint-plugin-format` `>=0.1.0` (required when `formatters: true`)

For pnpm workspaces, Antfu v9 also expects these root settings in `pnpm-workspace.yaml`:

```yaml
shellEmulator: true
trustPolicy: no-downgrade
```

## Usage

Usage is intentionally close to [@antfu/eslint-config][code-style-href].

### Defaults enabled by this wrapper

This wrapper enables these options by default:

- `typescript: true`
- `formatters: true`
- `pnpm: true`

You can override any of them in your project config:

```javascript
import cda from '@chatondearu/eslint-config'

export default cda({
  typescript: false,
  formatters: false,
  pnpm: false,
})
```

Create an `eslint.config.js` file at the root of your project:

```javascript
import cda from '@chatondearu/eslint-config'

export default cda({
  unocss: true,
  // ...
})
```

### Nuxt

To use with Nuxt:

```javascript
import cda from '@chatondearu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  cda(),
)
```

## Releasing

CI runs on every push/PR to `main`. npm publishes are automated when a `v*` tag is pushed (trusted publisher / OIDC).

See [`.github/RELEASING.md`](./.github/RELEASING.md) for npm and GitHub setup, then:

```bash
pnpm release
```

## License

[MIT](./LICENSE.md) License © [ChatonDeAru](https://github.com/chatondearu)

<!-- Badges -->

[ci-src]: https://github.com/chatondearu/eslint-config/actions/workflows/ci.yml/badge.svg
[ci-href]: https://github.com/chatondearu/eslint-config/actions/workflows/ci.yml
[npm-version-src]: https://img.shields.io/npm/v/@chatondearu/eslint-config?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@chatondearu/eslint-config
[npm-downloads-src]: https://img.shields.io/npm/dm/@chatondearu/eslint-config?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@chatondearu/eslint-config
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@chatondearu/eslint-config?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@chatondearu/eslint-config
[license-src]: https://img.shields.io/github/license/chatondearu/eslint-config.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/chatondearu/eslint-config/blob/main/LICENSE.md
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@chatondearu/eslint-config
[code-style-src]: https://antfu.me/badge-code-style.svg
[code-style-href]: https://github.com/antfu/eslint-config
