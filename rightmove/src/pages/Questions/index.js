import React, { Component } from "react";
import API from "../../utils/API"
import CheckboxQuestion from '../../components/CheckboxQuestion';
import DateQuestion from '../../components/DateQuestion';
import RadioQuestions from '../../components/RadioQuestions';
import TextQuestion from '../../components/TextQuestion';
import Row from '../../components/Row';
import Col from '../../components/Col';
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
        questionType:[]
    };

    componentDidMount() {
        this.loadQuestions();
    }

    loadQuestions = () => {
        API.getUserAttrQuestions()
          .then(response => this.setState({ questionsChoices: response.data }))
          /* console.log(response.data.questionsAndChoices) */
          .catch(err => console.log(err));
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
    componentDidMount() {
        this.loadQuestions();
    }

    loadQuestions = () => {
        API.getUserAttrQuestions()
            .then(response => {
                this.setState({ questionsChoices: response.data.questionsAndChoices })
                console.log(response.data.questionsAndChoices)
                this.getRandomQuestion()
            }
            )
            .catch(err => console.log(err));
    };

    getRandomQuestion = () => {
        const questionsChoices = this.state.questionsChoices;
        
        const randomQuestion = questionsChoices[Math.floor(Math.random() * questionsChoices.length)];
        console.log(randomQuestion.input_type)
        if (randomQuestion.input_type === "radio") {
            this.setState({
                questionType:
                <RadioQuestions
                    key={randomQuestion.id}
                    questionId={randomQuestion.id}
                    questionText={randomQuestion.question_text}
                    questionType={randomQuestion.input_type}
                    questionChoices={[randomQuestion.choices]}
                />
            })

        }
        else if (randomQuestion.input_type === "date") {
            this.setState({
                questionType:
                <DateQuestion
                    /* handleInputChange={this.handleInputChange} */
                    questionId={randomQuestion.id}
                    questionText={randomQuestion.question_text}
                    questionType={randomQuestion.input_type}
                    questionPlaceholder={randomQuestion.placeholder}
                />
            })
        }
        else if (randomQuestion.input_type === "checkbox") {
            this.setState({
                questionType:
                <CheckboxQuestion
                    /* handleInputChange={this.handleInputChange} */
                    key={randomQuestion.id}
                    questionId={randomQuestion.id}
                    questionText={randomQuestion.question_text}
                    questionType={randomQuestion.input_type}
                    questionChoices={[randomQuestion.choices]}
                />
            })
        }
        else {
            this.setState({
                questionType:
                <TextQuestion
                    /* handleInputChange={this.handleInputChange} */
                    questionId={randomQuestion.id}
                    questionText={randomQuestion.question_text}
                    questionType={randomQuestion.input_type}
                    questionPlaceholder={randomQuestion.placeholder}
                />
            })
        }
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

    getNextQuestion(event) {
        /* console.log("CLICK!!!!"); */
        event.preventDefault();
    }


    render(){
        if(this.state.currentQuestion.length < 1 && this.state.questionType.length < 1){
        return (<></>);
        }else{

        return (
            <>
                <Row>
                    <Col size="s12 m12 l12">
                        <h4 className="heading">Here we go!
                            Tell us a little about yourself.
                        </h4>
                        {this.state.questionType}
                    </Col>
                </Row>
            </>
        );
    }
}
}

export default Questions;