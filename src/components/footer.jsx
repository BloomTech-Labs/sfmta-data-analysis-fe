import React from 'react';
import { NavLink } from "react-router-dom";

export const Footer = props => {
    return (
        <div className="footer">
            <NavLink exact to="/info/aboutus">About us</NavLink>
            <p>© 2020 Data Driven Transit, All Rights Reserved</p>
        </div>
    )
}

export default Footer;