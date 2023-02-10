import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css"

function Navigation() {
    return (
        <div className="navigation__container">
            <Link className="navigation" to="/home">Home</Link>
            <Link className="navigation" to="/about">About</Link>
        </div>
    );
}

export default Navigation;