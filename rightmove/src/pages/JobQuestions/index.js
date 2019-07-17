import React, { Component } from "react";
import API from "../../utils/API";
import Row from '../../components/Row';
import Col from '../../components/Col';
import { Redirect } from "react-router-dom";
// import CheckboxQuestion from '../../components/CheckboxQuestion';
import DateQuestion from '../../components/DateQuestion';
import RadioQuestions from '../../components/RadioQuestions';
import TextQuestion from '../../components/TextQuestion';
import YellowButton from '../../components/YellowButton';
import basicQuestions from "../../basicQuestions.json";
import Select from 'react-select';
import "./style.css";

class JobQuestions extends Component {
  state = {
    basicQuestions,
    jobQuestions: [],
    choices: {},
    companyName: "",
    salary: "",
    isCurrent: "",
    zipcode: "",
    city: "",
    role_name: null,
    submitted:false,
  };

  handleChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

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

  handleDropdownChange = role_name => {
    this.setState({ role_name });
  };

  /* handleCheckBoxChange = (event) => {
    const target = event.target.id;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      choice: [...this.state.choice, name],
      question: this.state.currentQuestion.id
    });
  }; */

  componentDidMount() {
    this.loadQuestions();
  };

  loadQuestions = () => {
    API.getJobQuestions()
      .then(response => {
        this.setState({ jobQuestions: response.data.questionsAndChoices })
      })
      .catch(err => console.log(err));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.postUserJobAnswers({
      companyName: this.state.companyName,
      role_name: this.state.role_name.value,
      salary: this.state.salary,
      isCurrent: this.state.isCurrent,
      zipcode: this.state.zipcode,
      city: this.state.city,
      questionsAndAnswers: this.state.choices,
    })
      .then(response => {
        this.setState({submitted:true})
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.submitted){
      return (
        <Redirect to="/account" />
      )
    }
    // TODO : put the job options in the database and make a get request for this info
    let jobQuestionsJobs = []
    jobQuestionsJobs = this.state.basicQuestions.role_names.map((role) => {
      return { value: role.role_name, label: role.role_name }
    })

    const jobQuestionMap = this.state.jobQuestions.map((question) => {
      // TODO: figure out how to fix this
      if (question.input_type === "radio") {
        return (
          <RadioQuestions
            key={question.id}
            questionId={question.id}
            questionText={question.question_text}
            questionType={question.input_type}
            questionChoices={[question.choices]}
            name={question.id}
            handleChange={this.handleInputChange}
          />
        )
      }
      else if (question.input_type === "date") {
        return (
          <DateQuestion
            key={question.id}
            questionId={question.id}
            questionText={question.question_text}
            questionType={question.input_type}
            questionPlaceholder={question.placeholder}
            name={question.id}
            handleChange={this.handleInputChange}
          />
        )
      }
      /* else if (question.input_type === "checkbox") {
        return (
          <CheckboxQuestion
            key={question.id}
            questionId={question.id}
            questionText={question.question_text}
            questionType={question.input_type}
            questionChoices={[question.choices]}
            name={question.id}
            value={this.state.questionName}
            handleCheckBoxChange={this.handleCheckBoxChange}
          />
        )
      } */
      else {
        return (
          <TextQuestion
            key={question.id}
            questionId={question.id}
            questionText={question.question_text}
            questionType={question.input_type}
            questionPlaceholder={question.placeholder}
            name={question.id}
            /* value={this.state.questionName} */
            handleChange={this.handleInputChange}
          />
        )
      }
    }
    );
    return (
      <>
        <Row>
          <Col size="s12 m12 l12">
            <>
              <h4 className="heading">Give us the deets on this gig <span role="img" aria-label="Smiley with money mouth">🤑</span></h4>
              <form size="col s12 m12 l12">
                <label className="question">Company name</label>
                <input
                  value={this.state.companyName}
                  onChange={this.handleChange}
                  name="companyName"
                  id="22"
                  type="text"
                  className="validate Rectangle"
                  placeholder="Best place in the world"
                />
                {/* <label className="question">Position title</label>
                <input
                  value={this.state.title}
                  onChange={this.handleChange}
                  name="title"
                  id="23"
                  type="text"
                  className="validate Rectangle"
                  placeholder="Web Developer"
                /> */}
                <label className="question active">Position title</label>
                <Select
                  onChange={this.handleDropdownChange}
                  options={jobQuestionsJobs}
                />
                <label className="question">Annual salary</label>
                <input
                  value={this.state.salary}
                  onChange={this.handleChange}
                  name="salary"
                  id="24"
                  type="text"
                  className="validate Rectangle"
                  placeholder="$80,000"
                />
                <label className="question">Is this your current job?</label>
                <input id="25" type="radio" className="validate Rectangle" />
                <p>
                  <label>
                    <input
                      key="1"
                      value="yes"
                      name="isCurrent"
                      type="radio"
                      /* checked={this.props.choiceState === questionChoice.choice_text} */
                      // onChange={() => this.props.handleChange(questionChoice.choice_text)}
                      onChange={this.handleChange}
                    />
                    <span className="-Input-Text">Yes</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      key="2"
                      value="no"
                      name="isCurrent"
                      type="radio"
                      /* checked={this.props.choiceState === questionChoice.choice_text} */
                      // onChange={() => this.props.handleChange(questionChoice.choice_text)}
                      onChange={this.handleChange}
                    />
                    <span className="-Input-Text">No</span>
                  </label>
                </p>
                <label className="question">Zipcode</label>
                <input
                  value={this.state.zipcode}
                  onChange={this.handleChange}
                  name="zipcode"
                  id="26"
                  type="text"
                  className="validate Rectangle"
                  placeholder="19103"
                />
                <label className="question">City</label>
                <input
                  value={this.state.city}
                  onChange={this.handleChange}
                  name="city"
                  id="27"
                  type="text"
                  className="validate Rectangle"
                  placeholder="Philadelphia"
                />

                {jobQuestionMap}
                <div className="right-align add-space">
                  <YellowButton type="submit" onClick={this.handleFormSubmit} text="Continue  →" to="/account" size="139" />
                </div>
              </form>
            </>
          </Col>
        </Row>
      </>
    )
  }
}
export default JobQuestions;