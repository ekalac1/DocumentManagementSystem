define('posao-fe/routes/index', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = Ember.$;
	exports.default = Ember.Route.extend({

		oglasiService: Ember.inject.service(),
		kategorijaService: Ember.inject.service(),
		lokacijaService: Ember.inject.service(),
		session: Ember.inject.service(),

		model: function model(params, transition) {
			var _kategorije = this.get('kategorijaService').all();

			return Ember.RSVP.hash({
				oglasi: this.get('oglasiService').all(),
				lokacije: this.get('lokacijaService').all(),
				kategorije: _kategorije
			});
		}
	});
});