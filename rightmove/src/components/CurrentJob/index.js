import React from 'react';
import YellowUnderline from '../YellowUnderline';
import './style.css'

const CurrentJob = () => {
    return (
        <div className="WhiteRectangle">
            <div>
                <h4 className="Current-Job-Title">UX Designer</h4>
                <h2 className="Current-Job-Company">RevZilla</h2>
                <YellowUnderline to="/job" text="Edit" />
            </div>
            <div className="Oval">
                <h4 className="XX">XX%</h4>
            </div>
        </div>
    )
}

export default CurrentJob;