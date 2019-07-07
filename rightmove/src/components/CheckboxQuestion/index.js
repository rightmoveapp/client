import React, { Component } from "react";
import { Link } from "react-router-dom";
import YellowButton from "../YellowButton";
import YellowUnderline from "../YellowUnderline";
import "./style.css";


class CheckboxQuestions extends Component {
    /* state = {
        active: false
    }
    onChange = event => {
        // taken straight from the official React Docs
        // https://reactjs.org/docs/forms.html#handling-multiple-inputs
        const target = event.target;
        const value = target.type === "checkbox"
          ? target.checked
          : target.value;
        const name = target.name;
        this.setState({
          [name]: value,
          active:true
        });
      }; */

    render() {
        return (
            <>
                <form size="col s12 m12 l12">
                    <label className="question">Where in the city would you be happy to work in?</label>
                    <p>
                        <label>
                            <input name="active"
                                type="checkbox" class="red" />
                            <span className="-Input-Text">Center City</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span className="-Input-Text">West</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span className="-Input-Text">North</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span className="-Input-Text">South</span>
                        </label>
                    </p>
                </form>
                <Link to="/privacy_policy" target="_blank"><h5 className="explainer">Why do we need this?</h5></Link>
                <div className="right-align">
                    <YellowUnderline to="/" text="Skip" space="32" />
                    <YellowButton /* to="/" */ text="Continue  →" size="139" /* getNextQuestion={this.getNextQuestion} */ />
                </div>
            </>
        )
    }


}

export default CheckboxQuestions;
