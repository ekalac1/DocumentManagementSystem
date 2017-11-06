define('posao-fe/models/oglas', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['idOglasa', 'poslodavac', 'lokacija', 'datumObjave', 'datumIsteka', 'kategorije', 'oglasPodaci', 'zatvoren', 'uspjesan', 'prioritet'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});