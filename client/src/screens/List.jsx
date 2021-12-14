import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/list.css'

export default function List({ coffees, handleCoffeeDelete}) {
  return (
    <div>
              <button className='add-button'>ADD ROAST</button>

      <div className='list-div'>
      {coffees.map((coffee) =>
        <div className="list-one-div">
          <div className='list-title'>

            <div><h5>COFFEE</h5></div>
            <div className='date-div'><h5>DATE: {coffee.created_at}</h5></div>
          </div>
          <Link to={`/coffees/${coffee.id}`}>
            <p className='name'>{coffee.name}</p>
          </Link>
          <button className='delete' onClick={() => handleCoffeeDelete(coffee.id)}>
            DEL
          </button>
        </div>
      )}
    </div>
      <Link to='/add-roast'>
      </Link>
    </div>
  )
}
