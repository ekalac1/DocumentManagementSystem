import BaseService from './base-service';
import Oglas from '../models/oglas';

export default BaseService.extend({

//sve je uredu ovdje, ne diraj
//nije moguće preimenovati, ali sve se ovdje tiče contenta, kako nazivamo dokument u projektu

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
    },
    delete: function(username, oglasId) {
      return this.ajax({url: `content/workspace?user=${username}&document=${oglasId}`, type: "DELETE"})
    },
    rename: function(username, oglasId, documentName) {
      return this.ajax({url: `content/workspace?user=${username}&document=${oglasId}&name=${documentName}`, type: "POST"})
    }
});
