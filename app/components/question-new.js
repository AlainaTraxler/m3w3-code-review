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
    createQuestion(){
      var params = {
        user: this.get('user'),
        question: this.get('question'),
        further: this.get('further'),
        date: "1/2/3456"
      };
      this.sendAction("createQuestion", params);
    }
  }
});
