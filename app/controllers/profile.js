import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  oglasiService: Ember.inject.service('oglasi-service'),
  korisnikService: Ember.inject.service('korisnik-service'),
  actions: {
    delete: function(documentId) {
      let korisnikId = this.get("session.data.authenticated.username");
      this.get("oglasiService").delete(korisnikId, documentId).then(x => {
        window.location.reload(true);
      });
    },
    preimenuj(documentId) {
      var username = this.get("session.data.authenticated.username");
      var newName= this.get("ime") ;
      if (newName != null){
         this.get("oglasiService").rename(username, documentId, newName).then(x => {
         window.location.reload(true);
        });
      }
    },
    showDocument(documentId) {
      var oglas = this.get("oglasiService").getContent(username, documentId, newName)
    },
    sharingDocument: function(documentId, userId, type) {
        this.get("oglasiService").podijeli(documentId, userId, type).then(x => {
        self.set("serverSuccess", true);
        self.set("serverError", false);
        self.set("serverErrorText", "");
        window.location.reload(true);
      }).catch(err => {
        self.set("serverSuccess", false);
        self.set("serverError", true);
        self.set("serverErrorText", err.responseText);
      });

      window.location.reload(true);
    },
    showUsers: function(username){
      this.get("korisnikService").all(username)
    }
  }
});
