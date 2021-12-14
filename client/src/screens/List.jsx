import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/list.css'

export default function List({ coffees, handleCoffeeDelete}) {
  return (
    <div>
      <div className='list-div'>
      {coffees.map((coffee) =>
        <div className="list-one-div">
          <h5>COFFEE</h5>
          <Link to={`/coffees/${coffee.id}`}>
            <p>{coffee.name}</p>
          </Link>
          <button onClick={() => handleCoffeeDelete(coffee.id)}>
            DEL
          </button>
        </div>
      )}
    </div>
      <Link to='/add-roast'>
        <button>Add Roast</button>
      </Link>
    </div>
  )
}
