import React from "react";
import Row from '../../components/Row';
import Col from '../../components/Col';
import YellowButton from "../../components/YellowButton";
import "./style.css";


const ReturnLogin = () => {
  return (
    <div>
      <Row>
        <Col size="s12 m12 l12">
          <h4 className="Welcome-back">Welcome back!</h4>
        </Col>
      </Row>
      <Row>
        <Col size="s12">
          <div>
              <label for="email" className="Label">EMAIL</label>
              <input id="email" type="email" class="validate" placeholder="johndoe@email.com" className="Rectangle"/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="s12">
          <div>
            <label for="password" className="Label">PASSWORD</label>
            <input id="password" type="password" class="validate" placeholder="•••••••••••••••" className="Rectangle" />
          </div>
        </Col>
      </Row>
        <Row>
          <Col>
            <YellowButton text="Log In" />
          </Col>
        </Row>
    </div>
      )
    }
    
export default ReturnLogin;