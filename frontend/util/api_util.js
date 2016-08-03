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
  }
}
