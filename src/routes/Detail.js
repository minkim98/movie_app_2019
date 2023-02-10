import React from "react";
import { useLocation } from "react-router-dom";
import '../routes/About.css';



function Detail() {
    const location = useLocation();

    if (location.state) {
        return (
            <div className="about__container">
                <div className="about__text">
                    <span>
                        {location.state.title}
                    </span>
                </div>
            </div>
        )
    }
    return null;

}

export default Detail;