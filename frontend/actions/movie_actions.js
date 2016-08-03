const APIUtil = require('../util/api_util.js');
const APIDispatcher = require('../dispatcher/dispatcher.js');
const MovieConstants = require('../constants/movie_constants.js');

module.exports = {
  getMovie: function(id){
    APIUtil.getMovie(id, this.receiveMovie);
  },
  receiveMovie: function(movie){
    APIDispatcher.dispatch({
      actionType: MovieConstants.MOVIE_RECEIVED,
      movie: movie
    })
  }
}
