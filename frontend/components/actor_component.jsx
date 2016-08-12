let React = require('react');
let ActorStore = require('../stores/actor_store');
let ActorActions = require('../actions/actor_actions');
let Link = require('react-router').Link;
let ActorIntroComponent = require('./actor_intro_component')
let ActorCastingComponent = require('./actor_casting_component')
let Searchbox = require('./drop_down_search_menu_component')
let ActorComments = require('./actor_comments_component')
let CommentForm = require('./comment_form')

let Actor = React.createClass({
  getInitialState: function(){
    return ({actor: {}, fetching: true, showComments: false});
  },
  componentDidMount: function(){
    this.actorListener = ActorStore.addListener(this.setActor);
    ActorActions.getActor(this.props.params.actorId);
  },
  componentWillUnmount: function(){
    this.actorListener.remove();
  },
  componentWillReceiveProps: function(nextProps){
    ActorActions.getActor(nextProps.params.actorId);
    this.setState({showComments: false})
  },
  setActor: function(){
    let actor = ActorStore.find(this.props.params.actorId);
    this.setState({actor: actor, fetching: false});
  },
  showComments: function(e){
    e.preventDefault();
    this.setState({showComments: !this.state.showComments})
  },
  render: function(){
    if (this.state.showComments === true) {
      if (this.state.fetching === false) {
        return (
          <div className="ActorComponent">
            <Searchbox/>
            <ActorIntroComponent actor={this.state.actor}/>
            <ActorCastingComponent actor={this.state.actor} api_id={this.props.params.actorId}/>
            <div className="AllComents">
              <h1 className="commentHeader" onClick={this.showComments}> User Comments  &#8595;</h1>
              <CommentForm type="Actor"  api_id={this.props.params.actorId}/>
              <ActorComments actor={this.state.actor}/>
            </div>
          </div>
        );
      }
      else {
        return(
          <div className="loader">
          </div>
        );
      }
    }
    else {
      if (this.state.fetching === false) {
        return (
          <div className="ActorComponent">
            <Searchbox/>
            <ActorIntroComponent actor={this.state.actor}/>
            <ActorCastingComponent actor={this.state.actor} api_id={this.props.params.actorId}/>
            <div className="AllComents">
              <h1 className="commentHeader" onClick={this.showComments}> User Comments &#8594;</h1>
            </div>
          </div>
        );
      }
      else {
        return(
          <div className="loader">
          </div>
        );
      }
    }
  }
});
module.exports = Actor
