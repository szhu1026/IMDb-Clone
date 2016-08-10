let React = require('react');
let ActorStore = require('../stores/actor_store');
let ActorActions = require('../actions/actor_actions');
let Link = require('react-router').Link;
let ActorIntroComponent = require('./actor_intro_component')
let ActorCastingComponent = require('./actor_casting_component')
let Searchbox = require('./drop_down_search_menu_component')

let Actor = React.createClass({
  getInitialState: function(){
    return ({actor: {}, fetching: true});
  },
  componentDidMount: function(){
    this.actorListener = ActorStore.addListener(this.setActor);
    ActorActions.getActor(this.props.params.actorId);
  },
  componentWillUnmount: function(){
    this.actorListener.remove();
  },
  componentWillReceiveProps: function(nextProps){
    ActorActions.getActor(nextProps.params.actorId);
  },
  setActor: function(){
    let actor = ActorStore.find(this.props.params.actorId);
    this.setState({actor: actor, fetching: false});
  },
  render: function(){
    if (this.state.fetching === false) {
      return (
        <div className="ActorComponent">
          <Searchbox/>
          <ActorIntroComponent actor={this.state.actor}/>
          <ActorCastingComponent actor={this.state.actor} api_id={this.props.params.actorId}/>
        </div>
      );
    }
    else {
      return (
        <div className="loader">
        </div>
      );
    }
  }
});
module.exports = Actor
