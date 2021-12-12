import './App.css';

import { Route, Switch, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Layout from './components/Layout'
import Home from './screens/Home'
import SignUp from './screens/SignUp'
import SignIn from './components/SignIn'
import List from './screens/List'

import {
  loginUser,
  removeToken,
  verifyUser,
  registerUser
} from './services/auth'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/list');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/')
  };

  const handleSignup = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/list');
  };

  return (
    <div className="App">
      <Layout handleLogout={handleLogout} currentUser={currentUser}>
      <Switch>
          <Route path='/sign-up'>
            <SignUp handleSignup={handleSignup}/>
          </Route>
          <Route path='/list'>
            <List />
          </Route>
          <Route path={currentUser ? '/' : '/sign-in'}>
            <SignIn handleLogin={handleLogin}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
