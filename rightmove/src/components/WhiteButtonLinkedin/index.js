import React from "react";
import './style.css'

const WhiteButtonLinkedin = props => {
    var callbackUri = "http://localhost:3000/linkedin_auth"
    var callbackState = "dovdvdsoibusobus"
    var clientId = "86cmhugfwi4259"

    return (
        <a
            href={`https://linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${escape(callbackUri)}&state=${callbackState}&scope=r_liteprofile%20r_emailaddress`}>
            <button className='WhiteButtonLinkedin -WhiteButtonLinkedin-Text'>{props.text}</button>

        </a>


    )
}

export default WhiteButtonLinkedin;