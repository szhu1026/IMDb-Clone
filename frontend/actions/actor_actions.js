const APIUtil = require('../util/api_util.js');
const APIDispatcher = require('../dispatcher/dispatcher.js');
const ActorConstants = require('../constants/actor_constants.js');

module.exports = {
  getActor: function(id){
    APIUtil.getActor(id, this.receiveActor);
  },
  receiveActor: function(actor){
    APIDispatcher.dispatch({
      actionType: ActorConstants.ACTOR_RECEIVED,
      actor: actor
    })
  }
}
