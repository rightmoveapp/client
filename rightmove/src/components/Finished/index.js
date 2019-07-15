import React from "react";
import Row from '../../components/Row';
import Col from '../../components/Col';
import RedButton from '../../components/RedButton';
import './style.css'

const Finished = () => {
    return (
        <>
        <Row>
          <Col size="s12 m12 l12" className="align-vertical">
            <div className="Ooh-yeah-about-tha">You've finished all the questions at this moment <span role="img" aria-label="celebration emoji">🥳</span></div>
            <p className="Looks-like-someone-s">Looks like you should add jobs now.</p>
          
            <RedButton text='Job Questions →' to="/jobquestions"/>
          </Col>
        </Row>
      </>
    )
}

export default Finished;