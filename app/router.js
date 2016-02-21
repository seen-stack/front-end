import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('addressBook', {path: '/address-book'}, function() {
    this.route('create', {path: 'create-contact'});
  });

});

export default Router;
