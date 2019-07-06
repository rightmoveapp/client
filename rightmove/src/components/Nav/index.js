import React from "react";
import Container from "../Container";
import Login from "../Login";
import Logout from "../Logout";
import Logo from "../Logo"
import "./style.css";

class Nav extends React.Component {

  render() {
    return (
      <Container>
      <nav>
        <div className="nav-wrapper">
          <Logo />
          <ul id="valign-wrapper" className="right">
            {this.props.loggedIn ? (
              <Logout name={this.props.name}/>
              ) : (
            <Login />
            )
            }
          </ul>
        </div>
      </nav>
      </Container>
    )
  }
};

export default Nav;