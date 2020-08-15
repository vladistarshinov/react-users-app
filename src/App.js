import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthPage from './views/AuthPage';
import UsersPage from './views/UsersPage';

function App() {
  const ls = localStorage.getItem('token');
  const [token, setToken] = useState();

  useEffect(() => {
    if (ls) {
      setToken(ls);
    }
  }, [ls]);
  
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/react-users-app/users'>
            <UsersPage token={token} setToken={setToken} />
          </Route>
          <Route exact path='/react-users-app'>
            <AuthPage token={token} setToken={setToken} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
