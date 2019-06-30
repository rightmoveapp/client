import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Landing from './pages/Landing';
import Account from './pages/Account';
import Questions from './pages/Questions';
import Job from './pages/Job';
import CurrentState from './pages/CurrentState';
import './App.css';


function App() {
  return (
    <Router>
      <Container>
        <Nav name="Steve"/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Landing} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/questions" component={Questions} />
          <Route exact path="/job_detail" component={Job} />
          <Route exact path="/current_state" component={CurrentState} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
