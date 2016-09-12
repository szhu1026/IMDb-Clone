const APIUtil = require('../util/api_util.js');
const APIDispatcher = require('../dispatcher/dispatcher.js');
const CommentConstants = require('../constants/comment_constants.js');
const ErrorActions = require('../actions/error_actions.js')

module.exports = {
  getMovieComments: function(id){
    APIUtil.getMovieComments(id, this.receiveMovieComments);
  },
  receiveMovieComments: function(comments){
    APIDispatcher.dispatch({
      actionType: CommentConstants.MOVIE_COMMENTS_RECEIVED,
      comments: comments
    })
  },
  getActorComments: function(id){
    APIUtil.getActorComments(id, this.receiveActorComments);
  },
  receiveActorComments: function(comments){
    APIDispatcher.dispatch({
      actionType: CommentConstants.ACTOR_COMMENTS_RECEIVED,
      comments: comments
    })
  },

  createActorComment: function(comment, id){
    APIUtil.createActorComment(comment, id, this.receiveActorComment, ErrorActions.setErrors);
  },
  receiveActorComment: function(comments){
    APIDispatcher.dispatch({
      actionType: CommentConstants.ACTOR_COMMENT_RECEIVED,
      comments: comments
    });
  },

  createMovieComment: function(comment, id){
    APIUtil.createMovieComment(comment, id, this.receiveMovieComment, ErrorActions.setErrors);
  },
  receiveMovieComment: function(comments){
    APIDispatcher.dispatch({
      actionType: CommentConstants.MOVIE_COMMENT_RECEIVED,
      comments: comments
    });
  }
};
