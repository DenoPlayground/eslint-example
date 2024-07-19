// eslint.config.js
import parserTs from '@typescript-eslint/parser'
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    files: ["**/*.ts"],
    plugins: {
      '@stylistic': stylistic
    },
    languageOptions: {
      parser: parserTs
    },
    rules: {
      '@stylistic/type-annotation-spacing': ['error', {
        "before": true,
        "after": true
      }],
      '@stylistic/key-spacing': ['error', {
        "beforeColon": false,
        "afterColon": true,
        "mode": "strict"
      }]
    }
  }
];
