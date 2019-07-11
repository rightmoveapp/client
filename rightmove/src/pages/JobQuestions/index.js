import React, { Component } from "react";
import API from "../../utils/API";
import Row from '../../components/Row';
import Col from '../../components/Col';
import "./style.css";

class JobQuestions extends Component {
  componentDidMount() {
    this.loadQuestions();
  }

  loadQuestions = () => {
    API.getJobQuestions()
      .then(response => {
        this.setState({ questionsChoices: response.data.questionsAndChoices })
        console.log(response.data.questionsAndChoices)
        /* this.getRandomQuestion() */
      }
      )
      // TODO: Handle if user has answered all questions
      .catch(err => console.log(err));
  };


  render() {
    return (
      <>
        <Row>
          <Col size="s12 m12 l12">
            <h4 className="heading">Give us the deets on this gig 🤑</h4>
            <form /* onSubmit={this.handleSubmit} */ size="col s12 m12 l12">
            <label className="question">Company name:</label>
              <input
                /* value={this.state.value} */
                onChange={this.handleChange}
                /* name="firstName" */
                id="22"
                type="text"
                className="validate"
                placeholder="Best place in the world"
                className="Rectangle"
              />
              <label className="question">Position title:</label>
              <input
                /* value={this.state.value} */
                onChange={this.handleChange}
                /* name="firstName" */
                id="23"
                type="text"
                className="validate"
                placeholder="Web Developer"
                className="Rectangle"
              />
              <label className="question">Annual salary:</label>
              <input
                /* value={this.state.value} */
                onChange={this.handleChange}
                /* name="firstName" */
                id="24"
                type="text"
                className="validate"
                placeholder="$80,000"
                className="Rectangle"
              />
              <label className="question">{this.props.questionText}</label>
              <input
                /* value={this.state.value} */
                onChange={this.handleChange}
                /* name="firstName" */
                id={this.props.questionId}
                type={this.props.questionType}
                className="validate"
                placeholder={this.props.questionPlaceholder}
                className="Rectangle"
              />
              {/* <input type="submit" value="Submit" /> */}
            </form>
          </Col>
        </Row>

      </>
    )
  }
}

export default JobQuestions;