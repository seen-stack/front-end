/**
 * @author Ivaylo Ivanov
 * @public
 * @description Route for creating a new contact
 * @requires ember
 */
import Ember from 'ember';

export default Ember.Route.extend({

  /**
  * @public
  * @description Page title
  * @property {string}
  */
  title: 'Create a contact',

  actions: {

    /**
    * @public
    * @description Fired when the user clicks on the "back" button.
    * transitionTo "/address-book"
    */
    goBack() {
      this.transitionTo('addressBook');
    }

  }

});
