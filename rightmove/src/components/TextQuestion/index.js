import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class TextQuestion extends Component {

      render(props) {
        return (
            <>
              <h4 className="heading">Here we go! Tell us a little about yourself.</h4>
              <form method="post" onSubmit={this.handleFormSubmit} size="col s12 m12 l12">
                <label className="question">{this.props.questionText}</label>
                        <input
                            value={this.props.choice}
                            onChange={(event) => this.props.handleChange(event)}
                            /* name="firstName" */
                            id={this.props.questionId}
                            type={this.props.questionType}
                            className="validate Rectangle"
                            placeholder={this.props.questionPlaceholder}
                />
              </form>
              <Link to="/privacy_policy" target="_blank"><h5 className="explainer">Why do we need this?</h5></Link>
          </>
        )
      }

}

export default TextQuestion;