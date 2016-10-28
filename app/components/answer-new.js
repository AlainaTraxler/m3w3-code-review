import Ember from 'ember';

export default Ember.Component.extend({
  inCreate: false,
  actions:{
    toggleCreate(){
      if(this.inCreate){
        this.set("inCreate", false);
      } else {
        this.set("inCreate", true);
      }
    },
    createAnswer(question){
      console.log(this.get('question'))
      var params = {
        user: this.get('user'),
        answer: this.get('answer'),
        date: "1/2/3456",
        question: this.get('question')
      };
      console.log(params.question.user)
      this.set("inCreate", false);
      this.sendAction("createAnswer", params);
    }
  }
});
