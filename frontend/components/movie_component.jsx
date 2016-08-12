let React = require('react');
let MovieStore = require('../stores/movie_store');
let MovieActions = require('../actions/movie_actions');
let Link = require('react-router').Link;
let MovieIntroComponent = require('../components/movie_intro_component');
let MovieCastingComponent = require('../components/movie_casting_component');
let Searchbox = require('./drop_down_search_menu_component');
let MovieComments = require('../components/movie_comments_component');
let CommentForm = require('./comment_form')

let Movie = React.createClass({
  getInitialState: function(){
    let movie = MovieStore.find(this.props.params.movieId);
    return ({movie: {}, fetching: true, showComments: false});
  },
  componentDidMount: function(){
    this.movieListener = MovieStore.addListener(this.setmovie);
    MovieActions.getMovie(this.props.params.movieId);
  },
  componentWillUnmount: function(){
    this.movieListener.remove();
  },
  componentWillReceiveProps: function(nextProps){
    MovieActions.getMovie(nextProps.params.movieId);
    this.setState({showComments: false})
  },
  setmovie: function(){
    let movie = MovieStore.find(this.props.params.movieId);
    this.setState({movie: movie, fetching: false});
  },
  showComments: function(e){
    e.preventDefault();
    this.setState({showComments: !this.state.showComments});
  },
  render: function(){
    if (this.state.showComments === true) {
      if (this.state.fetching === false) {
        return (
          <div className="MovieComponent group">
            <Searchbox/>
            <MovieIntroComponent movie={this.state.movie}/>
            <MovieCastingComponent movie={this.state.movie} api_id={this.props.params.movieId}/>
            <div className="AllCommentsMovie">
              <h1 className="commentHeader" onClick={this.showComments}> User Comments &#8595;</h1>
              <CommentForm type="Movie"  api_id={this.props.params.movieId}/>
              <MovieComments movie={this.state.movie} api_id={this.props.params.movieId}/>
            </div>
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
    else {
      if (this.state.fetching === false) {
        return (
          <div className="MovieComponent group">
            <Searchbox/>
            <MovieIntroComponent movie={this.state.movie}/>
            <MovieCastingComponent movie={this.state.movie} api_id={this.props.params.movieId}/>
            <div className="AllCommentsMovie">
              <h1 className="commentHeader" onClick={this.showComments}> User Comments &#8594;</h1>
            </div>
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
  }});
module.exports = Movie;
