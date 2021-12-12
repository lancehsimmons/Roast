import { Route, Switch, useHistory } from 'react-router-dom'
import { useEffect } from 'react';
import List from '../screens/List'


export default function MainContainer() {


  useEffect(() => {
    const fetchCoffees = async () => {
      const coffeeList = await getAllCoffees();
      setCoffees(coffeeList);
    };
    fetchFoods();
  }, []);

  return (
    <div>
      <h2>main</h2>
      <Switch>
        <Route path='/'>
            <List />
        </Route>
      </Switch>
    </div>
  )
}
