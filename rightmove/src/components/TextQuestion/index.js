import React, { Component } from "react";
import "./style.css";

class TextQuestion extends Component {

      render(props) {
        return (
            <>
              {/* <h4 className="heading">Here we go! Tell us a little about yourself.</h4> */}
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
          </>
        )
      }

}

export default TextQuestion;