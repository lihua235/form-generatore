module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'airbnb-base'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-unused-components': 0,
    'no-unused-vars': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'comma-dangle': [2, 'never'],
    semi: [2, 'never'],
    'no-unused-expressions': 0,
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'arrow-parens': [2, 'as-needed'],
    'max-len': [
      0,
      {
        code: 120
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
