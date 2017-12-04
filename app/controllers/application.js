import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  porukeService: Ember.inject.service('poruke-service'),
  oglasiService: Ember.inject.service('oglasi-service'),
  collapsedBool: false,
  credentialsError: false,
  collapsedStr: "collapse navbar-collapse",

  authenticate: function(credentials) {
    var authenticator = 'authenticator:jwt';
    return this.get('session').authenticate(authenticator, credentials);
  },

  actions: {
    fileLoaded: function(file) {
      let oglas = {};
      var self = this;
      oglas.fileName = file.name
      oglas.content = file.data
      oglas.datatype = file.type
      oglas.owner = this.get("session.data.authenticated.username");

      this.get("oglasiService").postavi(oglas).then(x => {
        self.set("serverSuccess", true);
        self.set("serverError", false);
        self.set("serverErrorText", "");
        window.location.reload(true);
      }).catch(err => {
        self.set("serverSuccess", false);
        self.set("serverError", true);
        self.set("serverErrorText", err.responseText);
      });
    },

    login: function(credentials, doRedirect) {
      var self = this;
      var credentials = this.getProperties('identification', 'password');
      this.authenticate(credentials).then(function(value) {
        self.set('credentialsError', false);
        window.location.reload(true);
      }.bind(doRedirect), function(reason) {
        self.set('credentialsError', true);
      });
    },

    collapse: function(){
      let col = !this.get("collapsedBool");

      this.set("collapsedBool", col);

      if(col){
        this.set("collapsedStr", "collapse navbar-collapse in");
      }
      else{
        this.set("collapsedStr", "collapse navbar-collapse");
      }
    },
    
    logout(){
      this.get('session').invalidate();
    }
  }
});
