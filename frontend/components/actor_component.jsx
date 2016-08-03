let React = require('react');
let ActorStore = require('../stores/actor_store');
let ActorActions = require('../actions/actor_actions');
let Link = require('react-router').Link;
let ActorIntroComponent = require('./actor_intro_component')


let Actor = React.createClass({
  getInitialState: function(){
    let actor = ActorStore.find(this.props.params.actorId);
    return ({actor: {}, casting: {}});
  },
  componentDidMount: function(){
    this.actorListener = ActorStore.addListener(this.setActor);
    this.castingListener = ActorStore.addListener(this.setActorCasting);
    ActorActions.getActor(this.props.params.actorId);
    ActorActions.getActorCasting(this.props.params.actorId);
  },
  componentWillUnmount: function(){
    this.actorListener.remove();
    this.castingListener.remove();
  },
  setActor: function(){
    let actor = ActorStore.find(this.props.params.actorId);
    this.setState({actor: actor});
  },
  setActorCasting: function(){
    let actor_casting = ActorStore.find_casting(this.props.params.actorId);
    this.setState({actor_casting: actor_casting});
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
