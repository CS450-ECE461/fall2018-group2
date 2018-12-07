import Controller from '@ember/controller';
import {inject as service} from '@ember/service'

export default Controller.extend({

  router: service(),

  actions: {
    myClickHandler() {
      this.router.transitionTo('nav-enabled.experiences.index');
      console.log("route it");
    }
  }
});
