import React from 'react'

export default function Layout({children}) {
  return (
    <div>
      <h1>Roast</h1>
      <h4>welcome, user</h4>
      {children}
    </div>
  )
}
