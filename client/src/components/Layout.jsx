import React from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import '../assets/layout.css'






export default function Layout({ currentUser, handleLogout, children }) {
  const location = useLocation()


  let navOptions
  switch (location.pathname) {
    case  '/sign-in':
      navOptions = <></>
      break
    case '/' || '/coffees/' || '/add-roast':
      navOptions = <>
        <img src='../images/roast_logo2.png' alt='a coffee alchemist' />
        logged in
        {currentUser &&
        <>
          <nav>
            <div>
              <h4 className='welcome'>welcome, {currentUser.username}</h4>
            </div>

            <div onClick={handleLogout}>Logout
            </div>

            <div>
              <NavLink to='/'>
                <div>Home</div>
              </NavLink>
            </div>
          </nav>
        </>
      }
      </>
      break
    case '/sign-up':
      navOptions = <>
        <NavLink to='/'>
          <div>Home</div>
        </NavLink>
        logged out</>
  }

  return (
    <div>
      <>{navOptions}</>
      <Link to='/'>
      </Link>
      
      {children}
    </div>
  )
}
