import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom'
import { useState } from 'react'

import Layout from './components/Layout'
import Home from './screens/Home'
import SignUp from './screens/SignUp'
import List from './screens/List'

import { loginUser } from './services/auth'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/list');
  };
  return (
    <div className="App">
      <Layout>
      <Switch>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/list'>
            <List />
          </Route>
          <Route path='/'>
            <Home handleLogin={handleLogin}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
