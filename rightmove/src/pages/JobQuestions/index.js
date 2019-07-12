import React, { Component } from "react";
import API from "../../utils/API";
import Row from '../../components/Row';
import Col from '../../components/Col';
import CheckboxQuestion from '../../components/CheckboxQuestion';
import DateQuestion from '../../components/DateQuestion';
import RadioQuestions from '../../components/RadioQuestions';
import TextQuestion from '../../components/TextQuestion';
import YellowButton from '../../components/YellowButton';
import "./style.css";

class JobQuestions extends Component {
  state = {
    jobQuestions: []
  };
  componentDidMount() {
    this.loadQuestions();
  }
  loadQuestions = () => {
    API.getJobQuestions()
      .then(response => {
        this.setState({ jobQuestions: response.data.questionsAndChoices })
        console.log(this.state.jobQuestions);
        console.log(this.state.jobQuestions[0].input_type);
      }
      )
      .catch(err => console.log(err));
  };
  render() {
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
              <h4 className="heading">Give us the deets on this gig <span role="img" aria-label="Smiley with money mouth">🤑</span></h4>
              <form /* onSubmit={this.handleSubmit} */ size="col s12 m12 l12">
                <label className="question">Company name</label>
                <input
                  /* value={this.state.value} */
                  onChange={this.handleChange}
                  /* name="firstName" */
                  id="22"
                  type="text"
                  className="validate Rectangle"
                  placeholder="Best place in the world"
                />
                <label className="question">Position title</label>
                <input
                  /* value={this.state.value} */
                  onChange={this.handleChange}
                  /* name="firstName" */
                  id="23"
                  type="text"
                  className="validate Rectangle"
                  placeholder="Web Developer"
                />
                <label className="question">Annual salary</label>
                <input
                  /* value={this.state.value} */
                  onChange={this.handleChange}
                  /* name="firstName" */
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
                      type="radio"
                      /* checked={this.props.choiceState === questionChoice.choice_text} */
                      // onChange={() => this.props.handleChange(questionChoice.choice_text)}
                      onChange={(event) => this.props.handleChange(event)}
                    />
                    <span className="-Input-Text">Yes</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      key="2"
                      value="no"
                      type="radio"
                      /* checked={this.props.choiceState === questionChoice.choice_text} */
                      // onChange={() => this.props.handleChange(questionChoice.choice_text)}
                      onChange={(event) => this.props.handleChange(event)}
                    />
                    <span className="-Input-Text">No</span>
                  </label>
                </p>
                {/* <input type="submit" value="Submit" /> */}
                {jobQuestionMap}
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
export default JobQuestions;