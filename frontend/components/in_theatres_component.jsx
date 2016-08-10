let React = require('react');
let MovieStore = require('../stores/movie_store');
let MovieActions = require('../actions/movie_actions');
let Link = require('react-router').Link;

let inTheatreMovies = React.createClass({
  getInitialState: function(){
    return ({movies: [], fetching: true});
  },
  componentDidMount: function(){
    this.movieListener = MovieStore.addListener(this.setmovie);
    MovieActions.getinTheatreMovies();
  },
  componentWillUnmount: function(){
    this.movieListener.remove();
  },
  setmovie: function(){
    this.setState({movies: MovieStore.all(), fetching: false});
  },
  render: function(){
    if (this.state.fetching === false) {
      return (
        <div>
          <ul className="inTheatreMovies group">
          <h1>In Theatres Now</h1>
            {this.state.movies.map(function(movie, idx){
              return (
                <Link to={`movies/${movie.id}`}>
                  <li className="Movie" key={idx}>
                    <img className="movie-image" src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`}/>
                    <p> {movie.original_title} </p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      );
    }
    else {
      return (
        <div className="loader">
        </div>
      );
    }
  }
});
module.exports = inTheatreMovies;
