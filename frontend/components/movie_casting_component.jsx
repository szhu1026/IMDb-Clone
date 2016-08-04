let React = require('react');
let ActorStore = require('../stores/actor_store');
let ActorActions = require('../actions/actor_actions');
let Link = require('react-router').Link;
let MovieCastingItemComponent = require('./movie_casting_item_component');

let ActorCastingComponent = React.createClass({
  getInitialState: function(){
    return ({actors: [], fetching: true});
  },
  componentDidMount: function(){
    this.actorListener = ActorStore.addListener(this.setActors);
    ActorActions.getMovieActors(this.props.api_id);
  },
  componentWillUnmount: function(){
    this.actorListener.remove();
  },
  setActors: function(){
    let actors = ActorStore.all();
    this.setState({actors: actors, fetching: false});
  },

  render: function(){
    if (this.state.fetching === false){
      return (
        <div>
        <p>credits</p>
        <ul>
        {this.state.actors.map(function(actor, idx){
          return (
            <MovieCastingItemComponent key={idx} actor={actor}/>
          );
        })}
        </ul>
        </div>
      );
    }
    else {
      return(
        <div>
        <p> loading </p>
        </div>
      );
    }
  }
});

module.exports = ActorCastingComponent;
