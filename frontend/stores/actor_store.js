const Store = require('flux/utils').Store;
const ActorConstants = require('../constants/actor_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');

let _actor = {};

const ActorStore = new Store(AppDispatcher);

let resetActor = function(actor){
  _actor = {};

  _actor[actor.api_id] = actor;
};

ActorStore.find = function(id) {
  return _actor[id];
};

ActorStore.__onDispatch = function(dispatch) {
  switch (dispatch.actionType){
    case ActorConstants.ACTOR_RECEIVED:
      resetActor(dispatch.actor);
      this.__emitChange();
      break;
  }
};

module.exports = ActorStore;
