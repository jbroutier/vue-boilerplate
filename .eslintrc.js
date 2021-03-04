module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  extends: [
    'eslint-config-standard',
    'plugin:eslint-plugin-vue/vue3-essential'
  ],
  settings: {
    'import/resolver': 'webpack'
  }
}
