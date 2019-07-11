import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API"
import YellowButton from "../YellowButton";
import YellowUnderline from "../YellowUnderline";
import "./style.css";

class TextQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
          question:[],
          choice: ''};
    
        this.handleChange = this.handleChange.bind(this);
        /* this.handleSubmit = this.handleSubmit.bind(this); */
      }
    
      handleChange(event) {
        this.setState({
          question:this.props.questionId,
          choice: event.target.value});
      }
    
      handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("clicked")
        API.postUserAttrAnswers({
            question: this.state.question,
            answer: this.state.choice,
        })
            .then(response => {
                this.props.setAnsweredQuestion(this.state.question)
                this.props.getRandomQuestion()
            }
            )
            .catch(err => console.log(err));

        console.log('You have selected:', this.state.selectedOption);
    }
    
      render(props) {
        return (
            <>
              <h4 className="heading">Here we go! Tell us a little about yourself.</h4>
              <form method="post" onSubmit={this.handleFormSubmit} size="col s12 m12 l12">
                <label className="question">{this.props.questionText}</label>
                        <input
                            value={this.state.value} 
                            onChange={this.handleChange}
                            /* name="firstName" */
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
                  <YellowButton type="submit" onClick={this.handleFormSubmit} text="Continue  →" size="139" /* getNextQuestion={this.getNextQuestion} */ />
              </div>
          </>
        )
      }

}

export default TextQuestion;