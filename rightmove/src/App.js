import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from './pages/Landing';
import LinkedinAuth from './pages/LinkedinAuth';
import Account from './pages/Account';
/*import Questions from './pages/Questions';
import Job from './pages/Job';
import CurrentState from './pages/CurrentState'; */
import './App.css';


function App() {
  return (
    <Router>
      <Nav name="Steve"/>
        <Switch>
          <Route exact path="/linkedin_auth" component={LinkedinAuth} />
          <Route exact path="/" component={Landing}  />
          <Route exact path="/v1/login" component={Account} />
          {/* <Route exact path="/account" component={Account} />
          <Route exact path="/questions" component={Questions} />
          <Route exact path="/job_detail" component={Job} />
          <Route exact path="/current_state" component={CurrentState} /> */}
        </Switch>
    </Router>
  );
}

export default App;
