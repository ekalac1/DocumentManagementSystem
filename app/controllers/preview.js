import Ember from 'ember';

export default Ember.Controller.extend({
     oglasiService: Ember.inject.service('oglasi-service'),
     queryParams: ['id'],
     id: null,

     filteredArticles: Ember.computed('id',function() {
     let category = this.get('id');
     let articles = this.get('model');

     let _profil = this.get('oglasiService').getContent(this.get('id'));

     return Ember.RSVP.hash({
       oglas: _profil,
     })

   })
});
