let React = require('react');
let Search = require('./instant_box_component');


let SearchSelector = React.createClass({
    getInitialState:function(){
      return {selectValue:'Movies'};
  },
    handleChange:function(e){
    this.setState({selectValue:e.target.value});
  },
  render: function() {
    return (
      <div className="Full-Search-Bar group">
        <img className="logo" src={window.logo}/>
        <select className="toggle"
          value={this.state.selectValue}
          onChange={this.handleChange}>
           <option value="Movies">Movies</option>
           <option value="Actors">Actors</option>
        </select>
        {this.state.selectValue === "Movies" ? <Search type="MovieSearch"/> : <Search type="ActorSearch"/>}
        <ul className="options">
          <li> Hot Movies </li>
          <li> In Theatres Now </li>
        </ul>
        <ul className="session">
          <li> Log In </li>
        </ul>
      </div>
    );
  }
});


module.exports = SearchSelector;
