import { Route, Switch, useHistory, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import List from '../screens/List'
import CoffeeDetail from '../screens/CoffeeDetail'
import AddRoast from '../screens/AddRoast'
import CoffeeEdit from '../screens/CoffeeEdit'

import {getAllCoffees, postCoffee} from '../services/coffee'


export default function MainContainer({ currentUser }) {
  const [coffees, setCoffees] = useState([])
  const history = useHistory();


  useEffect(() => {
    const fetchCoffees = async () => {
      const coffeeList = await getAllCoffees()
      setCoffees(coffeeList)
    };
    fetchCoffees();
  }, []);

  const handleAddRoast = async (formData) => {
    const newCoffee = await postCoffee(formData)
    setCoffees((prevState) => [...prevState, newCoffee])
    history.push('/')
  };

  const handleCoffeeUpdate = async (id, formData) => {
    const newCoffee = await putCoffee(id, formData);
    setCoffees((prevState) =>
      prevState.map((coffee) => {
        return coffee.id === Number(id) ? newCoffee : coffee;
      })
    );
    history.push(`/coffees/:${id}/detail`);
  };


  return (
    <div>
      <h2>main</h2>
      <Switch>

      <Route path='/add-roast'>
          <AddRoast
            coffees={coffees}
            handleAddRoast={handleAddRoast} />
        </Route>

        <Route path='/coffees/:id/edit'>
          <CoffeeEdit handleCoffeeUpdate={handleCoffeeUpdate}/>
        </Route>

        <Route path='/coffees/:id'>
          <CoffeeDetail/>
        </Route>

        <Route path='/'>
          {/* {currentUser ? <List coffees={coffees}/> : <Redirect to='/sign-in'/>} */}
          <List coffees={coffees}/>
        </Route>
      </Switch>
    </div>
  )
}
