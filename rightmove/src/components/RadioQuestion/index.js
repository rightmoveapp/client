import React from "react";
import { Link } from "react-router-dom";
import YellowButton from "../YellowButton";
import YellowUnderline from "../YellowUnderline";
import "./style.css";


const RadioQuestion = () => {
    return (
        <>
            <form size="col s12 m12 l12">
                <label className="question">What are you pronouns?</label>
                {/* <input id="pronouns" type="radio" className="validate" className="Rectangle" /> */}
                <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span className="-Input-Text">Red</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span className="-Input-Text">Yellow</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span className="-Input-Text">Green</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span className="-Input-Text">Brown</span>
                    </label>
                </p>
            </form>
            <Link to="/privacy_policy" target="_blank"><h5 className="explainer">Why do we need this?</h5></Link>
            <div className="right-align">
                <YellowUnderline to="/" text="Skip" space="32" />
                <YellowButton /* to="/" */ text="Continue  →" size="139" /* getNextQuestion={this.getNextQuestion}  *//>
            </div>
        </>
    )
}

export default RadioQuestion;