import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const SmallYellowButton = props => {
    return (
        <Link to={props.to}>
            <button 
                className='SmallYellowButton -SmallYellowButton-Text' 
                onClick={props.getNextQuestion}>
                    {props.text}
            </button>
        </Link>
    )
}

export default SmallYellowButton;