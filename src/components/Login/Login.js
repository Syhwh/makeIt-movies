import React from 'react'

export const Login = ({ history }) => {

  const handleOnClick = () => {
    history.replace('/')
  }

  return (
    <div>
      Login
      <button className={'btn btn-primary'} onClick={handleOnClick} >Login</button>
    </div>
  )
}
