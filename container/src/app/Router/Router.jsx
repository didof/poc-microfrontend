import React from 'react'
import { BrowserRouter, useHistory } from 'react-router-dom'
import { HeaderCompound, NavCompound, RoutesCompound } from './compounds'

import NavigationEvent from '../../communications/NavigationEvent'

// TODO: wrap whitBrowserRouter so that _Internal logic can be made into single component

function Router({ children }) {
  return (
    <BrowserRouter>
      {children}
      <_Internal />
    </BrowserRouter>
  )
}
Router.Header = HeaderCompound
Router.Nav = NavCompound
Router.Routes = RoutesCompound

export default Router

/**
 * _Internal
 *
 * Will be deleted as soon as upper TODO is solved
 */

function _Internal() {
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

  return null
}
