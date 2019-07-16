import React from 'react';
import './style.css'

const JobList = (props) => {
    return (
                <div className="JobRectangle">
                    <div>
                        <h4 className="Possible-Job-Title">{props.role}</h4>
                        <h2 className="Possible-Job-Company">{props.company_name}</h2>
                    </div>
                    <h4 className="Possible-XX">{props.score}%</h4>
                </div>
        )
    }
    export default JobList;
