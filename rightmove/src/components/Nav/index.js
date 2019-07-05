import React from "react";
import Login from "../Login"
import Logout from "../Logout"
import "./style.css";

class Nav extends React.Component {

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" id="brandLogo" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right">
            {this.props.loggedIn ? (
              <Logout name={this.props.name}/>
              ) : (
            <Login />
            )
            }
          </ul>
        </div>
      </nav>
    )
  }
};

  export default Nav;