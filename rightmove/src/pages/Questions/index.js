import React, { Component } from "react";
import questionsChoices from '../../questionsChoices.json';
import CheckboxQuestion from '../../components/CheckboxQuestion';
import DateQuestion from '../../components/DateQuestion';
import RadioQuestions2 from '../../components/RadioQuestions2';
import TextQuestion from '../../components/TextQuestion';
import Row from '../../components/Row';
import Col from '../../components/Col';
import YellowUnderline from '../../components/YellowUnderline';
import YellowButton from '../../components/YellowButton';
import { Link } from "react-router-dom";
import "./style.css";

class Questions extends Component {
    constructor(props) {
        super(props)

        this.handleInputChange = this.handleInputChange.bind(this)
    }
    
    state = {
        questionsChoices: questionsChoices.questionsAndChoices,
        answeredQuestions: [],
        skippedQuestions: [],
    };
    /* get random question in the database
        evaluate the question to see if it has been asked before (after very first question)
        evaluate the input type of the question
        render input type that matches
        then on click or on enter check if the question has been answered
        post the answer to /v1/useranswers
        push to array of answered questions
        then get random questions from the database
        check if question has been answered from array of answered questions
         */

    getRandomQuestion() {
        const questionsChoices = this.state.questionsChoices;
        const randomQuestion = questionsChoices[Math.floor(Math.random() * questionsChoices.length)];
        console.log(randomQuestion.question[0].input_type);
        if (randomQuestion.question[0].input_type === "radio") {
            return <RadioQuestions2 handleInputChange = {this.handleInputChange} />}
        else if (randomQuestion.question[0].input_type === "date") {
                return <DateQuestion handleInputChange = {this.handleInputChange} />}
        else if  (randomQuestion.question[0].input_type === "checkbox") {
                return <CheckboxQuestion handleInputChange = {this.handleInputChange} />;}
        else {
            return <TextQuestion handleInputChange = {this.handleInputChange} />;}
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
    };

    getNextQuestion(event) {
        /* console.log("CLICK!!!!"); */
        event.preventDefault();
        
    
    }
    


    render() {
        /* this.getRandomQuestion();  */
        return (
            <>
                <Row>
                    <Col size="s12 m12 l12">
                        <h4 className="heading">Here we go!
                            Tell us a little about yourself.
                        </h4>
                        {this.getRandomQuestion()}
                        
                        {/* <Link to="/privacy_policy" target="_blank"><h5 className="explainer">Why do we need this?</h5></Link>
                        <div className="right-align">
                            <YellowUnderline to="/" text="Skip" space="32" />
                            <YellowButton to="/" text="Continue  →" size="139" getNextQuestion={this.getNextQuestion}/>
                        </div> */}
                    </Col>
                </Row>
            </>
        );
    }
}

export default Questions;