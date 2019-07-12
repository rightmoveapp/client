import React, { Component } from "react";
import API from "../../utils/API";
import Row from '../../components/Row';
import Col from '../../components/Col';
import CheckboxQuestion from '../../components/CheckboxQuestion';
import DateQuestion from '../../components/DateQuestion';
import RadioQuestions from '../../components/RadioQuestions';
import TextQuestion from '../../components/TextQuestion';
import basicQuestions from "../../basicQuestions.json";
import "./style.css";

class BasicQuestions extends Component {
  constructor(props) {
    super(props)

    /* this.handleInputChange = this.handleInputChange.bind(this) */

  }

  state = {
    basicQuestions
  };

  /* componentDidMount() {

  } */
  

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
                {/* <DateQuestion questionText="Your Birthday" questionPlaceholder="01/01/1990"/>
                <TextQuestion questionText="Zip code" questionPlaceholder="19103" />
                <TextQuestion questionText="Area code (cell)" questionPlaceholder="310" /> */}
                {/* <RadioQuestions /> */}
                {/* {<CheckboxQuestion questionText="Ethnicity" key="5" questionType="checkbox" questionChoices={["White", "Hispanic/Latinx", "Black/African"]}/>} */}
                {/* <input type="submit" value="Submit" /> */}
               {/*  White,Hispanic/Latinx,Black/African,Asian,American Indian/Alaskan Native,Middle Eastern/North African,Native Hawaiian/Pacific Islander,Other (Open) */}
              </form>
            </>
          </Col>
        </Row>

      </>
    )
  }
}

export default BasicQuestions;

{/* <label className="question">Your Birthday</label>
  <input
    value={this.state.value}
    onChange={this.handleChange}
    name="firstName"
    type="date"
    className="validate"
    placeholder="01/01/1990"
    className="Rectangle"
  />
  <label className="question">Zip code</label>
  <input
    value={this.state.value}
    onChange={this.handleChange}
    name="firstName"
    type="text"
    className="validate"
    placeholder="90210"
    className="Rectangle"
  />
  <label className="question">Area code (cell)</label>
  <input
    value={this.state.value}
    onChange={this.handleChange}
    name="firstName"
    type="text"
    className="validate"
    placeholder="310"
    className="Rectangle"
  />
  <label className="question">Gender</label>
  <input
    value={this.state.value}
    onChange={this.handleChange}
    name="firstName"
    type="radio"
    className="validate"
  />
  <p>
    <label>
      <input name="group1" type="radio" />
      <span className="-Input-Text">She/Hers</span>
    </label>
  </p>
  <p>
    <label>
      <input name="group1" type="radio" />
      <span className="-Input-Text">He/Him</span>
    </label>
  </p>
  <p>
    <label>
      <input name="group1" type="radio" />
      <span className="-Input-Text">They/Them</span>
    </label>
  </p>
  <p>
    <label>
      <input name="group1" type="radio" />
      <span className="-Input-Text">Zir/Zer</span>
    </label>
  </p>
  <p>
    <label>
      <input name="group1" type="radio" />
      <span className="-Input-Text">I do not identify with any of the above</span>
    </label>
  </p>
  <label className="question">Ethnicity</label>
  <input
    value={this.state.value}
    onChange={this.handleChange}
    name="firstName"
    type="text"
    className="validate"
    placeholder="310"
    className="Rectangle"
  /> */}