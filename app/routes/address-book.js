/**
 * @author Ivaylo Ivanov
 * @public
 * @description Address book route
 * @requires ember
 */
import Ember from 'ember';

export default Ember.Route.extend({

  /**
  * @public
  * @description Page title
  * @property {string}
  */
  title: 'Contacts',

  /**
  * @public
  * @description Fired when the user enters the route. Makes a get request to
  * the server for all contacts
  * @returns {object} promise
  */
  model() {
    return this.store.findAll('contact');
  },

  /**
  * @public
  * @description Sets the model and the current length of all records
  */
  setupController(controller, model) {
    controller.set('content', model);
    controller.set('contacts', model.get('content').length);
  }

});
