import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout({currentUser, handleLogout, children}) {
  return (
    <div>
      <Link to='/'>
        <h1>Roast</h1>
      </Link>
      <h4>welcome, user</h4>
      <button onClick={handleLogout}>Logout</button>
      {children}
    </div>
  )
}
