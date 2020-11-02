import { helper } from '@ember/component/helper';

export function localisedNumber([value]) {
  if (isNaN(parseInt(value.replace(/\D/g,'')))) {
    return 'Unknown';
  }

  return parseInt(value.replace(/\D/g, '')).toLocaleString();
}

export default helper(localisedNumber);
