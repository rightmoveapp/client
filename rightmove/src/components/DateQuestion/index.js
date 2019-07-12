import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API"
import YellowButton from "../YellowButton";
import YellowUnderline from "../YellowUnderline";
import "./style.css";


class DateQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question:[],
            choice: ''
        };

        this.handleChange = this.handleChange.bind(this);
        /* this.handleSubmit = this.handleSubmit.bind(this); */
    }

    handleChange(event) {
        this.setState({
            choice: event.target.value,
            question: this.props.questionId
        });
    }

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
                <h4 className="heading">Here we go! Tell us a little about yourself.</h4>
                <form onSubmit={this.handleFormSubmit} size="col s12 m12 l12">
                    <label className="question">{this.props.questionText}</label>
                    <input
                        value={this.props.choice}
                        onChange={(event) => this.props.handleChange(event)}
                        id={this.props.questionId}
                        type={this.props.questionType}
                        className="validate Rectangle"
                        placeholder={this.props.questionPlaceholder}
                    />
                    {/* <input type="submit" value="Submit" /> */}
                </form>
                <Link to="/privacy_policy" target="_blank"><h5 className="explainer">Why do we need this?</h5></Link>
            </>
        )
    }

}

export default DateQuestion;
