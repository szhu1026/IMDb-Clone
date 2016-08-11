let React = require('react');
let Link = require('react-router').Link;
let ReactPaginate = require('react-paginate');

let TestinTheatreMovies = React.createClass({
  render: function(){
      return (
          <div>
          <ul className="inTheatreMovies group">
          <h1> {this.props.type}</h1>
          {this.props.test.map(function(movie, idx){
            return (
              <Link key={idx}to={`movies/${movie.id}`}>
              <li className="Movie" key={idx}>
              <img className="movie-image" src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`}/>
              </li>
              </Link>
            );
          })}
          </ul>
          </div>
      );
  }
});

module.exports = TestinTheatreMovies;
