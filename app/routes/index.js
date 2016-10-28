import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll("question");
  },
  actions:{
    createQuestion(params){
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
    },
    updateQuestion(question, params){
      console.log(">>");
      console.log(params);
      Object.keys(params).forEach(function(key) {
        console.log(key);
        console.log(params[key]);
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
    },
    deleteQuestion(question){
      question.destroyRecord();
    }
  }
});
