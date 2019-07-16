import React from "react";
import YellowUnderline from "../YellowUnderline";
import "./style.css";

const Countdown = (props) => {
    if (props.count === 0 || props.count < 0) {
        return (
            <>
                <div className="There-are-new-questi">
                    <p className="Add-Padding">
                        <span className="Remove-Bold">Done answering questions?</span>
                        <span className="Add-Space-Left"><YellowUnderline to="/jobquestions" text="Add a job" /></span>
                    </p>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="There-are-new-questi Remove-Bold">
                    <p className="Add-Overall-Padding">
                        Answer <span className="Add-Bold">{props.count}</span> before you add a job.
                    </p>
                </div>
            </>
        );
    }

}

export default Countdown;