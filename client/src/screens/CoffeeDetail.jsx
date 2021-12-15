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

          <div className="divTable">
            <div className="divTableBody">
              <div className="divTableRow">
                <div className="divTableCell">Roast Time:</div>
                <div className="divTableCell">{coffee?.roast_time}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Roast Level:</div>
                <div className="divTableCell">{coffee?.roast_level}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Roaster Settings:</div>
                <div className="divTableCell">{coffee?.roaster_settings}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Preheat Time/Temp:</div>
                <div className="divTableCell">{coffee?.preheat}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Yellowing:</div>
                <div className="divTableCell">{coffee?.yellowing}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Browning:</div>
                <div className="divTableCell">{coffee?.browning}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">First Crack: </div>
                <div className="divTableCell">{coffee?.first_crack}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Second Crack:</div>
                <div className="divTableCell">{coffee?.second_crack}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">First Crack Ends:</div>
                <div className="divTableCell">{coffee?.first_crack_end}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">End/Drop:</div>
                <div className="divTableCell">{coffee?.end_drop}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Notes:</div>
                <div className="divTableCell">{coffee?.notes}</div>
              </div>
            </div>
          </div>
            {/* table formatting from https://divtable.com/generator/ */}
        </div>

      </div>
    </div>
  )
}
