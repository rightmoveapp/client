import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const YellowButton = props => {
    return (
        <Link to={props.to}>
            <button className='YellowButton -YellowButton-Text' style={{ width: props.size + 'px'}}>{props.text}</button>
        </Link>
    )
}

export default YellowButton;