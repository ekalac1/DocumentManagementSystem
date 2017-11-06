import Ember from 'ember';
import BaseModel from './base-model';

var _modelProperties = ['idKorisnika', 'ime', 'prezime', 'nazivFirme', 'telefon', 'sakriveniPodaci'];

export default BaseModel.extend({
	modelProperties: _modelProperties,
});