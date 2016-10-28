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
    updateAnswer(answer){
      if($("#answer").val() === ""){
        $('#error').transition('scale');
      }else {
        var params = {
          answer: $("#answer").val()
        };

        this.set("inEdit", false);

        this.sendAction("updateAnswer", answer, params);
      }
    },
    deleteAnswer(answer){
      this.sendAction("deleteAnswer", answer);
    },
    toggleError(){
      $('#error').transition('scale');
    }
  }
});
