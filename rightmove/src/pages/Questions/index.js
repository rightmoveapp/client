import React, { Component } from "react";
import API from "../../utils/API"
import CheckboxQuestion from '../../components/CheckboxQuestion';
import DateQuestion from '../../components/DateQuestion';
import RadioQuestions from '../../components/RadioQuestions';
import TextQuestion from '../../components/TextQuestion';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Finished from '../../components/Finished';
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
        isFinished: false
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

    getNextQuestion(event) {
        /* console.log("CLICK!!!!"); */
        event.preventDefault();
    }


    render(){
        // const userQuestionMap = this.state.currentQuestion.map((question) => {
            let currentQuestion = this.state.currentQuestion
            console.log(currentQuestion)
            let currentquestionType
            if (currentQuestion.input_type === "radio") {
                console.log("I am a radio question",currentQuestion)
                currentquestionType =
                    <RadioQuestions
                        key={currentQuestion.id}
                        questionId={currentQuestion.id}
                        questionText={currentQuestion.question_text}
                        questionType={currentQuestion.input_type}
                        questionChoices={[currentQuestion.choices]}
                        getRandomQuestion={this.getRandomQuestion}
                        setAnsweredQuestion={this.setAnsweredQuestion}
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
                    </Col>
                </Row>
            </>
        );
    }
}
}

export default Questions;