define('posao-fe/models/kategorija', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['idkategorije', 'naziv'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});