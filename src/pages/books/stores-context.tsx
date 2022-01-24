import React, { createContext, FC, useContext } from "react"
import { createStores, Stores } from "./create-stores"

export const StoresContext = createContext<Stores | null>(null)

export const useStore = () => {
  const context = useContext(StoresContext)
  if (!context) {
    throw new Error('useStore should be called within StoresContext.Provider');
  }
  return context;
}

export const StoresContextProvider: FC = (props) => {
  return <StoresContext.Provider value={createStores()}>{props.children}</StoresContext.Provider>
}
