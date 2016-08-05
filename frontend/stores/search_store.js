const Store = require('flux/utils').Store;
const SearchConstants = require('../constants/search_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const SearchStore = new Store(AppDispatcher);
let _results = {};

let resetMovieResults = function(results){
  _results = {};

  results.forEach(function(movie){
    _results[movie.id] = movie;
  });
}

SearchStore.all = function(){
  return Object.keys(_results).map(function(id) {
    return _results[id];
  })
}

SearchStore.__onDispatch = function(dispatch) {
  switch (dispatch.actionType){
    case SearchConstants.MOVIE_SEARCH_RECEIVED:
      resetMovieResults(dispatch.movies);
      this.__emitChange();
      break;
  }
};

module.exports = SearchStore;
