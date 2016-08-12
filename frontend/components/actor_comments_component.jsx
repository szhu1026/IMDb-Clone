let React = require('react');
let Link = require('react-router').Link;
let CommentActions = require('../actions/comments_actions');
let CommentStore = require('../stores/comments_store');

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
    return (
      <div>
        <ul>
        {this.state.comments.map(function(comment, idx){
          return (<li key={idx} className="commentItem">
            <p className = "commentUser"> {comment.username} </p>
            <p className = "commentTitle"> {comment.title} </p>
            <p className = "commentBody"> {comment.body} </p>
          </li>);
        })}
        </ul>
      </div>
    );
  }

});

module.exports = ActorComments;
