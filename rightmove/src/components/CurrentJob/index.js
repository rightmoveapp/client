import React from 'react';
import YellowUnderline from '../YellowUnderline';
import './style.css'

const CurrentJob = (props) => {
    return (
        <div className="WhiteRectangle">
            <div>
                <h4 className="Current-Job-Title">{props.role}</h4>
                <h2 className="Current-Job-Company">{props.company_name}</h2>
                <span className="Make-Font-Smaller">
                    <YellowUnderline to="/jobquestions" text="Edit" />
                </span>
            </div>
            <div className="Oval">
                <h4 className="XX">{props.score}%</h4>
            </div>
        </div>
    )
}

export default CurrentJob;