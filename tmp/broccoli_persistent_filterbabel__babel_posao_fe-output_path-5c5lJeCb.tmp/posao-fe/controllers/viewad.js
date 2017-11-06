define('posao-fe/controllers/viewad', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        oglasiService: Ember.inject.service('oglasi-service'),
        session: Ember.inject.service(),
        noviDatumIsteka: null,
        prijavaSuccess: false,
        prijavaError: false,
        reopenSuccess: false,
        reopenError: false,
        zatvaranjeSuccess: false,
        zatvaranjeError: false,

        prijava: function prijava(korisnik, oglas) {
            var self = this;

            return this.get('oglasiService').prijava(korisnik, oglas).then(function (x) {
                self.set("prijavaSuccess", true);
                self.set("prijavaError", false);

                self.set("zatvaranjeSuccess", false);
                self.set("zatvaranjeError", false);
                self.set("reopenSuccess", false);
                self.set("reopenError", false);

                self.set("model.imaprijava", true);
            }).catch(function (err) {
                self.set("prijavaSuccess", false);
                self.set("prijavaError", true);

                self.set("zatvaranjeSuccess", false);
                self.set("zatvaranjeError", false);
                self.set("reopenSuccess", false);
                self.set("reopenError", false);
            });
        },

        delete: function _delete(oglasId) {
            return this.get('oglasiService').delete(oglasId);
        },

        zatvori: function zatvori(oglasId) {
            return this.get('oglasiService').zatvori(oglasId);
        },

        reopen: function reopen(oglasId, brojDana) {
            var self = this;
            if (isNaN(this.get("noviDatumIsteka")) || this.get("noviDatumIsteka") < 1 || !this.get("noviDatumIsteka").toString().match(/^\d+$/)) {
                self.set("datumError", true);
            } else {
                this.get('oglasiService').reopen(oglasId, brojDana).then(function (x) {
                    self.set("reopenSuccess", true);
                    self.set("reopenError", false);
                    self.set("datumError", false);
                    self.set("model.oglas.zatvoren", 0);

                    self.set("zatvaranjeSuccess", false);
                    self.set("zatvaranjeError", false);
                    self.set("prijavaSuccess", false);
                    self.set("prijavaError", false);
                }).catch(function (err) {
                    self.set("reopenError", true);
                    self.set("reopenSuccess", false);
                    self.set("datumError", false);

                    self.set("zatvaranjeSuccess", false);
                    self.set("zatvaranjeError", false);
                    self.set("prijavaSuccess", false);
                    self.set("prijavaError", false);
                });
            }
        },

        actions: {
            prijava: function prijava(oglasId) {
                var korisnikId = this.get("session.data.authenticated.userid");
                this.prijava(korisnikId, oglasId);
            },

            delete: function _delete() {
                var self = this;

                var oglasId = this.get("model.oglas.idOglasa");
                var potvrda = confirm("Jeste li sigurni da želite izbrisati oglas?");
                if (potvrda) {
                    this.delete(oglasId).then(function (x) {
                        alert("Uspješno izbrisan oglas");
                        self.transitionToRoute('index');
                    });
                }
            },

            zatvori: function zatvori() {
                var self = this;

                var oglasId = this.get("model.oglas.idOglasa");

                var potvrda = confirm("Jeste li sigurni da želite zatvoriti oglas?");

                if (potvrda) {
                    this.zatvori(oglasId).then(function (x) {
                        self.set('model.oglas.zatvoren', 1);
                        self.set("zatvaranjeSuccess", true);
                        self.set("zatvaranjeError", false);
                        self.set("reopenSuccess", false);
                        self.set("reopenError", false);
                        self.set("prijavaSuccess", false);
                        self.set("prijavaError", false);
                    }).catch(function (err) {
                        self.set("zatvaranjeSuccess", false);
                        self.set("zatvaranjeError", true);
                        self.set("reopenSuccess", false);
                        self.set("reopenError", false);
                        self.set("prijavaSuccess", false);
                        self.set("prijavaError", false);
                    });
                }
            },

            reopen: function reopen() {
                var oglasId = this.get("model.oglas.idOglasa");
                var noviDatum = this.get("noviDatumIsteka");
                this.reopen(oglasId, noviDatum);
            }
        }
    });
});