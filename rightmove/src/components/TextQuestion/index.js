import React from "react";
import "./style.css";

const TextQuestion = (props) => {
  return (
    <>
      <label className="question">{props.questionText}</label>
      <input
        value={props.choice}
        onChange={(event) => props.handleChange(event)}
        id={props.questionId}
        type={props.questionType}
        className="Rectangle"
        placeholder={props.questionPlaceholder}
        name={props.name}
      />
    </>
  )


}

export default TextQuestion;