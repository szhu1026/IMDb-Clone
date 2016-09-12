let React = require('react');
let Link = require('react-router').Link;
let CommentActions = require('../actions/comments_actions');
let CommentStore = require('../stores/comments_store');
let SessionStore = require('../stores/session_store');
let SessionActions = require('../actions/session_actions');
let MovieComment = require('./movie_comment_component');

let MovieComments = React.createClass({
  getInitialState: function(){
    return ({comments: []});
  },

  componentDidMount: function(){
    this.commentsListener = CommentStore.addListener(this.setComments);
    CommentActions.getMovieComments(this.props.movie.api_id);
  },
  componentWillUnmount: function(){
    this.commentsListener.remove();
  },
  setComments: function(){
    let comments = CommentStore.all();
    this.setState({comments: comments});
  },
  componentWillReceiveProps: function(nextProps){
    CommentActions.getMovieComments(nextProps.api_id);
  },
  render: function(){
    let ctx = this;
    let movie = this.props.movie

    return (
      <div>
        <ul className="commentList group">
        {this.state.comments.map(function(comment, idx){
          return <li><MovieComment comment={comment} movie={movie} commentType="Movie" > </MovieComment></li>
        })}
        </ul>
      </div>
    );
  }

});

module.exports = MovieComments;
