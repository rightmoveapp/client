import React from 'react';
import './style.css'

const JobList = (props) => {
    console.log(props[0]);
    
    return (
        <>
            <h4 className="Top-Gigs">Top Gigs</h4>
                <div className="JobRectangle">
                    <div>
                        <h4 className="Possible-Job-Title">{props.role}</h4>
                        <h2 className="Possible-Job-Company">{props.company_name}</h2>
                    </div>
                    <h4 className="Possible-XX">{props.score}</h4>
                </div>
        </>
        )
    }
    
    export default JobList;
    
/* {props[0].map(possibleJob => (
                    <div className="JobRectangle">
                        <div>
                            <h4 className="Possible-Job-Title">{possibleJob.role}</h4>
                            <h2 className="Possible-Job-Company">{possibleJob.company_name}</h2>
                        </div>
                        <h4 className="Possible-XX">{possibleJob.score}</h4>
                    </div>
                ))} */