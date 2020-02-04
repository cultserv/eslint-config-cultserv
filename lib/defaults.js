module.exports = {
  env: {
    browser: true,
    node: true
  },
  plugins: [
    'vue'
  ],
  extends: [
    'standard',
    'plugin:vue/base',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: "module",
    ecmaVersion: 2017
  },
  rules: {
    'no-trailing-spaces': 'off',
    'spaced-comment': 'off',
    'camelcase': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'no-prototype-builtins': 'off',
    'indent': 'off',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_$' }],
    'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }],
    'vue/html-closing-bracket-spacing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
    'vue/html-indent': 'error',
    'vue/html-self-closing': 'off',
    'vue/attributes-order': 'off',
    'vue/order-in-components': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off', // error
    'vue/require-prop-types': 'off',
    'vue/no-spaces-around-equal-signs-in-attribute': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-parsing-error': 'warn',
    'vue/no-use-v-if-with-v-for': 'warn',
    'vue/no-unused-vars': 'error',
    'vue/require-v-for-key': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/name-property-casing': 'off'
  }
};
