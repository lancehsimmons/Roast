import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneCoffee } from '../services/coffee';


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
      <p>{coffee.name}</p>
    </div>
  )
}
