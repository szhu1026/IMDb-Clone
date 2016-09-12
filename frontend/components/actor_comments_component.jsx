let React = require('react');
let Link = require('react-router').Link;
let CommentActions = require('../actions/comments_actions');
let CommentStore = require('../stores/comments_store');
let SessionStore = require('../stores/session_store');
let SessionActions = require('../actions/session_actions');
let ActorComment = require('./actor_comment_component');

let ActorComments = React.createClass({
  getInitialState: function(){
    return ({comments: []});
  },

  componentDidMount: function(){
    this.commentsListener = CommentStore.addListener(this.setComments);
    CommentActions.getActorComments(this.props.actor.api_id);
  },
  componentWillUnmount: function(){
    this.commentsListener.remove();
  },
  setComments: function(){
    let comments = CommentStore.all();
    this.setState({comments: comments});
  },
  componentWillReceiveProps: function(nextProps){
    CommentActions.getActorComments(nextProps.api_id);
  },
  render: function(){
    let ctx = this;
    let actor = this.props.actor

    return (
      <div>
        <ul className="commentList group">
        {this.state.comments.map(function(comment, idx){
          return <li key={idx}><ActorComment comment={comment} actor={actor} commentType="Actor" > </ActorComment></li>
        })}
        </ul>
      </div>
    );
  }

});

module.exports = ActorComments;
