import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API"
import YellowButton from "../YellowButton";
import YellowUnderline from "../YellowUnderline";
import "./style.css";


class RadioQuestions extends Component {

    constructor() {
        super();

        this.state = {
            question:[],
            choice: ''
        };

        this.handleChange = this.handleChange.bind(this);
        /*  this.handleSubmit = this.handleSubmit.bind(this); */
    }

    handleChange(event) {
        this.setState({
            choice: event.target.value,
            question: this.props.questionId
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("clicked")
        API.postUserAttrAnswers({
            question: this.state.question,
            answer: this.state.choice,
        })
            .then(response => {
                this.props.setAnsweredQuestion(this.state.question)
                this.props.getRandomQuestion()
            }
            )
            .catch(err => console.log(err));

        console.log('You have selected:', this.state.selectedOption);
    }

    render(props) {
        return (
            <>
                <form method="post" onSubmit={this.handleFormSubmit} size="col s12 m12 l12">
                    <label className="question">{this.props.questionText}</label>
                    <input id={this.props.questionId} type={this.props.questionType} className="validate Rectangle" />
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
                    <YellowButton /* to="/" */ type="submit" onClick={this.handleFormSubmit} text="Continue  →" size="139" />
                </div>
            </>
        );
    }


}

export default RadioQuestions;