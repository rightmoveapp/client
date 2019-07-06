import React, { Component } from "react";
import questionsChoices from '../../questionsChoices.json';
import CheckboxQuestion from '../../components/CheckboxQuestion';
import DateQuestion from '../../components/DateQuestion';
import RadioQuestion from '../../components/RadioQuestion';
import TextQuestion from '../../components/TextQuestion';
import Row from '../../components/Row';
import Col from '../../components/Col';
import YellowUnderline from '../../components/YellowUnderline';
import YellowButton from '../../components/YellowButton';
import "./style.css";

class Questions extends Component {
    state = {
        questionsChoices: questionsChoices.questionsAndChoices
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
            return <RadioQuestion />}
        else if (randomQuestion.question[0].input_type === "date") {
                return <DateQuestion />}
        else if  (randomQuestion.question[0].input_type === "checkbox") {
                return <CheckboxQuestion />;}
        else {
            return <TextQuestion />;}
    }

    getNextQuestion() {
        console.log("CLICK!!!!");
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
                        
                        <h5 className="explainer">Why do we need this?</h5>
                        <div className="right-align">
                            <YellowUnderline to="/" text="Skip" space="32" />
                            <YellowButton /* to="/" */ text="Continue  →" size="139" getNextQuestion={this.getNextQuestion}/>
                        </div>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Questions;