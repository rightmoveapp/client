import React from 'react';
import { Link } from "react-router-dom";
import './style.css'

const Footer = () => {
    return (
        <footer className="footer Footer-Area Placeholder page-footer">
            <p>Made with ❤ by Team RedStapler</p>
            <Link to="/privacy_policy" target="_blank">Privacy Policy</Link>
        </footer>
    )
}

export default Footer;