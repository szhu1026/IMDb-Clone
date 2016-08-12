let React = require('react');
let Link = require('react-router').Link;

let displayTable = React.createClass({
  render: function(){
    let rows = [];
    this.props.data.forEach(function(data, idx){
      if (data.original_title){
        let img = (data.poster_path === null) ?
        <img className="movie-casting-picture" src="http://www.promaxequipment.com/static/image-unavailable.png"/> :
        <img className="movie-casting-picture" src={`http://image.tmdb.org/t/p/w92/${data.poster_path}`}/>

        rows.push(
          <Link to={`/movies/${data.id}`} key={idx}>
            <li onClick={this.props.clearText}>
              {img}
              <p> {data.original_title} </p>
            </li>
          </Link>
        );
      }
      else {

        let img = (data.profile_path === null) ?
        <img className="movie-casting-picture"src="http://ia.media-imdb.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB282476566_.png"/>:
        <img className="movie-casting-picture" src={`http://image.tmdb.org/t/p/w92/${data.profile_path}`}/>

        rows.push(
          <Link to={`/actors/${data.id}`} key={idx}>
            <li onClick={this.props.clearText}>
              {img}
              <p> {data.name} </p>
            </li>
          </Link>
        );
      }
    }.bind(this));

    return(
      <ul className="searchList">
        {rows}
      </ul>
    );

  }
});

module.exports = displayTable;
