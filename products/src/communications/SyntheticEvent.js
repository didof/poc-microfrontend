import Logger from '../dev'

const L = Logger.buildWithPrefix('SyntheticEvent')

export default class SyntheticEvent {
  constructor(eventName) {
    this._validateEventName(eventName)

    this.options = {}
    this.event = new CustomEvent(eventName, this.options)
  }

  _validateEventName(eventName) {
    if (typeof eventName !== 'string') throw new TypeError()
  }

  add(options) {
    Object.entries(options).forEach(([key, value]) => {
      this.options[key] = value
    })
  }

  clear() {
    this.options = {}
  }

  log(css) {
    if (css) L.useCss(css)
    L.log(this.eventName)
    L.table(this.options)
  }

  dispatch() {
    window.dispatchEvent(this.event)
  }
}
