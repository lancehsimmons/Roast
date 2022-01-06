 /* 
 - button with onClick that samples current time for each time field.
 - onClick should specifically setformData.whateverforminput (yellowing, browning, first_crack, second_crack, first_crack_end, end_drop)
 - I think the trick is getting the value for each input field into handleSample function to set appropriate form key.
 - explicitly set name of button as prop that equals name of matching input?
 */

import React from 'react'

export default function SampleButton({name, time, setFormData}) {
  const handleSample = (e) => {
    e.preventDefault();
    alert(name)
    setFormData({name: time})
    // const { name, time } = e.target
    // setFormData((prevState) => ({
    //   ...prevState,
    //   [name]: time,
    // }))
  }

  return (
    <div>
      <button onClick={handleSample}>SAMPLE</button>
    </div>
  )
}
