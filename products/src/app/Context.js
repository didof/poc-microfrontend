import React from 'react'
import { createMemoryHistory, createBrowserHistory } from 'history'
import Logger from '../dev'

const L = Logger.buildWithPrefix('Context')

export const Context = React.createContext()

const getHistory = type => {
  switch (type) {
    case 'browser':
      L.log('Using browserHistory.')
      return createBrowserHistory()
    default:
      L.log('Using memoryHistory.')

      return createMemoryHistory()
  }
}

export default ({ children, config = {} }) => {
  const history = getHistory(config.historyType)

  return <Context.Provider value={{ history }}>{children}</Context.Provider>
}
