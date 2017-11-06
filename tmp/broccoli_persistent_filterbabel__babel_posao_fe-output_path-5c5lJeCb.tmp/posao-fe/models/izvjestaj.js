define('posao-fe/models/izvjestaj', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['brojOglasa', 'brojPoslodavaca', 'brojNezaposlenih', 'brojPrijava'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});