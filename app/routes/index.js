import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
	oglasiService: Ember.inject.service('oglasi-service'),
	session: Ember.inject.service('session'),

	model: function(params, transition) {
		var self = this;
		let username = this.get("session.data.authenticated.username");
		let documents = this.get('oglasiService').share(username);

		 return Ember.RSVP.hash({
         	oglas: documents,
  	})
	}
})
