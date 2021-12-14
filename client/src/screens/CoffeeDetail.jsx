import '../assets/coffeedetail.css'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getOneCoffee } from '../services/coffee'


export default function CoffeeDetail({ currentUser }) {
  const [coffee, setCoffee] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchCoffee = async () => {
      const coffeeItem = await getOneCoffee(id)
      setCoffee(coffeeItem)
    };
    fetchCoffee()
  }, [id])

  return (
    <div>
      <div className='card-contain'>
        <Link to={`/coffees/${coffee?.id}/edit`}>
          <button className='edit-button'>EDIT</button>
        </Link>

        <div className='detail-div'>
          <div className='list-title'>
            <div><h5>COFFEE</h5></div>
            <div className='date-div'>
              <h5 className='date'>
                DATE: {coffee?.created_at.slice(0, 10)}
              </h5>
            </div>
          </div>

          <p>{coffee?.name}</p>
          <hr />

          <div className='key-val-div'>
            <p>Roast Time:    {coffee?.roast_time}</p>
            <p>Roast Level:    {coffee?.roast_level}</p>
            <p>Roaster Settings:    {coffee?.roaster_settings}</p>
            <p>Preheat Time/Temp:    {coffee?.preheat}</p>
            <p>Yellowing:    {coffee?.yellowing}</p>
            <p>Browning:    {coffee?.browning}</p>
            <p>First Crack:    {coffee?.first_crack}</p>
            <p>Second Crack:    {coffee?.second_crack}</p>
            <p>First Crack Ends:    {coffee?.first_crack_end}</p>
            <p>End/Drop:    {coffee?.end_drop}</p>
            <p>Notes:    {coffee?.notes}</p>
          </div>



        </div>

      </div>
    </div>
  )
}
