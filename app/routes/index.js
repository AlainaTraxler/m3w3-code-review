import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll("question");
  },
  actions:{
    createQuestion(params){
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
    }
  }
});
