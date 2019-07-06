import React from "react";
import "./style.css";


const RadioQuestion = () => {
    return (
        <>
            <form size="col s12 m12 l12">
                <label className="question">What are you pronouns?</label>
                {/* <input id="pronouns" type="radio" className="validate" className="Rectangle" /> */}
                <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span className="-Input-Text">Red</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span className="-Input-Text">Yellow</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span className="-Input-Text">Green</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span className="-Input-Text">Brown</span>
                    </label>
                </p>
            </form>
        </>
    )
}

export default RadioQuestion;