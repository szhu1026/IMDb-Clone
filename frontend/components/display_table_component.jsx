let React = require('react');
let Link = require('react-router').Link;

let displayTable = React.createClass({
  render: function(){
    let rows = [];
    this.props.data.forEach(function(data, idx){
      if (data.poster_path){
        rows.push(
          <Link to={`/movies/${data.id}`} key={idx}>
            <li onClick={this.props.clearText}>
              <img id={data.id}src={`http://image.tmdb.org/t/p/w92/${data.poster_path}`}/>
              <p> {data.original_title} </p>
            </li>
          </Link>
        );
      }
      else {
        rows.push(
          <Link to={`/actors/${data.id}`} key={idx}>
            <li onClick={this.props.clearText}>
              <img id={data.id}src={`http://image.tmdb.org/t/p/w92/${data.profile_path}`}/>
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
