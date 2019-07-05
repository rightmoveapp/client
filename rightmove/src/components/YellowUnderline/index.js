import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const YellowUnderline = props => {
    return (
        <Link to={props.to}>
            {props.text}
        </Link>

    )
}

export default YellowUnderline;
