import { useState } from 'react'
import '../assets/addroast.css'

export default function AddRoast({ handleAddRoast }) {
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
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='add-body'>
      <h1>add a roast here</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleAddRoast(formData)
        }}
      >
        <button className='save-button'>SAVE ROAST</button>

        <div className='add-table'>


            <div className='field-div'>
              <span className='slable'>
                COFFEE
              </span><br />
              <input type='text' name='name' value={name} onChange={handleChange} />
            </div>

          <div className='field-div'>
            <span className='slable'>
              ROAST TIME
            </span><br />
            <input type='text' name='roast_time' value={roast_time} onChange={handleChange} />
          </div>

          <div className='field-div'>
            <span className='slable'>
              ROAST LEVEL
            </span><br />
            <input type='text' name='roast_level' value={roast_level} onChange={handleChange} />
          </div>

          <div className='field-div'>
            <span className='slable'>
              ROASTER SETTINGS
            </span><br />
            <input type='text' name='roaster_settings' value={roaster_settings} onChange={handleChange} />
          </div>

          <div className='field-div'>
            <span className='slable'>
              PREHEAT TIME/TEMP
            </span><br />
            <input type='text' name='preheat' value={preheat} onChange={handleChange} />
          </div>

          <div className='field-div'>
            <span className='slable'>
              YELLOWING
            </span><br />
            <input type='text' name='yellowing' value={yellowing} onChange={handleChange} />
          </div>

          <div className='field-div'>
            <span className='slable'>
              BROWNING
            </span><br />
            <input type='text' name='browning' value={browning} onChange={handleChange} />
          </div >

          <div className='field-div'>
            <span className='slable'>
              FIRST CRACK
            </span><br />
            <input type='text' name='first_crack' value={first_crack} onChange={handleChange} />
          </div>

          <div className='field-div'>
            <span className='slable'>
              SECOND CRACK
            </span><br />
            <input type='text' name='second_crack' value={second_crack} onChange={handleChange} />
          </div>

          <div className='field-div'>
            <span className='slable'>
              FIRST CRACK ENDS
            </span><br />
            <input type='text' name='first_crack_end' value={first_crack_end} onChange={handleChange} />
          </div>

          <div className='field-div'>
            <span className='slable'>
              END/DROP
            </span><br />
            <input type='text' name='end_drop' value={end_drop} onChange={handleChange} />
          </div>

          <div className='field-div'>
            <span className='slable'>
              NOTES
            </span><br />
            <textarea className='add-notes' type='text' name='notes' value={notes} onChange={handleChange} />
          </div>
        </div>
        <br />
      </form>
    </div>
  )
}
