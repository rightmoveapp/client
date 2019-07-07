import React, { Component } from "react";
import { Link } from "react-router-dom";
import YellowButton from "../YellowButton";
import YellowUnderline from "../YellowUnderline";
import "./style.css";

class TextQuestion extends Component {
    /* state = {
        questionAnswer: "",
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    }; */

    render() {
        return (
            <>
                <form size="col s12 m12 l12">
                    <label className="question">What is your name?</label>
                    <input
                        /* value={this.state.questionAnswer}
                        onChange={this.handleInputChange} */
                        name="firstName"
                        id="name"
                        type="text"
                        className="validate"
                        placeholder="Jane Doe"
                        className="Rectangle"
                    />
                </form>
                <Link to="/privacy_policy" target="_blank"><h5 className="explainer">Why do we need this?</h5></Link>
                <div className="right-align">
                    <YellowUnderline to="/" text="Skip" space="32" />
                    <YellowButton /* to="/" */ text="Continue  →" size="139" /* getNextQuestion={this.getNextQuestion} */ />
                </div>
            </>
        )
    }
}

export default TextQuestion;