let React = require('react');
let ActorStore = require('../stores/actor_store');
let ActorActions = require('../actions/actor_actions');
let Link = require('react-router').Link;
let MovieCastingItemComponent = require('./movie_casting_item_component');

let ActorCastingComponent = React.createClass({
  getInitialState: function(){
    return ({actors: [], fetching: true, showData: false});
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
  componentWillReceiveProps: function(nextProps){
    this.setState({fetching: true, showData: false});
    ActorActions.getMovieActors(nextProps.api_id);
  },
  showData: function(){
    this.setState({showData: !this.state.showData});
  },
  render: function(){
    if (this.state.showData === true) {
      if (this.state.fetching === false){
        return (
          <div className="movie-casting-component">
          <p className="head" onClick={this.showData} >Cast &#8595;</p>
          <p className="head-description"> Cast overview, first billed only: </p>
          <ul className="movie-casting-list">
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
          <div className="loader">
          </div>
        );
      }
    }
    else {
      return (
        <div className="movie-casting-component">
        <p className="head" onClick={this.showData}>Cast &#8594;</p>
        </div>
      );
    }
  }
});

module.exports = ActorCastingComponent;
