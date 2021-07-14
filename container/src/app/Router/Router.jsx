import React from 'react'
import { useHistory } from 'react-router-dom'
import { Header, Nav, Routes } from './compounds'

import { withBrowserRouterCompound } from './withBrowserRouter'

import NavigationEvent from '../../communications/NavigationEvent'

const withBrowserRouter = withBrowserRouterCompound({
  Header,
  Nav,
  Routes,
})

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

export default withBrowserRouter(Router)
