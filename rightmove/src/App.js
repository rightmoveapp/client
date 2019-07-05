import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from './pages/Landing';
import LinkedinAuth from './pages/LinkedinAuth';
import Account from './pages/Account';
import PrivateRoute from './PrivateRoute';
import LogOut from './pages/LogOut'
/*import Questions from './pages/Questions';
import Job from './pages/Job';
import CurrentState from './pages/CurrentState'; */
import './App.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const loggedIn = (cookies.get("token") !== "undefined")

function App() {
  return (
    <Router>
      <Nav name="Steve" isLogginedIn={loggedIn}/>
        <Switch>
          <Route exact path="/logout" component={LogOut} />
          <PrivateRoute path="/account" component={Account} />
          <Route exact path="/linkedin_auth" component={LinkedinAuth} />
          <Route exact path="/" component={Landing}  />
          {/* <Route exact path="/questions" component={Questions} />
          <Route exact path="/job_detail" component={Job} />
          <Route exact path="/current_state" component={CurrentState} /> */} 
        </Switch>
    </Router>
  );
}

export default App;
