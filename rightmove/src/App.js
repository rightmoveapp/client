import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from './components/Footer';
import Container from './components/Container';
import Landing from './pages/Landing';
import LinkedinAuth from './pages/LinkedinAuth';
import Account from './pages/Account';
import PrivateRoute from './components/PrivateRoute';
// const {PrivateRoute} = require("./PrivateRoute")
import LogOut from './pages/LogOut'
import Page404 from './pages/Page404';
import Job from './pages/Job';
import ReturnLogin from './pages/ReturnLogin';
/*import Questions from './pages/Questions';
import Job from './pages/Job';
import CurrentState from './pages/CurrentState'; */
import './App.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class App extends React.Component {
  state ={
    loggedIn:false}

updateLogin = (force=null) =>{
if(force !== null){
    this.setState({loggedIn:force})
}
else{
this.setState({loggedIn:(typeof (cookies.get("token",{path:"/"})) !== "undefined" && cookies.get("token",{path:"/"}) !=='') 
 })
}
console.log(`app is ${(this.state.loggedIn)? "logged in" : "not logged in"}`)
}

  render(){
  return (
    <Router>
      <div className="Site">
      <Nav name="Steve" loggedIn={this.state.loggedIn}/>
      <Container>
        <Switch>
        <Route exact path="/logout" render = {(props) => <LogOut updateLogin={this.updateLogin}/>} />
          <Route exact path="/linkedin_auth"  render = { (props) => <LinkedinAuth {...props}  updateLogin={this.updateLogin}/>}/>
          <PrivateRoute path="/account" loggedIn={this.state.loggedIn} component={Account} render = { (props) => <Account {...props} /> }/>
          <PrivateRoute path="/job_detail" loggedIn={this.state.loggedIn} component={Job} render = { (props) => <Job {...props} /> }/>
          <Route exact path="/" component={Landing}  />
          <Route exact path="/*" component={Page404} />
          {/* <Route exact path="/questions" component={Questions} />
          <Route exact path="/job_detail" component={Job} />
          <Route exact path="/current_state" component={CurrentState} /> */}
          </Switch>
        </Container>
        <div className="Site-content"></div>
        <Footer />
      </div>

    </Router>
  );
}
}

export default App;
