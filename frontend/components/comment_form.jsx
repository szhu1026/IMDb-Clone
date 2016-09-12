let React = require('react');
let Link = require('react-router').Link;
let CommentActions = require('../actions/comments_actions');
let CommentStore = require('../stores/comments_store');
let SessionStore = require('../stores/session_store');
let SessionActions = require('../actions/session_actions');
let ErrorStore = require('../stores/error_store');

let CommentForm = React.createClass({
  getInitialState: function(){
    return ({title: "", body: ""});
  },
  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },
  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
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
  fieldErrors(field) {
    const errors = ErrorStore.formErrors("login");
    if (!errors["base"]) { return; }
    const messages = errors["base"].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });
    return <ul className="errors">{ messages }</ul>;

  },
  render: function(){


    return (
      <div className="commentform group">
        { this.fieldErrors("login") }
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
