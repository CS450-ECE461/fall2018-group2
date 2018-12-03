import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Route.extend(Authenticated, {

  model(){

    this.store.createRecord('experience', {
      title: 'Play BasketBall',
      host: 'John Luke',
      description:'this a camp where you learn to program while playing basketball',
      price:95,
      avatarUrl:'/assets/images/jump-rope.jpg',
      address: {
        street:'15th street',
        city:'Indianapolis',
        state:'Indiana'
      }
    });
    this.store.createRecord('experience', {
      title: 'Learn to Program',
      host: 'Mateus Jose',
      price:100,
      description:'programming with us is fun',
      avatarUrl:'/assets/images/turtle.jpg',
      address: {
        street:'15th street',
        city:'chicago',
        state:'Illinois'
      }
    });

    this.store.createRecord('experience', {
      title: 'Writing made fun',
      host: 'seth Obama',
      price:100,
      description:'we write 3 books per week. just let your imagination run wildly',
      avatarUrl:'/assets/images/peanutbutter.jpg',
      address: {
        street:'15th street',
        city:'chicago',
        state:'Illinois'
      }
    });


    return this.store.findAll('experience');
  },
});
