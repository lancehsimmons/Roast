import React from 'react'
import { Link } from 'react-router-dom'

export default function List({ coffees, handleCoffeeDelete}) {
  return (
    <div>
      {coffees.map((coffee) =>
        <div>
          <Link to={`/coffees/${coffee.id}`}>
            <p>{coffee.name}</p>
          </Link>
          {coffee.id}
          <button onClick={() => handleCoffeeDelete(coffee.id)}>
            Delete
          </button>
        </div>
      )}
      <Link to='/add-roast'>
        <button>Add Roast</button>
      </Link>
    </div>
  )
}
