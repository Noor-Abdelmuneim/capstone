import React from "react";
import { Link } from "react-router-dom";
import upBtn from "../photos/up-arrow (1).png";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="footer">
            <div className="footer-Logo">
                <h1>Iraqi Startup Hub</h1>
            </div>
            <div className="pargraph-footer">
            <p>2024 Iraqi Startup Hub All rights reserved</p></div>

<div className="footer-info">
    <div className="footer-btn">
        <button className="button-with-image" onClick={scrollToTop}>
            <img src={upBtn} alt="" width={"30px"} height={"30px"} />
        </button>
    </div>
    <Link to="/">Home</Link>
    <Link to="startups">Startups</Link>
    <Link to="/investors">Investors & Incubators</Link>
    <Link to="/contact">Contact us</Link>
</div>
    </div >
  );
};

export default Footer;
