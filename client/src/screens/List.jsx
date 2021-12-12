import React from 'react'
import { Link } from 'react-router-dom'

export default function List({coffees}) {
  return (
    <div>
      {coffees.map((coffee) =>
        <div>
          <Link to={`/coffees/${coffee.id}`}>
            <p>{coffee.name}</p>
          </Link>
        </div>
      )}
           <Link to='/add-roast'>
        <button>Add Roast</button>
      </Link>
    </div>
  )
}
