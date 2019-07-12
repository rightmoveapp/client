import React, { Component } from "react";
import "./style.css";


class RadioQuestions extends Component {

    render(props) {
        return (
            <>
            {/* <h4 className="heading">Here we go! Tell us a little about yourself.</h4> */}
                {/* <form method="post" onSubmit={this.handleFormSubmit} size="col s12 m12 l12"> */}
                    <label className="question">{this.props.questionText}</label>
                    <input id={this.props.questionId} type={this.props.questionType} className="validate Rectangle" />
                    {this.props.questionChoices[0].map(questionChoice => (
                        <p>
                            <label>
                                <input
                                    key={questionChoice.id}
                                    value={questionChoice.choice_text}
                                    type={questionChoice.input_type}
                                    checked={this.props.choiceState === questionChoice.choice_text}
                                    // onChange={() => this.props.handleChange(questionChoice.choice_text)}
                                    onChange={(event) => this.props.handleChange(event)}
                                />
                                <span className="-Input-Text">{questionChoice.choice_text}</span>
                            </label>
                        </p>

                    ))}
                {/* </form> */}
            </>
        );
    }


}

export default RadioQuestions;