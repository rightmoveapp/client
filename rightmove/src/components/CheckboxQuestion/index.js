import React from "react";
import "./style.css";


const CheckboxQuestions = () => {
    return (
        <>
            <form size="col s12 m12 l12">
                <label className="question">Where in the city would you be happy to work in?</label>
                <p>
                    <label>
                        <input type="checkbox" class="red"/>
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

export default CheckboxQuestions;