define('posao-fe/models/lokacija', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['id', 'kanton', 'naziv'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});