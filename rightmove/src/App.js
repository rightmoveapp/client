import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <>
        <Nav name="Steve"/>
      </>
    </Router>
  );
}

export default App;
