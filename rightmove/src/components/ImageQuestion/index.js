import React from "react";
import "./style.css";


const ImageQuestion = (props) => {
        return (
            <>
                <label className="question">{props.questionText}</label>
                <div>
                    {props.questionChoices[0].map(questionChoice => (
                        <label key={questionChoice.id} className="no-border">
                           <input
                            /* <img */
                                src={questionChoice.choice_text}
                                key={questionChoice.choice_text}
                                value={questionChoice.choice_text}
                                type={questionChoice.input_type}
                                // checked={props.choiceState === questionChoice.choice_text}
                                onClick={(event) => props.handleImageChange(event)}
                                alt="alt"
                                className="crop"
                                name={props.name}
                                questionid={props.questionId}
                            /* /> */
                            />
                        </label>
                    ))}
                </div>
            </>
        );



}

export default ImageQuestion;