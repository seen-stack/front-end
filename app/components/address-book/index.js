/**
 * @author Ivaylo Ivanov
 * @public
 * @description Parent component for all address book components
 * @requires ember
 */
import Ember from 'ember';

export default Ember.Component.extend({

  /**
  * @public
  * @description The value from the input field
  * @property {string}
  */
  filterBy: '',

  /**
  * @public
  * @description Fired when the model or the value from the input field is
  * changed. Filters the records by the user input
  * @returns {array} contacts
  */
  contacts: function() {
    let content = this.content;
    let input = this.filterBy.trim().toLowerCase();
    return content.filter(contact => {
      let name = contact.get('first-name') + ' ' + contact.get('last-name');
      let email = contact.get('email').toLowerCase().indexOf(input);
      let country = contact.get('country').toLowerCase().indexOf(input);
      name = name.toLowerCase().indexOf(input);
      return ~name || ~email || ~country;
    });
  }.property('content', 'filterBy')

});
