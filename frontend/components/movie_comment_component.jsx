let React = require('react');
let Link = require('react-router').Link;
let CommentActions = require('../actions/comments_actions');
let CommentStore = require('../stores/comments_store');
let SessionStore = require('../stores/session_store');
let SessionActions = require('../actions/session_actions');

let MovieComment = React.createClass({
  getInitialState: function(){
    return ({edit: false, title:this.props.comment.title, body:this.props.comment.body});
  },
  deleteMovieComment: function(id){
    CommentActions.deleteMovieComments(this.props.movie.api_id, id);
  },
  editMovieComment: function(id){
    this.setState({edit: !this.state.edit});
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.setState({edit: !this.state.edit});
    let comment = Object.assign({}, {title: this.state.title, body:this.state.body});

    CommentActions.editMovieComment(this.props.movie.api_id, this.props.comment.id, comment);
  },
  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },
  render: function(){
    let ctx = this;

    if (this.props.commentType === "Movie" && this.state.edit === false){
      return (
          <div className="commentItem">
              <p className = "commentTitle"> {this.props.comment.title} </p>
              <p className = "date"> {this.props.comment.created_at} </p>
              <p className = "commentUser">by {this.props.comment.username} </p>
              {this.props.comment.username === SessionStore.currentUser().username ? <button className="delete-comment-button"
              onClick={ctx.deleteMovieComment.bind(null, this.props.comment.id)}> Delete </button> : ""}
              {this.props.comment.username === SessionStore.currentUser().username ? <button className="edit-comment-button"
              onClick={ctx.editMovieComment.bind(null, this.props.comment.id)}> Edit </button> : ""}
              <p className = "commentBody"> {this.props.comment.body} </p>
            </div>
        );
    }
    else if (this.props.commentType === "Movie" && this.state.edit === true){
      return (
          <div className="commentItem">

              <form onSubmit={this.handleSubmit}>
                <label className="comment-field-label">Title</label>
                <input type="text" value={this.state.title} onChange={this.update("title")}
                className="comment-field title"/>

                <label className="comment-field-label">Body</label>
                <input type="text-area" value={this.state.body} onChange={this.update("body")}
                className="comment-field body"/>

                <button onClick={this.editMovieComment} className="new-comment-button"> Cancel </button>
                <input type="submit" value="Update" className="new-comment-button"/>
              </form>
            </div>
        );
    }
  }
});

module.exports = MovieComment;
