let React = require('react');
let ActorSearch = require('./instant_box_actors_component');
let MovieSearch = require('./instant_box_movies_component');

let SearchSelector = React.createClass({
    getInitialState:function(){
      return {selectValue:'Movies'};
  },
    handleChange:function(e){
    this.setState({selectValue:e.target.value});
  },
  render: function() {
    return (
      <div>
        <select
          value={this.state.selectValue}
          onChange={this.handleChange}>
           <option value="Movies">Movies</option>
           <option value="Actors">Actors</option>
        </select>
        {this.state.selectValue === "Movies" ? <MovieSearch/> : <ActorSearch/>}
      </div>
    );
  }
});


module.exports = SearchSelector;
