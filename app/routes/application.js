/**
 * @author Ivaylo Ivanov
 * @public
 * @description Address book route
 * @requires ember
 * @requires ../mixins/api
 * @requires ../mixins/notifier
 */
import Ember from 'ember';
import api from '../mixins/api';
import notifier from '../mixins/notifier';

export default Ember.Route.extend(api, notifier, {

  actions: {

    /**
    * @public
    * @description Fired when the error bubble to the application route.
    * Makes a request to the server in order to log the error
    */
    error(error) {
      this.failNoty('Oops. Something went wrong..');
      let host = this.get('host');
      Ember.$.post(host + '/client-errors?error=' + error.toString());
    }

  }

});
