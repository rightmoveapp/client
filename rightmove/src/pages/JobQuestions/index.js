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
            <p>I am a job</p>
          </Col>
        </Row>

      </>
    )
  }
}

export default JobQuestions;