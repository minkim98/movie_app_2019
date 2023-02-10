import React from "react";
import { useLocation } from "react-router-dom";
import '../routes/About.css';


function Detail() {
    const location = useLocation();
    if (location.state) {
        return (
            <div className="about__container">
                <div className="about__text">
                    <h2>
                        {location.state.title}
                    </h2>
                    <h3>
                        {location.state.newSummary}
                    </h3>
                    <span>
                        <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    </span>
                    <span>
                        <a href={location.state.url} target="_blank" rel="noopener noreferrer">
                            <p>More Info</p>
                        </a>
                    </span>
                </div>
            </div>
        )
    }
    return null;

}

export default Detail;