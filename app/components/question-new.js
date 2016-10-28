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

      this.set('user')
      this.set('question')
      this.set('further')

    },
    createQuestion(){
      if(this.get('user') === undefined || this.get('question') === undefined || this.get('further') === undefined){
        $('#error').transition('scale');
      }else {
        var date = new Date();
        date = date.toString();

        var params = {
          user: this.get('user'),
          question: this.get('question'),
          further: this.get('further'),
          date: date
        };

        this.set("inCreate", false);
        this.sendAction("createQuestion", params);
      }
    },
    toggleError(){
      $('#error').transition('scale');
    }
  }
});
