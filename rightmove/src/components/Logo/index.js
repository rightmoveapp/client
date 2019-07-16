import React from "react";
/* import { Link } from "react-router-dom"; */
import { ReactComponent as Logo } from './logo.svg';
import "./style.css"

const LogoContainer = () => {
  return (
    <a href="/account" className="no-underline"><Logo /></a>
  ) 
}

export default LogoContainer;