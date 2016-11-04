import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  sortedAnswers: Ember.computed.sort('answers.votes', 'sortBy'),
  actions:{
    createQuestion(params){
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
    },
    updateQuestion(question, params){
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
    },
    deleteQuestion(question){
      question.destroyRecord();
    },
    createAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);

      var question = params.question;
      question.get('answers').addObject(newAnswer);

      newAnswer.save().then(function() {
        return question.save();
      });
    },
    deleteAnswer(answer){
      answer.destroyRecord();
    },
    updateAnswer(answer, params){
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
    }
  }
});
