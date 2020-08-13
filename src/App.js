import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthForm from './components/AuthForm/AuthForm';
import Users from './components/Users/Users';

function App() {
  const [token, setToken] = useState();
  return (
    <Router>
    <div>
      {<nav>
        <ul>
          <li>
            <Link to='/'>Authorization</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
      </nav>}

      <Switch>
        <Route path='/users'>
          <Users token={token} />
        </Route>
        <Route path='/'>
          <AuthForm token={token} setToken={setToken} />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
