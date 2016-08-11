const APIUtil = require('../util/api_util.js');
const APIDispatcher = require('../dispatcher/dispatcher.js');
const MovieConstants = require('../constants/movie_constants.js');
const ActorConstants = require('../constants/actor_constants.js');


module.exports = {
  getMovie: function(id){
    APIUtil.getMovie(id, this.receiveMovie);
  },
  receiveMovie: function(movie){
    APIDispatcher.dispatch({
      actionType: MovieConstants.MOVIE_RECEIVED,
      movie: movie
    })
  },
  getActorMovies: function(actorid){
    APIUtil.getActorMovies(actorid, this.receiveActorMovies);
  },
  receiveActorMovies: function(movies){
    APIDispatcher.dispatch({
      actionType: MovieConstants.ACTOR_MOVIES_RECEIVED,
      movies: movies
    })
  },
  getinTheatreMovies: function(offset){
    APIUtil.getInTheatreMovies(offset, this.receiveinTheatreMovies);
  },
  receiveinTheatreMovies: function(movies) {
    APIDispatcher.dispatch({
      actionType: MovieConstants.IN_THEATRE_MOVIES_RECEIVED,
      movies: movies
    })
  },
  getHotMovies: function(offset){
    APIUtil.getHotMovies(offset, this.receiveHotMovies);
  },
  receiveHotMovies: function(movies) {
    APIDispatcher.dispatch({
      actionType: MovieConstants.HOT_MOVIES_RECEIVED,
      movies: movies
    })
  }

}
