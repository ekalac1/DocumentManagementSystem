define('posao-fe/controllers/pregled-korisnika', ['exports', 'posao-fe/models/korisnik', 'posao-fe/models/poruka'], function (exports, _korisnik, _poruka) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        korisnikService: Ember.inject.service('korisnik-service'),
        porukeService: Ember.inject.service('poruke-service'),
        session: Ember.inject.service(),
        modalClass: "modal fade",
        modalStyle: "display:hidden",
        poruka: _poruka.default.create({}),
        success: false,
        messageError: false,
        serverError: false,
        serverErrorText: "",

        sendMessage: function sendMessage() {
            var self = this;

            this.get("porukeService").send(this.get("poruka")).then(function (res) {
                self.set("success", true);
                self.set("serverError", false);
                self.set("serverErrorText", "");
            }).catch(function (err) {
                self.set("success", false);
                self.set("serverErrorText", err.responseText);
                self.set("serverError", true);
            });
        },

        validiraj: function validiraj() {
            var validno = this.get("poruka.tekst") != null && this.get("poruka.tekst").length !== 0;

            this.set("serverError", false);
            this.set("success", false);
            this.set("messageError", !validno);

            return validno;
        },

        actions: {

            sakrijModal: function sakrijModal() {
                this.set("modalClass", "modal fade");
                this.set("success", false);
                this.set("messageError", false);
                this.set("serverError", false);
                this.set("modalStyle", "display:none");
                this.set("poruka", _poruka.default.create({}));
                //  this.set("izvjestaj", {brojOglasa: "", brojUspjesnihOglasa: "", brojKorisnika: ""});
            },

            porukaPopout: function porukaPopout(idkorisnika) {
                this.set("modalClass", "modal fade in");
                this.set("modalStyle", "display:block");

                this.set("poruka.primalac", idkorisnika);
                this.set("poruka.posiljalac", this.get("session.data.authenticated.userid"));
                //    this.getReport();
            },

            send: function send() {
                if (this.validiraj()) {
                    this.sendMessage();
                }
            }
        }
    });
});