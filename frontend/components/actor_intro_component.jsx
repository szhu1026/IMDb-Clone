let React = require('react');
let ActorStore = require('../stores/actor_store');
let ActorActions = require('../actions/actor_actions');
let Link = require('react-router').Link;

let ActorIntroComponent = React.createClass({
  render: function(){
    if (this.props.actor.profile_path === "null") {
      return (
          <div className="actor-intro-component">
            <p className="actor-name"> Name: {this.props.actor.name} </p>
            <p className="actor-dob"> DOB: {this.props.actor.birthday} </p>
            <p className="actor-biography"> Description: {this.props.actor.biography} </p>
            <p className="actor-placeofbirth"> Place of Birth: {this.props.actor.place_of_birth} </p>
            <img className="unavailabe" src="http://www.promaxequipment.com/static/image-unavailable.png"/>
          </div>
        );
    } else {
      return (
        <div className="actor-intro-component">
          <p className="actor-name"> Name: {this.props.actor.name} </p>
          <p className="actor-dob"> DOB: {this.props.actor.birthday} </p>
          <p className="actor-biography"> Description: {this.props.actor.biography} </p>
          <p className="actor-placeofbirth"> Place of Birth: {this.props.actor.place_of_birth} </p>
          <img src={`http://image.tmdb.org/t/p/w92/${this.props.actor.profile_path}`}/>
        </div>
      );
    }
  }
});

module.exports = ActorIntroComponent;
