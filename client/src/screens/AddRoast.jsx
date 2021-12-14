import { useState } from 'react'

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
    <div>
      <h1>add a roast here</h1>
      <form
      onSubmit={(e) => {
          e.preventDefault()
        handleAddRoast(formData)
      }}
    >
        <span className='slable'>
            COFFEE
          </span><br />
        <input type='text' name='name' value={name} onChange={handleChange} />
      <br/>
        <span className='slable'>
            ROAST TIME
          </span><br />
        <input type='text' name='roast_time' value={roast_time} onChange={handleChange} />
      <br/>

        <span className='slable'>
            ROAST LEVEL
          </span><br />
        <input type='text' name='roast_level' value={roast_level} onChange={handleChange} />

        <br/>
        <span className='slable'>
            ROASTER SETTINGS
          </span><br />
        <input type='text' name='roaster_settings' value={roaster_settings} onChange={handleChange} />

        <br/>
        <span className='slable'>
           PREHEAT TIME/TEMP
          </span><br />
        <input type='text' name='preheat' value={preheat} onChange={handleChange} />
 
        <br />
        <span className='slable'>
          YELLOWING
        </span><br />
        <input type='text' name='yellowing' value={yellowing} onChange={handleChange} />
        <br/>

        <span className='slable'>
            BROWNING
          </span><br />
        <input type='text' name='browning' value={browning} onChange={handleChange} />
        <br/>

        <span className='slable'>
          FIRST CRACK
          </span><br />
        <input type='text' name='first_crack' value={first_crack} onChange={handleChange} />
        <br />
        
        <span className='slable'>
            SECOND CRACK
          </span><br />
        <input type='text' name='second_crack' value={second_crack} onChange={handleChange} />
        <br />

        <span className='slable'>
            FIRST CRACK ENDS
          </span><br />
        <input type='text' name='first_crack_end' value={first_crack_end} onChange={handleChange} />
        <br />
        
        <span className='slable'>
            END/DROP
          </span><br />
        <input type='text' name='end_drop' value={end_drop} onChange={handleChange} />
        <br />
        
        <span className='slable'>
            NOTES
          </span><br />
        <input type='text' name='notes' value={notes} onChange={handleChange} />
        
        <br/>
      <button>Submit</button>
    </form>
    </div>
  )
}
