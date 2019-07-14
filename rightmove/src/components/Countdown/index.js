import React from "react";
import YellowUnderline from "../YellowUnderline";
import "./style.css";

const Countdown = (props) => {
    return (
        <>
            <div className="There-are-new-questi Remove-Bold">
                <p className="Add-Overall-Padding">
                    Answer <span className="Add-Bold">{props.count}</span> before you add a job.
                <span className="Add-Space-Left"><YellowUnderline to="/questions" text="Add a job" /></span>
                </p>
            </div>
        </>
    );
}

export default Countdown;