define('posao-fe/services/template-service', ['exports', 'posao-fe/services/base-service', 'posao-fe/models/template'], function (exports, _baseService, _template) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _baseService.default.extend({

        add: function add(template) {
            return this.ajax({ url: 'template/add', type: "POST", data: JSON.stringify(template) });
        },

        all: function all(template) {
            var templatei = [];
            this.ajax({ url: 'template/get/all', type: "GET" }).then(function (data) {
                data.forEach(function (template) {
                    templatei.addObject(_template.default.create(template));
                });
            });

            return templatei;
        }

    });
});