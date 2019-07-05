import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from './components/Footer';
import Container from './components/Container';
import Landing from './pages/Landing';
import LinkedinAuth from './pages/LinkedinAuth';
import Account from './pages/Account';
import PrivateRoute from './PrivateRoute';
import LogOut from './pages/LogOut'
import Page404 from './pages/Page404';
import ReturnLogin from './pages/ReturnLogin';
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
      <div className="Site">
      <Nav name="Steve" loggedIn={this.state.loggedIn}/>
      <Container>
        <Switch>
      <Route exact path="/logout" render = {(props) => <LogOut updateLogin={this.updateLogin}/>} />
      <Route exact path="/linkedin_auth" render = {(props) => <LinkedinAuth {...props} updateLogin={this.updateLogin}/>}  />
      <PrivateRoute path="/account" component={Account} />
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
