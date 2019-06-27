import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <>
        <Nav />
      </>
    </Router>
  );
}

export default App;
