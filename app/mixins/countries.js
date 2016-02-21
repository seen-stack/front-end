/**
 * @author Ivaylo Ivanov
 * @public
 * @description Holds the list of all countries
 * @requires ember
 */
import Ember from 'ember';
let countries = [];

export default Ember.Mixin.create({

  /**
  * @public
  * @description Returns an array of all countries. Makes a request to the
  * server if they're not already loaded
  * @returns {object} promise
  */
  getCountries() {
    return new Ember.RSVP.Promise(resolve => {
      if (countries.length) {
        return resolve(countries);
      }
      Ember.$.get(this.get('host') + '/countries')
      .then(res => {
        res = JSON.parse(res);
        res.data.map(value => {
          let country = {};
          country.name = value;
          countries.push(country);
        });
        resolve(countries);
      });
    });
  }

});
