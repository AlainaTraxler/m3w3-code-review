import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  question: DS.attr(),
  further: DS.attr(),
  date: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
