let React = require('react');
let Link = require('react-router').Link;

let MovieCastingItemComponent = React.createClass({
  render: function(){
    if (this.props.actor.profile_path === null){
      return (
        <div className="movie-casting-item-component">
          <p className="movie-name"> {this.props.actor.name} </p>
          <p className="movie-date"> {this.props.actor.release_date} </p>
          <img className="unavailabe" src="http://www.promaxequipment.com/static/image-unavailable.png"/>
        </div>
      )
    }
    else {
      return (
        <div className="movie-casting-item-component">
          <p className="movie-name"> {this.props.actor.name} </p>
          <p className="movie-date"> {this.props.actor.release_date} </p>
          <img src={`http://image.tmdb.org/t/p/w92/${this.props.actor.profile_path}`}/>
        </div>
      );
    }
  }
});

module.exports = MovieCastingItemComponent;
