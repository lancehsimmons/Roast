import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getOneCoffee } from '../services/coffee'


export default function CoffeeDetail({ currentUser }) {
  const [coffee, setCoffee] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    const fetchCoffee = async () => {
      const coffeeItem = await getOneCoffee(id);
      setCoffee(coffeeItem);
    };
    fetchCoffee();
  }, [id])

  return (
    <div>
      <p>{coffee?.name}</p> 
      <Link to={`/coffees/${coffee?.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  )
}
