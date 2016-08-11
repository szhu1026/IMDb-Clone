import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

const React = require('react'),
      ReactDOM = require('react-dom'),
      Actor = require('./components/actor_component.jsx'),
      Movie = require('./components/movie_component.jsx'),
      ActorCasting = require('./components/actor_casting_component.jsx'),
      Index = require('./components/index_component.jsx'),
      LogInForm = require('./components/login_form_component.jsx'),
      SessionStore = require('./stores/session_store'),
      SessionActions = require('./actions/session_actions'),
      displaymovies = require('./components/test_pagination')


const App = React.createClass({
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index}>
      <Route path="nowplaying" component={displaymovies}/>
      <Route path="hotmovies" component={displaymovies}/>
    </IndexRoute>
    <Route path="/login" component={LogInForm}/>
    <Route path="/signup" component={LogInForm}/>
    <Route path="/actors/:actorId" component={Actor}/>
    <Route path="/movies/:movieId" component={Movie}/>
  </Route>
);


function _ensureLoggedIn(nextState, replace) {
  // We don't want users to be able to visit our 'new' or 'review' routes
  // if they haven't already signed in/up. Let's redirect them!
  // `replace` is like a redirect. It replaces the current entry
  // into the history (and the hashFragment), so the Router is forced
  // to re-route.
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  let root = document.getElementById("content");
  ReactDOM.render(<Router history={hashHistory} routes={routes}/>, root);
});
