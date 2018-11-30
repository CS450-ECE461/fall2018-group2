import DS from 'ember-data';
import { underscore } from '@ember/string';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',

  keyForAttribute (key) {
    return underscore (key);
  }
});
