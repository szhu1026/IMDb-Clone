let React = require('react');
let Link = require('react-router').Link;

let displayTable = React.createClass({
  render: function(){
    let rows = [];
    this.props.data.forEach(function(data, idx){
      rows.push(
        <Link to={`/movies/${data.id}`} key={idx}>
          <li>
            <img onClick={this.reroutetomovie} id={data.id}src={`http://image.tmdb.org/t/p/w92/${data.poster_path}`}/>
            {data.original_title}
          </li>
        </Link>
      );
    }.bind(this));

    return(
      <ul>
        {rows}
      </ul>
    );
  }
});

module.exports = displayTable;
