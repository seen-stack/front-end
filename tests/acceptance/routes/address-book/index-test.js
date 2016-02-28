import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import startApp from '../../../helpers/start-app';
import destroyApp from '../../../helpers/destroy-app';

describe('Acceptance: | route |', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('Should visit /address-book', function() {
    visit('/address-book');

    andThen(function() {
      expect(currentPath()).to.equal('addressBook.index');
    });
  });
});
