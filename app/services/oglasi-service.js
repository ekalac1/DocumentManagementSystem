import BaseService from './base-service';
import Oglas from '../models/oglas';
import getTimeAgo from '../globals';

export default BaseService.extend({

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

    zatvori: function(id) {
        return this.ajax({ url: `oglasi/close?id=${id}`, type: "POST", data: {}});
    },

    search: function(name, kategorijaId, filter, asc){
        let query = "oglasi/search?";

        var oglasi = [];
        this.ajax({ url: query, type: "GET"}).then(function(data) {
            data.forEach(function(oglas) {
                oglas.datumObjave = getTimeAgo(oglas.datumObjave);
                let date = new Date(oglas.datumIsteka);
                oglas.datumIsteka = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + '.';
                oglasi.addObject(Oglas.create(oglas));
            });
        });

        return oglasi;
    }

});
