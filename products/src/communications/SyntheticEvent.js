import Logger from '../dev'

const L = Logger.buildWithPrefix('SyntheticEvent')

export default class SyntheticEvent {
  constructor(eventName) {
    this._validateEventName(eventName)

    this.eventName = eventName
    this.detail = {}
  }

  _validateEventName(eventName) {
    if (typeof eventName !== 'string') throw new TypeError()
  }

  _assemble() {
    return new CustomEvent(this.eventName, { detail: this.detail })
  }

  add(options) {
    this.detail = { ...this.detail, ...options }
  }

  clear() {
    this.options = {}
  }

  log(css) {
    if (css) L.useCss(css)
    L.log(this.eventName)
    L.table(this.detail)
  }

  dispatch() {
    const event = this._assemble()
    window.dispatchEvent(event)
  }
}
