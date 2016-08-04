const Store = require('flux/utils').Store;
const ActorConstants = require('../constants/actor_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');

let _actors = {};

const ActorStore = new Store(AppDispatcher);

let resetActor = function(actor){
  _actors = {};

  _actors[actor.api_id] = actor;
};

let resetMovieActor = function(actors){
  _actors = {};
  actors.forEach(function(actor){
    _actors[actor.api_id] = actor;
  })
};

ActorStore.find = function(id) {
  return _actors[id];
};

ActorStore.all = function() {
  return Object.keys(_actors).map(function(id){
    return _actors[id];
  })
};

ActorStore.__onDispatch = function(dispatch) {
  switch (dispatch.actionType){
    case ActorConstants.ACTOR_RECEIVED:
      resetActor(dispatch.actor);
      this.__emitChange();
      break;
    case ActorConstants.MOVIE_ACTORS_RECEIVED:
      resetMovieActor(dispatch.actors);
      this.__emitChange();
      break;
  }
};

module.exports = ActorStore;
