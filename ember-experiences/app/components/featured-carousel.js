import Component from '@ember/component';
import Flickity from 'flickity'

export default Component.extend({
  didRender() {
    var elem = document.querySelector('.featured-carousel');
    new Flickity( elem, {
      // options
      freeScroll: false,
      contain: true,
      // disable previous & next buttons and dots
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true
    });
  }
});
