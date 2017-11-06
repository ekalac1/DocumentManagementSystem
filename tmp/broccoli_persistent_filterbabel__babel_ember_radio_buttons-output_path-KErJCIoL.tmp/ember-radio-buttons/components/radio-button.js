define('ember-radio-buttons/components/radio-button', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'input',
    type: 'radio',
    attributeBindings: ['type', 'htmlChecked:checked', 'value', 'name', 'disabled'],

    value: null,
    checked: null,

    htmlChecked: Ember.computed('value', 'checked', function () {
      return this.get('value') === this.get('checked');
    }),

    change: function change() {
      this.set('checked', this.get('value'));
    },

    _setCheckedProp: function _setCheckedProp() {
      if (!this.$()) {
        return;
      }
      this.$().prop('checked', this.get('htmlChecked'));
    },

    _updateElementValue: Ember.observer('htmlChecked', function () {
      Ember.run.once(this, '_setCheckedProp');
    })
  });
});