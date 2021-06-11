import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import { Context } from './Context'
import NavigationEvent from '../communications/NavigationEvent'

import All from '../pages/All'
import Discount from '../pages/Discount'

export default () => {
  const { history } = React.useContext(Context)

  React.useEffect(() => {
    history.listen(NavigationEvent.buildWithLocation)
  }, [])

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={All} />
        <Route path='/discount' component={Discount} />
      </Switch>
    </Router>
  )
}
