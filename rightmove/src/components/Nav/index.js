import React from "react";
import Login from "../Login"
import Logout from "../Logout"
import "./style.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" id="brandLogo" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right">
            {!this.state.isLoggedIn ? (
            <Login />
            ) : (
            <Logout name={this.props.name}/>
            )
            }
          </ul>
        </div>
      </nav>
    )
  }
};

  export default Nav;