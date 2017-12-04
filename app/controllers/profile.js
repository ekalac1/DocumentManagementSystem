import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  oglasiService: Ember.inject.service('oglasi-service'),
  actions: {
    delete: function(oglasId) {
      let korisnikId = this.get("session.data.authenticated.username");
        this.get("oglasiService").delete(korisnikId, oglasId).then(x => {
          window.location.reload(true);
        }).catch(err => {
        });
}
    }
});
