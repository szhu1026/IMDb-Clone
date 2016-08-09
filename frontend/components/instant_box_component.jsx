let React = require('react');
let Link = require('react-router').Link;
let SearchBox = require('./search_box_component');
let DisplayTable = require('./display_table_component');
let SearchStore = require('../stores/search_store.js');
let SearchActions = require('../actions/search_actions.js');

let InstantBoxActors = React.createClass({
  getInitialState: function(){
    return({
      query: "",
      filteredData: []
    })
  },
  componentDidMount: function(){
    this.searchListener = SearchStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.searchListener.remove();
  },
  doSearch: function(queryText){
    this.setState({
      query: queryText
    });

    if (queryText.length > 0 && this.props.type === "ActorSearch") {
      SearchActions.getActorSearchResults(queryText);
    }
    else if (queryText.length > 0 && this.props.type === "MovieSearch") {
      SearchActions.getMovieSearchResults(queryText);
    }
    else {
      SearchActions.clearStore();
    }
  },
  _onChange: function(){
    this.setState({
      // query: queryText,
      filteredData: SearchStore.all()
    });
  },
  clearText: function(){
    this.setState({query: "", filteredData: []});
  },
  render: function(){

    return (
      <div className="InstantBox">
        <SearchBox query={this.state.query} doSearch={this.doSearch} value={this.state.query}/>
        <DisplayTable data={this.state.filteredData} clearText={this.clearText}/>
      </div>
    );
  }

});

module.exports = InstantBoxActors;
