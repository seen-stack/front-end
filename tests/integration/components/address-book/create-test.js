import {
  describeComponent,
  it
} from 'ember-mocha';
import { expect } from 'chai';
import hbs from 'htmlbars-inline-precompile';
import startApp from '../../../helpers/start-app';
import destroyApp from '../../../helpers/destroy-app';
let application;

describeComponent(
  'address-book/create',
  'Integration | Component | address-book/create',
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

      this.render(hbs`{{address-book/create}}`);

      expect(this.$('.panel')).to.have.lengthOf(1);
      expect(this.$('#country')).to.have.lengthOf(1);

    });
  }
);