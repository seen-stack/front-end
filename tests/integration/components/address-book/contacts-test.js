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
  'address-book/contact',
  'Integration | Component | address-book/contact',
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
      this.set('contact', contact);

      this.render(hbs`{{address-book/contact contact=contact}}`);

      const content = this.$('.panel').text();
      expect(this.$('.panel')).to.have.lengthOf(1);
      expect(content).to.contains('First Name');
      expect(content).to.contains('Ivaylo');
      expect(content).to.contains('Email');
      expect(content).to.contains('some@gmail.com');

    });
  }
);