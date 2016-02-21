/**
 * @author Ivaylo Ivanov
 * @public
 * @description Model for a contact
 * @requires ember
 * @requires ember-data
 * @requires ember-validations
 */
import Ember from 'ember';
import DS from 'ember-data';
import EV from 'ember-validations';

const { attr } = DS;

const Contact =  DS.Model.extend(EV, {

  changed: attr('string'),
  'first-name': attr('string'),
  'last-name': attr('string'),
  email: attr('string'),
  country: attr('string'),
  'full-name': Ember.computed('first-name', 'last-name', function() {
    return this.get('first-name') + ' ' + this.get('last-name');
  }),
  isntValid: Ember.computed.not('isValid'),
  validations: {
    'first-name': {
      presence: true,
      length: {
        minimum: 2
      }
    },
    'last-name': {
      presence: true,
      length: {
        minimum: 2
      }
    },
    email: {
      presence: true,
      length: {
        minimum: 2
      },
      format: {
        with: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      }
    },
    country: {
      presence: true
    },
  }

});

export default Contact;
