import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

const React = require('react'),
      ReactDOM = require('react-dom')

const App = React.createClass({
  render () {
    return (
      <div>
      </div>
    );
  }
});

const routes = (
  <Route path="/" component={App}>
  </Route>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  ReactDOM.render(<Router history={hashHistory} routes={routes}/>, root);
});


// console.log("hello world!");
