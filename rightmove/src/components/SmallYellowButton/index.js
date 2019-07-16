import React from "react";
import { Link } from 'react-router-dom';
import './style.css'

const SmallYellowButton = props => {
    return (
        <Link to={props.to}>
            <button
                className='SmallYellowButton -YellowButton-Text'
                style={{ width: props.size + 'px'}}
                onClick={props.onClick}>
                    {props.text}
            </button>
        </Link>
    )
}

export default SmallYellowButton;