// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu(
    {
      unocss: true,
      // formatters: true,
      stylistic: {
        indent: 2, // 4, or 'tab'
        quotes: 'single', // or 'double'
        semi: true,
      },
      rules: {
        'curly': ['error', 'all'],
        'no-console': 'off',
        'no-restricted-syntax': [
          'error',
          {
            selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name!=/^(log|warn|error|info|trace)$/]',
            message: 'Unexpected property on console object was called',
          },
        ],
        'style/max-statements-per-line': ['error', { max: 2 }],
        'unused-imports/no-unused-imports': ['error'],
        'vue/max-attributes-per-line': ['error', {
          singleline: {
            max: 1
          },
          multiline: {
            max: 1
          },
        }],
      },
    },
  ),
)
