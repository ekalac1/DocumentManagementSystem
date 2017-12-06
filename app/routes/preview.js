import Ember from 'ember';

export default Ember.Route.extend({
  oglasiService: Ember.inject.service('oglasi-service'),
  queryParams: {
    id: {
      refreshModel: true
    }
  },

  model(params) {
     // This gets called upon entering 'articles' route
     // for the first time, and we opt into refiring it upon
     // query param changes by setting `refreshModel:true` above.

     // params has format of { category: "someValueOrJustNull" },
     // which we can forward to the server.
    //  let category = params.get('id');
     let showVisitModal = params.id;

      console.log(showVisitModal);

     let _profil = this.get('oglasiService').getContent(params.id);

     return Ember.RSVP.hash({
       oglas: _profil,
     })

   }

});
