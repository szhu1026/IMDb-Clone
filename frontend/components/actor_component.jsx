let React = require('react');
let ActorStore = require('../stores/actor_store');
let ActorActions = require('../actions/actor_actions');
let Link = require('react-router').Link;
let ActorIntroComponent = require('./actor_intro_component')


let Actor = React.createClass({
  getInitialState: function(){
    let actor = ActorStore.find(this.props.params.actorId);
    return ({actor: {}});
  },
  componentDidMount: function(){
    this.actorListener = ActorStore.addListener(this.setActor);
    ActorActions.getActor(this.props.params.actorId);
  },
  componentWillUnmount: function(){
    this.actorListener.remove();
  },
  setActor: function(){
    let actor = ActorStore.find(this.props.params.actorId);
    this.setState({actor: actor});
  },
  render: function(){
      return (
        <div>
          <ActorIntroComponent actor={this.state.actor}/>
        </div>
      )
  }
});
module.exports = Actor
