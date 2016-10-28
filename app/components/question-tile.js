import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    updateQuestion(question, params){
      this.sendAction("updateQuestion", question, params);
    },
    deleteQuestion(question){
      this.sendAction("deleteQuestion", question);
    },
    createAnswer(params){
      this.sendAction("createAnswer", params);
    },
    testFunc(){
      console.log(this.get('question'));
    },
    deleteAnswer(answer){
      this.sendAction("deleteAnswer", answer);
    }
  }
});
