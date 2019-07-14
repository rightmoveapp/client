import React from "react";
import "./style.css";


const DateQuestion = (props) => {
    return (
        <>
            <label className="question">{props.questionText}</label>
            <input
                key={props.questionId}
                value={props.choice}
                onChange={(event) => props.handleChange(event)}
                id={props.questionId}
                type={props.questionType}
                className="validate Rectangle"
                placeholder={props.questionPlaceholder}
                name={props.name}
            />
        </>
    )


}

export default DateQuestion;
