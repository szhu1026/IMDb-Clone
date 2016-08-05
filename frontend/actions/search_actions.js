const APIUtil = require('../util/api_util.js');
const APIDispatcher = require('../dispatcher/dispatcher.js');
const SearchConstants = require('../constants/search_constants.js');


module.exports = {
  getMovieSearchResults: function(queryText){
    APIUtil.getMovieSearchResults(queryText, this.receiveMovieSearchResults);
  },
  receiveMovieSearchResults: function(movies){
    APIDispatcher.dispatch({
      actionType: SearchConstants.MOVIE_SEARCH_RECEIVED,
      movies: movies
    })
  }
}
