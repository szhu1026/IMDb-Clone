var request = require('superagent');

module.exports = {
  getActor: function(id, cb){
    $.ajax({
      url: `api/actors/${id}`,
      success: function(results) {
        cb(results);
      }
    });
  },

  getMovie: function(id, cb){
    $.ajax({
      url: `api/movies/${id}`,
      success: function(results) {
        cb(results);
      }
    });
  },

  getActorMovies: function(id, cb){
    $.ajax({
      url: `api/actors/${id}/movies`,
      success: function(results) {
        cb(results);
      }
    });
  },

  getMovieActors: function(id, cb){
    $.ajax({
      url: `api/movies/${id}/actors`,
      success: function(results) {
        cb(results);
      }
    });
  },

  getMovieSearchResults: function(text, cb){
    $.ajax({
      url: `https://api.themoviedb.org/3/search/movie?api_key=50a303126fa608b8780f3e3caaf4695a&query=${text}`,
      success: function(results) {
        cb(results["results"]);
      }
    });
  },

  getActorSearchResults: function(text, cb){
    $.ajax({
      url: `https://api.themoviedb.org/3/search/person?api_key=50a303126fa608b8780f3e3caaf4695a&query=${text}`,
      success: function(results) {
        cb(results["results"]);
      }
    });
  }
}
