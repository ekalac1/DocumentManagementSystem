define('posao-fe/services/poruke-service', ['exports', 'posao-fe/services/base-service', 'posao-fe/models/poruka', 'posao-fe/globals'], function (exports, _baseService, _poruka, _globals) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _baseService.default.extend({

        all: function all(id) {
            var poruke = [];
            this.ajax({ url: 'poruke/get?recipient=' + id, type: "GET" }).then(function (data) {
                data.forEach(function (poruka) {
                    poruka.vrijeme = (0, _globals.default)(poruka.vrijeme);
                    poruke.addObject(_poruka.default.create(poruka));
                });
            });

            return poruke;
        },

        my: function my(id) {
            var poruke = [];
            this.ajax({ url: 'poruke/get/sender?sender=' + id, type: "GET" }).then(function (data) {
                data.forEach(function (poruka) {
                    poruka.vrijeme = (0, _globals.default)(poruka.vrijeme);
                    poruke.addObject(_poruka.default.create(poruka));
                });
            });

            return poruke;
        },

        send: function send(poruka) {
            return this.ajax({ url: 'poruke/send', type: "POST", data: JSON.stringify(poruka) });
        },

        getUnread: function getUnread(id) {
            return this.ajax({ url: 'poruke/unread?korisnik=' + id, type: "GET" });
        }
    });
});