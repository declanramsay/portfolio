import Ember from 'ember';

const {
  Helper,
} = Ember;

export function equals([a, b]) {
  return a === b;
}

export default Helper.helper(equals);
