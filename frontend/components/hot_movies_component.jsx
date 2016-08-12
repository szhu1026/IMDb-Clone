let React = require('react');
let Link = require('react-router').Link;
let ShowMovies = require('./test_pagination');

let HotMovie = React.createClass({

  render: function(){
    return (
      <div>
        <ShowMovies type="Hot Movies"/>
      </div>
    );
  }

});

module.exports = HotMovie;
