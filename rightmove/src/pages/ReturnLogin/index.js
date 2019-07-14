import React from "react";
import Row from '../../components/Row';
import Col from '../../components/Col';
import YellowButton from "../../components/YellowButton";
import WhiteButtonLinkedin from "../../components/WhiteButtonLinkedin";
import "./style.css";
/* import YellowUnderline from "../../components/YellowUnderline";
 */

const ReturnLogin = () => {
  var callbackUri = "https://www.redstapler.app/linkedin_auth"
  var callbackState = "dovdvdsoibusobus"
  var clientId = "86cmhugfwi4259"

  return (
    <div className="center-align">
      <Row>
        <Col size="s12 m12 l12">
          <h4 className="Welcome-back">Welcome back!</h4>


          <div>
            <label for="email" className="Label">EMAIL</label>
            <input id="email" type="email" class="validate" placeholder="johndoe@email.com" className="Rectangle" />
          </div>

          <div className="Add-Spacing">
            <label for="password" className="Label Top-Space">PASSWORD</label>
            <input id="password" type="password" class="validate" placeholder="•••••••••••••••" className="Rectangle" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="s12">
          <YellowButton text="Log In" />
        </Col>
      </Row>
      <Row>
        <Col size="s12">
          <WhiteButtonLinkedin text="Log in with LinkedIn" />
        </Col>
      </Row>
      <Row>
        <Col size="s12">
            <a
              href={`https://linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${escape(callbackUri)}&state=${callbackState}&scope=r_liteprofile%20r_emailaddress`}>
              Create Account
            </a>
        </Col>
      </Row>


    </div>
  )
}

export default ReturnLogin;
