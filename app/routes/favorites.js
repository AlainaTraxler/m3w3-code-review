import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    refresh(){
      console.log("top");
      this.refresh();
    }
  }
});
