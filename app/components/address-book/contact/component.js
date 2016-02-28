/**
 * @author Ivaylo Ivanov
 * @public
 * @description Contact component - representation of a single contact
 * @extends countries
 * @extends notifier
 * @extends tooltips
 * @requires ember
 * @requires ../../mixins/countries
 * @requires ./../mixins/notifier
 */
import Ember from 'ember';
import countries from '../../../mixins/countries';
import notifier from '../../../mixins/notifier';
import tooltips from 'ember-tooltips/mixins/components/tooltips';

export default Ember.Component.extend(countries, notifier, tooltips, {

  /**
  * @public
  * @description The current state of the component
  * @property {boolean}
  */
  isEditing: false,

  /**
  * @public
  * @description The label for the edited field / select
  * @property {string}
  */
  label: '',

  /**
  * @public
  * @description The property for the edited field / select
  * @property {string}
  */
  property: '',

  /**
  * @public
  * @description The default value for the edited field / select
  * @property {string}
  */
  value: '',

  /**
  * @public
  * @description List of the countries
  * @property {array}
  */
  countries: [],

  /**
  * @public
  * @description Fired after the component is inserted into the DOM. Adds
  * fade effect to the component
  */
  didInsertElement() {
    let timeout = (this.index + 1) * 300;
    this.$().hide().fadeIn(timeout, () => {
      if (typeof this.$() === 'object') {
        this.renderChildTooltips();
      }
    });
  },

  actions: {

    /**
    * @public
    * @description Fired when the user clicks on the "edit" button. Sets the
    * params for the input / select that will be edited. Will load
    * the countries list if they're not already loaded and edited property is
    * the country
    * @param {string} label
    * @param {string} property
    * @param {string} value
    */
    isEditing(label, property, value) {
      this.set('label', label);
      this.set('property', property);
      this.set('value', value);
      if (property === 'country' && !this.countries.length) {
        return this.getCountries()
        .then(res => {
          this.set('countries', res);
          this.set('isEditing', !this.isEditing);
        });
      }
      this.set('isEditing', !this.isEditing);
    },

    /**
    * @public
    * @description Fired when the user clicks on the "update" button.
    * Saves the changes
    */
    save() {
      this.set('isEditing', false);
      if (this.contact.get('hasDirtyAttributes')) {
        this.contact.set('changed', this.property);
        this.contact.save()
        .then(() => {
          this.successNoty('Updated successfully!');
        })
        .catch(() => {
          this.contact.rollbackAttributes();
          this.failNoty('Unable to update, please try again later.');
        });
      }
    },

    /**
    * @public
    * @description Fired when the user clicks on the "cancel" button.
    * Cancel the changes and restore to the previous state of the record
    */
    cancel() {
      this.contact.rollbackAttributes();
      this.set('isEditing', false);
    },

    /**
    * @public
    * @description Fired when the user clicks on the "delete" button.
    * Deletes the record
    */
    delete() {
      this.contact.deleteRecord();
      this.contact.save()
      .then(() => {
        this.successNoty('Deleted successfully!');
        this.$().fadeOut(() => {
          this.destroy();
        });
      })
      .catch(() => {
        this.contact.rollbackAttributes();
        this.failNoty('Unable to delete, please try again later.');
      });
    }

  }

});
