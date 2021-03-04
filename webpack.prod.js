const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const ImageMinimizerWebpackPlugin = require('image-minimizer-webpack-plugin')

const config = require('./webpack.config')
const { merge } = require('webpack-merge')

module.exports = merge(config, {
  mode: 'production',
  output: {
    filename: 'scripts/[name].[contenthash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'styles/[name].[contenthash:8].[ext]'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(gif|ico|jpe?g|png|svg|webp)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[contenthash:8].[ext]'
        }
      },
      {
        test: /\.(eot|oft|ttf|woff2?)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[contenthash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CssMinimizerWebpackPlugin(),
    new ImageMinimizerWebpackPlugin()
  ]
})
