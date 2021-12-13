import { Route, Switch, useHistory, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import List from '../screens/List'
import SignIn from '../components/SignIn'
import CoffeeDetail from '../screens/CoffeeDetail'
import AddRoast from '../screens/AddRoast'
import CoffeeEdit from '../screens/CoffeeEdit'
import { verifyUser, loginUser } from '../services/auth'
import { getAllCoffees, postCoffee, putCoffee, deleteCoffee } from '../services/coffee'


export default function MainContainer({ currentUser, setCurrentUser }) {
  const [coffees, setCoffees] = useState([])
  const history = useHistory()


  useEffect(() => {
    const fetchCoffees = async () => {
      const coffeeList = await getAllCoffees()
      setCoffees(coffeeList)
    };
    if (currentUser) fetchCoffees()
  }, [currentUser]);

  const handleAddRoast = async (formData) => {
    const newCoffee = await postCoffee(formData)
    setCoffees((prevState) => [...prevState, newCoffee])
    history.push('/')
  };

  const handleCoffeeUpdate = async (id, formData) => {
    const newCoffee = await putCoffee(id, formData)
    setCoffees((prevState) =>
      prevState.map((coffee) => {
        return coffee.id === Number(id) ? newCoffee : coffee;
      })
    )
    history.push(`/coffees/${id}`)
  }

  const handleCoffeeDelete = async (id) => {
    await deleteCoffee(id);
    setCoffees((prevState) => prevState.filter((coffee) => coffee.id !== id))
  };

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      debugger
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  return (
    <div>
      <Switch>

        <Route path='/add-roast'>
          <AddRoast
            coffees={coffees}
            handleAddRoast={handleAddRoast} />
        </Route>

        <Route path='/coffees/:id/edit'>
          <CoffeeEdit coffees={coffees} handleCoffeeUpdate={handleCoffeeUpdate} />
        </Route>

        <Route path='/coffees/:id'>
          <CoffeeDetail />
        </Route>

        <Route path='/' >
          {currentUser ?
            <List coffees={coffees} handleCoffeeDelete={handleCoffeeDelete} /> :
            <SignIn handleLogin={handleLogin} />}
        </Route>
        
      </Switch>
    </div>
  )
}