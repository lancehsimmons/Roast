import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function CoffeeEdit() {
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
  return (
    <div>
      <p>a form to edit a roast</p>
    </div>
  )
}
