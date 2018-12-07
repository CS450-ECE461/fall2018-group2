import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

  actions: {
    back: function() {
      history.back();
    }
  },

  router: service(),

  showLike: false,
  showExit: false,

  init() {
    this._super(...arguments);

    if (this.get('rightIconType') === "like") this.showLike = true;
    if (this.get('rightIconType') === "exit") this.showExit = true;
  },
});
