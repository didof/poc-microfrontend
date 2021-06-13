import React from 'react'
import ReactDOM from 'react-dom'

import App from '../App'
import Provider, { Config, HistoryType } from '../app/Provider'

const mount = (el: HTMLElement, config: Config) => {
  ReactDOM.render(
    <Provider config={config}>
      <App />
    </Provider>,
    el
  )
}

if (process.env.NODE_ENV === 'development') {
  const rootElementId = '__dev__root__'

  const config: Config = {
    historyType: HistoryType.Browser,
  }

  const root = document.getElementById(rootElementId)

  if (root) mount(root, config)
}

export default mount
