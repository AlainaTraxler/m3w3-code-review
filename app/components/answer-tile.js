import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    createAnswer(params){
      this.sendAction("createAnswer", params);
    }
  }
});
