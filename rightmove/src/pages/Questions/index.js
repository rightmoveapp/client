import React, { Component } from "react";
import API from "../../utils/API"
import { Link } from "react-router-dom";
/* import CheckboxQuestion from '../../components/CheckboxQuestion'; */
import DateQuestion from '../../components/DateQuestion';
import RadioQuestionsChecked from '../../components/RadioQuestionsChecked';
import TextQuestion from '../../components/TextQuestion';
import ImageQuestion from '../../components/ImageQuestion';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Finished from '../../components/Finished';
import YellowButton from "../../components/YellowButton";
import YellowUnderline from "../../components/YellowUnderline";
import "./style.css";
import Countdown from "../../components/Countdown";

class Questions extends Component {
    /* constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
    } */

    state = {
        questionsChoices: [],
        currentQuestion: [],
        answeredQuestions: [],
        skippedQuestions: [],
        questionType: [],
        isFinished: false,
        question: [],
        choice: [],
        count: 21,
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
            .catch(err => console.log(err));
    };

    getRandomQuestion = () => {
        let newCount = this.state.count - 1
        this.setState({ count: newCount })

        if (this.state.questionsChoices.length === 1) {
            this.setState({ isFinished: true });
        }

        const questionsChoices = this.state.questionsChoices;
        const filteredQuestions = questionsChoices.filter(question => {
            return !(this.state.currentQuestion.id === question.id)
        })
        this.setState({ questionsChoices: filteredQuestions })
        const randomQuestion = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
        // TODO: figure out how to fix this
        this.setState({ currentQuestion: randomQuestion })
    }

    setAnsweredQuestion = question => {
        this.setState({ answeredQuestions: [...this.state.answeredQuestions, question] })
    }

    handleChange = event => {
        console.log(this.state.currentQuestion)
        this.setState({
            choice: event.target.value,
            question: this.state.currentQuestion.id
        });
    };

    handleImageChange = event => {
        event.preventDefault();
        console.log(this.state.currentQuestion)
        this.setState({
            choice: event.target.value,
            question: this.state.currentQuestion.id
        });
    };

    /* handleCheckBoxChange= (event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
          choice: [...this.state.choice, name],
          question: this.state.currentQuestion.id
        });
      } */


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

        console.log('You have selected:', this.state.choice);
    }


    render() {

        // const userQuestionMap = this.state.currentQuestion.map((question) => {
        let currentQuestion = this.state.currentQuestion
        let currentquestionType
        if (currentQuestion.input_type === "radio") {
            currentquestionType =
                <RadioQuestionsChecked
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
                    key={currentQuestion.id}
                    questionId={currentQuestion.id}
                    questionText={currentQuestion.question_text}
                    questionType={currentQuestion.input_type}
                    questionPlaceholder={currentQuestion.placeholder}
                    getRandomQuestion={this.getRandomQuestion}
                    setAnsweredQuestion={this.setAnsweredQuestion}
                    onClick={this.handleChange}
                    choiceState={this.state.choice}
                />
        }
        /* else if (currentQuestion.input_type === "checkbox") {
            currentquestionType =
                <CheckboxQuestion
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
        } */
        else if (currentQuestion.input_type === "image") {
            currentquestionType =
                <ImageQuestion
                    key={currentQuestion.id}
                    questionId={currentQuestion.id}
                    questionText={currentQuestion.question_text}
                    questionType={currentQuestion.input_type}
                    questionChoices={[currentQuestion.choices]}
                    getRandomQuestion={this.getRandomQuestion}
                    setAnsweredQuestion={this.setAnsweredQuestion}
                    handleImageChange={this.handleImageChange}
                    choiceState={this.state.choice}
                />
        }
        else {
            currentquestionType =
                <TextQuestion
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


        if (this.state.currentQuestion.length < 1 /*&& this.state.questionType.length < 1*/) {
            return (<></>);
        } else {

            if (!this.state.isFinished) {
                return (
                    <>
                        <Row>
                            <Col size="s12 m12 l12">
                                <h4 className="heading-questions">Have fun, but answer honestly!</h4>
                                <h5 className="subheading-questions">The more information we have on you, the better our predictions will be <span role="img" aria-label="smile">😊</span></h5>
                                <form method="post" onSubmit={this.handleFormSubmit} size="col s12 m12 l12">
                                    {this.state.isFinished ? <Finished /> : currentquestionType}
                                    <h5 className="explainer"><Link to="/privacy_policy" target="_blank">Why do we need this?</Link></h5>
                                </form>
                                <Countdown count={this.state.count} />
                                <div className="right-align">
                                    <YellowUnderline to="/" text="Skip" space="32" />
                                    <YellowButton type="submit" onClick={this.handleFormSubmit} text="Continue  →" size="139" />
                                </div>
                            </Col>
                        </Row>

                    </>
                );
            } else {
                return (
                    <>
                        <Row>
                            <Col size="s12 m12 l12">

                                <Finished />

                            </Col>
                        </Row>

                    </>
                );

            }

        }
    }
}

export default Questions;