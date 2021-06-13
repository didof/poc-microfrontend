import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import { Context } from './Provider'
import NavigationEvent from '../communications/NavigationEvent'

import Landing from '../pages/Landing'
import Discount from '../pages/Discount'

export default () => {
  const { history } = React.useContext(Context)

  const navigationHandle = event => {
    const { pathname } = event.detail
    if (pathname === history.location.pathname) return

    history.push(pathname)
  }

  React.useEffect(() => {
    history.listen(location => {
      NavigationEvent.buildWithLocation(location).dispatch()
    })

    window.addEventListener('navigation', navigationHandle)

    return () => {
      window.removeEventListener('navigation', navigationHandle)
    }
  }, [])

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/discount' component={Discount} />
        <Route path='/' component={Landing} />
      </Switch>
    </Router>
  )
}
