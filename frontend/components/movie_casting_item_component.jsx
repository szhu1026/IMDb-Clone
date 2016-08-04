'use strict';
let React = require('react');


let MovieCastingItemComponent = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  showActor: function(){
    this.context.router.push('/actors/' + this.props.actor.api_id);
  },
  render: function(){
    if (this.props.actor.profile_path === null){
      return (
        <div className="movie-casting-item-component">
          <p className="movie-name" onClick={this.showActor}> {this.props.actor.name} </p>
          <p className="movie-date"> {this.props.actor.release_date} </p>
          <img className="unavailabe" onClick={this.showActor} src="http://www.promaxequipment.com/static/image-unavailable.png"/>
        </div>
      )
    }
    else {
      return (
        <div className="movie-casting-item-component">
          <p className="movie-name" onClick={this.showActor}> {this.props.actor.name} </p>
          <p className="movie-date"> {this.props.actor.release_date} </p>
          <img src={`http://image.tmdb.org/t/p/w92/${this.props.actor.profile_path}`} onClick={this.showActor}/>
        </div>
      );
    }
  }
});


module.exports = MovieCastingItemComponent;
