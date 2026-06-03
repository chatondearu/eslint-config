# Releasing

Releases are automated from Git tags via [`.github/workflows/release.yml`](./workflows/release.yml).  
Publishing uses [npm trusted publishers](https://docs.npmjs.com/trusted-publishers) (OIDC) — no long-lived `NPM_TOKEN` in GitHub secrets.

## One-time setup on npmjs.com

1. Open **Packages → `@chatondearu/eslint-config` → Settings → Trusted publishing**.
2. Add a **GitHub Actions** trusted publisher:

   | Field                  | Value                       |
   | ---------------------- | --------------------------- |
   | Repository             | `chatondearu/eslint-config` |
   | Workflow filename      | `release.yml`               |
   | Environment (optional) | `npm`                       |

3. (Recommended) Under **Publishing access**, restrict token publishing after trusted publishing works:
   - **Require two-factor authentication and disallow tokens**

`package.json` must keep a `repository.url` that matches this GitHub repo (required for OIDC validation).

## One-time setup on GitHub

1. Create an environment named **`npm`**:
   - **Settings → Environments → New environment → `npm`**
2. (Optional) Add protection rules (required reviewers, wait timer) before publish.

The workflow filename and environment name must match what you configured on npm.

## Release flow

1. Merge changes to `main` and ensure [CI](./workflows/ci.yml) is green.
2. Bump the version and create a tag (local example):

   ```bash
   pnpm exec bumpp
   ```

   This updates `package.json`, commits, pushes, and creates `vX.Y.Z`.

3. Pushing the tag triggers **Release** workflow:
   - Verifies tag ↔ `package.json` version
   - Runs lint, typecheck, tests, build
   - Creates/updates the GitHub release (changelogithub)
   - Publishes to npm with provenance (trusted publisher)

## Requirements

- **Node** ≥ 22.14 (see `.nvmrc`)
- **npm CLI** ≥ 11.5.1 on the release runner (workflow installs `npm@11`)
- **GitHub-hosted runners** only (self-hosted runners are not supported for trusted publishing)

## Troubleshooting

| Error                  | Check                                                                                                                 |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `ENEEDAUTH` on publish | Trusted publisher workflow name is exactly `release.yml`; `id-token: write` is set; environment name matches (`npm`). |
| Tag / version mismatch | Tag must be `v{version}` matching `package.json` (e.g. tag `v1.0.0` → version `1.0.0`).                               |
| Provenance missing     | Repo must be public; package must be public; publish must use trusted publishing from GitHub Actions.                 |

Manual publish (fallback, not recommended):

```bash
pnpm build
pnpm publish --access public --no-git-checks
```

Use `pnpm publish` (not `npm publish`) so `catalog:` specifiers are replaced with real version ranges in the published manifest.
