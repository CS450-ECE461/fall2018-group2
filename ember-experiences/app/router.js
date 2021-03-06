import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sign-in');
  this.route('sign-up');
  this.route('nav-enabled', { path: '/' }, function() {
    this.route('experiences', function() {
      this.route('favorites');
    });
    this.route('explore', function() {
      this.route('search');
    });
    this.route('profile');
  });
  this.route('experience', { path: '/experience/:id' }, function() {
    this.route('conversation');
    this.route('reviews');
  });
});

export default Router;
