import React from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import '../assets/layout.css'






export default function Layout({ currentUser, handleLogout, children }) {
  const location = useLocation()

 

  return (
    <div>
      <>
        {currentUser ? 
          <>
          <nav>
              <img className='logo2' src='../images/roast_logo2.png' alt='a coffee alchemist' />
              
            <div classname='welcome-div'>
              <h2 className='welcome'>welcome, {currentUser.username}</h2>
            </div>
    
            <div onClick={handleLogout}>Logout
            </div>
    
            <div>
              <NavLink to='/'>
                <div>Home</div>
              </NavLink>
            </div>
          </nav>
        </> :
          null}
        </>
      {children}
    </div>
  )
}
