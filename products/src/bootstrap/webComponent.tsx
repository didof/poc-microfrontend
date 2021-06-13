import React from 'react'
import ReactDOM from 'react-dom'

import Logger from '../dev'

const L = new Logger()

export default class MfeProducts extends HTMLElement {
  static tagName = 'mfe-products'

  constructor() {
    super()
  }

  connectedCallback() {
    this.mount()
  }

  disconnectedCallback() {
    this.unmount()
  }

  private mount() {
    ReactDOM.render(this.getComponent(), this)
  }

  private unmount() {
    ReactDOM.unmountComponentAtNode(this)
  }

  private getComponent() {
    return <div>hello world</div>
  }
}

customElements.define(MfeProducts.tagName, MfeProducts)
