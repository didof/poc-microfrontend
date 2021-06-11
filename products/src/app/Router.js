import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import { Context } from './Context'

import All from '../pages/All'
import Discount from '../pages/Discount'

export default () => {
  const { history } = React.useContext(Context)

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={All} />
        <Route exact path='/discount' component={Discount} />
      </Switch>
    </Router>
  )
}
