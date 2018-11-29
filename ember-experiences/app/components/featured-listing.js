import Component from '@ember/component';
import Flickity from 'flickity'

export default Component.extend({
  didRender() {
    var elem = document.querySelector('.featured-listing');
    new Flickity( elem, {
      freeScroll: false,
      contain: true,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true,
      groupCells: true
    });
  }
});
