import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Restore microfrontend</button>
    </div>
  )
}

export default ({ children, resetHandler }) => {
  const errorHandler = (error: Error, info: { componentStack: string }) => {
    console.log('Contacting Sentry...')
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={errorHandler}
      onReset={resetHandler}
    >
      {children}
    </ErrorBoundary>
  )
}
