import Ember from 'ember';
import BaseModel from './base-model';

var _modelProperties = ['owner', 'document', 'type'];

export default BaseModel.extend({
	modelProperties: _modelProperties,
});
