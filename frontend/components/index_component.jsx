let React = require('react');
let Link = require('react-router').Link;
let SearchMenu = require('./drop_down_search_menu_component');
let ShowMovies = require('./test_pagination');
let HotMovie = require('./hot_movies_component');
let InTheatres = require('./in_theatres_component');


let Index = React.createClass({

  render: function(){
    return (
      <div>
        <SearchMenu/>
        <HotMovie/>
        <InTheatres/>
      </div>
    );
  }

});

module.exports = Index;
