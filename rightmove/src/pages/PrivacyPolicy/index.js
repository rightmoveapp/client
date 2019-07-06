import React from "react";
import Row from '../../components/Row';
import Col from '../../components/Col';
import "./style.css";

const PrivacyPage = () => {
  return (
    <>
      <Row>
        <Col size="s12 m12 l12">
          <p>You might feel like some of these questions are pretty personal, so we wanted to let you know ahead of time that we will never sell your data. 
            Trust & privacy are extremely important to us. So is transparency— for many questions, we have provided an explanation for how we use the information to form your Snapshot. 
            While most questions are optional, just keep in mind that the more we know, the better your Snapshot will be. </p>
        </Col>
      </Row>
    </>
  )
}

export default PrivacyPage;