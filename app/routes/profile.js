import Ember from 'ember';

export default Ember.Route.extend({
	korisnikService: Ember.inject.service('korisnik-service'),
	oglasiService: Ember.inject.service('oglasi-service'),
	session: Ember.inject.service('session'),

	beforeModel: function(transition) {

		if(!this.get('session.isAuthenticated')) {
			return this.transitionTo("unauthorized");
		}
	},

	model: function(params, transition) {
		let username = this.get("session.data.authenticated.username");
		let _profil = this.get('oglasiService').all(username)

		 return Ember.RSVP.hash({
         	oglas: _profil,
  	})
	}
})
