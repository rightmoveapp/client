import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from './components/Footer';
import Container from './components/Container';
import Landing from './pages/Landing';
import LinkedinAuth from './pages/LinkedinAuth';
import Account from './pages/Account';
import Page404 from './pages/Page404';
import ReturnLogin from './pages/ReturnLogin';
import Questions from './pages/Questions';
import PrivacyPage from './pages/PrivacyPolicy';
/*
import Job from './pages/Job';
import CurrentState from './pages/CurrentState'; */
import './App.css';


function App() {
  return (
    <Router>

      <div className="Site">
        <Nav name="Steve" />
        <Container>
          <Switch>
            <Route exact path="/privacy_policy" component={PrivacyPage} />
            <Route exact path="/questions" component={Questions} />
            <Route exact path="/login" component={ReturnLogin} />
            <Route exact path="/v1/login" render={props => <Account {...props} />} />
            <Route exact path="/linkedin_auth" component={LinkedinAuth} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/*" component={Page404} />
            {/* <Route exact path="/account" component={Account} />
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

export default App;
