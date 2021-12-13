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
      <label>
        Name:
      <p>{coffee?.name}</p>
      </label>
      <label>
        Roast Time:
      <p>{coffee?.roast_time}</p>
      </label>
      <label>
        Roast Level:
      <p>{coffee?.roast_level}</p>
      </label>
      <label>
        Roaster Settings:
      <p>{coffee?.roaster_settings}</p>
      </label>
      <label>
        Preheat Time/Temp:
      <p>{coffee?.preheat}</p>
      </label>
      <label>
        Yellowing:
      <p>{coffee?.yellowing}</p>
      </label>
      <label>
        Browning:
      <p>{coffee?.browning}</p>
      </label>
      <label>
        First Crack:
      <p>{coffee?.first_crack}</p>
      </label>
      <label>
        Second Crack:
      <p>{coffee?.second_crack}</p>
      </label>
      <label>
        First Crack Ends:
      <p>{coffee?.first_crack_end}</p>
      </label>
      <label>
        End/Drop:
      <p>{coffee?.end_drop}</p>
      </label>
      <label>
        Notes:
      <p>{coffee?.notes}</p>
      </label>
      <Link to={`/coffees/${coffee?.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  )
}
