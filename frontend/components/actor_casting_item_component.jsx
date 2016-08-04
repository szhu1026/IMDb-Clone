let React = require('react');
let Link = require('react-router').Link;

let ActorCastingItemComponent = React.createClass({
  render: function(){
    if (this.props.movie.poster_path === null) {
      return (
        <div className="actor-casting-item-component">
          <p className="movie-name"> {this.props.movie.original_title} </p>
          <p className="movie-date"> {this.props.movie.release_date} </p>
          <img className="unavailabe" src="http://www.promaxequipment.com/static/image-unavailable.png"/>
        </div>
      )
    }
    else {
      return (
        <div className="actor-casting-item-component">
          <p className="movie-name"> {this.props.movie.original_title} </p>
          <p className="movie-date"> {this.props.movie.release_date} </p>
          <img src={`http://image.tmdb.org/t/p/w92/${this.props.movie.poster_path}`}/>
        </div>
      )
    }
  }
});

module.exports = ActorCastingItemComponent;
