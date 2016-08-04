let React = require('react');
let MovieStore = require('../stores/movie_store');
let MovieActions = require('../actions/movie_actions');
let Link = require('react-router').Link;
let MovieIntroComponent = require('../components/movie_intro_component');
let MovieCastingComponent = require('../components/movie_casting_component')


let Movie = React.createClass({
  getInitialState: function(){
    let movie = MovieStore.find(this.props.params.movieId);
    return ({movie: {}, fetching: true});
  },
  componentDidMount: function(){
    this.movieListener = MovieStore.addListener(this.setmovie);
    MovieActions.getMovie(this.props.params.movieId);
  },
  componentWillUnmount: function(){
    this.movieListener.remove();
  },
  setmovie: function(){
    let movie = MovieStore.find(this.props.params.movieId);
    this.setState({movie: movie, fetching: false});
  },
  render: function(){
    if (this.state.fetching === false) {
      return (
        <div>
        <MovieIntroComponent movie={this.state.movie}/>
        <MovieCastingComponent movie={this.state.actor} api_id={this.props.params.movieId}/>
        </div>
      );
    }
    else {
      return (
        <div>
          <p> loading </p>
        </div>
      );
    }
  }
});
module.exports = Movie;
