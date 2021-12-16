import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/list.css'

export default function List({ coffees, handleCoffeeDelete }) {
  // Date.prototype.getDateWithoutTime = function () {
  //   return new Date(this.toDateString());
  // }

  return (
    <div>
      <Link to='/add-roast'>
        <button className='add-button'>ADD ROAST</button>
      </Link>

      <div className='list-div'>
        {coffees.map((coffee) =>
          <div className="list-one-div" key={coffee.id}>
            <div className='list-title'>

              <div><h5>COFFEE</h5></div>
              <div className='date-div'>
                <h5 className='date'>
                  DATE: {coffee.created_at.slice(0, 10)}
                </h5>
              </div>
            </div>
            <Link to={`/coffees/${coffee.id}`}>
              <p className='name'>{coffee.name}</p>
            </Link>
            <div className='delete-contain'>
              <div className='delete-div'>
                <button className='delete' onClick={() => handleCoffeeDelete(coffee.id)}>
                  DEL
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}