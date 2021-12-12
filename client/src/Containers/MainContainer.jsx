import { Route, Switch, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';
import List from '../screens/List'
import AddRoast from '../screens/AddRoast'

import {getAllCoffees} from '../services/coffee'


export default function MainContainer({ currentUser }) {
  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    const fetchCoffees = async () => {
      const coffeeList = await getAllCoffees();
      setCoffees(coffeeList);
    };
    fetchCoffees();
  }, []);

  const handleAddRoast = async (formData) => {
    const newCoffee = await postCoffee(formData);
    setFoods((prevState) => [...prevState, newCoffee);
    history.push('/');
  };


  return (
    <div>
      <h2>main</h2>
      <Switch>
      <Route path='/add-roast'>
          <AddRoast
            coffees={coffees}
            handleAddroast={handleAddRoast} />
        </Route>
        <Route path='/'>
          <MainContainer/>
        </Route>
      </Switch>
    </div>
  )
}
