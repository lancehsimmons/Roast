import { useState } from 'react'

export default function AddRoast() {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { name } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>add a roast here</h1>
    </div>
  )
}
