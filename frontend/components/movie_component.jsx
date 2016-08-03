let React = require('react');
let MovieStore = require('../stores/movie_store');
let MovieActions = require('../actions/movie_actions');
let Link = require('react-router').Link;
let MovieIntroComponent = require('../components/movie_intro_component')


let Movie = React.createClass({
  getInitialState: function(){
    let movie = MovieStore.find(this.props.params.movieId);
    return ({movie: {}});
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
    this.setState({movie: movie});
  },
  render: function(){
      return (
        <div>
          <MovieIntroComponent movie={this.state.movie}/>
        </div>
      );
  }
});
module.exports = Movie;