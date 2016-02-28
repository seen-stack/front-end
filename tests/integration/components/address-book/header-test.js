import {
  describeComponent,
  it
} from 'ember-mocha';
import { expect } from 'chai';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import startApp from '../../../helpers/start-app';
import destroyApp from '../../../helpers/destroy-app';
let application;

describeComponent(
  'address-book/header',
  'Integration | Component | address-book/header',
  {
    beforeSetup: function() {
      application = startApp();
    },
    afterTeardown: function() {
      destroyApp(application);
    },
    integration: true
  },
  function() {
    it('Should be rendered', function() {

      const contact = Ember.Object.create({
        id: 1,
        'first-name': 'Ivaylo',
        'last-name': 'Ivaylo',
        email: 'some@gmail.com',
        country: 'Bulgaria'
      });
      const contacts = [contact];
      this.set('content', contacts);

      this.render(hbs`{{address-book/header content=content}}`);

      expect(this.$('.fa-users')).to.have.lengthOf(1);
      expect(this.$('small').text()).to.equal('1 contact');

    });
  }
);