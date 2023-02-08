import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"

function Movie({ runtime, date, title, poster, summary }) {
    //console.log(poster);
    return (
        <div className="movie">

            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__date">{date}</h5>
                <ul className = "runtime">
                    <li className = "runtime__runtime">{runtime}</li>
                </ul>
                <p className="movie__summary">{summary}</p>
            </div>

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