import Ember from 'ember';
import BaseModel from './base-model';

var _modelProperties = ['fileName', 'datatype', 'owner', "content", 'id'];

export default BaseModel.extend({
	modelProperties: _modelProperties,
});
