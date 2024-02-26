module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "indent": ["error", 4],
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "sort-imports": [
      "error",
      {
        "ignoreCase": true,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
      }
    ],
    "comma-dangle": ["error", "never"],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "no-trailing-spaces": [
      "error",
      {
        "ignoreComments": true
      }
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ],
    "no-var": "error",
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "space-before-function-paren": ["error", "never"],
    "space-before-blocks": ["error", "always"],
    "keyword-spacing": ["error", { "before": true }],
    "no-undef": "off",
    "block-spacing": ["error", "always"],
    "padded-blocks": ["error", "never"],
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
    "curly": ["error", "multi-or-nest"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "no-console": "off",
    "no-constant-condition": ["error", { "checkLoops": false }],
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "no-template-curly-in-string": "error",
    "no-unsafe-negation": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-floating-decimal": "error",
    "no-implicit-globals": "error",
    "no-invalid-this": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-unmodified-loop-condition": "error",
    "no-useless-call": "error",
    "no-useless-return": "error",
    "no-with": "error",
    "no-void": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-whitespace-before-property": "error",
    "no-irregular-whitespace": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "react/prop-types": "off"
  },
}
