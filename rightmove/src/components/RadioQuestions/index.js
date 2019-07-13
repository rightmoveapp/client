import React from "react";
import "./style.css";


const RadioQuestions = (props) => {
    return (
        <>
            <label className="question">{props.questionText}</label>
            <input id={props.questionId} type={props.questionType} className="validate Rectangle" />
            {props.questionChoices[0].map(questionChoice => (
                <p>
                    <label>
                        <input
                            key={questionChoice.id}
                            value={questionChoice.choice_text}
                            type={questionChoice.input_type}
                            checked={props.choiceState === questionChoice.choice_text}
                            // onChange={() => this.props.handleChange(questionChoice.choice_text)}
                            onChange={(event) => props.handleChange(event)}
                            name={props.name}
                        />
                        <span className="-Input-Text">{questionChoice.choice_text}</span>
                    </label>
                </p>

            ))}
        </>
    );
}

export default RadioQuestions;