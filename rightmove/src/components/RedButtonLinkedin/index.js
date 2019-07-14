import React from "react";
import './style.css'

const RedButtonLinkedin = props => {
    var callbackUri = "https://www.redstapler.app/linkedin_auth"
    var callbackState = "dovdvdsoibusobus"
    var clientId = "86cmhugfwi4259"

    return (
        <a
            href={`https://linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${escape(callbackUri)}&state=${callbackState}&scope=r_liteprofile%20r_emailaddress`}>
            <button className='RedButtonLinkedin -RedButtonLinkedin-Text'>{props.text}</button>

        </a>


    )
}

export default RedButtonLinkedin;
