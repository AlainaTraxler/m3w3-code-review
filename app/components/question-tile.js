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
    deleteAnswer(answer){
      this.sendAction("deleteAnswer", answer);
    },
    updateAnswer(answer, params){
      this.sendAction("updateAnswer",answer,  params);
    }
  }
});
