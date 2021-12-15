import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import '../assets/coffeeedit.css'

export default function CoffeeEdit({ coffees, handleCoffeeUpdate }) {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    roast_time: '',
    roast_level: '',
    roaster_settings: '',
    preheat: '',
    yellowing: '',
    browning: '',
    first_crack: '',
    second_crack: '',
    first_crack_end: '',
    end_drop: '',
    notes: '',
  });
  const {
    name,
    roast_time,
    roast_level,
    roaster_settings,
    preheat,
    yellowing,
    browning,
    first_crack,
    second_crack,
    first_crack_end,
    end_drop,
    notes,
  } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  useEffect(() => {
    const prefillFormData = () => {
      const coffeeItem = coffees.find((coffee) => coffee.id === Number(id))
      setFormData({
        name: coffeeItem.name,
        roast_time: coffeeItem.roast_time,
        roast_level: coffeeItem.roast_level,
        roaster_settings: coffeeItem.roaster_settings,
        preheat: coffeeItem.preheat,
        yellowing: coffeeItem.yellowing,
        browning: coffeeItem.browning,
        first_crack: coffeeItem.first_crack,
        second_crack: coffeeItem.second_crack,
        first_crack_end: coffeeItem.first_crack_end,
        end_drop: coffeeItem.end_drop,
        notes: coffeeItem.notes
      })
    }
    if (coffees.length) prefillFormData();
  }, [coffees, id])


  return (
    <div>
      <div className='card-contain'>
        
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleCoffeeUpdate(id, formData)
            }}
          >
            <button className='edit-submit-button'>SUBMIT EDIT</button>
            <div className='detail-div' className='edit-card-div'>
            <div className='list-title'>
              <div><h5>COFFEE</h5></div>
              <div className='date-div'>
                <input type='text' name='name' value={name} onChange={handleChange} />
              </div>
            </div>
            <hr />
            <div class="divTable">
              <div class="divTableBody">
                <div class="divTableRow">
                  <div class="divTableCell">Roast Time:</div>
                  <div class="divTableCell">        <input type='text' name='roast_time' value={roast_time} onChange={handleChange} /></div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">Roast Level:</div>
                  <div class="divTableCell">        <input type='text' name='roast_level' value={roast_level} onChange={handleChange} /></div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">Roaster Settings:</div>
                  <div class="divTableCell"><input type='text' name='roaster_settings' value={roaster_settings} onChange={handleChange} /></div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">Preheat Time/Temp:</div>
                  <div class="divTableCell"><input type='text' name='preheat' value={preheat} onChange={handleChange} /></div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">Yellowing:</div>
                  <div class="divTableCell"><input type='text' name='yellowing' value={yellowing} onChange={handleChange} /></div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">Browning:</div>
                  <div class="divTableCell"><input type='text' name='browning' value={browning} onChange={handleChange} /></div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">First Crack: </div>
                  <div class="divTableCell"><input type='text' name='first_crack' value={first_crack} onChange={handleChange} /></div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">Second Crack:</div>
                  <div class="divTableCell"><input type='text' name='second_crack' value={second_crack} onChange={handleChange} /></div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">First Crack Ends:</div>
                  <div class="divTableCell"><input type='text' name='first_crack_end' value={first_crack_end} onChange={handleChange} /></div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">End/Drop:</div>
                  <div class="divTableCell"><input type='text' name='end_drop' value={end_drop} onChange={handleChange} /></div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">Notes:</div>
                  <div class="divTableCell">       <input type='text' name='notes' value={notes} onChange={handleChange} /></div>
                </div>
              </div>
            </div>
        </div>
          </form>
      </div>
      {/* table formatting from https://divtable.com/generator/ */}
    </div>
  )
}
