import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from './components/Auth/Auth';
import Users from './components/Users/Users';

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
          <Route path='/users'>
            <Users token={token} setToken={setToken} />
          </Route>
          <Route path='/'>
            <Auth token={token} setToken={setToken} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
