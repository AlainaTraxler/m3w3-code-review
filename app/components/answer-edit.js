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
      console.log(answer);
      var params = {
        answer: this.get('answer.answer'),
        further: this.get('answer.further')
      };

      this.set("inEdit", false);

      this.sendAction("updateAnswer", answer, params);
    },
    deleteAnswer(answer){
      console.log(answer);
      this.sendAction("deleteAnswer", answer);
    }
  }
});
