let React = require('react');
let MovieStore = require('../stores/movie_store');
let MovieActions = require('../actions/movie_actions');
let Link = require('react-router').Link;
let ActorCastingItemComponent = require('./actor_casting_item_component');

let ActorCastingComponent = React.createClass({
  getInitialState: function(){
    return ({movies: []});
  },
  componentDidMount: function(){
    this.movieListener = MovieStore.addListener(this.setMovies);
    MovieActions.getActorMovies(this.props.api_id);
  },
  componentWillUnmount: function(){
    this.movieListener.remove();
  },
  setMovies: function(){
    let movies = MovieStore.all();
    this.setState({movies: movies});
  },

  render: function(){
    return (
      <div>
        <p>credits</p>
        <ul>
          {this.state.movies.map(function(movie, idx){
            return (
              <ActorCastingItemComponent key={idx} movie={movie}/>
            );
          })}
        </ul>
      </div>
    );
  }
});

module.exports = ActorCastingComponent;
