import { RestSerializer } from 'ember-cli-mirage';
import { underscore } from '@ember/string';

export default RestSerializer.extend({
  keyForAttribute(attr) {
    return underscore(attr);
  }
});
