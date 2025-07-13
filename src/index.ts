import type { Linter } from 'eslint'
import antfu from '@antfu/eslint-config'
import { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { Awaitable, ConfigNames, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'

// import withNuxt from './.nuxt/eslint.config.mjs'

// export default withNuxt(
//   antfu({
//     typescript: true,
//     formatters: true,
//     pnpm: true,
//     unocss: true,
//     markdown: true,
//     vue: {
//       a11y: true,
//     },
//   }),
// )

export default function cda(
  options: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {},
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  return antfu({
    typescript: true,
    formatters: true,
    pnpm: true,
    // unocss: true,
    // markdown: true,
    // vue: {
    //   a11y: true,
    // },
    ...options,
  }, {
    //  TODO: Add custom rules
  },
  ...userConfigs)
}