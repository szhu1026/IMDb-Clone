let React = require('react');
let Link = require('react-router').Link;
let CommentActions = require('../actions/comments_actions');
let CommentStore = require('../stores/comments_store');

let CommentForm = React.createClass({
  getInitialState: function(){
    return ({title: "", body: ""});
  },
  handleSubmit: function(e){
    e.preventDefault();
    let comment = Object.assign({}, this.state);
    if (this.props.type === "Actor") {
      CommentActions.createActorComment(comment, this.props.api_id);
    }
    else {
      CommentActions.createMovieComment(comment, this.props.api_id);
    }
    this.setState({title: "", body:""})
  },
  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },
  render: function(){
    return (
      <div className="commentform group">
        <form onSubmit={this.handleSubmit}>
          <label className="comment-field-label">Title</label>
          <input type="text" value={this.state.title} onChange={this.update("title")}
          className="comment-field title"/>

          <label className="comment-field-label">Body</label>
          <input type="text-area" value={this.state.body} onChange={this.update("body")}
          className="comment-field body"/>

          <input type="submit" value="Submit" className="new-comment-button"/>
        </form>
      </div>
    );
  }

});

module.exports = CommentForm;
