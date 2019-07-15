import React, { Component } from "react";
import "./style.css";


class ImageQuestion extends Component {

    render(props) {
        return (
            <>
                <label className="question">{this.props.questionText}</label>
                <div>
                    {this.props.questionChoices[0].map(questionChoice => (
                        <label>
                            <img
                                src={questionChoice.choice_text}
                                key={questionChoice.id}
                                value={questionChoice.choice_text}
                                type={questionChoice.input_type}
                                checked={this.props.choiceState === questionChoice.choice_text}
                                // onChange={() => this.props.handleChange(questionChoice.choice_text)}
                                onChange={(event) => this.props.handleChange(event)}
                                alt="alt"
                                className="crop"
                            />
                            {/* <span className="-Input-Text">{questionChoice.choice_text}</span> */}
                        </label>
                    ))}
                </div>
            </>
        );
    }


}

export default ImageQuestion;