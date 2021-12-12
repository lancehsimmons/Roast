import { Route, Switch, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';
import List from '../screens/List'

import {getAllCoffees} from '../services/coffee'


export default function MainContainer() {
  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    const fetchCoffees = async () => {
      const coffeeList = await getAllCoffees();
      setCoffees(coffeeList);
    };
    fetchCoffees();
  }, []);

  return (
    <div>
      <h2>main</h2>
      <Switch>
        <Route path='/'>
          <List coffees={coffees}/>
        </Route>
      </Switch>
    </div>
  )
}
