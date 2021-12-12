import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout({currentUser, handleLogout, children}) {
  return (
    <div>
      <Link to='/'>
        <h1>Roast</h1>
      </Link> 
      {currentUser &&
        <>
          <h4>welcome, {currentUser.username}</h4>
          <button onClick={handleLogout}>Logout</button>
        </>}

      {children}
    </div>
  )
}
