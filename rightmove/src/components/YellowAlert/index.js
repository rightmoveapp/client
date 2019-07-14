import React from "react";
import YellowUnderline from "../YellowUnderline";
import "./style.css";

const YellowAlert = () => {
    return (
        <>
            <div className="There-are-new-questi YellowRectangle">
                <p className="Add-Overall-Padding">
                    There are new questions for you to answer!
                <span className="Add-Space-Left Remove-Bold"><YellowUnderline to="/questions" text="Answer Questions" /></span>
                </p>
            </div>
        </>
    );
}

export default YellowAlert;