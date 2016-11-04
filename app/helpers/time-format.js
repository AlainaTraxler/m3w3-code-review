import Ember from 'ember';

export function timeFormat(_input) {
  _input = _input[0].split(" ");
  _input = `${_input[0]} ${_input[1]} ${_input[2]},  ${_input[3]} @  ${_input[4]} ${_input[6]}`;

  return _input;
}

export default Ember.Helper.helper(timeFormat);
