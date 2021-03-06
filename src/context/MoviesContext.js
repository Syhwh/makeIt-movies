import React, { createContext, useState } from 'react'

export const MoviesContext = createContext()

export const MoviesContextProvider = ({ children }) => {

  const [favorites, setFavorites] = useState([])
  const [showAlert, setShowAlert] = useState(false)
  const [notificationData, setNotificationData] = useState({})
  const contextValue = {
    favorites, setFavorites, showAlert, setShowAlert, notificationData, setNotificationData
  }

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  )
}
