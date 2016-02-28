/**
 * @author Ivaylo Ivanov
 * @public
 * @description Responsible for the contact creation
 * @extends countries
 * @extends notifier
 * @requires ember
 * @requires ../../../mixins/countries
 * @requires ../../../mixins/notifier
 */
import Ember from 'ember';
import notifier from '../../../mixins/notifier';
import countries from '../../../mixins/countries';

export default Ember.Component.extend(countries, notifier, {

  /**
  * @public
  * @description Store
  * @property {object}
  */
  store: Ember.inject.service(),

  /**
  * @public
  * @description List of countries
  * @property {array}
  */
  countries: [],

  /**
  * @public
  * @description Sets the model and the countries list.
  */
  init() {
    this._super();

    this.set('model', this.get('store').createRecord('contact', {
      'first-name': '',
      'last-name': '',
      email: '',
      country: ''
    }));

    this.getCountries()
    .then(res => {
      if (this.get('countries')) {
        this.set('countries', res);
      }
    });
  },

  /**
  * @public
  * @description Deletes the model if it's not created or already deleted
  */
  deleteModel() {
    if (this.get('model').get('id')) {
      this.get('model').deleteRecord();
    }
  },

  /**
  * @public
  * @description Fired before the component is destroyed.
  * Creates the contact
  */
  willClearRender() {
    this.deleteModel();
  },

  actions: {

    /**
    * @public
    * @description Fired when the user clicks on the "back" button.
    */
    goBack() {
      this.sendAction('goBack');
    },

    /**
    * @public
    * @description Fired when the user clicks on the "create" button.
    * Creates the contact
    */
    create() {
      this.get('model').save()
      .then(() => {
        this.successNoty('Created successfully!');
        this.sendAction('goBack');
      })
      .catch(() => {
        this.failNoty('Unable to create, please try again later.');
      });
    }

  }

});
