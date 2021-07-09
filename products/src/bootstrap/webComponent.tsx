import React from 'react'
import ReactDOM from 'react-dom'

import App from '../App'
import Provider from '../app/Provider'

import { Config, HistoryType } from '../app/Provider'

export default class MfeProducts extends HTMLElement {
  static tagName = 'mfe-products'

  static get observedAttributes() {
    return ['config']
  }

  // private observer: MutationObserver
  private config: Config

  constructor() {
    super()

    this.config = {
      historyType: HistoryType.Memory,
    }

    // this.observer = new MutationObserver(() => this.update())
    // this.observer.observe(this, { attributes: true })
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (newValue !== oldValue) {
      console.log(`[property:${name}] changed from ${oldValue} to ${newValue}`)
      this.update()
    }
  }

  connectedCallback() {
    if (this.hasAttribute('config')) {
      let parentalConfig = this.getAttribute('config')
      let config: Config = JSON.parse(decodeURIComponent(parentalConfig!))
      if (config.historyType) this.config.historyType = config.historyType
    }

    this.mount()
  }

  disconnectedCallback() {
    this.unmount()
  }

  update() {
    this.unmount()
    this.mount()
  }

  private mount() {
    ReactDOM.render(this.getComponent(), this)
  }

  private unmount() {
    ReactDOM.unmountComponentAtNode(this)
  }

  private getComponent() {
    return (
      <Provider config={this.config}>
        <App />
      </Provider>
    )
  }
}

customElements.define(MfeProducts.tagName, MfeProducts)
