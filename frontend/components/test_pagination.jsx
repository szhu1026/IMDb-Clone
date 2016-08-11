let React = require('react');
let MovieStore = require('../stores/movie_store');
let MovieActions = require('../actions/movie_actions');
let Link = require('react-router').Link;
let ReactPaginate = require('react-paginate');
let List = require('./test_in_theatres_list');

let TestPagination = React.createClass({
  getInitialState: function(){
    return ({movies: [], pageNum: 0});
  },
  componentDidMount: function(){
    this.movieListener = MovieStore.addListener(this.setmovie);
    if (this.props.type === "In Theatres Now") {
      MovieActions.getinTheatreMovies(0);
    }
    else {
      MovieActions.getHotMovies(0);
    }
  },
  componentWillUnmount: function(){
    this.movieListener.remove();
  },
  setmovie: function(){

    if (this.props.type === "In Theatres Now") {
      this.setState({movies: MovieStore.all_now_playing(), fetching: false});
    }
    else {
      this.setState({movies: MovieStore.all_hot(), fetching: false});
    }
  },
  handlePageClick: function(data) {
    let selected = data.selected;
    let offset = Math.ceil(selected * 4);

    if (this.props.type === "In Theatres Now") {
      MovieActions.getinTheatreMovies(offset);
    }
    else {
      MovieActions.getHotMovies(offset);
    }
  },
  render: function(){
      return (
          <div className="DisplayMovies">
          <List test={this.state.movies} type={this.props.type}/>
          <ReactPaginate
            className="ReactPaginate"
            breakLabel={<a href="">...</a>}
            breakClassName={"break-me"}
            pageNum={5}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            clickCallback={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            pageClassName={"page"}
            previousLabel={"<"}
            nextLabel={">"}/>
          </div>
      );
  }
});
module.exports = TestPagination;
