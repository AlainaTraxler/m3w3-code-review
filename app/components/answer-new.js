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
    
      this.set("#user", "");
      this.set("#user", "");
    },
    createAnswer(question){
      if($("#answer").val() === "" || $("#user").val() === ""){
        if(!($("#error").hasClass("visible"))){
          $('#error').transition('scale');
        }
      }else {
        var params = {
          user: $("#user").val(),
          answer: $("#answer").val(),
          date: "1/2/3456",
          question: this.get('question')
        };
        this.set("inCreate", false);
        this.sendAction("createAnswer", params);
      }
    },
    toggleError(){
      $('#error').transition('scale');
    }
  }
});
