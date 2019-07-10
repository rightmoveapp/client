import React from 'react';
import './style.css'
import YellowUnderline from '../YellowUnderline';

const JobList = () => {
    return (
        <div className="JobRectangle">
            <div>
                <h4 className="Possible-Job-Title">UX Designer</h4>
                <h2 className="Possible-Job-Company">RevZilla</h2>
            </div>
            <h4 className="Possible-XX">80%</h4>
        </div>
    )
}

export default JobList;