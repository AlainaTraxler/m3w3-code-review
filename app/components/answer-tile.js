import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    createAnswer(params){
      this.sendAction("createAnswer", params);
    },
    deleteAnswer(answer){
      this.sendAction("deleteAnswer", answer);
    },
    updateAnswer(answer, params){
      this.sendAction("updateAnswer", answer, params);
    }
  }
});
