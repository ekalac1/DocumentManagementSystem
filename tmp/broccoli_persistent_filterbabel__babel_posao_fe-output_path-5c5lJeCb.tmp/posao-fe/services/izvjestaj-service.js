define('posao-fe/services/izvjestaj-service', ['exports', 'posao-fe/services/base-service', 'posao-fe/models/izvjestaj'], function (exports, _baseService, _izvjestaj) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _baseService.default.extend({

        get: function get() {
            var izvjestaj = _izvjestaj.default.create({});

            this.ajax({ url: 'izvjestaj/', type: "GET" }).then(function (data) {
                //izvjestaj.setProperties(data);
            });

            return izvjestaj;
        }
    });
});