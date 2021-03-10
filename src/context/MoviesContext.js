import React, { createContext, useState } from 'react'

export const MoviesContext = createContext()

export const MoviesContextProvider = ({ children }) => {
  console.log('render contex')
  const [favorites, setFavorites] = useState([])
  const contextValue = {
    favorites, setFavorites
  }

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  )
}
