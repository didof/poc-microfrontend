import React from 'react'
import { BrowserRouter, useHistory } from 'react-router-dom'
import * as Compounds from './compounds'

import NavigationEvent from '../../communications/NavigationEvent'

function WithBrowserRouter(Component) {
  function WrappedWithBrowserRouter(props) {
    return (
      <BrowserRouter>
        <Component {...props} />
      </BrowserRouter>
    )
  }

  WrappedWithBrowserRouter.Header = Compounds.HeaderCompound
  WrappedWithBrowserRouter.Nav = Compounds.NavCompound
  WrappedWithBrowserRouter.Routes = Compounds.RoutesCompound

  return WrappedWithBrowserRouter
}

function Router({ children }) {
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

  return children
}

export default WithBrowserRouter(Router)
