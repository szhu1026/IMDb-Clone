let React = require('react');
let Link = require('react-router').Link;
let SearchMenu = require('./drop_down_search_menu_component');
let ShowMovies = require('./test_pagination');

let Index = React.createClass({

  render: function(){
    return (
      <div>
        <h1>{this.props.type}</h1>
        <SearchMenu/>
        <ShowMovies type="In Theatres Now"/>
        <ShowMovies type="Hot Movies"/>
      </div>
    );
  }

});

module.exports = Index;
