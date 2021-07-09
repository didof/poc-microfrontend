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
}

export default withBrowserRouter

export const withBrowserRouterCompound = decorateHOCWithStaticProps(
  withBrowserRouter
)
