import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router'



export const AuthContext = createContext()

const userDb = {
  email: 'user@email.com',
  userName: 'John McCain',
  name: 'John McCain',
}


export const AuthContextProvider = ({ children }) => {
  const history = useHistory()

  const [userAuth, setUserAuth] = useState(null)

  const login = (userCredentials) => {
    console.log(history)
    if (userCredentials === userDb.email) {
      setUserAuth(userDb.name)
    }
  }

  const logout = () => {
    setUserAuth(null)
  }


  const authValue = {
    userAuth, login, logout
  }

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  )
}

