import React, { Component } from "react";
import { Link } from "react-router-dom";
import YellowButton from "../YellowButton";
import YellowUnderline from "../YellowUnderline";
/* import questionChoices from "../../questionsChoices.json" */
import "./style.css";


class RadioQuestions extends Component {

    constructor() {
        super();

        this.state = {
            /* questionChoices, */
            choice: ''
        };

        this.handleChange = this.handleChange.bind(this);
        /*  this.handleSubmit = this.handleSubmit.bind(this); */
    }

    handleChange(event) {
        this.setState({
            choice: event.target.value
        });
    };

    /* handleFormSubmit = (formSubmitEvent) => {
        formSubmitEvent.preventDefault();
    
        console.log('You have selected:', this.state.selectedOption);
    } */

    render(props) {
        return (
            <>
                <form /* onSubmit={this.handleSubmit} */ size="col s12 m12 l12">
                    <label className="question">{this.props.questionText}</label>
                    <input id={this.props.questionId} type={this.props.questionType} className="validate" className="Rectangle" />
                    {this.props.questionChoices[0].map(questionChoice => (
                        <p>
                            <label>
                                <input
                                    key={questionChoice.id}
                                    value={questionChoice.choice_text}
                                    type={questionChoice.input_type}
                                    checked={this.state.choice === questionChoice.choice_text}
                                    onChange={this.handleChange}
                                />
                                <span className="-Input-Text">{questionChoice.choice_text}</span>
                            </label>
                        </p>

                    ))}
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