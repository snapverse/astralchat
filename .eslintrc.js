module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "no-tabs": ["warn", { allowIndentationTabs: true }],
    "quotes": ["warn", "single"],
    "semi": ["warn", "always"],
    "jsx-quotes": ["error", "prefer-single"],
    "no-mixed-spaces-and-tabs": "error",
    "indent": ["error", 2]
  }
}
