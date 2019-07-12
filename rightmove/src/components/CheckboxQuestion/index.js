import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";


class CheckboxQuestions extends Component {

    render(props) {
        return (
            <>
                <h4 className="heading">Here we go! Tell us a little about yourself.</h4>
                <form method="post" onSubmit={this.handleFormSubmit} size="col s12 m12 l12">
                    <label id={this.props.questionId} className="question">{this.props.questionText}</label>
                    {this.props.questionChoices[0].map(questionChoice => (
                        <p>
                            <label>
                                <input
                                    key={questionChoice.id}
                                    name={questionChoice.choice_text}
                                    type={questionChoice.input_type}
                                    // checked={this.props.choiceState}
                                    onChange={(event) => this.props.handleCheckBoxChange(event)}
                                    className="filled-in"
                                />
                                <span className="-Input-Text">{questionChoice.choice_text}</span>
                            </label>
                        </p>

                    ))}
                </form>
                <Link to="/privacy_policy" target="_blank"><h5 className="explainer">Why do we need this?</h5></Link>
            </>
        )
    }


}

export default CheckboxQuestions;
