import React, { Component } from "react";
import "./style.css";


class CheckboxQuestions extends Component {
    state = {
        questionAnswer: [],
        checkboxes: ["centercity", "west", "north", "south"],
        
    };

    /* handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    }; */

    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;

        this.setState(prevState => ({
            checkboxes: {
                ...prevState.checkboxes,
                [name]: !prevState.checkboxes[name]
            }
        }));
    };

    render() {
        return (
            <>
                <form size="col s12 m12 l12">
                    <label className="question">Where in the city would you be happy to work in?</label>
                    <p>
                        <label>
                            <input
                                type="checkbox"
                                label="center city"
                                is_selected={this.state.checkboxes["centercity"]}
                                on_checkbox_change={this.handleCheckboxChange}
                                key={"center city"}
                            />
                            <span className="-Input-Text">Center City</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                type="checkbox"
                                label="west"
                                is_selected={this.state.checkboxes["west"]}
                                on_checkbox_change={this.handleCheckboxChange}
                                key={"west"}
                            />
                            <span className="-Input-Text">West</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                type="checkbox"
                                label="north"
                                is_selected={this.state.checkboxes["north"]}
                                on_checkbox_change={this.handleCheckboxChange}
                                key={"north"}
                            />
                            <span className="-Input-Text" >North</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                type="checkbox"
                                label="south"
                                is_selected={this.state.checkboxes["south"]}
                                on_checkbox_change={this.handleCheckboxChange}
                                key={"south"}
                            />
                            <span className="-Input-Text" >South</span>
                        </label>
                    </p>
                </form>
            </>
        )
    }



}

export default CheckboxQuestions;
