import React from "react";
import Row from '../../components/Row';
import Col from '../../components/Col';
import YellowButton from "../../components/YellowButton";
import WhiteButton from "../../components/WhiteButton";
import "./style.css";
import YellowUnderline from "../../components/YellowUnderline";


const Questions = () => {
    return (
        <div>
            <Row>
                <Col size="s12 m12 l12">
                    <h4 className="heading">Here we go!
                        Tell us a little about yourself.
                    </h4>
                    <div>
                        <label for="birthday" className="question">When is your birthday?</label>
                        <input id="birthday" type="date" class="validate" placeholder="10 / 18 / 1992" className="Rectangle" />
                    </div>
                    <h5 className="explainer">Why do we need this?</h5>
                </Col>
            </Row>
            <div className="right-align">
            <Row>
                <Col size="s12">
                   <YellowUnderline to="" text="Skip"/>
                   <YellowButton text="Continue  →" size="139"/>
                </Col>
            </Row>
            </div>

        </div>
    )
}

export default Questions;