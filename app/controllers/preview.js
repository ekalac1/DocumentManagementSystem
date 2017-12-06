import Ember from 'ember';

export default Ember.Controller.extend({
     oglasiService: Ember.inject.service('oglasi-service'),
     queryParams: ['id'],
     id: null,
});
