import React, { Component } from "react";
import API from '../../utils/API'
import Col from '../../components/Col';
import Row from '../../components/Row';
import RedButton from '../../components/RedButton';
import './style.css';


class Landing extends Component {
    state = {
        /* landingPage_tagLine: "", */
        /* landingPage_description: "", */
        landingPage_howItWorks: "",
    }

    componentDidMount() {
        this.loadLandingPage();
    }

    loadLandingPage = () => {
        API.getLandingPage()
            .then(res =>
                this.setState({ /* landingPage_tagLine: "", */ /* landingPage_description: "", */ landingPage_howItWorks: "" })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Row>
                <Col size="s12 m12 l12">
                    <div className="Take-control-of-your">Take control of your career.</div>
                    <p className="Body-Copy">Finding the work-life balance that’s right for you shouldn’t be this hard, but sometimes the choices can be overwhelming. Cut through the bullshit and illuminate the right path for you & your career. 
You shouldn’t have to settle for less.</p>
                <RedButton text="Sign Up →"/>
                </Col>
            </Row>
        )
    }
}

export default Landing;