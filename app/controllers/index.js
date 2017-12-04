import Ember from 'ember';
import Oglas from '../models/oglas';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  oglasiService: Ember.inject.service('oglasi-service'),
  actions: {
  		  fileLoaded: function(file) {
        let oglas = {};
        var self = this;
        oglas.fileName = file.name
        oglas.content = file.data
        oglas.datatype = file.type
        oglas.owner = session.data.authenticated.username

  			console.log(file.data);
        this.get("oglasiService").postavi(oglas).then(x => {
          self.set("serverSuccess", true);
        	self.set("serverError", false);
			    self.set("serverErrorText", "");
        }).catch(err => {
            self.set("serverSuccess", false);
            self.set("serverError", true);
            self.set("serverErrorText", err.responseText);

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
    }
  }
});
