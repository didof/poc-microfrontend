import React from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import Nav from '../components/Nav/Nav'

import Products from '../pages/Products'
import Auth from '../pages/Auth'

import NavigationEvent from '../communications/NavigationEvent'

export default () => {
  return (
    <BrowserRouter>
      <_Internal />
    </BrowserRouter>
  )
}

const _Internal = () => {
  const history = useHistory()

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
    <>
      <Nav />
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/' component={Products} />
      </Switch>
    </>
  )
}
