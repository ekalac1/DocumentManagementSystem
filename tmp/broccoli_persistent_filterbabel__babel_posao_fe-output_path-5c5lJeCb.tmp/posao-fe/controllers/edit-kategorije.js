define('posao-fe/controllers/edit-kategorije', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    exports.default = Ember.Controller.extend({
        kategorijaService: Ember.inject.service('kategorija-service'),
        noviNaziv: "",
        noviNazivError: false,
        noviNError: false,
        indexGreske: null,
        noviServerError: false,
        noviServerErrorText: "",
        noviSuccess: false,

        izmjenaServerError: false,
        izmjenaServerErrorText: "",
        izmjenaSuccess: false,

        brisanjeServerError: false,
        brisanjeServerErrorText: "",
        brisanjeSuccess: false,

        add: function add(kategorija) {
            var self = this;

            this.get('kategorijaService').add(kategorija).then(function (x) {
                self.set("noviServerError", false);
                self.set("noviServerErrorText", "");
                self.set("noviSuccess", true);
            }).catch(function (err) {
                self.set("noviServerError", true);
                self.set("noviServerErrorText", err.responseText);
                self.set("noviSuccess", false);
            });
        },

        izmijeni: function izmijeni(kategorija) {
            var self = this;

            this.get('kategorijaService').update(kategorija, kategorija.id).then(function (x) {
                self.set("izmjenaServerError", false);
                self.set("izmjenaServerErrorText", "");
                self.set("izmjenaSuccess", true);
            }).catch(function (err) {
                self.set("izmjenaServerError", true);
                self.set("izmjenaServerErrorText", err.responseText);
                self.set("izmjenaSuccess", false);
            });
            //this.set("model.kategorije", )
        },

        brisi: function brisi(kategorija, index) {
            var _this = this;

            var self = this;

            this.get('kategorijaService').delete(kategorija.id).then(function (x) {
                var _kategorije = _this.get("model.kategorije");
                _this.set("model.kategorije", [].concat(_toConsumableArray(_kategorije.slice(0, index)), _toConsumableArray(_kategorije.slice(index + 1))));

                self.set("izmjenaServerError", false);
                self.set("izmjenaServerErrorText", "");
                self.set("izmjenaSuccess", false);

                self.set("brisanjeServerError", false);
                self.set("brisanjeServerErrorText", "");
                self.set("brisanjeSuccess", true);

                //ispis poruke
            }).catch(function (err) {
                self.set("izmjenaServerError", false);
                self.set("izmjenaServerErrorText", "");
                self.set("izmjenaSuccess", false);

                self.set("brisanjeServerError", true);
                self.set("brisanjeServerErrorText", err.responseText);
                self.set("brisanjeSuccess", false);
            });
        },

        validirajNovu: function validirajNovu() {

            var uspjesno = true;
            var _noviNazivError = false;

            if (this.get('noviNaziv') == null || this.get('noviNaziv').replace(/\s/g, "") == "") {

                _noviNazivError = true;
                uspjesno = false;
            }

            this.set("noviNazivError", _noviNazivError);

            return uspjesno;
        },

        validirajIzmjenu: function validirajIzmjenu() {

            var uspjesno = true;
            var _noviNError = false;
            var _polja = this.get('model.kategorije');
            var _indexGreske = null;

            for (var i = 0; i < _polja.length; i++) {
                if (_polja[i].naziv.replace(/\s/g, "") == "") {
                    _noviNError = true;
                    uspjesno = false;
                    _indexGreske = i;
                    break;
                }
            }

            this.set("noviNError", _noviNError);
            this.set("indexGreske", _indexGreske);
            return uspjesno;
        },

        actions: {
            add: function add() {

                if (this.validirajNovu()) {

                    var _kategorija = { naziv: this.get("noviNaziv") };
                    this.add(_kategorija);
                }
            },

            izmijeni: function izmijeni(index) {

                if (this.validirajIzmjenu()) {
                    var _kategorije = this.get("model.kategorije");
                    var kategorija = _kategorije[index];
                    this.izmijeni(kategorija);
                }
            },

            brisi: function brisi(index) {

                var _kategorije = this.get("model.kategorije");
                var kategorija = _kategorije[index];
                this.brisi(kategorija, index);
            }
        }
    });
});