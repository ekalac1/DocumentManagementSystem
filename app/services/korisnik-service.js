import BaseService from './base-service';

export default BaseService.extend({

    register: function(korisnik) {
        return this.ajax({ url: `korisnici/register`, type: "POST", data: JSON.stringify(korisnik)});
    },
});
