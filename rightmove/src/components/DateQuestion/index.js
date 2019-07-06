import React from "react";
import "./style.css";


const DateQuestion = () => {
    return (
        <>
            <form size="col s12 m12 l12">
                <label className="question">When is your birthday?</label>
                <input id="birthday" type="date" className="validate" placeholder="10 / 18 / 1992" className="Rectangle" />
            </form>
        </>
    )
}

export default DateQuestion;