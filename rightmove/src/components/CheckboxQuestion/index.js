import React, { Component } from "react";
import { Link } from "react-router-dom";
import YellowButton from "../YellowButton";
import YellowUnderline from "../YellowUnderline";
import "./style.css";


class CheckboxQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
          active: false,
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }


    render(props) {
        return (
            <>
                <form size="col s12 m12 l12">
                    <label className="question">{this.props.questionText}</label>
                    {this.props.questionChoices[0].map(questionChoice => (
                        <p>
                            <label>
                                <input
                                    name={questionChoice.choice_text}
                                    type={questionChoice.input_type}
                                    checked={this.state.centerCity}
                                    onChange={this.handleInputChange}
                                />
                                <span className="-Input-Text">{questionChoice.choice_text}</span>
                            </label>
                        </p>

                    ))}
                </form>
                <Link to="/privacy_policy" target="_blank"><h5 className="explainer">Why do we need this?</h5></Link>
                <div className="right-align">
                    <YellowUnderline to="/" text="Skip" space="32" />
                    <YellowButton /* to="/" */ text="Continue  →" size="139" /* getNextQuestion={this.getNextQuestion} */ />
                </div>
            </>
        )
    }


}

export default CheckboxQuestions;
