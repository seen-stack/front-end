/**
 * @author Ivaylo Ivanov
 * @public
 * @description Index route
 * @requires ember
 */
import Ember from 'ember';

export default Ember.Route.extend({

  /**
  * @public
  * @description Fired when the user enters the route. Will transition directly
  * to /address-book as this is an address book project
  * @returns {object} promise
  */
  beforeModel() {
    this.transitionTo('addressBook');
  }

});
