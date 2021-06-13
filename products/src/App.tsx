import React from 'react'
import Router from './app/Router'
import ErrorBoundary from './app/ErrorBoundary'

const Bomb = () => {
  throw new Error('Bomb!!!')
}

export default () => {
  const [bomb, setBomb] = React.useState(false)

  return (
    <div>
      <button onClick={() => setBomb(true)}>Explode</button>
      <ErrorBoundary resetHandler={() => setBomb(false)}>
        <h1>Products</h1>
        <Router />
        {bomb ? <Bomb /> : null}
      </ErrorBoundary>
    </div>
  )
}
