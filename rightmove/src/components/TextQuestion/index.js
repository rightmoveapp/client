import React, { Component } from "react";
import "./style.css";

class TextQuestion extends Component {
    state = {
        questionAnswer: "",
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <>
                <form size="col s12 m12 l12">
                    <label className="question">What is your name?</label>
                    <input
                        value={this.state.questionAnswer}
                        onChange={this.handleInputChange}
                        name="firstName"
                        id="name"
                        type="text"
                        className="validate"
                        placeholder="Jane Doe"
                        className="Rectangle"
                    />
                </form>
            </>
        )
    }
}

export default TextQuestion;