import BaseService from './base-service';
import Korisnik from '../models/korisnik';

export default BaseService.extend({

    register: function(korisnik) {
        return this.ajax({ url: `korisnici/register`, type: "POST", data: JSON.stringify(korisnik)});
    },
    all: function(){
      var korisnici = [];
      this.ajax({ url: `korisnici`, type: "GET"}).then(function(data) {
          data.forEach(function(korisnik) {
              korisnici.addObject(Korisnik.create(korisnik));
          });
      });
      return korisnici;
    }
});
