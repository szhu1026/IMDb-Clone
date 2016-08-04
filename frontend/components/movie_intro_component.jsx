let React = require('react');
let MovieStore = require('../stores/movie_store');
let MovieActions = require('../actions/movie_actions');
let Link = require('react-router').Link;

let MovieIntroComponent = React.createClass({
  render: function(){
    if (this.props.movie.poster_path){
      return (
        <div className="movie-intro-component">
          <p className="movie-title"> Title: {this.props.movie.original_title} </p>
          <p className="movie-rating"> Rating: {this.props.movie.vote_average} </p>
          <p className="movie-biography"> Description: {this.props.movie.overview} </p>
          <img src={`http://image.tmdb.org/t/p/w92/${this.props.movie.poster_path}`}/>
        </div>
      );
    }
    else {
      return (
        <div className="movie-intro-component">
          <p className="movie-title"> Title: {this.props.movie.original_title} </p>
          <p className="movie-rating"> Rating: {this.props.movie.vote_average} </p>
          <p className="movie-biography"> Description: {this.props.movie.overview} </p>

        </div>
      );
    }
  }
});

module.exports = MovieIntroComponent;
