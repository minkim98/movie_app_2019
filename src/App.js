/* import React from 'react';
import axios from 'axios';
import Movie from "./components/Movie"; */

import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

/* function Food({name, rating}){
  return (
    <div>
      <h2> I Like {name}</h2>
      <h4>{rating}/5</h4>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [{name: 'kimchi', id: 1, rating: 4.1}, {name: 'chicken', id: 2, rating: 3.5}, {name: 'fries', id: 3, rating: 5}];

function renderFood(dish){
  return <Food rating = {dish.rating} name = {dish.name} key = {dish.id}/>;
}

function App() {
  return (
    <div className="App">
      {foodILike.map(renderFood)}
    </div>
  );
} */

/* class App extends React.Component {
  constructor(props){
    super(props);
    console.log('hihihi');
  }
  state = {
    count: 0
  };
  add = () =>{
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  componentDidMount(){
    console.log('rendered');
  }
  componentDidUpdate(){
    console.log('updated');
  }
  componentWillUnmount(){
    console.log('unmounted');
  }
  render() {
    console.log('rendering');
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick = {this.add}>Add</button>
        <button onClick = {this.minus}>Minus</button>
      </div>
    );
  }
} */

/* class App extends React.Component {
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
} */

function App(){
  return <HashRouter>
    <Navigation/>
    <Routes>
      
    <Route path="/home" exact={true} element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/movie/:id" element ={<Detail/>}/>
    </Routes>
    
  </HashRouter>
}

export default App;
