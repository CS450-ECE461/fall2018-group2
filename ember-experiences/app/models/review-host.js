import DS from 'ember-data';
import Review from './review';

export default Review.extend({
  host: DS.belongsTo('profile')
});
