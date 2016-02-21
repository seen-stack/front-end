/**
 * @author Ivaylo Ivanov
 * @public
 * @description Responsible for the contact creation
 * @extends notifier
 * @requires ember
 * @requires ../../mixins/notifier
 */
import Ember from 'ember';
import notifier from '../../mixins/notifier';

export default Ember.Controller.extend(notifier, {

  actions: {

    /**
    * @public
    * @description Fired when the user clicks on the "back" button or.
    * leaves the route. Deletes the record if it's not already deleted or saved
    */
    delete() {
      if (!this.get('model').get('isDeleted') && !this.get('model').get('id')) {
        this.get('model').deleteRecord();
      }
    },

    /**
    * @public
    * @description Fired when the user clicks on the "back" button.
    * Fires the "delete" action and transitions to "/address-book"
    */
    goBack() {
      this.send('delete');
      this.transitionToRoute('addressBook');
    },

    /**
    * @public
    * @description Fired when the user clicks on the "create" button.
    * Creates the contact
    */
    create() {
      let model = this.get('model');
      model.save()
      .then(() => {
        this.successNoty('Created successfully!');
        this.transitionToRoute('addressBook');
      })
      .catch(() => {
        this.failNoty('Unable to create, please try again later.');
      });
    }

  }

});
