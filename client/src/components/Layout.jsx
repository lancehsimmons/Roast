import React from 'react'
import { Link, useLocation } from 'react-router-dom'



export default function Layout({ currentUser, handleLogout, children }) {
  const location = useLocation()

  return (
    <div>
    <Link to='/'>
    </Link> 
    {currentUser &&
      <>
          <h4>welcome, {currentUser.username}</h4>
          <button onClick={handleLogout}>Logout</button>
      </>
    }
      {children}
    </div>
  )
}
