const Store = require('flux/utils').Store;
const MovieConstants = require('../constants/movie_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');

let _movies = {};

const MovieStore = new Store(AppDispatcher);

let resetMovie = function(movie){
  _movies = {};

  _movies[movie.api_id] = movie;
};

let resetActorMovie = function(movies){
  _movies = {};
  movies.forEach(function(movie){
    _movies[movie.api_id] = movie;
  })
};


MovieStore.find = function(id) {
  return _movies[id];
};

MovieStore.all = function() {
  return Object.keys(_movies).map(function(id){
    return _movies[id];
  })
};


MovieStore.__onDispatch = function(dispatch) {
  switch (dispatch.actionType){
    case MovieConstants.MOVIE_RECEIVED:
      resetMovie(dispatch.movie);
      this.__emitChange();
      break;
    case MovieConstants.ACTOR_MOVIES_RECEIVED:
      resetActorMovie(dispatch.movies);
      this.__emitChange();
      break;
  }
};

module.exports = MovieStore;
