import React from "react";
import "./style.css";


const TextQuestion = () => {
    return (
        <>
            <form size="col s12 m12 l12">
                <label className="question">What is your name?</label>
                <input id="name" type="text" className="validate" placeholder="Jane Doe" className="Rectangle" />
            </form>
        </>
    )
}

export default TextQuestion;