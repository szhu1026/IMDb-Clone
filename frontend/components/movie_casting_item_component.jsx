let React = require('react');
let Link = require('react-router').Link;


let MovieCastingItemComponent = React.createClass({
  render: function(){
    // if (this.props.actor.profile_path === null){
    //   return (
    //     <div>
    //       <Link to={`/actors/${this.props.actor.api_id}`} key={this.props.actor.api_id}>
    //         <li className="movie-casting-item-component group">
    //           <img className="movie-casting-picture" onClick={this.showActor} src="https://ia.media-imdb.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB282476566_.png"/>
    //           <p className="movie-name" onClick={this.showActor}> {this.props.actor.name} </p>
    //           <p className="movie-date"> {this.props.actor.release_date} </p>
    //         </li>
    //       </Link>
    //     </div>
    //   );
    // }
    // else {
      let img = (this.props.actor.profile_path === null) ?
      <img className="movie-casting-picture" src="https://ia.media-imdb.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB282476566_.png"/>:
      <img className="movie-casting-picture" src={`https://image.tmdb.org/t/p/w92/${this.props.actor.profile_path}`}/>

      return (
        <div>
          <Link to={`/actors/${this.props.actor.api_id}`} key={this.props.actor.api_id}>
            <li className="movie-casting-item-component group">
              {img}
              <p className="movie-name"> {this.props.actor.name} </p>
              <p className="movie-date"> {this.props.actor.release_date} </p>
              <p className="movie-character-name"> {this.props.actor.character_name} </p>
            </li>
          </Link>
        </div>
      );
    // }
  }
});


module.exports = MovieCastingItemComponent;
