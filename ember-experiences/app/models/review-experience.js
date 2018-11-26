import DS from 'ember-data';
import Review from './review';

export default Review.extend({
  experience: DS.belongsTo('experience')
});
