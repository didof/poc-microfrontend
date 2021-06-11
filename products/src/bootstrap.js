import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Provider from './app/Context'

const mount = (el, config) => {
  ReactDOM.render(
    <Provider config={config}>
      <App />
    </Provider>,
    el
  )
}

if (process.env.NODE_ENV === 'development') {
  const rootElementId = '__dev__root__'

  const config = {
    historyType: 'browser',
  }

  const root = document.getElementById(rootElementId)

  if (root) mount(root, config)
}

export default mount
