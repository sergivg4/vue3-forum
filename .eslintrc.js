module.exports = {

  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'space-before-function-paren': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
