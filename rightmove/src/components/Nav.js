import React from "react";
import { Link } from "react-router-dom";
class Nav extends React.Component {
  state = {
    loggedIn: false
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link
                to="/"
                className={
                window.location.pathname === "/" || window.location.pathname === "/createaccount"
                  ? "nav-link active"
                  : "nav-link"
                }
              >
              Create Account
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/login"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
              Login
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className={
                 window.location.pathname === "/" || window.location.pathname === "/login"
                   ? "nav-link active"
                   : "nav-link"
                }
              >
              Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
};

  export default Nav;