import Helper from '@ember/component/helper';

export function equals([a, b]) {
  return a === b;
}

export default Helper.helper(equals);
