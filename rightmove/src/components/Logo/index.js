import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from './logo.svg';
import "./style.css"

const LogoContainer = () => {
    return (
      <Link to="/account" className="no-underline">
          <Logo />
      </Link>
    )
  }
  
  export default LogoContainer;