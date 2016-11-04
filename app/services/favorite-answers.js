import Ember from 'ember';

export default Ember.Service.extend({
  faves: [],

  add(answer) {
    this.get('faves').pushObject(answer);
  }
});
