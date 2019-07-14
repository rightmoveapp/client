import React from "react";
import "./style.css";

const CheckboxQuestions = (props) => {

    return (
        <>
            <label id={props.questionId} className="question">{props.questionText}</label>
            {props.questionChoices[0].map(questionChoice => (
                <p>
                    <label>
                        <input
                            key={questionChoice.id}
                            name={questionChoice.choice_text}
                            type={questionChoice.input_type}
                            // checked={this.props.choiceState}
                            onChange={(event) => props.handleCheckBoxChange(event)}
                            className="filled-in"
                        />
                        <span className="-Input-Text">{questionChoice.choice_text}</span>
                    </label>
                </p>

            ))}
        </>
    )

}

export default CheckboxQuestions;
