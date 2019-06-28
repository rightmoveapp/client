import React from "react";
import Container from '../../components/Container';
import './style.css';

function Landing() {
    return (
        <Container>
            <div className="Catchy-Tagline">Catchy Tagline</div>
            <p className="Body-Copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod f  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button className="Button -Button-Text">Create account with LinkedIn</button>
        </Container>
    )

}


export default Landing;