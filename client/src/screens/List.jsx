import React from 'react'

export default function List({coffees}) {
  return (
    <div>
      {coffees.map((coffee) => 
        <p>{coffee.name}</p>
      )}
      <h3>coffees</h3>
    </div>
  )
}
