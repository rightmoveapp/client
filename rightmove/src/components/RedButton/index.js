import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const RedButton = props => {
    return (
        <Link to={props.to}>
            <button className='Button -Button-Text'>{props.text}</button>
        </Link>

    )
}

export default RedButton;