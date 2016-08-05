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

let resetActorResults = function(results){
  _results = {};

  results.forEach(function(actor){
    _results[actor.id] = actor;
  });
}

let empty = function(){
  _results = {};
};

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
    case SearchConstants.ACTOR_SEARCH_RECEIVED:
      resetActorResults(dispatch.actors);
      this.__emitChange();
      break;
    case SearchConstants.CLEAR_STORE:
      empty();
      this.__emitChange();
      break;
  }
};

module.exports = SearchStore;
