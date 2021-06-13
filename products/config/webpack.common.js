const paths = require('./paths')

module.exports = {
  entry: paths.indexJS,
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
              '@babel/preset-typescript',
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
}
