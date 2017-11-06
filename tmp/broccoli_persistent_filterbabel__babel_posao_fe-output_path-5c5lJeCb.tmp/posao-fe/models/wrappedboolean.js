define('posao-fe/models/wrappedboolean', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['bool'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});