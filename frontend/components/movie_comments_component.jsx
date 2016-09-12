let React = require('react');
let Link = require('react-router').Link;
let CommentActions = require('../actions/comments_actions');
let CommentStore = require('../stores/comments_store');
let SessionStore = require('../stores/session_store');
let SessionActions = require('../actions/session_actions');

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
  deleteComment: function(id){
    CommentActions.deleteMovieComments(this.props.movie.api_id, id);
  },
  render: function(){
    let ctx = this;
    return (
      <div>
        <ul className="commentList">
        {this.state.comments.map(function(comment, idx){
          return (<li key={idx} className="commentItem">
            <p className = "commentTitle"> {comment.title} </p>
            <p className = "date"> {comment.created_at} </p>
            <p className = "commentUser"> by {comment.username} </p>
            {comment.username === SessionStore.currentUser().username ? <button className="delete-comment-button" onClick={ctx.deleteComment.bind(null, comment.id)}> Delete </button> : ""}
            <p className = "commentBody"> {comment.body} </p>
          </li>);
        })}
        </ul>
      </div>
    );
  }

});

module.exports = MovieComments;
