import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  oglasiService: Ember.inject.service('oglasi-service'),
  actions: {
    delete: function(documentId) {
      let korisnikId = this.get("session.data.authenticated.username");
      this.get("oglasiService").delete(korisnikId, documentId).then(x => {
        window.location.reload(true);
      }).catch(err => {
      });
    },
    toggleBody(documentId) {
      this.toggleProperty('isShowingBody');
      var username = this.get("session.data.authenticated.username");
      var newName= this.get("ime") ;
      console.log(newName);
      if (newName != null)
      {
        this.get("oglasiService").rename(username, documentId, newName).then(x => {
         window.location.reload(true);
        }).catch(err => {
        });
      }
    },
    showDocument(documentId) {
      var oglas = this.get("oglasiService").getContent(username, documentId, newName)
    }
  }
});
