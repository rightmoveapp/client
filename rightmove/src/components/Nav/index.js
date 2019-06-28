import React from "react";

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
            <li><a href="sass.html">Create An Account</a></li>
            <li><a href="badges.html">Log In</a></li>
          </ul>
        </div>
      </nav>
    )
  }
};

  export default Nav;