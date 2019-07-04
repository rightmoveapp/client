import React from "react";
import Row from '../../components/Row';
import Col from '../../components/Col';
import RedButton from '../../components/RedButton';
import "./style.css";

const Page404 = () => {
  return (
    <>
      <Row>
        <Col size="s12 m12 l12" className="align-left">
          <div className="Ooh-yeah-about-tha">Ooh, yeah, about that…</div>
          <p className="Looks-like-someone-s">Looks like someone set the page on fire. We’re going to have to go ahead and take you back home for now.</p>
          {/* <video src="office-space.gif" alt="office space"/> */}
          <img className="gif" src={require('./office-space.gif')} alt="office space" />
        </Col>
      </Row>
      <Row>
        <Col>
          <RedButton text='Go Home →'/>
        </Col>
      </Row>
    </>
  )
}

export default Page404;