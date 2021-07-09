import React from 'react'

import Router from './app/Router/Router'

import Nav from './components/Nav'
import Routes from './app/Router/Routes'

export default () => {
  return (
    <div>
      <h1>App-shell</h1>
      <Router>
        <Router.Header component={<div>Header</div>} />
        <Router.Nav component={<Nav />} />
        <Router.Routes component={<Routes />} />
        test
      </Router>
    </div>
  )
}
