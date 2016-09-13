let React = require('react');
let Link = require('react-router').Link;

let ActorCastingItemComponent = React.createClass({
  render: function(){
    // if (this.props.movie.poster_path === null) {
    //   return (
    //     <div>
    //     <Link to={`/movies/${this.props.movie.api_id}`} key={this.props.movie.api_id}>
    //       <li className="actor-casting-item-component">
    //         <p className="movie-name" onClick={this.showMovie}> {this.props.movie.original_title} </p>
    //         <p className="movie-date"> {this.props.movie.release_date} </p>
    //         <img className="unavailabe" src="http://www.promaxequipment.com/static/image-unavailable.png" onClick={this.showMovie}/>
    //       </li>
    //     </Link>
    //     </div>
    //   )
    // }
    // else {

      let movie = (this.props.movie.release_date === null) ? "": this.props.movie.release_date.slice(0,4)
      return (
        <div>
        <Link to={`/movies/${this.props.movie.api_id}`} key={this.props.movie.api_id}>
          <li className="actor-casting-item-component">
            <p className="movie-name"> {this.props.movie.original_title} </p>
            <p className="movie-date"> {movie} </p>
            <p className="character_name"> {this.props.movie.character_name} </p>
          </li>
        </Link>
        </div>
      );
    // }
  }
});

module.exports = ActorCastingItemComponent;
