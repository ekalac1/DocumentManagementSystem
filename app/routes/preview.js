import Ember from 'ember';

export default Ember.Route.extend({
  oglasiService: Ember.inject.service('oglasi-service'),
  queryParams: {
    id: {
      refreshModel: true
    }
  },

  beforeModel: function() {

		if(!this.get('session.isAuthenticated')) {
			return this.transitionTo("unauthorized");
		}
	},

  model(params) {
     let _profil = this.get('oglasiService').getContent(params.id);

     return Ember.RSVP.hash({
       oglas: _profil,
     })

   }

});
