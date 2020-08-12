import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AuthForm from './components/AuthForm/AuthForm';

function App() {
  const [token, setToken] = useState();
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/users">
          </Route>
          <Route path="/">
            <AuthForm token={token} setToken={setToken}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
