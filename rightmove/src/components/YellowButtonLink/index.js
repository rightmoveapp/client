import React from "react";
import './style.css'

const YellowButton = props => {
    return (
       /*  <Link to={props.to}> */
            <button
                className='YellowButton -YellowButton-Text'
                style={{ width: props.size + 'px'}}
                onClick={props.onClick}>
                    {props.text}
            </button>
        /* </Link> */
    )
}

export default YellowButton;