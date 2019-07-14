import React, { Component } from "react";
import API from "../../utils/API";
import Row from '../../components/Row';
import Col from '../../components/Col';
/* import CheckboxQuestion from '../../components/CheckboxQuestion'; */
import DateQuestion from '../../components/DateQuestion';
import RadioQuestions from '../../components/RadioQuestions';
import TextQuestion from '../../components/TextQuestion';
import basicQuestions from "../../basicQuestions.json";
import YellowButton from "../../components/YellowButton";
import Select from 'react-select';
import "./style.css";

/* const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
] */

class BasicQuestions extends Component {
  state = {
    basicQuestions,
    choices: {},
    role_name: null,
  };

  // to get user input answers into the choices array
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    let choiceObj = { ...this.state.choices };
    choiceObj[name] = value;

    this.setState({
      /* [name]: value, */
      choices: choiceObj
    });
  };

  /* TODO : Get checkboxes working -- difficultly is that this `[name]: value` 
  sets the state high level and allows you to select and deselect 
  because name is the checkbox answer and the value is a boolen 
  when you push it into an array -- in this example race_ethnicity, it creates a new instance of 
  the checkbox answer and the value as a boolen but does not update the already created one */
  /* handleCheckBoxChange= (event) =>{
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      race_ethnicity: [...this.state.race_ethnicity, {[name]: value}],
    });
  } */


  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("clicked")
    API.postUserBasicAnswers({
      questionsAndAnswers: this.state.choices,
    })
      .then(response => {
        console.log("sumbitted")
      }
      )
      .catch(err => console.log(err));

    console.log('You have selected:', this.state.selectedOption);
  }

  handleDropdownChange = role_name => {
    this.setState({ role_name });
    console.log(`Option selected:`, role_name);
  };

  render() {
    let basicQuestionsJobs = []
    basicQuestionsJobs = this.state.basicQuestions.role_names.map((role) => {
        return { value: role.role_name, label: role.role_name }
    })

    console.log(basicQuestionsJobs)

    const basicQuestions = this.state.basicQuestions.questionsAndChoices.map((question) => {
      // TODO: figure out how to fix this
      if (question.input_type === "radio") {
        let questionName = question.name
        console.log(questionName)
        return (
          <RadioQuestions
            key={question.id}
            questionId={question.id}
            questionText={question.question_text}
            questionType={question.input_type}
            questionChoices={[question.choices]}
            name={questionName}
            handleChange={this.handleInputChange}
          />
        )
      }
      else if (question.input_type === "date") {
        let questionName = question.name
        console.log(questionName)
        return (
          <DateQuestion
            questionId={question.id}
            questionText={question.question_text}
            questionType={question.input_type}
            questionPlaceholder={question.placeholder}
            name={questionName}
            value={this.state.questionName}
            handleChange={this.handleInputChange}
          />
        )
      }
      else if (question.input_type === "dropdown") {
        let questionName = question.name
        console.log(questionName)
        return (
          <>
            <label className="question active">{question.question_text}</label>
            <Select
              onChange={this.handleDropdownChange}
              options={basicQuestionsJobs}
            />
          </>
        )
      }
      /* else if (question.input_type === "checkbox") {
        let questionName = question.name
        console.log(questionName)
        return (
          <CheckboxQuestion
            key={question.id}
            questionId={question.id}
            questionText={question.question_text}
            questionType={question.input_type}
            questionChoices={[question.choices]}
            name={questionName}
            value={this.state.questionName}
            handleCheckBoxChange={this.handleCheckBoxChange}
          />
        )
      } */
      else {
        let questionName = question.name
        console.log(questionName)
        return (
          <TextQuestion
            questionId={question.id}
            questionText={question.question_text}
            questionType={question.input_type}
            questionPlaceholder={question.placeholder}
            name={questionName}
            value={this.state.questionName}
            handleChange={this.handleInputChange}
          />
        )
      }

    }
    );
    return (
      <>
        <Row>
          <Col size="s12 m12 l12" className="center-align">
            <>
              <h4 className="heading-questions">Here we go! Tell us a little about yourself.</h4>
              <h5 className="subheading-questions">Just trying to get to know you.</h5>
              <form size="col s12 m12 l12">
                {basicQuestions}
                <div className="right-align add-space">
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