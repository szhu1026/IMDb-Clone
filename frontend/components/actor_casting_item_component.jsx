let React = require('react');
let Link = require('react-router').Link;

let ActorCastingItemComponent = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  showMovie: function(){
    this.context.router.push('/movies/' + this.props.movie.api_id);
  },
  render: function(){
    if (this.props.movie.poster_path === null) {
      return (
        <div className="actor-casting-item-component">
          <p className="movie-name" onClick={this.showMovie}> {this.props.movie.original_title} </p>
          <p className="movie-date"> {this.props.movie.release_date} </p>
          <img className="unavailabe" src="http://www.promaxequipment.com/static/image-unavailable.png" onClick={this.showMovie}/>
        </div>
      )
    }
    else {
      return (
        <div className="actor-casting-item-component">
          <p className="movie-name" onClick={this.showMovie}> {this.props.movie.original_title} </p>
          <p className="movie-date"> {this.props.movie.release_date} </p>
          <img src={`http://image.tmdb.org/t/p/w92/${this.props.movie.poster_path}`} onClick={this.showMovie}/>
        </div>
      )
    }
  }
});

module.exports = ActorCastingItemComponent;
