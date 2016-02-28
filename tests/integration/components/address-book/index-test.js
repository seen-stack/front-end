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
  'Integration | Component | address-book/index',
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
    it('Should be rendered and it\'s child too', function() {

      const contact = Ember.Object.create({
        id: 1,
        'first-name': 'Ivaylo',
        'last-name': 'Ivaylo',
        email: 'some@gmail.com',
        country: 'Bulgaria'
      });
      const contacts = [contact];
      this.set('contacts', contacts);

      this.render(hbs`{{address-book/index content=contacts}}`);

      expect(this.$('.panel')).to.have.lengthOf(2);
      expect(this.$('.form-control')).to.have.lengthOf(1);
      expect(this.$('.btn-success')).to.have.lengthOf(1);



    });
  }
);