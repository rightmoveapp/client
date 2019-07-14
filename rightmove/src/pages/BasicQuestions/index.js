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
import "./style.css";

// choice: [...this.state.choice, event.target.value],

class BasicQuestions extends Component {
  state = {
    basicQuestions,
    /* question: [], */
    choices: {},
    /* birthday: "",
    gender: "",
    zipcode: "",
    areacode: "",
    pronouns: "",
    race_ethnicity: "",
    relationship_status: "",
    num_dependents: "",
    education: "",
    role: "",
    years_experience: "" */
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    

    // [...this.state.choice, event.target.value]
    // Updating the input's state
    // let choicesArray = this.state.choices.filter(item => console.log(item)  )

  
    let choiceObj = {...this.state.choices};
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
      question: this.state.question,
      answer: this.state.choice,
    })
      .then(response => {
        
      }
      )
      .catch(err => console.log(err));

    console.log('You have selected:', this.state.selectedOption);
  }


  render() {
    /* console.log(this.state.basicQuestions.questionsAndChoices); */

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

            // choiceState={this.state.choice}
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
            choiceState={this.state.choice}
          />
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
            choiceState={this.state.choice}
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
          <Col size="s12 m12 l12" className="center-align">
            <>
              <h4 className="heading-questions">Here we go! Tell us a little about yourself.</h4>
              <h5 className="subheading-questions">Just trying to get to know you.</h5>
              <form /* onSubmit={this.handleSubmit} */ size="col s12 m12 l12">
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