const paths = require('./paths')
require('dotenv').config({ path: paths.env })

const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const dependencies = require('../package.json').dependencies

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: `products@${domain}/products/remoteEntry.js`,
      },
      shared: dependencies,
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig)
