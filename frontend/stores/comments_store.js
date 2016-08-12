const Store = require('flux/utils').Store;
const CommentConstants = require('../constants/comment_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');

let _comments = {};
const CommentStore = new Store(AppDispatcher);

let resetMovieComments = function(comments){
  _comments = {};
  comments.forEach(function(comment){
    _comments[comment.id] = comment;
  })
};

let resetActorComments = function(comments){
  _comments = {};
  comments.forEach(function(comment){
    _comments[comment.id] = comment;
  })
};

let resetSingleComment = function(comment){
  _comments[comment.id] = comment;
}

CommentStore.all = function() {
  return Object.keys(_comments).map(function(id){
    return _comments[id];
  }).sort(function(a,b){return b.id - a.id});
};

CommentStore.__onDispatch = function(dispatch) {
  switch (dispatch.actionType){
    case CommentConstants.MOVIE_COMMENTS_RECEIVED:
      resetMovieComments(dispatch.comments);
      this.__emitChange();
      break;
    case CommentConstants.ACTOR_COMMENTS_RECEIVED:
      resetActorComments(dispatch.comments);
      this.__emitChange();
      break;
    case CommentConstants.ACTOR_COMMENT_RECEIVED:
      resetActorComments(dispatch.comments);
      this.__emitChange();
      break;
    case CommentConstants.MOVIE_COMMENT_RECEIVED:
      resetMovieComments(dispatch.comments);
      this.__emitChange();
      break;
  }
};

module.exports = CommentStore;
