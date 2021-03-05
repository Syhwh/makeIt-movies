import React, { createContext, useState } from 'react'

export const MoviesContext = createContext()

export const MoviesContextProvider = ({ children }) => {
  console.log('render contex')
  const [favourites, setFavourites] = useState([])
  const contextValue = {
    favourites, setFavourites
  }

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  )
}
