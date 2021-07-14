const paths = require('./paths')
require('dotenv').config({ path: paths.env })

const { merge } = require('webpack-merge')

const dependencies = require('../package.json').dependencies
const commonConfig = require('./webpack.common')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    publicPath: `http://localhost:${process.env.APP_PORT}/`,
    chunkFilename: '[id].[contenthash].js',
  },
  devServer: {
    host: '0.0.0.0',
    port: process.env.APP_PORT,
    contentBase: paths.dist,
    open: true,
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      filename: 'remoteEntry.js',
      // library: { type: 'var', name: 'container' },
      remotes: {
        products: 'products@http://localhost:8081/remoteEntry.js',
      },
      exposes: {},
      shared: [
        {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies['react'],
          },
          'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
          },
        },
      ],
    }),
  ],
}

module.exports = merge(commonConfig, devConfig)
