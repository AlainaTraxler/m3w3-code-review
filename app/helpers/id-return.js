import Ember from 'ember';

export function idReturn(_input) {
  return _input[0].id;
}

export default Ember.Helper.helper(idReturn);
