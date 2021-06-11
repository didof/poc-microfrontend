const css = {
  log: 'background: #222; color: #bada55',
}

export default class Logger {
  constructor() {
    this.isActive = process.env.NODE_ENV === 'development'
    this.prefix = '[Products]'
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

  log(...args) {
    console.log(`%c${this.prefix} ${args}`, css.log)
  }
}
