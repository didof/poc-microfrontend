import React, { ReactElement } from 'react'
import { createMemoryHistory, createBrowserHistory, History } from 'history'
import Logger from '../dev'

const L = Logger.buildWithPrefix('Provider')

interface Context {
  history?: History
}

export enum HistoryType {
  Browser = 'browser',
  Memory = 'memory',
}

export interface Config {
  historyType: HistoryType
}

interface ProviderProps {
  children: ReactElement
  config?: Config
}

export const Context = React.createContext<Context>({})

const getHistory = (type: HistoryType) => {
  L.log(`Using ${type}History.`)
  switch (type) {
    case HistoryType.Browser:
      return createBrowserHistory()
    default:
      return createMemoryHistory()
  }
}

const defaultConfig: Config = {
  historyType: HistoryType.Memory,
}

export default ({ children, config = defaultConfig }: ProviderProps) => {
  const history = getHistory(config.historyType)

  return <Context.Provider value={{ history }}>{children}</Context.Provider>
}
