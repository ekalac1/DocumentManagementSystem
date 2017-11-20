import BaseService from './base-service';
import Oglas from '../models/oglas';

export default BaseService.extend({

//sve je uredu ovdje, ne diraj

    all: function(username) {
        var oglasi = [];
        this.ajax({ url: `content?user=${username}`, type: "GET"}).then(function(data) {
            data.forEach(function(oglas) {
                oglasi.addObject(Oglas.create(oglas));
            });
        });
        return oglasi;
    },
    postavi: function(oglas) {
        return this.ajax({ url: `content/save`, type: "POST", data: JSON.stringify(oglas)});
    },
    share: function(username) {
        var oglasi = [];
        this.ajax({ url: `content/workspace?user=${username}`, type: "GET"}).then(function(data) {
            data.forEach(function(oglas) {
                oglasi.addObject(Oglas.create(oglas));
            });
        });
        return oglasi;
    }


});
