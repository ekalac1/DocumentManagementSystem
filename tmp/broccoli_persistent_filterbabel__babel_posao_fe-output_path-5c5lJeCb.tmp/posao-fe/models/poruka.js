define('posao-fe/models/poruka', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['tekst', 'posiljalac', 'primalac'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});