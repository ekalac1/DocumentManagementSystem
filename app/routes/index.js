import Ember from 'ember';

export default Ember.Route.extend({
	oglasiService: Ember.inject.service('oglasi-service'),
	session: Ember.inject.service('session'),

	model: function() {
		let username = this.get("session.data.authenticated.username");
		let documents = this.get('oglasiService').share(username);

		return Ember.RSVP.hash({
			oglas: documents,
		})
	}
})
