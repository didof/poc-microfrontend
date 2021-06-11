import React from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import Nav from '../components/Nav/Nav'

import Home from '../pages/Home'
import Products from '../pages/Products'

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
    window.addEventListener('navigation', navigationHandle)
    return () => {
      window.removeEventListener('navigation', navigationHandle)
    }
  }, [])

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/discount' component={Products} />
      </Switch>
    </>
  )
}
