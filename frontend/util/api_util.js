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
        let shortened_results = [];
        $.each(results["results"], function(index) {
              if (index === 6){return false}
              shortened_results.push(results["results"][index]);
        });

        cb(shortened_results);
      }
    });
  },

  getActorSearchResults: function(text, cb){
    $.ajax({
      url: `https://api.themoviedb.org/3/search/person?api_key=50a303126fa608b8780f3e3caaf4695a&query=${text}`,
      success: function(results) {
        let shortened_results = [];
        $.each(results["results"], function(index) {
              if (index === 6){return false}
              shortened_results.push(results["results"][index]);
        });

        cb(shortened_results);
      }
    });
  },

  getInTheatreMovies: function(offset, cb){
    $.ajax({
      url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=50a303126fa608b8780f3e3caaf4695a&query',
      success: function(results) {
        cb(results["results"].slice(offset, offset + 4));
      }
    });
  },

  getHotMovies: function(offset, cb){
    $.ajax({
      url: 'https://api.themoviedb.org/3/movie/popular?api_key=50a303126fa608b8780f3e3caaf4695a&query',
      success: function(results) {
        cb(results["results"].slice(offset, offset + 4));
      }
    });
  },

  getMovieComments: function(id, cb){
    $.ajax({
      url: `api/movies/${id}/movies_comments`,
      success: function(results) {
        cb(results);
      }
    });
  },

  getActorComments: function(id, cb){
    $.ajax({
      url: `api/actors/${id}/actors_comments`,
      success: function(results) {
        cb(results);
      }
    });
  },

  createActorComment: function(comment, id, cb, error) {
    $.ajax({
      url: `api/actors/${id}/actors_comments`,
      method: "POST",
      data: {comment: comment},
      success: function(results) {
        cb(results);
      },
      error(xhr) {
        const errors = xhr.responseJSON;
        error("login", errors);
      }
    })
  },

  createMovieComment: function(comment, id, cb, error) {
    $.ajax({
      url: `api/movies/${id}/movies_comments`,
      method: "POST",
      data: {comment: comment},
      success: function(results) {
        cb(results);
      },
      error(xhr) {
        const errors = xhr.responseJSON;
        error("login", errors);
      }
    })
  },

  deleteActorComment: function(actorId, id, cb) {
    $.ajax({
      url: `api/actors/${actorId}/actors_comments/${id}`,
      method: "DELETE",
      success: function(results) {
        cb(results);
      }
    })
  },
  deleteMovieComment: function(movieId, id, cb) {
    $.ajax({
      url: `api/movies/${movieId}/movies_comments/${id}`,
      method: "DELETE",
      success: function(results) {
        cb(results);
      }
    })
  },
  editActorComment: function(actorId, id, comment, cb) {
    $.ajax({
      url: `api/actors/${actorId}/actors_comments/${id}`,
      method: "PATCH",
      data: {comment: comment},
      success: function(results) {
        cb(results);
      }
    })
  }
}
