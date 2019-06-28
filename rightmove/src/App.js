import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing';
import Nav from "./components/Nav";
import './App.css';


function App() {
  return (
    <Router>
      <>
        <Nav name="Steve"/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Landing} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
