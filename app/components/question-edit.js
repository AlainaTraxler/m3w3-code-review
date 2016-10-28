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
      if($("#question").val() === "" || $("#further").val() === ""){
        if(!($("#error").hasClass("visible"))){
          $('#error').transition('scale');
        }
      }else {
      var params = {
          question: $("#question").val(),
          further: $("#further").val()
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
