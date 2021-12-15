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
            <div className='nav-div'>
              <nav>
                <NavLink to='/'>
                  <img className='logo2' src='../images/roast_logo2.png' alt='a coffee alchemist' />
                </NavLink>


                <div classname='welcome-div'>
                  <h2 className='welcome'>Welcome, {currentUser.username}</h2>
                </div>

                <div className='nav-item' onClick={handleLogout}><h3>Logout</h3>
                </div>

                <div className='nav-item'>
                  <NavLink to='/'>
                    <h3>Home</h3>
                  </NavLink>
                </div>
              </nav>
            </div>
          </> :
          null}
      </>
      {children}
    </div>
  )
}
