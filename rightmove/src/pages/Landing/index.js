import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
/* import API from '../../utils/API' */
import Col from '../../components/Col';
import Row from '../../components/Row';
import './style.css';
import RedButtonLinkedin from "../../components/RedButtonLinkedin";


class Landing extends Component {

    render() {
        const loggedIn = this.props.loggedIn

        if(loggedIn){
            return (
                <Redirect to ="/account"/>
            )
        }
        else{
            return (
            <Row>
                <Col size="s12 m12 l12">
                    <div className="Take-control-of-your">Take control of your career.</div>
                    <p className="Body-Copy-Top">Finding the work-life balance that’s right for you shouldn’t be this hard, but sometimes the choices can be overwhelming. Cut through the bullshit and illuminate the right path for you & your career.</p>
                    <p className="Body-Copy-Bottom">You shouldn’t have to settle for less.</p>
                <RedButtonLinkedin text="Sign Up →"/>
                </Col>
            </Row>
            )
        }
    }
}

export default Landing;