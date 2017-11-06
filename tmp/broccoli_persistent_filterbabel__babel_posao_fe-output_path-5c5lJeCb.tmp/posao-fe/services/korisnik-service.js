define('posao-fe/services/korisnik-service', ['exports', 'posao-fe/services/base-service', 'posao-fe/models/korisnik', 'posao-fe/models/nezaposleni', 'posao-fe/models/poslodavac', 'posao-fe/models/izvjestaj'], function (exports, _baseService, _korisnik, _nezaposleni, _poslodavac, _izvjestaj) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _baseService.default.extend({

        register: function register(korisnik) {
            return this.ajax({ url: 'korisnici/register', type: "POST", data: JSON.stringify(korisnik) });
        },

        profil: function profil(username) {
            var korisnik = _korisnik.default.create({});

            this.ajax({ url: 'korisnici/get/exact?name=' + username, type: "GET" }).then(function (data) {
                data.password = "";
                korisnik.setProperties(data);
            });

            return korisnik;
        },

        update: function update(korisnik, id) {
            return this.ajax({ url: 'korisnici/update?id=' + id, type: "POST", data: JSON.stringify(korisnik) });
        },

        delete: function _delete(korisnikid, korisnikPass) {
            return this.ajax({ url: 'korisnici/delete?id=' + korisnikid + '&pw=' + korisnikPass,
                type: "DELETE", data: JSON.stringify({}) });
        },

        izvjestaj: function izvjestaj() {
            var izvjestaj = _izvjestaj.default.create({});
            this.ajax({ url: 'izvjestaj', type: "GET" }).then(function (data) {
                izvjestaj.setProperties(data);
            });

            return izvjestaj;
        },

        all: function all() {
            var korisnici = [];
            this.ajax({ url: 'korisnici/get/all', type: "GET" }).then(function (data) {
                data.forEach(function (korisnik) {
                    korisnici.addObject(_korisnik.default.create(korisnik));
                });
            });

            return korisnici;
        },

        nezaposleni: function nezaposleni() {
            var korisnici = [];
            this.ajax({ url: 'korisnici/nezaposleni', type: "GET" }).then(function (data) {
                data.forEach(function (korisnik) {
                    korisnici.addObject(_korisnik.default.create(korisnik));
                });
            });

            return korisnici;
        }

    });
});