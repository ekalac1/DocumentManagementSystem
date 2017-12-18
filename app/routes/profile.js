import Ember from 'ember';

export default Ember.Route.extend({
	oglasiService: Ember.inject.service('oglasi-service'),
	session: Ember.inject.service('session'),
	korisnikService: Ember.inject.service('korisnik-service'),

	beforeModel: function() {

		if(!this.get('session.isAuthenticated')) {
			return this.transitionTo("unauthorized");
		}
	},

	model: function() {
		let username = this.get("session.data.authenticated.username");
		let _profil = this.get('oglasiService').all(username);
		let _korisnici = this.get("korisnikService").all();

		return Ember.RSVP.hash({
			oglas: _profil,
			korisnik: _korisnici
		})
	}
})
