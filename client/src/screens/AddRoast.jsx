import { useState } from 'react'
import '../assets/addroast.css'
import Stopwatch from '../components/Stopwatch'
import SampleButton from '../components/SampleButton'

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

  const [time, setTime] = useState(0)


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSample = (e) => {
    e.preventDefault();
    const { name } = e.target
    let sec = Math.floor((time / 1000) % 60)
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        `${'0' + Math.floor((time / 60000) % 60)}:${ sec < 10 || sec == 0 ? '0' + sec : sec}.${(time / 10) % 100}`,
    }))
  }

  return (
    <div className='add-body'>
      <div className='stopwatch-div'>
      <Stopwatch
        time={time}
        setTime={setTime} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleAddRoast(formData)
        }}
      >
        <button className='save-button'>SAVE ROAST</button>

        <div className='add-table'>

          <div className='field-div'>
            <label className='slable'>
              COFFEE
            </label>
            <input type='text' name='name' value={name} onChange={handleChange} />
          </div>

          <div className='two-column'>
            <div className='field-div cc'>
              <label className='slable'>
                ROAST TIME
              </label>
              <input type='text' name='roast_time' value={roast_time} onChange={handleChange} />
            </div>

            <div className='field-div cc'>
              <label className='slable'>
                ROAST LEVEL
              </label>
              <input type='text' name='roast_level' value={roast_level} onChange={handleChange} />
            </div>
          </div>

          <div className='field-div'>
            <label className='slable'>
              ROASTER SETTINGS
            </label>
            <input type='text' name='roaster_settings' value={roaster_settings} onChange={handleChange} />
          </div>

          <div className='field-div'>
            <label className='slable'>
              PREHEAT TIME/TEMP
            </label>
            <input type='text' name='preheat' value={preheat} onChange={handleChange} />
          </div>

          <div className='two-column'>
            <div className='field-div cc'>
              <label className='slable'>
                YELLOWING
              </label>
              <SampleButton
                name={'yellowing'}
                handleSample={handleSample}
              />
              <input type='text' name='yellowing' value={yellowing} onChange={handleChange} />
            </div>
            <div />

            <div className='field-div cc'>
              <label className='slable'>
                BROWNING
              </label>
              <SampleButton
                name={'browning'}
                handleSample={handleSample}
              />
              <input type='text' name='browning' value={browning} onChange={handleChange} />
            </div >
          </div>

          <div className='two-column'>
            <div className='field-div cc'>
              <label className='slable'>
                FIRST CRACK
              </label>
              <SampleButton
                name={'first_crack'}
                handleSample={handleSample}
              />
              <input type='text' name='first_crack' value={first_crack} onChange={handleChange} />
            </div>

            <div className='field-div cc'>
              <label className='slable'>
                SECOND CRACK
              </label>
              <SampleButton
                name={'second_crack'}
                handleSample={handleSample}
              />
              <input type='text' name='second_crack' value={second_crack} onChange={handleChange} />
            </div>
          </div>

          <div className='two-column'>
            <div className='field-div cc'>
              <label className='slable'>
                FIRST CRACK ENDS
              </label>
              <SampleButton
                name={'first_crack_end'}
                handleSample={handleSample}
              />
              <input type='text' name='first_crack_end' value={first_crack_end} onChange={handleChange} />
            </div>

            <div className='field-div cc'>
              <label className='slable'>
                END/DROP
              </label>
              <SampleButton
                name={'end_drop'}
                handleSample={handleSample}
              />
              <input type='text' name='end_drop' value={end_drop} onChange={handleChange} />
            </div>
          </div>

          <div className='field-div'>
            <label className='slable'>
              NOTES
            </label>
            <textarea className='add-notes' type='text' name='notes' value={notes} onChange={handleChange} />
          </div>
        </div>

      </form>
    </div>
  )
}
