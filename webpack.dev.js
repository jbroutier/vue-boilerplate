const { HotModuleReplacementPlugin } = require('webpack')

const config = require('./webpack.config')
const { merge } = require('webpack-merge')

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 9000
  },
  output: {
    filename: 'scripts/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
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
        loader: 'url-loader'
      },
      {
        test: /\.(eot|oft|ttf|woff2?)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ]
})
