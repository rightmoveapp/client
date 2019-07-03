import React from "react";
import Container from "../Container";
import Login from "../Login";
import Logout from "../Logout";
import { ReactComponent as Logo } from './logo.svg';
import "./style.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    return (
      <Container>
        <nav>
          <div className="nav-wrapper">
            <Logo />
            <ul id="nav-mobile" className="right">
              {!this.state.isLoggedIn ? (
                <Login />
              ) : (
                  <Logout name={this.props.name} />
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