/**
 * @author Ivaylo Ivanov
 * @public
 * @description Responsible for the address book state
 * @requires ember
 */
import Ember from 'ember';

export default Ember.Controller.extend({

  /**
  * @public
  * @description Fired when the model length is changes. Returns the total
  * number of records
  * @returns {int} total
  */
  totalContacts: function() {
    let total = this.get('content').get('length');
    if (total === 1) {
      this.set('title', 'contact');
    } else {
      this.set('title', 'contacts');
    }
    return total;
  }.property('content.length'),

});
