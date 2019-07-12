import React, { Component } from "react";
import API from "../../utils/API";
import Row from '../../components/Row';
import Col from '../../components/Col';
import CheckboxQuestion from '../../components/CheckboxQuestion';
import DateQuestion from '../../components/DateQuestion';
import RadioQuestions from '../../components/RadioQuestions';
import TextQuestion from '../../components/TextQuestion';
import basicQuestions from "../../basicQuestions.json";
import YellowButton from "../../components/YellowButton";
import "./style.css";

class BasicQuestions extends Component {
  constructor(props) {
    super(props)

  }

  state = {
    basicQuestions,
    question:[],
    choice:[],
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

  handleChange = event => {
    console.log(this.state.currentQuestion)
    this.setState({
      choice: event.target.value,
      question: this.state.currentQuestion.id
    });
  };

  handleCheckBoxChange = (event) => {
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
    /* API.postUserAttrAnswers({
      question: this.state.question,
      answer: this.state.choice,
    })
      .then(response => {
        this.setAnsweredQuestion(this.state.question)
        this.getRandomQuestion()
      }
      )
      .catch(err => console.log(err)); */

    console.log('You have selected:', this.state.selectedOption);
  }


  render() {
    /* console.log(this.state.basicQuestions.questionsAndChoices); */

    const basicQuestions = this.state.basicQuestions.questionsAndChoices.map((question) => {
      // TODO: figure out how to fix this
      if (question.input_type === "radio") {
        return (
          <RadioQuestions
            key={question.id}
            questionId={question.id}
            questionText={question.question_text}
            questionType={question.input_type}
            questionChoices={[question.choices]}
            handleChange={this.handleChange}
            choiceState={this.state.choice}
          />
        )
      }
      else if (question.input_type === "date") {
        return (
          <DateQuestion
            questionId={question.id}
            questionText={question.question_text}
            questionType={question.input_type}
            questionPlaceholder={question.placeholder}
            handleChange={this.handleChange}
            choiceState={this.state.choice}
          />
        )
      }
      else if (question.input_type === "checkbox") {
        return (
          <CheckboxQuestion
            key={question.id}
            questionId={question.id}
            questionText={question.question_text}
            questionType={question.input_type}
            questionChoices={[question.choices]}
            handleCheckBoxChange={this.handleCheckBoxChange}
            choiceState={this.state.choice}
          />
        )
      }
      else {
        return (
          <TextQuestion
            questionId={question.id}
            questionText={question.question_text}
            questionType={question.input_type}
            questionPlaceholder={question.placeholder}
            handleChange={this.handleChange}
            choiceState={this.state.choice}
          />
        )
      }
      /* this.setState({currentQuestion:randomQuestion}) */

    }
    );
    return (
      <>
        <Row>
          <Col size="s12 m12 l12">
            <>
              <h4 className="heading">Here we go! Tell us a little about yourself.</h4>
              <form /* onSubmit={this.handleSubmit} */ size="col s12 m12 l12">
                {basicQuestions}
                <div className="right-align">
                  <YellowButton type="submit" onClick={this.handleFormSubmit} text="Continue  →" size="139" />
                </div>
              </form>
            </>
          </Col>
        </Row>

      </>
    )
  }
}

export default BasicQuestions;