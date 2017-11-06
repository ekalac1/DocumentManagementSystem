define('posao-fe/models/template', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['id', 'naziv', 'poljaTemplatea'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});