define('posao-fe/services/oglasi-service', ['exports', 'posao-fe/services/base-service', 'posao-fe/models/oglas', 'posao-fe/models/wrappedboolean', 'posao-fe/globals'], function (exports, _baseService, _oglas, _wrappedboolean, _globals) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _baseService.default.extend({

        all: function all() {
            var oglasi = [];
            //this.ajax({ url: `oglasi/all`, type: "GET"}).then(function(data) {
            this.ajax({ url: 'oglasi/search?asc=false', type: "GET" }).then(function (data) {
                data.forEach(function (oglas) {
                    oglas.datumObjave = (0, _globals.default)(oglas.datumObjave);
                    var date = new Date(oglas.datumIsteka);
                    oglas.datumIsteka = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + '.';

                    oglasi.addObject(_oglas.default.create(oglas));
                });
            });

            return oglasi;
        },

        details: function details(id) {
            var oglas = _oglas.default.create({});
            this.ajax({ url: 'oglasi/get?id=' + id, type: "GET" }).then(function (data) {
                oglas.datumObjave = (0, _globals.default)(oglas.datumObjave);
                oglas.setProperties(data);
            });
            return oglas;
        },

        imaprijava: function imaprijava(korisnik, oglas) {
            var wrappedboolean = _wrappedboolean.default.create({});
            this.ajax({ url: 'prijave/?korisnik=' + korisnik + '&oglas=' + oglas, type: "GET" }).then(function (data) {
                wrappedboolean.setProperties({ bool: data });
            });

            return wrappedboolean;
        },

        my: function my(id) {
            var oglasi = [];
            this.ajax({ url: 'oglasi/poslodavac?id=' + id, type: "GET" }).then(function (data) {
                data.forEach(function (oglas) {
                    oglas.datumObjave = (0, _globals.default)(oglas.datumObjave);
                    var date = new Date(oglas.datumIsteka);
                    oglas.datumIsteka = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + '.';

                    oglasi.addObject(_oglas.default.create(oglas));
                });
            });

            return oglasi;
        },

        postavi: function postavi(oglas) {
            return this.ajax({ url: 'oglasi/postavioglas', type: "POST", data: JSON.stringify(oglas) });
        },

        prijava: function prijava(userid, adid) {
            return this.ajax({ url: 'prijave/add?korisnik=' + userid + '&oglas=' + adid, type: "POST", data: {} });
        },

        zatvori: function zatvori(id) {
            return this.ajax({ url: 'oglasi/close?id=' + id, type: "POST", data: {} });
        },

        delete: function _delete(adid) {
            return this.ajax({ url: 'oglasi/remove?id=' + adid, type: "DELETE", data: {} });
        },

        reopen: function reopen(adid, days) {
            return this.ajax({ url: 'oglasi/reopen?id=' + adid + '&date=' + days, type: "POST", data: {} });
        },

        search: function search(name, kategorijaId, filter, asc) {
            var query = "oglasi/search?";

            if (kategorijaId !== null && filter !== null) {
                query = query + "idk=" + kategorijaId + "&idlok=" + filter;

                if (name !== null) {
                    query = query + "&name=" + name;
                }
            } else if (kategorijaId === null && filter !== null) {
                query = query + "idlok=" + filter;

                if (name !== null) {
                    query = query + "&name=" + name;
                }
            } else if (kategorijaId !== null && filter === null) {
                query = query + "idk=" + kategorijaId;

                if (name !== null) {
                    query = query + "&name=" + name;
                }
            } else if (name !== null) {
                query = query + "name=" + name;
            }

            if (asc) {
                if (name !== null || kategorijaId !== null || filter !== null) {
                    query = query + "&asc=true";
                } else query = query + "asc=true";
            }

            var oglasi = [];
            this.ajax({ url: query, type: "GET" }).then(function (data) {
                data.forEach(function (oglas) {
                    oglas.datumObjave = (0, _globals.default)(oglas.datumObjave);
                    var date = new Date(oglas.datumIsteka);
                    oglas.datumIsteka = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + '.';
                    oglasi.addObject(_oglas.default.create(oglas));
                });
            });

            return oglasi;
        }

    });
});