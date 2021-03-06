 /* 
 - button with onClick that samples current time for each time field.
 - onClick should specifically setformData.whateverforminput (yellowing, browning, first_crack, second_crack, first_crack_end, end_drop)
 - I think the trick is getting the value for each input field into handleSample function to set appropriate form key.
 - explicitly set name of button as prop that equals name of matching input?
 */

import React from 'react'
import '../assets/samplebutton.css'

export default function SampleButton({ name, handleSample }) {

  return (
    <div>
      <button className='sample-button' name={name} onClick={handleSample}>SAMPLE</button>
    </div>
  )
}
