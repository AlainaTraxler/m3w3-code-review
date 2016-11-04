import Ember from 'ember';

export default Ember.Component.extend({
  favoriteAnswers: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  actions:{
    toggleFaves(answer){
      this.get('favoriteAnswers').adjust(answer);
      // console.log(this.get('favoriteAnswers').faves);
      // this.set("favoriteAnswers", null);
      // this.set("favoriteAnswers", Ember.inject.service());
      this.sendAction("refresh");
    }
  }
});
//
