import React from 'react'

import Router from './app/Router/Router'

import Nav from './components/Nav'
import Routes from './app/Router/Routes'

export default () => {
  return (
    <div>
      <h1>App-shell</h1>
      <Router>
        <Router.Header component={<span>Header</span>} />
        <Router.Nav component={<Nav />} />
        <Router.Routes component={<Routes />} />
      </Router>
    </div>
  )
}
