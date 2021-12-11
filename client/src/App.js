import './App.css';
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './screens/Home'
import SignUp from './screens/SignUp'

function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
