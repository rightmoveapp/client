import React, { Component } from "react";
import "./style.css";


class CheckboxQuestions extends Component {
    state = {
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
      };

      render() {
        const {form, onChange } = this.state;
        return (
        <>
            <form size="col s12 m12 l12">
                <label className="question">Where in the city would you be happy to work in?</label>
                <p>
                    <label>
                        <input name="active"
                            type="checkbox"
                            checked={this.state.active}
                            onChange={onChange} class="red"/>
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
        </>
    )
}
}

export default CheckboxQuestions;