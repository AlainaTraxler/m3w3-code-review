import Ember from 'ember';

export default Ember.Service.extend({
  faves: [],

  adjust(answer) {
    var catcher = this.get("faves");

    if(catcher.contains(answer)){
      catcher.splice(catcher.indexOf(answer),1);
    } else{
      catcher.pushObject(answer);
    }
    this.set("faves", catcher);
    console.log(this.get("faves"))
  }
});
