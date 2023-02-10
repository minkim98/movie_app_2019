import React from 'react';
import axios from 'axios';
import Movie from "../components/Movie";
import "./Home.css"

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: [],

    };

    getMovies = async () => {
        const movies = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=mandalorian&embed=episodes');
        console.log(movies.data._embedded.episodes);
        let list = movies.data._embedded.episodes;
        list = list.splice(0, 16);
        this.setState({ movies: list, isLoading: false });
    }
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state
        return (
            <section className="container">
                {isLoading
                    ?
                    <div className="loader">
                        <span className="loader__text">
                            Loading...
                        </span>
                    </div> :
                    <div className="movies">
                        {
                            movies.map(movie => (
                                <Movie
                                    key={movie.id}
                                    date={movie.airdate}
                                    title={movie.name}
                                    summary={movie.summary}
                                    poster={movie.image.medium}
                                    runtime={movie.runtime} />
                            ))}
                    </div>

                }
            </section>
        )
    }
}

export default Home;
