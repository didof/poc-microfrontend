const css = {
  log: 'background: #222; color: #bada55',
}

export default class Logger {
  constructor() {
    this.isActive = process.env.NODE_ENV === 'development'
    this.prefix = '[Products]'
    this.customCss = null
  }

  static buildWithPrefix(prefix) {
    const instance = new Logger()
    instance.addPrefix(prefix, true)
    return instance
  }

  addPrefix(prefix, squareBrackets = false) {
    const modifiedPrefix = squareBrackets ? `[${prefix}]` : prefix
    this.prefix += modifiedPrefix
  }

  useCss(css) {
    this.customCss = css
  }

  log(...args) {
    const cssColor = this.customCss ? this.customCss : css.log
    console.log(`%c${this.prefix} ${args}`, cssColor)
  }

  table(...args) {
    console.table(...args)
  }
}
