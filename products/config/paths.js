const path = require('path')

module.exports = {
  bootstrap: path.resolve(__dirname, '..', 'src', 'bootstrap.js'),
  env: path.resolve(__dirname, '..', '.dev.env'),
  dist: path.resolve(__dirname, 'dist'),
  indexJS: path.resolve(__dirname, '..', 'src', 'index.js'),
  indexHTML: path.resolve(__dirname, '..', 'public', 'index.html'),
}
