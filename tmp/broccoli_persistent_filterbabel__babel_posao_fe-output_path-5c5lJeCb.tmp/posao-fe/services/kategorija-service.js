define('posao-fe/services/kategorija-service', ['exports', 'posao-fe/services/base-service', 'posao-fe/models/kategorija'], function (exports, _baseService, _kategorija) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _baseService.default.extend({

        all: function all() {
            var kategorije = [];
            this.ajax({ url: 'kategorije/get/all', type: "GET" }).then(function (data) {
                data.forEach(function (kategorija) {
                    kategorije.addObject(_kategorija.default.create(kategorija));
                });
            });

            return kategorije;
        },

        update: function update(kategorija, kategorijaId) {
            return this.ajax({ url: 'kategorije/update?id=' + kategorijaId, type: "POST", data: JSON.stringify(kategorija) });
        },

        delete: function _delete(id) {
            return this.ajax({ url: 'kategorije/remove?id=' + id, type: "DELETE" });
        },

        add: function add(kategorija) {
            return this.ajax({ url: 'kategorije/add', type: "POST", data: JSON.stringify(kategorija) });
        }

    });
});