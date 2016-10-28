import Ember from 'ember';

export default Ember.Component.extend({
  inEdit: false,
  actions:{
    toggleEdit(){
      if(this.inEdit){
        this.set("inEdit", false);
      }else {
        this.set("inEdit", true);
      }
    },
    updateQuestion(question){
      console.log(question);
      var params = {
        question: this.get('question.question'),
        further: this.get('question.further')
      };

      this.set("inEdit", false);

      this.sendAction("updateQuestion", question, params);
    },
    deleteQuestion(question){
      console.log(question);
      this.sendAction("deleteQuestion", question);
    }
  }
});
