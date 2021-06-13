const path = require('path')

const __root = path.resolve(__dirname, '..')
const __bootstrap = path.resolve(__root, 'src', 'bootstrap')

module.exports = {
  bootstrap: {
    mount: path.resolve(__bootstrap, 'mount.js'),
    webComponent: path.resolve(__bootstrap, 'webComponent.tsx'),
  },
  env: path.resolve(__root, '.dev.env'),
  dist: path.resolve(__root, 'dist'),
  indexJS: path.resolve(__root, 'src', 'index.js'),
  indexHTML: path.resolve(__root, 'public', 'index.html'),
}
