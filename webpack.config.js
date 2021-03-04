const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'public/assets')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.worker\.js$/,
        loader: 'worker-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, 'src'),
      files: '**/*.(js|vue)'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    }),
    new StylelintWebpackPlugin({
      context: path.resolve(__dirname, 'src'),
      files: '**/*.(scss|vue)'
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
}
