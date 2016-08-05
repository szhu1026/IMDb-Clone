let React = require('react');
let Link = require('react-router').Link;


let MovieCastingItemComponent = React.createClass({
  render: function(){
    if (this.props.actor.profile_path === null){
      return (
        <div>
          <Link to={`/actors/${this.props.actor.api_id}`} key={this.props.actor.api_id}>
            <li className="movie-casting-item-component">
              <p className="movie-name" onClick={this.showActor}> {this.props.actor.name} </p>
              <p className="movie-date"> {this.props.actor.release_date} </p>
              <img className="unavailabe" onClick={this.showActor} src="http://www.promaxequipment.com/static/image-unavailable.png"/>
            </li>
          </Link>
        </div>
      );
    }
    else {
      return (
        <div>
          <Link to={`/actors/${this.props.actor.api_id}`} key={this.props.actor.api_id}>
            <li className="movie-casting-item-component">
              <p className="movie-name" onClick={this.showActor}> {this.props.actor.name} </p>
              <p className="movie-date"> {this.props.actor.release_date} </p>
              <img src={`http://image.tmdb.org/t/p/w92/${this.props.actor.profile_path}`} onClick={this.showActor}/>
            </li>
          </Link>
        </div>
      );
    }
  }
});


module.exports = MovieCastingItemComponent;
