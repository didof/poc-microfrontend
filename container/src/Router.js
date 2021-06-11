import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'

import Home from './pages/Home'
import Products from './pages/Products'

export default () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
      </Switch>
    </BrowserRouter>
  )
}
