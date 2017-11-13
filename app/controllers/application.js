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
      }).catch(err => {
          self.set("serverSuccess", false);
          self.set("serverError", true);
          self.set("serverErrorText", err.responseText);

      });
    },

        login: function(credentials, doRedirect) {
            var self = this;
            this.authenticate(credentials).then(function(value) {
                self.set('credentialsError', false);
                self.get("porukeService").getUnread(self.get("session.data.authenticated.userid")).then(data => self.set("session.imaNeprocitanih", data));

                if(doRedirect) self.transitionToRoute('index');
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

        loginNormal: function() {
            var credentials = this.getProperties('identification', 'password');
            this.send('login', credentials, true);
        },

        loginWithoutRedirect: function(credentials) {
            this.send('login', credentials, false);
        },

		logout(){
			this.get('session').invalidate();
		}
	}
});
