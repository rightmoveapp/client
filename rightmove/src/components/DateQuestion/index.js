import React from "react";
import { Link } from "react-router-dom";
import YellowButton from "../YellowButton";
import YellowUnderline from "../YellowUnderline";
import "./style.css";


const DateQuestion = () => {
    return (
        <>
            <form size="col s12 m12 l12">
                <label className="question">When is your birthday?</label>
                <input id="birthday" type="date" className="validate" placeholder="10 / 18 / 1992" className="Rectangle" />
            </form>
            <Link to="/privacy_policy" target="_blank"><h5 className="explainer">Why do we need this?</h5></Link>
            <div className="right-align">
                <YellowUnderline to="/" text="Skip" space="32" />
                <YellowButton /* to="/" */ text="Continue  →" size="139" /* getNextQuestion={this.getNextQuestion}  *//>
            </div>
        </>
    )
}

export default DateQuestion;