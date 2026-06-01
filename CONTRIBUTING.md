# Contributing

Please refer to https://github.com/chatondearu/contribute for general contribution guidelines.

## Development

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm test:ci
pnpm build
```

CI runs the same checks on every pull request and push to `main`.

## Releases

Releases are tag-driven and published to npm from GitHub Actions using [trusted publishers](https://docs.npmjs.com/trusted-publishers).

See [`.github/RELEASING.md`](./.github/RELEASING.md) for the full setup and release process.
