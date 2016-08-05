let React = require('react');
let Link = require('react-router').Link;
let SearchBox = require('./search_box_component');
let DisplayTable = require('./display_table_component');
let SearchStore = require('../stores/search_store.js');
let SearchActions = require('../actions/search_actions.js');

let InstantBox = React.createClass({
  getInitialState: function(){
    return({
      query: "",
      filteredData: []
    })
  },
  doSearch: function(queryText){
    //UPDATE!!!

    var data = [
      {original_title: "a"},
      {original_title: "b"}
    ]

    SearchStore.addListener(this._onChange);
    SearchActions.getMovieSearchResults(queryText);
    // let queryResult=[];

    // data.forEach(function(movie){
    //   if (movie.original_title===queryText){
    //     queryResult.push(movie);
    //   }
    // })

    this.setState({
      query: queryText
      // filteredData: queryResult
    });
  },
  _onChange: function(){
    this.setState({
      // query: queryText,
      filteredData: SearchStore.all()
    });
  },
  render: function(){
    return (
      <div className = "InstantBox">
        <h1> Search </h1>
        <SearchBox query={this.state.query} doSearch={this.doSearch}/>
        <DisplayTable data={this.state.filteredData}/>
      </div>
    );
  }

});

module.exports = InstantBox;
