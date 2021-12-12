import { Route, Switch, useHistory } from 'react-router-dom'
import List from '../screens/List'


export default function MainContainer() {
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
