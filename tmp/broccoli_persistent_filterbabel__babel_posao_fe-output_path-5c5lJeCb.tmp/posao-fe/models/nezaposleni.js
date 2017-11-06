define('posao-fe/models/nezaposleni', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['idKorisnika', 'ime', 'prezime', 'cv', 'privatanProfil'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});