import React, { Component } from "react";
import API from "../../utils/API"
import { Link } from "react-router-dom";
import CheckboxQuestion from '../../components/CheckboxQuestion';
import DateQuestion from '../../components/DateQuestion';
import RadioQuestions from '../../components/RadioQuestions';
import TextQuestion from '../../components/TextQuestion';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Finished from '../../components/Finished';
import YellowButton from "../../components/YellowButton";
import YellowUnderline from "../../components/YellowUnderline";
import "./style.css";

class Questions extends Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    state = {
        questionsChoices: [],
        currentQuestion:[],
        answeredQuestions: [],
        skippedQuestions: [],
        questionType:[],
        isFinished: false,
        question:[],
        choice:[],
    };

    componentDidMount() {
        this.loadQuestions();
    }

    loadQuestions = () => {
        API.getUserAttrQuestions()
            .then(response => {
                this.setState({ questionsChoices: response.data.questionsAndChoices })
                this.getRandomQuestion()
            }
            )
            // TODO: Handle if user has answered all questions
            .catch(err => console.log(err));
    };

    getRandomQuestion = () => {
        if (this.state.questionsChoices.length === 1) {
            this.setState({ isFinished: true });
        }

        const questionsChoices = this.state.questionsChoices;
        const filteredQuestions = questionsChoices.filter(question => {
            return !(this.state.currentQuestion.id === question.id)
        })
        this.setState({questionsChoices:filteredQuestions})
        const randomQuestion = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
        // TODO: figure out how to fix this
        this.setState({currentQuestion:randomQuestion})
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

    setAnsweredQuestion = question =>{
        this.setState({answeredQuestions: [...this.state.answeredQuestions, question]})
    }

    handleChange = event => {
        console.log(this.state.currentQuestion)
        this.setState({
            choice: event.target.value,
            question: this.state.currentQuestion.id
        });
    };

    handleCheckBoxChange= (event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
          choice: [...this.state.choice, name],
          question: this.state.currentQuestion.id
        });
      }


    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("clicked")
        API.postUserAttrAnswers({
            question: this.state.question,
            answer: this.state.choice,
        })
            .then(response => {
                this.setAnsweredQuestion(this.state.question)
                this.getRandomQuestion()
            }
            )
            .catch(err => console.log(err));

        console.log('You have selected:', this.state.selectedOption);
    }


    render(){
        // const userQuestionMap = this.state.currentQuestion.map((question) => {
            let currentQuestion = this.state.currentQuestion
            let currentquestionType
            if (currentQuestion.input_type === "radio") {
                currentquestionType =
                    <RadioQuestions
                        key={currentQuestion.id}
                        questionId={currentQuestion.id}
                        questionText={currentQuestion.question_text}
                        questionType={currentQuestion.input_type}
                        questionChoices={[currentQuestion.choices]}
                        getRandomQuestion={this.getRandomQuestion}
                        setAnsweredQuestion={this.setAnsweredQuestion}
                        handleChange={this.handleChange}
                        choiceState={this.state.choice}
                    />
                }
            else if (currentQuestion.input_type === "date") {
                currentquestionType =
                    <DateQuestion
                        /* handleInputChange={this.handleInputChange} */
                        key={currentQuestion.id}
                        questionId={currentQuestion.id}
                        questionText={currentQuestion.question_text}
                        questionType={currentQuestion.input_type}
                        questionPlaceholder={currentQuestion.placeholder}
                        getRandomQuestion={this.getRandomQuestion}
                        setAnsweredQuestion={this.setAnsweredQuestion}
                        handleChange={this.handleChange}
                        choiceState={this.state.choice}
                    />
            }
            else if (currentQuestion.input_type === "checkbox") {
                currentquestionType =
                    <CheckboxQuestion
                        /* handleInputChange={this.handleInputChange} */
                        key={currentQuestion.id}
                        questionId={currentQuestion.id}
                        questionText={currentQuestion.question_text}
                        questionType={currentQuestion.input_type}
                        questionChoices={[currentQuestion.choices]}
                        getRandomQuestion={this.getRandomQuestion}
                        setAnsweredQuestion={this.setAnsweredQuestion}
                        handleCheckBoxChange={this.handleCheckBoxChange}
                        choiceState={this.state.choice}
                    />
            }
            else {
                currentquestionType =
                    <TextQuestion
                        /* handleInputChange={this.handleInputChange} */
                        key={currentQuestion.id}
                        questionId={currentQuestion.id}
                        questionText={currentQuestion.question_text}
                        questionType={currentQuestion.input_type}
                        questionPlaceholder={currentQuestion.placeholder}
                        getRandomQuestion={this.getRandomQuestion}
                        setAnsweredQuestion={this.setAnsweredQuestion}
                        handleChange={this.handleChange}
                        choiceState={this.state.choice}
                    />
            }


        if(this.state.currentQuestion.length < 1 /*&& this.state.questionType.length < 1*/){
        return (<></>);
        }else{

        return (
            <>
                <Row>
                    <Col size="s12 m12 l12">
                        { this.state.isFinished ? <Finished /> :  currentquestionType}
                        <Link to="/privacy_policy" target="_blank"><h5 className="explainer">Why do we need this?</h5></Link>

                    <div className="right-align">
                    <YellowUnderline to="/" text="Skip" space="32" />
                    <YellowButton type="submit" onClick={this.handleFormSubmit} text="Continue  →" size="139" />
                     </div>
                    </Col>
                </Row>

            </>
        );
    }
}
}

export default Questions;