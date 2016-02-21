import Ember from 'ember';
import api from '../../mixins/api';
import countries from '../../mixins/countries';

export default Ember.Route.extend(api, countries, {

  title: 'Create a contact',

  /**
  * @public
  * @description Fired when the user enters the route. Creates a contact empty
  * model
  * @returns {object} contact
  */
  model() {
    return this.get('store').createRecord('contact', {
      'first-name': '',
      'last-name': '',
      email: '',
      country: ''
    });
  },

  /**
  * @public
  * @description Sets the model and gets all the countries
  */
  setupController(controller, model) {
    controller.set('model', model);
    this.getCountries()
    .then(res => {
      controller.set('countries', res);
    });
  },

  actions: {

    /**
    * @public
    * @description Fired when the user leaves the route.
    * Sends an action to the controller to delete the record if it's not saved
    */
    willTransition() {
      this.controllerFor('addressBook.create').send('delete');
    }

  }

});
