const Store = require('flux/utils').Store;
const MovieConstants = require('../constants/movie_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');

let _movie = {};

const MovieStore = new Store(AppDispatcher);

let resetMovie = function(movie){
  _movie = {};

  _movie[movie.api_id] = movie;
};

MovieStore.find = function(id) {
  return _movie[id];
};


MovieStore.__onDispatch = function(dispatch) {
  switch (dispatch.actionType){
    case MovieConstants.MOVIE_RECEIVED:
      resetMovie(dispatch.movie);
      this.__emitChange();
      break;
  }
};

module.exports = MovieStore;
