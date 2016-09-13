let React = require('react');
let ActorStore = require('../stores/actor_store');
let ActorActions = require('../actions/actor_actions');
let Link = require('react-router').Link;

let ActorIntroComponent = React.createClass({
  render: function(){
    if (this.props.actor.profile_path === null) {
      return (
          <div className="actor-intro-component group">
            <img className="actor-picture" src="https://ia.media-imdb.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB282476566_.png"/>
            <div className="actor-intro-component-text group">
              <p className="actor-name">{this.props.actor.name} </p>
              <p className="actor-biography"> {this.props.actor.biography} </p>
              <p className="actor-dob">{this.props.actor.birthday} </p>
              <p className="actor-placeofbirth">{this.props.actor.place_of_birth} </p>
            </div>
          </div>
        );
    } else {
      return (
        <div className="actor-intro-component group">
          <img className="actor-picture" src={`https://image.tmdb.org/t/p/w154/${this.props.actor.profile_path}`}/>
          <div className="actor-intro-component-text group">
            <p className="actor-name">{this.props.actor.name} </p>
            <p className="actor-biography"> {this.props.actor.biography} </p>
            <p className="actor-dob"> {this.props.actor.birthday} </p>
            <p className="actor-placeofbirth">{this.props.actor.place_of_birth} </p>
          </div>
        </div>
      );
    }
  }
});

module.exports = ActorIntroComponent;
