let React = require('react');
let Link = require('react-router').Link;

let SearchBox = React.createClass({
  doSearch: function(){
    let query = this.refs.searchInput.value;
    this.props.doSearch(query);
  },
  render: function(){
    return (
      <input type="text" ref="searchInput" placeholder="Search..."
      value={this.props.query} onChange={this.doSearch}/>
    );
  }
})

module.exports = SearchBox;
