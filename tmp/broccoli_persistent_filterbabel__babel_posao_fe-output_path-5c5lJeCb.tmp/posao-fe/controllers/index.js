define('posao-fe/controllers/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        kategorijaId: null,
        filter: null,
        pretraga: null,
        poredak: null,
        asc: false,

        oglasiService: Ember.inject.service('oglasi-service'),

        search: function search(kategorijaId, filter, name, asc) {
            if (kategorijaId === null && filter === null && name === null && asc === false) {
                var _oglasi2 = this.get("oglasiService").all();
                this.set("model.oglasi", _oglasi2);
                return;
            }

            var _oglasi = this.get("oglasiService").search(name, kategorijaId, filter, asc);
            this.set("model.oglasi", _oglasi);
        },

        actions: {
            selectKategorija: function selectKategorija(kategorijaId) {
                this.set('kategorijaId', kategorijaId);
            },
            selectFilter: function selectFilter(filter) {
                this.set('filter', filter);
            },
            selectPoredak: function selectPoredak(poredak) {
                this.set('asc', poredak === "TEMP_ASC");
            },
            search: function search() {
                var _kat = this.get("kategorijaId");
                var _filter = this.get("filter");
                var _name = this.get("pretraga");
                var _asc = this.get("asc");

                if (_kat == -1) {
                    _kat = null;
                }

                if (_filter == -1) {
                    _filter = null;
                }

                if (_name == "") {
                    _name = null;
                }

                this.search(_kat, _filter, _name, _asc);
            }
        }
    });
});