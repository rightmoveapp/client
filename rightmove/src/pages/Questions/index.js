import React from "react";
import Row from '../../components/Row';
import Col from '../../components/Col';
import YellowButton from "../../components/YellowButton";
import WhiteButton from "../../components/WhiteButton";
import "./style.css";
import YellowUnderline from "../../components/YellowUnderline";


const Questions = () => {
    return (
        <>
            <Row>
                <Col size="s12 m12 l12">
                    <h4 className="heading">Here we go!
                        Tell us a little about yourself.
                    </h4>
                    <form size="col s12 m12 l12">
                        <label for="birthday" className="question">When is your birthday?</label>
                        <input id="birthday" type="date" class="validate" placeholder="10 / 18 / 1992" className="Rectangle" />
                    </form>
                    <h5 className="explainer">Why do we need this?</h5>
                    <div className="right-align">
                        <YellowUnderline to="" text="Skip" space="32"/>
                        <YellowButton text="Continue  →" size="139"/>
                    </div>
                </Col>
            </Row>


        </>
    )
}

export default Questions;