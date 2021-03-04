import React from 'react'

export const Login = ({ history }) => {

  const handleOnClick = () => {
    history.replace('/')
  }

  return (
    <div className='container mt-5'>
      <h2>Login</h2>
      <hr />
      <button className={'btn btn-primary'} onClick={handleOnClick} >Login</button>
    </div>
  )
}
