import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index',{path:'/'});
  this.route('registracija',{ path: '/registracija' });
  this.route('login',{ path: '/login' });
  this.route('profile');

  this.route('unauthorized');
  this.route("error", { path: "*path"});
});

export default Router;
