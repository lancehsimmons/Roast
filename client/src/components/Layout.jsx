import React from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'



export default function Layout({ currentUser, handleLogout, children }) {
  const location = useLocation()

  return (
    <div>
    <Link to='/'>
    </Link> 
    {currentUser &&
        <>
        <nav>
            <h4>welcome, {currentUser.username}</h4>
              <div onClick={handleLogout}>Logout</div>
            <NavLink to='/'>
              <div>Home</div>
            </NavLink>
        </nav>
      </>
    }
      {children}
    </div>
  )
}
