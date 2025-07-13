import type { Awaitable, ConfigNames, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import antfu from '@antfu/eslint-config'

function cda(
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
  }, ...userConfigs)
}

export default cda
