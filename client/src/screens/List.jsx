import React from 'react'
import { Link } from 'react-router-dom'

export default function List({coffees}) {
  return (
    <div>
      {coffees.map((coffee) => 
        <p>{coffee.name}</p>
      )}
           <Link to='/add-roast'>
        <button>Add Roast</button>
      </Link>
    </div>
  )
}
