const path = require('path')
const { merge } = require('webpack-merge')

const packageJson = require('../package.json')
const commonConfig = require('./webpack.common')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    port: 8081,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './app': path.resolve(__dirname, '..', 'src', 'bootstrap.js'),
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'public', 'index.html'),
    }),
  ],
}

module.exports = merge(commonConfig, devConfig)
