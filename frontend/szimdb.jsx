import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

const React = require('react'),
      ReactDOM = require('react-dom'),
      Actor = require('./components/actor_component.jsx'),
      Movie = require('./components/movie_component.jsx'),
      ActorCasting = require('./components/actor_casting_component.jsx'),
      Search = require('./components/drop_down_search_menu_component.jsx')


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
    <IndexRoute component={Search}/>
    <Route path ="/search" component={Search}/>
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
