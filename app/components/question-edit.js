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
      if(this.get('question.question') === "" || this.get('question.further') === ""){
        $('#error').transition('scale');
      }else {
      var params = {
          question: this.get('question.question'),
          further: this.get('question.further')
        };

        this.set("inEdit", false);

        this.sendAction("updateQuestion", question, params);
      }
    },
    deleteQuestion(question){
      this.sendAction("deleteQuestion", question);
    },
    toggleError(){
      $('#error').transition('scale');
    }
  }
});
