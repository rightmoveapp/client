import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
/* import API from "../src/utils/API"; */
import Footer from './components/Footer';
import Container from './components/Container';
import Landing from './pages/Landing';
import LinkedinAuth from './pages/LinkedinAuth';
import Account from './pages/Account';
import PrivateRoute from './components/PrivateRoute';
// const {PrivateRoute} = require("./PrivateRoute")
import LogOut from './pages/LogOut'
import Page404 from './pages/Page404';
import JobQuestions from './pages/JobQuestions';
import ReturnLogin from './pages/ReturnLogin';
import Questions from './pages/Questions';
import PrivacyPage from './pages/PrivacyPolicy';
import WelcomePage from './pages/WelcomePage';
import './App.css';
import Cookies from 'universal-cookie';
import BasicQuestions from './pages/BasicQuestions';

const cookies = new Cookies();

class App extends React.Component {
  state = {
    loggedIn: false,
    stateHasUpdated: true,
    userName: localStorage.getItem('username') || ""
  }

  updateLogin = (force = null) => {
    if (force !== null) {
      this.setState({ loggedIn: force,  stateHasUpdated: true })
    }
    else {
      const token_cookie = cookies.get("token", {path: "/"})
      const token_is_undefined = typeof(token_cookie) === "undefined"
      const token_is_empty = token_cookie === " "
      const loggedIn = !(token_is_undefined | token_is_empty)
      this.setState({
        loggedIn: loggedIn,
        stateHasUpdated: true
      })
    }
  }

  updateUserName  = name =>{
    localStorage.setItem( 'username', name );
    this.setState({
      userName: name
    })
  }

  componentWillMount(){
    this.updateLogin();
  }

  componentDidMount(){
 }


  render() {
    return (this.state.stateHasUpdated?
      (<Router>
        <div className="Site">
          <Nav name={this.state.userName} loggedIn={this.state.loggedIn} />
          <Container>
            <Switch>
              <PrivateRoute
                path="/jobquestions"
                loggedIn={this.state.loggedIn}
                component={JobQuestions}
                render={(props) => <JobQuestions {...props} /> }
              />
             <PrivateRoute
                path="/welcome"
                loggedIn={this.state.loggedIn}
              // TODO: Send name to say hi user
                component={WelcomePage}
                render={(props) => <WelcomePage {...props}  /> }
              />
              <Route exact path="/privacy_policy" component={PrivacyPage} />
              <PrivateRoute
                path="/questions"
                loggedIn={this.state.loggedIn}
                component={Questions}
                render={(props) => <Questions {...props} /> }
              />
              <Route exact path="/login" component={ReturnLogin} />
              <Route exact path="/logout" render={(props) => <LogOut updateLogin={this.updateLogin} />} />
              <Route
                exact path="/linkedin_auth"
                render={(props) => <LinkedinAuth {...props} updateLogin={this.updateLogin} updateUserName={this.updateUserName} />}
              />
              <PrivateRoute
                path="/account"
                loggedIn={this.state.loggedIn}
                component={Account}
                render={(props) => <Account {...props} />}
              />
              <PrivateRoute
                path="/basicquestions"
                loggedIn={this.state.loggedIn}
                component={BasicQuestions}
                render={(props) => <BasicQuestions {...props} />}
              />
              <Route
                exact path="/"
                render={(props) => <Landing {...props} loggedIn={this.state.loggedIn} />}
                />

              <Route exact path="/*" component={Page404} />
            </Switch>
          </Container>
          <div className="Site-content"></div>
          <Footer />
        </div>

      </Router>):(<p/>)
    );
  }
}

export default App;