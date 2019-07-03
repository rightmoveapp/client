import React from "react";
import Row from '../../components/Row';
import Col from '../../components/Col';
import Nav from '../../components/Nav';
import Button from '../../components/Button';
import "./style.css";

const Page404 = () => {
  return (
    <>
      <Row>
        <Col size="s12 m12 l12">
          <div className="Ooh-yeah-about-tha">Ooh, yeah, about that…</div>
          <p className="Looks-like-someone-s">Looks like someone set the page on fire. We’re going to have to go ahead and take you back home for now.</p>
          <Button />
        </Col>
      </Row>
    </>
  )
}

export default Page404;