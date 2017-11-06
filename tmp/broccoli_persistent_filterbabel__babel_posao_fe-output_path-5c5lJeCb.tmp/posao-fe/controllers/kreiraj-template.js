define('posao-fe/controllers/kreiraj-template', ['exports'], function (exports) {
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
        korisnikService: Ember.inject.service('korisnik-service'),
        templateService: Ember.inject.service('template-service'),

        noviNazivError: false,
        noviNError: false,
        noviServerError: false,
        noviServerErrorText: "",
        noviServerSuccess: false,
        indexGreske: null,

        validirajPolje: function validirajPolje() {

            var uspjesno = true;
            var _noviNazivError = false;
            var _noviNError = false;
            var _polja = this.get('model.template.poljaTemplatea');
            var _indexGreske = null;

            if (this.get('model.template.naziv') == null || this.get('model.template.naziv').replace(/\s/g, "") == "" || this.get('model.template.naziv').length < 1 || !this.get('model.template.naziv').match(/^[a-z\u0106\u0107\u010C\u010D\u0110\u0111\u0160\u0161\u017D-\u017F\u212A\-]{2,30}$/i)) {

                _noviNazivError = true;
                uspjesno = false;
            }

            for (var i = 0; i < _polja.length; i++) {
                if (_polja[i].nazivPolja.replace(/\s/g, "") == "" || this.get('model.template.naziv').length < 1 || !_polja[i].nazivPolja.match(/^[a-z\u0106\u0107\u010C\u010D\u0110\u0111\u0160\u0161\u017D-\u017F\u212A\-]{2,30}$/i)) {
                    _noviNError = true;
                    uspjesno = false;
                    _indexGreske = i;
                    break;
                }
            }

            this.set("noviNazivError", _noviNazivError);
            this.set("noviNError", _noviNError);
            this.set("indexGreske", _indexGreske);
            return uspjesno;
        },

        addTemplate: function addTemplate(template) {
            this.set("serverErrorText", "");

            var self = this;
            this.get("templateService").add(template).then(function (x) {
                self.set("noviServerError", false);
                self.set("noviServerSuccess", true);
                self.set("serverErrorText", "");
            }).catch(function (x) {
                self.set("noviServerError", true);
                self.set("noviServerSuccess", false);
                self.set("serverErrorText", err.responseText);
            });
        },

        actions: {
            dodaj: function dodaj() {
                var templ = this.get("model.template");
                var novaPolja = [].concat(_toConsumableArray(templ.poljaTemplatea), [{ nazivPolja: "" }]);
                this.set("model.template.poljaTemplatea", novaPolja);
            },

            izbrisi: function izbrisi(index) {
                var templ = this.get("model.template");
                var novaPolja = [].concat(_toConsumableArray(templ.poljaTemplatea.slice(0, index)), _toConsumableArray(templ.poljaTemplatea.slice(index + 1, templ.poljaTemplatea.length)));
                this.set("model.template.poljaTemplatea", novaPolja);
            },

            submit: function submit() {

                if (this.validirajPolje()) {
                    var template = this.get("model.template");
                    this.addTemplate(template);
                }
            }
        }
    });
});