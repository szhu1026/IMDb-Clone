import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

const React = require('react'),
      ReactDOM = require('react-dom'),
      Actor = require('./components/actor_component.jsx'),
      Movie = require('./components/movie_component.jsx'),
      ActorCasting = require('./components/actor_casting_component.jsx'),
      InstantBox = require('./components/instant_box_component.jsx')

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
    <Route path ="/search" component={InstantBox}/>
    <Route path="/actors/:actorId" component={Actor}/>
    <Route path="/movies/:movieId" component={Movie}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("content");
  ReactDOM.render(<Router history={hashHistory} routes={routes}/>, root);
});

// window.routes = routes;


// console.log("hello world!");
