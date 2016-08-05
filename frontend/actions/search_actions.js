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
  },
  getActorSearchResults: function(queryText){
    APIUtil.getActorSearchResults(queryText, this.receiveActorSearchResults);
  },
  receiveActorSearchResults: function(actors){
    APIDispatcher.dispatch({
      actionType: SearchConstants.ACTOR_SEARCH_RECEIVED,
      actors: actors
    })
  },
  clearStore: function(){
    APIDispatcher.dispatch({
      actionType: SearchConstants.CLEAR_STORE
    });
  }
}
