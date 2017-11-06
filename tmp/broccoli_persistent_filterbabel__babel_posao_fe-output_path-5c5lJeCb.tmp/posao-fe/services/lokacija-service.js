define('posao-fe/services/lokacija-service', ['exports', 'posao-fe/services/base-service', 'posao-fe/models/lokacija'], function (exports, _baseService, _lokacija) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _baseService.default.extend({

        all: function all() {
            var lokacije = [];
            this.ajax({ url: 'lokacije/get/all', type: "GET" }).then(function (data) {
                data.forEach(function (lokacija) {
                    lokacije.addObject(_lokacija.default.create(lokacija));
                });
            });

            return lokacije;
        }
    });
});