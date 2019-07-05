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

class App extends React.Component {
  state = {
    loggenIn:(typeof (cookies.get('token', {path:"/"})) !== "undefined" && cookies.get("token",{path:"/"}) !=="")
  }

  updateLogin = () =>{
    this.setState({loggedIn:!this.state.loggedIn})
  }

  render(){
  return (
    <Router>
      <Nav name="Steve" loggedIn={this.state.loggedIn}/>
        <Switch>
  <Route exact path="/logout" render = {(props) => <LogOut updateLogin={this.updateLogin}/>} />
  <Route exact path="/linkedin_auth" render = {(props) => <LinkedinAuth {...props} updateLogin={this.updateLogin}/>}  />
          <PrivateRoute path="/account" component={Account} />
          <Route exact path="/" component={Landing}  />
          {/* <Route exact path="/questions" component={Questions} />
          <Route exact path="/job_detail" component={Job} />
          <Route exact path="/current_state" component={CurrentState} /> */}
        </Switch>
    </Router>
  );
}
}

export default App;
