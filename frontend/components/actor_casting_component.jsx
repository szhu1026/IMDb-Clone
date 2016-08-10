let React = require('react');
let MovieStore = require('../stores/movie_store');
let MovieActions = require('../actions/movie_actions');
let Link = require('react-router').Link;
let ActorCastingItemComponent = require('./actor_casting_item_component');

let ActorCastingComponent = React.createClass({
  getInitialState: function(){
    return ({movies: [], fetching: true});
  },
  componentDidMount: function(){
    this.movieListener = MovieStore.addListener(this.setMovies);
    MovieActions.getActorMovies(this.props.api_id);
  },
  componentWillUnmount: function(){
    this.movieListener.remove();
  },
  componentWillReceiveProps: function(nextProps){
    this.setState({fetching: true});
    MovieActions.getActorMovies(nextProps.api_id);
  },
  setMovies: function(){
    let movies = MovieStore.all().sort(function(a,b){
        if (a.release_date === null) {
          return 1;
        }
        else if (b.release_date === null) {
          return -1;
        }
        else if (parseInt(a.release_date.slice(0,4)) < parseInt(b.release_date.slice(0,4))) {
          return 1;
        }
        else if (parseInt(a.release_date.slice(0,4)) > parseInt(b.release_date.slice(0,4))) {
          return -1;
        }
        else {
          return 0;
        }
    });

    this.setState({movies: movies, fetching: false});
  },

  render: function(){
    if (this.state.fetching === false) {
      return (
        <div className="Actor-Casting">
        <p className="Title">Filmography</p>
        <p className="Headers">Actor</p>
        <ul className="Actor-Casting-List group">
        {this.state.movies.map(function(movie, idx){
          return (
            <ActorCastingItemComponent key={idx} movie={movie}/>
          );
        })}
        </ul>
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

module.exports = ActorCastingComponent;
