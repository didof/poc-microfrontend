import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Products from '../../pages/Products'
import Auth from '../../pages/Auth'

function Routes() {
  return (
    <Switch>
      <Route path='/auth' component={Auth} />
      <Route path='/' component={Products} />
    </Switch>
  )
}

export default Routes
