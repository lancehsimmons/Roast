import './App.css';

import { Route, Redirect, Switch, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Layout from './components/Layout'
import SignUp from './screens/SignUp'
import SignIn from './components/SignIn'
import MainContainer from './Containers/MainContainer'

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
      debugger
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleSignIn = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
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
    history.push('/');
  };

  return (
    <div className="App">
      <Layout handleLogout={handleLogout} currentUser={currentUser}>
        <Switch>
          <Route path='/sign-up'>
            <SignUp handleSignup={handleSignup} />
          </Route>

          <Route path='/sign-in'>
          {currentUser ?
              <Redirect to='/' />
              : <SignIn handleSignIn={handleSignIn} />
            }
            {/* <SignIn handleLogin={handleLogin} /> */}
          </Route>
          <Route path='/'>
          {currentUser ?
              <MainContainer currentUser={currentUser} handleSignIn={handleSignIn} />
              : <Redirect to='/sign-in' />
            }
            {/* <MainContainer currentUser={currentUser}
              setCurrentUser={setCurrentUser}/> */}
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
