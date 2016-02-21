/**
 * @author Ivaylo Ivanov
 * @public
 * @description Application adapter
 * @extends api
 * @requires ember
 * @requires '../mixins/api
 */
import DS from 'ember-data';
import api from '../mixins/api';

export default DS.JSONAPIAdapter.extend(api);
