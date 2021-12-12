import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
    }));
  };

  useEffect(() => {
    const prefillFormData = () => {
      const coffeeItem = coffees.find((coffee) => coffee.id === Number(id));
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
      });
    };
    if (coffees.length) prefillFormData();
  }, [coffees, id]);


  return (
    <div>
      <h3>Edit Your Roast</h3>
      <h1>add a roast here</h1>
      <form
      onSubmit={(e) => {
          e.preventDefault();
        handleCoffeeUpdate(id, formData);
      }}
    >

      <label>
        Name:
        <input type='text' name='name' value={name} onChange={handleChange} />
        </label>
        <br/>
        <label>
        Roast Time:
        <input type='text' name='roast_time' value={roast_time} onChange={handleChange} />
        </label>
        <br/>
        <label>
        Roast Level:
        <input type='text' name='roast_level' value={roast_level} onChange={handleChange} />
        </label>
        <br/>
        <label>
        Roaster Settings:
        <input type='text' name='roaster_settings' value={roaster_settings} onChange={handleChange} />
        </label>
        <br/>
        <label>
        Preheat Time/Temp:
        <input type='text' name='preheat' value={preheat} onChange={handleChange} />
        </label>
        <br/>
        <label>
        Yellowing:
        <input type='text' name='yellowing' value={yellowing} onChange={handleChange} />
        </label>
        <br/>
        <label>
        Browning:
        <input type='text' name='browning' value={browning} onChange={handleChange} />
        </label>
        <br/>
        <label>
        First Crack:
        <input type='text' name='first_crack' value={first_crack} onChange={handleChange} />
        </label>
        <br/>
        <label>
        Second Crack:
        <input type='text' name='second_crack' value={second_crack} onChange={handleChange} />
        </label>
        <br/>
        <label>
        First Crack Ends:
        <input type='text' name='first_crack_end' value={first_crack_end} onChange={handleChange} />
        </label>
        <br/>
        <label>
        End/Drop:
        <input type='text' name='end_drop' value={end_drop} onChange={handleChange} />
        </label>
        <br/>
        <label>
        Notes:
        <input type='text' name='notes' value={notes} onChange={handleChange} />
        </label>
        <br/>
      <button>Submit</button>
    </form>
    </div>
  )
}
