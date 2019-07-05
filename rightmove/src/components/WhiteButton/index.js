import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const WhiteButton = props => {
    return (
        <Link to={props.to}>
            <button className="WhiteButton -WhiteButton-Text">{props.text}</button>
        </Link>
    )
}

export default WhiteButton;