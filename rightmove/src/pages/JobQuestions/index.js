import React, { Component } from "react";
import API from "../../utils/API";
import Row from '../../components/Row';
import Col from '../../components/Col';
import CheckboxQuestion from '../../components/CheckboxQuestion';
import DateQuestion from '../../components/DateQuestion';
import RadioQuestions from '../../components/RadioQuestions';
import TextQuestion from '../../components/TextQuestion';
import "./style.css";

class JobQuestions extends Component {
    constructor(props) {
      super(props)

      /* this.handleInputChange = this.handleInputChange.bind(this) */

  }

  state = {
      jobQuestions: [],
      questionType: []
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
        this.getQuestions()
      }
      )
      .catch(err => console.log(err));
  };

  getQuestions = () => {
    for(let i = 0; i < this.state.jobQuestions.length; i++) {
      console.log(this.state.jobQuestions[i].input_type)
      // TODO: figure out how to fix this
      if (this.state.jobQuestions[i].input_type === "radio") {
        this.setState({
            questionType:
            <RadioQuestions
              key={this.state.jobQuestions[i].id}
              questionId={this.state.jobQuestions[i].id}
              questionText={this.state.jobQuestions[i].question_text}
              questionType={this.state.jobQuestions[i].input_type}
              questionChoices={[this.state.jobQuestions[i].choices]}
            />
        })

      }
      else if (this.state.jobQuestions[i].input_type === "date") {
        this.setState({
            questionType:
            <DateQuestion
              questionId={this.state.jobQuestions[i].id}
              questionText={this.state.jobQuestions[i].question_text}
              questionType={this.state.jobQuestions[i].input_type}
              questionPlaceholder={this.state.jobQuestions[i].placeholder}
            />
        })
      }
      else if (this.state.jobQuestions[i].input_type === "checkbox") {
        this.setState({
            questionType:
            <CheckboxQuestion
              key={this.state.jobQuestions[i].id}
              questionId={this.state.jobQuestions[i].id}
              questionText={this.state.jobQuestions[i].question_text}
              questionType={this.state.jobQuestions[i].input_type}
              questionChoices={[this.state.jobQuestions[i].choices]}
            />
        })
      }
      else {
        this.setState({
            questionType:
            <TextQuestion
              questionId={this.state.jobQuestions[i].id}
              questionText={this.state.jobQuestions[i].question_text}
              questionType={this.state.jobQuestions[i].input_type}
              questionPlaceholder={this.state.jobQuestions[i].placeholder}
            />
        })
      }
      /* this.setState({currentQuestion:randomQuestion}) */

    }

  }


  render() {
    return (
      <>
        <Row>
          <Col size="s12 m12 l12">
            <>
            <h4 className="heading">Give us the deets on this gig 🤑</h4>
            <form /* onSubmit={this.handleSubmit} */ size="col s12 m12 l12">
            <label className="question">Company name</label>
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
              <label className="question">Position title</label>
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
              <label className="question">Annual salary</label>
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
              {/* <input type="submit" value="Submit" /> */}
              {this.state.questionType}
            </form>
            </>
          </Col>
        </Row>

      </>
    )
  }
}

export default JobQuestions;