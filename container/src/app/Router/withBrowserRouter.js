import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { decorateHOCWithStaticProps } from '../../decorators/'

function withBrowserRouter(Component) {
  return function wrappedComponent(props) {
    return (
      <BrowserRouter>
        <Component {...props} />
      </BrowserRouter>
    )
  }

  WrappedWithBrowserRouter.Header = Compounds.HeaderCompound
  WrappedWithBrowserRouter.Nav = Compounds.NavCompound
  WrappedWithBrowserRouter.Routes = Compounds.RoutesCompound
}

export default withBrowserRouter

export const withBrowserRouterCompound = decorateHOCWithStaticProps(
  withBrowserRouter
)
