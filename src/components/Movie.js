import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./Movie.css"

function Movie({ runtime, date, title, poster, summary, url }) {
    console.log(url);
    let newSummary = summary;
    newSummary = newSummary.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/<br \/>/g, '');
    return (
        <div className="movie">
            <Link to={`/movie/${date}`}
                state={{
                    runtime, date, title, poster, newSummary, url
                }}
            >
                <img  className = "movie__poster" src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__date">{date}</h5>
                    <li className="runtime__runtime">{runtime}</li>
                    <p className="movie__summary">{newSummary}</p>
                </div>
            </Link >
        </div>

    )
}

Movie.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired
}

export default Movie;