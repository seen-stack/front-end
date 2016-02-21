/**
 * @author Ivaylo Ivanov
 * @public
 * @description Holds information about the API depending on the environment
 * @requires ember
 * @requires ../config/environment
 */
import Ember from 'ember';
import config from '../config/environment';

export default Ember.Mixin.create({

  /**
  * @public
  * @description Returns the API url depending on the environemnt
  * @returns {string} url
  */
  host: function() {
    if (config.environment === 'development') {
      return 'http://localhost:3333';
    }
    // production
    return 'http://178.62.193.246:3333';
  }.property()

});
