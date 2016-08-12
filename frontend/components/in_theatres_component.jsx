let React = require('react');
let Link = require('react-router').Link;
let ShowMovies = require('./test_pagination');

let InTheatres = React.createClass({
  render: function(){
    return (
      <div>
        <ShowMovies type="In Theatres Now"/>
      </div>
    );
  }

});

module.exports = InTheatres;
