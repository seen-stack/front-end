/**
 * @author Ivaylo Ivanov
 * @public
 * @description Ability to sends user friendly notifications using jQuery Noty
 * @requires ember
 */
/* globals noty */
import Ember from 'ember';

export default Ember.Mixin.create({

  /**
  * @public
  * @description Success notification with green bg
  */
  successNoty(message) {
    let options = {
      text: message,
      timeout: 2500,
      layout: 'topRight',
      type: 'success'
    };
    noty(options);
  },

  /**
  * @public
  * @description Fail notification with red bg
  */
  failNoty(message) {
    let options = {
      text: message,
      timeout: 2500,
      layout: 'topRight',
      type: 'error'
    };
    noty(options);
  }

});
