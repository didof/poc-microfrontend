const path = require('path')

module.exports = {
  env: path.resolve(__dirname, '..', '.dev.env'),
  dist: path.resolve(__dirname, 'dist'),
  indexHTML: path.resolve(__dirname, '..', 'public', 'index.html'),
}
