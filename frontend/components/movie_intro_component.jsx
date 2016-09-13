let React = require('react');
let MovieStore = require('../stores/movie_store');
let MovieActions = require('../actions/movie_actions');
let Link = require('react-router').Link;

// https://www.youtube.com/embed/tntOCGkgt98

let MovieIntroComponent = React.createClass({
  render: function(){
      let video = "https://www.youtube.com/watch_popup?v=" + this.props.movie.trailer;
      return (
        <div className="movie-intro-component">
          <div className="movie-intro-partone group">
          <p className="movie-rating"> {this.props.movie.vote_average}/10</p>
            <p className="movie-title"> {this.props.movie.original_title} </p>
            <img className="movie-image" src={`https://image.tmdb.org/t/p/w154/${this.props.movie.poster_path}`}/>
            <iframe className="trailer" width="500" height="225" src={video}></iframe>
          </div>
          <div className="movie-intro-text">
            <p className="movie-biography"> {this.props.movie.overview} </p>
          </div>
        </div>
      );
  }
});

module.exports = MovieIntroComponent;
