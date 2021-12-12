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
      <p>{coffee?.name}</p>
      <p>{coffee?.roast_time}</p>
      <p>{coffee?.roast_level}</p>
      <p>{coffee?.roaster_settings}</p>
      <p>{coffee?.preheat}</p>
      <p>{coffee?.yellowing}</p>
      <p>{coffee?.browning}</p>
      <p>{coffee?.first_crack}</p>
      <p>{coffee?.second_crack}</p>
      <p>{coffee?.first_crack_end}</p>
      <p>{coffee?.end_drop}</p>
      <p>{coffee?.notes}</p>
      <Link to={`/coffees/${coffee?.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  )
}
