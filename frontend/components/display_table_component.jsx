let React = require('react');
let Link = require('react-router').Link;

let displayTable = React.createClass({
  render: function(){
    let rows = [];
    this.props.data.forEach(function(data, idx){
      if (data.poster_path){
        rows.push(
          <Link to={`/movies/${data.id}`} key={idx}>
            <li>
              <img id={data.id}src={`http://image.tmdb.org/t/p/w92/${data.poster_path}`}/>
              {data.original_title}
            </li>
          </Link>
        );
      }
      else {
        rows.push(
          <Link to={`/actors/${data.id}`} key={idx}>
            <li>
              <img id={data.id}src={`http://image.tmdb.org/t/p/w92/${data.profile_path}`}/>
              {data.name}
            </li>
          </Link>
        );
      }
    }.bind(this));

    return(
      <ul>
        {rows}
      </ul>
    );
  }
});

module.exports = displayTable;
