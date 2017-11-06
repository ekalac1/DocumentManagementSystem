define('posao-fe/controllers/profile', ['exports', 'posao-fe/models/izvjestaj'], function (exports, _izvjestaj2) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        korisnikService: Ember.inject.service('korisnik-service'),
        izvjestajService: Ember.inject.service('izvjestaj-service'),
        session: Ember.inject.service(),
        modalClass: "modal fade",
        modalStyle: "display:hidden",
        modalProfileDeleteClass: "modal fade",
        modalProfileDeleteStyle: "display:hidden",
        izvjestaj: _izvjestaj2.default.create({}),
        passwordError: false,
        emailError: false,
        telefonError: false,
        imeError: false,
        prezimeError: false,
        nazivFirmeError: false,
        cvError: false,
        serverError: false,
        serverErrorText: "",
        serverSuccess: false,
        ponovljeniPass: "",
        ponovljeniPassError: false,

        confirmationPasswordFailed: "",
        brisanjePass: "",

        validacija: function validacija() {

            var uspjesno = true;

            var _passwordError = false;
            var _emailError = false;
            var _telefonError = false;
            var _imeError = false;
            var _prezimeError = false;
            var _nazivFirmeError = false;
            var _ponovljeniPassError = false;
            var _cvError = false;

            //email unicode
            // let re1   = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var re1 = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if (this.get("model.profil.password") == "" || this.get("model.profil.password").length < 6) {
                _passwordError = true;
                uspjesno = false;
            }

            if (!_passwordError) {
                if (this.get("ponovljeniPass") == null || this.get("ponovljeniPass") !== this.get("model.profil.password")) {
                    uspjesno = false;
                    _ponovljeniPassError = true;
                }
            }

            if (this.get("model.profil.email") == null || !re1.test(this.get("model.profil.email"))) {
                uspjesno = false;
                _emailError = true;
            }

            if (this.get("model.profil.poslodavac")) {
                if (this.get("model.profil.poslodavac.telefon") == null || !this.get("model.profil.poslodavac.telefon").match(/^\d{9}$/) && !this.get("model.profil.poslodavac.telefon").match(/^\d{8}$/)) {
                    uspjesno = false;
                    _telefonError = true;
                }

                if (this.get("model.profil.poslodavac.nazivFirme").replace(/\s/g, "") == "" /*|| !re2.test(this.get("model.profil.poslodavac.nazivFirme"))*/) {
                        uspjesno = false;
                        _nazivFirmeError = true;
                    }

                if (this.get("model.profil.poslodavac.ime") == null || this.get("model.profil.poslodavac.ime").length > 15 || this.get("model.profil.poslodavac.ime").replace(/\s/g, "").length < 1 /*|| !re3.test(this.get("model.profil.nezaposleni.ime"))*/) {
                        uspjesno = false;
                        _imeError = true;
                    }

                if (this.get("model.profil.poslodavac.prezime") == null || this.get("model.profil.poslodavac.prezime").length > 30 || this.get("model.profil.poslodavac.prezime").replace(/\s/g, "").length < 1 /*|| !re3.test(this.get("model.profil.nezaposleni.prezime"))*/) {
                        uspjesno = false;
                        _prezimeError = true;
                    }
            }

            if (this.get("model.profil.nezaposleni")) {
                if (this.get("model.profil.nezaposleni.cv").replace(/\s/g, "") == "") {
                    _cvError = true;
                    uspjesno = false;
                }

                if (this.get("model.profil.nezaposleni.ime") == null || this.get("model.profil.nezaposleni.ime").length > 15 || this.get("model.profil.nezaposleni.ime").replace(/\s/g, "").length < 1 /*|| !re3.test(this.get("model.profil.nezaposleni.ime"))*/) {
                        uspjesno = false;
                        _imeError = true;
                    }

                if (this.get("model.profil.nezaposleni.prezime") == null || this.get("model.profil.nezaposleni.prezime").length > 30 || this.get("model.profil.nezaposleni.prezime").replace(/\s/g, "").length < 1 /*|| !re3.test(this.get("model.profil.nezaposleni.prezime"))*/) {
                        uspjesno = false;
                        _prezimeError = true;
                    }
            }

            this.set("passwordError", _passwordError);
            this.set("emailError", _emailError);
            this.set("telefonError", _telefonError);
            this.set("imeError", _imeError);
            this.set("prezimeError", _prezimeError);
            this.set("nazivFirmeError", _nazivFirmeError);
            this.set("cvError", _cvError);
            this.set("ponovljeniPassError", _ponovljeniPassError);

            return uspjesno;
        },

        update: function update(korisnik, id) {
            var self = this;
            this.get('korisnikService').update(korisnik, id).then(function (x) {
                self.set("serverError", false);
                self.set("serverSuccess", true);
                self.set("serverErrorText", "");
            }).catch(function (err) {
                self.set("serverError", true);
                self.set("serverSuccess", false);
                self.set("serverErrorText", err.responseText);
            });
        },

        delete: function _delete(korisnikId, korisnikPass) {
            return this.get('korisnikService').delete(korisnikId, korisnikPass);
        },

        getReport: function getReport() {
            var _izvjestaj = this.get('korisnikService').izvjestaj();
            this.set("izvjestaj", _izvjestaj);
        },

        actions: {
            update: function update() {
                var korisnik = this.get('model.profil');

                if (this.validacija()) {
                    this.update(korisnik, korisnik.idKorisnika);
                }
            },

            provjeri: function provjeri() {},

            delete: function _delete() {
                var korisnikId = this.get("session.data.authenticated.userid");
                var confirmationPassword = this.get("brisanjePass");
                var self = this;

                if (confirmationPassword.length < 3) this.set("confirmationPasswordFailed", "Morate unijeti password");else this.delete(korisnikId, confirmationPassword).then(function (x) {
                    self.get('session').invalidate();
                    self.transitionToRoute('index');
                }).catch(function (err) {
                    self.set("confirmationPasswordFailed", "Greška: " + err.responseText);
                });
            },

            sakrijModal: function sakrijModal() {
                this.set("modalClass", "modal fade");
                this.set("modalStyle", "display:none");
                this.set("izvjestaj", { brojOglasa: "", brojNezaposlenih: "", brojPoslodavaca: "", brojPrijava: "" });
            },

            sakrijProfileDeleteModal: function sakrijProfileDeleteModal() {
                this.set("modalProfileDeleteClass", "modal fade");
                this.set("modalProfileDeleteStyle", "display:none");
                this.set("brisanjePass", "");
            },

            report: function report() {
                this.set("modalClass", "modal fade in");
                this.set("modalStyle", "display:block");

                this.getReport();
            },

            showProfileDeleteModal: function showProfileDeleteModal() {
                this.set("confirmationPasswordFailed", "");
                this.set("modalProfileDeleteClass", "modal fade in");
                this.set("modalProfileDeleteStyle", "display:block");
            }
        }
    });
});