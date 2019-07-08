import React, { Component } from "react";
import { Link } from "react-router-dom";
import YellowButton from "../YellowButton";
import YellowUnderline from "../YellowUnderline";
import questionChoices from "../../questionsChoices.json"
import "./style.css";


class RadioQuestions extends Component {

    constructor() {
        super();

        this.state = {
            questionChoices,
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

    figureOutJson(props) {
        /* console.log(this.state.questionChoices); */
        console.log(this.props.questionText);
        console.log(this.props.questionChoices[0][0].choice_text);
    }


    render(props) {
        return (
            <>
                <form /* onSubmit={this.handleSubmit} */ size="col s12 m12 l12">
                    {this.figureOutJson()}
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


{/* 
--------------------------------
                     <label className="question">{this.state.questionChoices.questionsAndChoices[1].question.question_text}</label>
                    <input id={this.state.questionChoices.questionsAndChoices[1].question.id} type={this.state.questionChoices.questionsAndChoices[1].question.input_type} className="validate" className="Rectangle" /> 
                    {this.state.questionChoices.map(questionChoice => (
                        <p>
                            <label>
                                <input
                                    value={questionChoice.choices.choice_text}
                                    type={questionChoice.question.input_type}
                                    checked={this.state.choice === questionChoice.choices.choice_text}
                                    onChange={this.handleChange}
                                />
                                <span className="-Input-Text">{questionChoice.choices.choice_text}</span>
                            </label>
                        </p>

                    ))}
                    <label className="question">What are you pronouns?</label>
                    <input id={questionChoice.id} type={questionChoice.input_type} className="validate" className="Rectangle" />
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
                    </p> */}
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