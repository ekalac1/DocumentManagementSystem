define('posao-fe/services/base-service', ['exports', 'posao-fe/config/environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var $ = Ember.$;
    exports.default = Ember.Service.extend({
        session: Ember.inject.service('session'),

        ajax: function ajax(params) {

            var token = this.get('session.data.authenticated.token');
            if (token !== undefined) {
                params.beforeSend = function (request) {
                    request.setRequestHeader("Authorization", "Bearer " + token);
                };
            }

            params.url = _environment.default.apiHost + '/' + params.url;
            params.contentType = "application/json";
            return $.ajax(params);
        },

        ajaxWithoutContentType: function ajaxWithoutContentType(params) {

            var token = this.get('session.data.authenticated.token');
            if (token !== undefined) {
                params.beforeSend = function (request) {
                    request.setRequestHeader("Authorization", "Bearer " + token);
                };
            }

            params.url = _environment.default.apiHost + '/' + params.url;

            return $.ajax(params);
        }
    });
});