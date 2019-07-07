import React, { Component } from "react";
import { Link } from "react-router-dom";
import YellowButton from "../YellowButton";
import YellowUnderline from "../YellowUnderline";
import "./style.css";


class RadioQuestions extends Component {

    constructor() {
        super();

        this.state = {
            choice: ''
        };

        this.handleChange = this.handleChange.bind(this);
       /*  this.handleSubmit = this.handleSubmit.bind(this); */
    }

    handleChange(event) {
        this.setState({
            choice: event.target.value
        });
    }

    /* handleFormSubmit = (formSubmitEvent) => {
        formSubmitEvent.preventDefault();
    
        console.log('You have selected:', this.state.selectedOption);
    } */

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} size="col s12 m12 l12">
                    <label className="question">What are you pronouns?</label>
                    <input id="pronouns" type="radio" className="validate" className="Rectangle" />
                    <p>
                        <label>
                            <input
                                value="red"
                                type="radio"
                                checked={this.state.choice === "red"}
                                onChange={this.handleChange}
                            />
                            <span className="-Input-Text">Red</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                value="yellow"
                                type="radio"
                                checked={this.state.choice === "yellow"}
                                onChange={this.handleChange}
                            />
                            <span className="-Input-Text">Yellow</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                value="green"
                                type="radio"
                                checked={this.state.choice === "green"}
                                onChange={this.handleChange}
                            />
                            <span className="-Input-Text">Green</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                value="brown"
                                type="radio"
                                checked={this.state.choice === "brown"}
                                onChange={this.handleChange}
                            />
                            <span className="-Input-Text">Brown</span>
                        </label>
                    </p>
                </form>
                <Link to="/privacy_policy" target="_blank"><h5 className="explainer">Why do we need this?</h5></Link>
                <div className="right-align">
                    <YellowUnderline to="/" text="Skip" space="32" />
                    <YellowButton /* to="/" */ text="Continue  →" size="139" /* getNextQuestion={this.getNextQuestion}  */ />
                </div>
            </>
        );
    }


}

export default RadioQuestions;