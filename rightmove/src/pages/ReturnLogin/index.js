import React from "react";
import Row from '../../components/Row';
import Col from '../../components/Col';
import YellowButton from "../../components/YellowButton";
import "./style.css";


const ReturnLogin = () => {
  return (
    <>
      <Row>
        <Col size="s12 m12 l12">

        </Col>
      </Row>
      <Row>
        <Col>
          <YellowButton text="Log In"/>
        </Col>
      </Row>
    </>
  )
}

export default ReturnLogin;