import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from './logo.svg';

const LogoContainer = () => {
    return (
      <Link to="/">
          <Logo />
      </Link>
    )
  }
  
  export default LogoContainer;