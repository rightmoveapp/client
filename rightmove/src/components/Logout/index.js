import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Logout = props => {
  return (
    <>
      <li className="userName">Hi, {props.name}</li>
      <li>
        <Link
          to="/logout"
          className={
            window.location.pathname === "/" || window.location.pathname === "/login"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Logout
              </Link>
      </li>
    </>
  )
}

export default Logout;