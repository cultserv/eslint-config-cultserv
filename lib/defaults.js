module.exports = {

  extends: 'eslint:recommended',

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module'
  },

  rules: {
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2, { 'SwitchCase': 1, 'VariableDeclarator': 0, 'MemberExpression': 1 }],
    'dot-location': ['error', 'property'],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'consistent-this': ['error', 'self'],
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'max-depth': 'error',
    'max-len': ['error', 120],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-lonely-if': 'error',
    'no-multiple-empty-lines': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always', { 'arraysInObjects': false }],
    'object-property-newline': ['error', { 'allowMultiplePropertiesPerLine': true }],
    'operator-linebreak': ['error', 'before'],
    'semi-spacing': 'error',
    'semi': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-unary-ops': 'error',
    'unicode-bom': 'error',
    'arrow-spacing': 'error',

    'no-duplicate-imports': 'error',
    'constructor-super': 'error',
    'no-var': 'error',
    'prefer-const': 'error',

    'no-eq-null': 'error',
    'no-global-assign': 'error',
    'no-invalid-this': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-return-assign': ['error', 'always'],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-useless-escape': 'error',
    'strict': 'error',
    'no-undef-init': 'error',
    'one-var': ['error', 'never'],

    'no-console': 'off'
  }

};
