import React, { Component } from "react";
import { Link } from "react-router-dom";
import YellowButton from "../YellowButton";
import YellowUnderline from "../YellowUnderline";
import "./style.css";


class DateQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        /* this.handleSubmit = this.handleSubmit.bind(this); */
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    /* handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    } */

    render(props) {
        return (
            <>
               {/*  <h4 className="heading">Here we go! Tell us a little about yourself.</h4> */}
                <form /* onSubmit={this.handleSubmit} */ size="col s12 m12 l12">
                    <label className="question">{this.props.questionText}</label>
                    <input 
                        value={this.state.value} 
                        onChange={this.handleChange}
                        id={this.props.questionId} 
                        type={this.props.questionType} 
                        className="validate"
                        placeholder={this.props.questionPlaceholder}  
                        className="Rectangle" 
                    />
                    {/* <input type="submit" value="Submit" /> */}
                </form>
                <Link to="/privacy_policy" target="_blank"><h5 className="explainer">Why do we need this?</h5></Link>
                <div className="right-align">
                    <YellowUnderline to="/" text="Skip" space="32" />
                    <YellowButton /* to="/" */ text="Continue  →" size="139" /* getNextQuestion={this.getNextQuestion}  */ />
                </div>
            </>
        )
    }

}

export default DateQuestion;
