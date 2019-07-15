import React from "react";
import "./style.css";


const ImageQuestion = (props) => {
        return (
            <>
                <label className="question">{props.questionText}</label>
                <div>
                    {props.questionChoices[0].map(questionChoice => (
                        <label key={questionChoice.id}>
                            <img
                                src={questionChoice.choice_text}
                                key={questionChoice.id}
                                value={questionChoice.choice_text}
                                type={questionChoice.input_type}
                                onChange={(event) => this.props.handleChange(event)}
                                alt="alt"
                                className="crop"
                            />
                        </label>
                    ))}
                </div>
            </>
        );



}

export default ImageQuestion;