define('posao-fe/models/korisnik', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['idKorisnika', 'username', 'password', 'email', 'nezaposleni', 'admin', 'poslodavac'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});