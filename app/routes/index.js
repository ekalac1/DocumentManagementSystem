import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
	oglasiService: Ember.inject.service('oglasi-service'),
	session: Ember.inject.service('session'),

	beforeModel: function(transition) {

		// if(!this.get('session.isAuthenticated')) {
		// 	return this.transitionTo("unauthorized");
		// }
	},

	model: function(params, transition) {
		var self = this;
		let username = this.get("session.data.authenticated.username");
		let _profil = this.get('oglasiService').share(username);

		 return Ember.RSVP.hash({
         	oglas: _profil,
  	})
	}
})
