"use strict";



define('posao-fe/app', ['exports', 'posao-fe/resolver', 'ember-load-initializers', 'posao-fe/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  Ember.MODEL_FACTORY_INJECTIONS = true;

  App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('posao-fe/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('posao-fe/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('posao-fe/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('posao-fe/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('posao-fe/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('posao-fe/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('posao-fe/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('posao-fe/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('posao-fe/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('posao-fe/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('posao-fe/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('posao-fe/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('posao-fe/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('posao-fe/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('posao-fe/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('posao-fe/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('posao-fe/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('posao-fe/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('posao-fe/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('posao-fe/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('posao-fe/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('posao-fe/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('posao-fe/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('posao-fe/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('posao-fe/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('posao-fe/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('posao-fe/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('posao-fe/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('posao-fe/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('posao-fe/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('posao-fe/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('posao-fe/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('posao-fe/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('posao-fe/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('posao-fe/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('posao-fe/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('posao-fe/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('posao-fe/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('posao-fe/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('posao-fe/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('posao-fe/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('posao-fe/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('posao-fe/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('posao-fe/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('posao-fe/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('posao-fe/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('posao-fe/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('posao-fe/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('posao-fe/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('posao-fe/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('posao-fe/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('posao-fe/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('posao-fe/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('posao-fe/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('posao-fe/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('posao-fe/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('posao-fe/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('posao-fe/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('posao-fe/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('posao-fe/components/radio-button', ['exports', 'ember-radio-buttons/components/radio-button'], function (exports, _radioButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radioButton.default;
    }
  });
});
define('posao-fe/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('posao-fe/controllers/application', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        session: Ember.inject.service('session'),
        porukeService: Ember.inject.service('poruke-service'),
        collapsedBool: false,
        credentialsError: false,
        collapsedStr: "collapse navbar-collapse",

        authenticate: function authenticate(credentials) {
            var authenticator = 'authenticator:jwt';
            return this.get('session').authenticate(authenticator, credentials);
        },

        actions: {

            login: function login(credentials, doRedirect) {
                var self = this;
                this.authenticate(credentials).then(function (value) {
                    self.set('credentialsError', false);
                    self.get("porukeService").getUnread(self.get("session.data.authenticated.userid")).then(function (data) {
                        return self.set("session.imaNeprocitanih", data);
                    });

                    if (doRedirect) self.transitionToRoute('index');
                }.bind(doRedirect), function (reason) {
                    self.set('credentialsError', true);
                });
            },

            collapse: function collapse() {
                var col = !this.get("collapsedBool");

                this.set("collapsedBool", col);

                if (col) {
                    this.set("collapsedStr", "collapse navbar-collapse in");
                } else {
                    this.set("collapsedStr", "collapse navbar-collapse");
                }
            },

            loginNormal: function loginNormal() {
                var credentials = this.getProperties('identification', 'password');
                this.send('login', credentials, true);
            },

            loginWithoutRedirect: function loginWithoutRedirect(credentials) {
                this.send('login', credentials, false);
            },

            logout: function logout() {
                this.get('session').invalidate();
            }
        }
    });
});
define('posao-fe/controllers/dodaj-oglas', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        templateService: Ember.inject.service('template-service'),
        oglasiService: Ember.inject.service('oglasi-service'),
        session: Ember.inject.service('session'),
        kategorija: null,
        lokacija: null,
        template: null,
        trajanje: null,
        naziv: "",
        opis: "",
        polja: [],
        kategorijaError: false,
        lokacijaError: false,
        templateError: false,
        datumError: false,
        nazivError: false,
        opisError: false,
        poljaError: false,
        serverError: false,
        serverErrorText: "",
        serverSuccess: false,

        validacija: function validacija() {

            var ispravno = true;

            var _kategorijaError = false;
            var _lokacijaError = false;
            var _templateError = false;
            var _datumError = false;
            var _nazivError = false;
            var _opisError = false;
            var _poljaError = false;

            if (this.get("kategorija") == null) {
                ispravno = false;
                _kategorijaError = true;
            }

            if (this.get("lokacija") == null) {
                ispravno = false;
                _lokacijaError = true;
            }

            //suvišno?

            //if (this.get("template") == null){
            //    ispravno = false;
            //    _templateError = true;
            //}

            if (this.get("trajanje") == null || Number.parseInt(this.get('trajanje')) < 1) {
                ispravno = false;
                _datumError = true;
            }

            if (this.get("naziv").replace(/\s/g, "") == "") {
                ispravno = false;
                _nazivError = true;
            }

            if (this.get("opis").replace(/\s/g, "") == "") {
                ispravno = false;
                _opisError = true;
            }

            if (isNaN(this.get("trajanje")) || this.get("trajanje") < 1 || !this.get("trajanje").toString().match(/^\d+$/)) {
                ispravno = false;
                _datumError = true;
            }

            this.get("polja").forEach(function (polje) {
                if (polje.vrijednost == null || polje.vrijednost.replace(/\s/g, "") === "") {
                    ispravno = false;
                    _poljaError = true;
                }
            });

            this.set("kategorijaError", _kategorijaError);
            this.set("templateError", _templateError);
            this.set("lokacijaError", _lokacijaError);
            this.set("datumError", _datumError);
            this.set("nazivError", _nazivError);
            this.set("opisError", _opisError);
            this.set("poljaError", _poljaError);

            return ispravno;
        },

        register: function register() {
            this.set("serverErrorText", "");

            var oglas = {};
            var self = this;
            oglas.poslodavacId = this.get("session.data.authenticated.userid");
            oglas.lokacija = this.get("lokacija");

            oglas.kategorije = this.get("kategorija");

            //hardkodirano
            oglas.sakriven = "0";
            oglas.oglasPrijave = new Array();

            oglas.zatvoren = "0";
            oglas.uspjesan = "0";
            oglas.prioritet = "0";

            oglas.naziv = this.get("naziv");
            oglas.opis = this.get("opis");
            oglas.oglasPodaci = this.get("polja");
            oglas.datumIsteka = null;
            var trajanjeOglasa = Number.parseInt(this.get("trajanje"));
            var trajanjeOglasa = this.get("trajanje");
            oglas.vrijemeTrajanja = trajanjeOglasa;

            //this.get("oglasiService").postavi(oglas, trajanjeOglasa).then(x => {
            this.get("oglasiService").postavi(oglas).then(function (x) {
                self.set("serverSuccess", true);
                self.set("serverError", false);
                self.set("serverErrorText", "");
            }).catch(function (err) {
                self.set("serverSuccess", false);
                self.set("serverError", true);
                self.set("serverErrorText", err.responseText);
            });
        },

        actions: {
            selectKategorija: function selectKategorija(kategorijaId) {
                var kategorije = this.get("model.kategorije");
                var _kategorija = kategorije.find(function (x) {
                    return x.get("id") == kategorijaId;
                });

                this.set('kategorija', _kategorija);
            },
            selectLokacija: function selectLokacija(lokacijaId) {
                var lokacije = this.get("model.lokacije");
                var _lokacija = lokacije.find(function (x) {
                    return x.get("id") == lokacijaId;
                });

                this.set('lokacija', _lokacija);
            },
            register: function register() {
                if (this.validacija()) {
                    this.register();
                }
            },
            selectTemplate: function selectTemplate(templateId) {
                var templatei = this.get("model.templatei");
                var template = templatei.find(function (x) {
                    return x.get("id") == templateId;
                });
                var _polja = [];
                if (template) {
                    _polja = new Array(template.poljaTemplatea.length);

                    for (var i = 0; i < template.poljaTemplatea.length; i++) {
                        _polja[i] = { vrijednost: "" };
                        _polja[i].staje = template.poljaTemplatea[i].nazivPolja;
                    }
                }
                this.set("polja", _polja.slice());

                this.set('template', template);
            }
        }
    });
});
define('posao-fe/controllers/edit-kategorije', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    exports.default = Ember.Controller.extend({
        kategorijaService: Ember.inject.service('kategorija-service'),
        noviNaziv: "",
        noviNazivError: false,
        noviNError: false,
        indexGreske: null,
        noviServerError: false,
        noviServerErrorText: "",
        noviSuccess: false,

        izmjenaServerError: false,
        izmjenaServerErrorText: "",
        izmjenaSuccess: false,

        brisanjeServerError: false,
        brisanjeServerErrorText: "",
        brisanjeSuccess: false,

        add: function add(kategorija) {
            var self = this;

            this.get('kategorijaService').add(kategorija).then(function (x) {
                self.set("noviServerError", false);
                self.set("noviServerErrorText", "");
                self.set("noviSuccess", true);
            }).catch(function (err) {
                self.set("noviServerError", true);
                self.set("noviServerErrorText", err.responseText);
                self.set("noviSuccess", false);
            });
        },

        izmijeni: function izmijeni(kategorija) {
            var self = this;

            this.get('kategorijaService').update(kategorija, kategorija.id).then(function (x) {
                self.set("izmjenaServerError", false);
                self.set("izmjenaServerErrorText", "");
                self.set("izmjenaSuccess", true);
            }).catch(function (err) {
                self.set("izmjenaServerError", true);
                self.set("izmjenaServerErrorText", err.responseText);
                self.set("izmjenaSuccess", false);
            });
            //this.set("model.kategorije", )
        },

        brisi: function brisi(kategorija, index) {
            var _this = this;

            var self = this;

            this.get('kategorijaService').delete(kategorija.id).then(function (x) {
                var _kategorije = _this.get("model.kategorije");
                _this.set("model.kategorije", [].concat(_toConsumableArray(_kategorije.slice(0, index)), _toConsumableArray(_kategorije.slice(index + 1))));

                self.set("izmjenaServerError", false);
                self.set("izmjenaServerErrorText", "");
                self.set("izmjenaSuccess", false);

                self.set("brisanjeServerError", false);
                self.set("brisanjeServerErrorText", "");
                self.set("brisanjeSuccess", true);

                //ispis poruke
            }).catch(function (err) {
                self.set("izmjenaServerError", false);
                self.set("izmjenaServerErrorText", "");
                self.set("izmjenaSuccess", false);

                self.set("brisanjeServerError", true);
                self.set("brisanjeServerErrorText", err.responseText);
                self.set("brisanjeSuccess", false);
            });
        },

        validirajNovu: function validirajNovu() {

            var uspjesno = true;
            var _noviNazivError = false;

            if (this.get('noviNaziv') == null || this.get('noviNaziv').replace(/\s/g, "") == "") {

                _noviNazivError = true;
                uspjesno = false;
            }

            this.set("noviNazivError", _noviNazivError);

            return uspjesno;
        },

        validirajIzmjenu: function validirajIzmjenu() {

            var uspjesno = true;
            var _noviNError = false;
            var _polja = this.get('model.kategorije');
            var _indexGreske = null;

            for (var i = 0; i < _polja.length; i++) {
                if (_polja[i].naziv.replace(/\s/g, "") == "") {
                    _noviNError = true;
                    uspjesno = false;
                    _indexGreske = i;
                    break;
                }
            }

            this.set("noviNError", _noviNError);
            this.set("indexGreske", _indexGreske);
            return uspjesno;
        },

        actions: {
            add: function add() {

                if (this.validirajNovu()) {

                    var _kategorija = { naziv: this.get("noviNaziv") };
                    this.add(_kategorija);
                }
            },

            izmijeni: function izmijeni(index) {

                if (this.validirajIzmjenu()) {
                    var _kategorije = this.get("model.kategorije");
                    var kategorija = _kategorije[index];
                    this.izmijeni(kategorija);
                }
            },

            brisi: function brisi(index) {

                var _kategorije = this.get("model.kategorije");
                var kategorija = _kategorije[index];
                this.brisi(kategorija, index);
            }
        }
    });
});
define('posao-fe/controllers/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        kategorijaId: null,
        filter: null,
        pretraga: null,
        poredak: null,
        asc: false,

        oglasiService: Ember.inject.service('oglasi-service'),

        search: function search(kategorijaId, filter, name, asc) {
            if (kategorijaId === null && filter === null && name === null && asc === false) {
                var _oglasi2 = this.get("oglasiService").all();
                this.set("model.oglasi", _oglasi2);
                return;
            }

            var _oglasi = this.get("oglasiService").search(name, kategorijaId, filter, asc);
            this.set("model.oglasi", _oglasi);
        },

        actions: {
            selectKategorija: function selectKategorija(kategorijaId) {
                this.set('kategorijaId', kategorijaId);
            },
            selectFilter: function selectFilter(filter) {
                this.set('filter', filter);
            },
            selectPoredak: function selectPoredak(poredak) {
                this.set('asc', poredak === "TEMP_ASC");
            },
            search: function search() {
                var _kat = this.get("kategorijaId");
                var _filter = this.get("filter");
                var _name = this.get("pretraga");
                var _asc = this.get("asc");

                if (_kat == -1) {
                    _kat = null;
                }

                if (_filter == -1) {
                    _filter = null;
                }

                if (_name == "") {
                    _name = null;
                }

                this.search(_kat, _filter, _name, _asc);
            }
        }
    });
});
define('posao-fe/controllers/kreiraj-template', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    exports.default = Ember.Controller.extend({
        korisnikService: Ember.inject.service('korisnik-service'),
        templateService: Ember.inject.service('template-service'),

        noviNazivError: false,
        noviNError: false,
        noviServerError: false,
        noviServerErrorText: "",
        noviServerSuccess: false,
        indexGreske: null,

        validirajPolje: function validirajPolje() {

            var uspjesno = true;
            var _noviNazivError = false;
            var _noviNError = false;
            var _polja = this.get('model.template.poljaTemplatea');
            var _indexGreske = null;

            if (this.get('model.template.naziv') == null || this.get('model.template.naziv').replace(/\s/g, "") == "" || this.get('model.template.naziv').length < 1 || !this.get('model.template.naziv').match(/^[a-z\u0106\u0107\u010C\u010D\u0110\u0111\u0160\u0161\u017D-\u017F\u212A\-]{2,30}$/i)) {

                _noviNazivError = true;
                uspjesno = false;
            }

            for (var i = 0; i < _polja.length; i++) {
                if (_polja[i].nazivPolja.replace(/\s/g, "") == "" || this.get('model.template.naziv').length < 1 || !_polja[i].nazivPolja.match(/^[a-z\u0106\u0107\u010C\u010D\u0110\u0111\u0160\u0161\u017D-\u017F\u212A\-]{2,30}$/i)) {
                    _noviNError = true;
                    uspjesno = false;
                    _indexGreske = i;
                    break;
                }
            }

            this.set("noviNazivError", _noviNazivError);
            this.set("noviNError", _noviNError);
            this.set("indexGreske", _indexGreske);
            return uspjesno;
        },

        addTemplate: function addTemplate(template) {
            this.set("serverErrorText", "");

            var self = this;
            this.get("templateService").add(template).then(function (x) {
                self.set("noviServerError", false);
                self.set("noviServerSuccess", true);
                self.set("serverErrorText", "");
            }).catch(function (x) {
                self.set("noviServerError", true);
                self.set("noviServerSuccess", false);
                self.set("serverErrorText", err.responseText);
            });
        },

        actions: {
            dodaj: function dodaj() {
                var templ = this.get("model.template");
                var novaPolja = [].concat(_toConsumableArray(templ.poljaTemplatea), [{ nazivPolja: "" }]);
                this.set("model.template.poljaTemplatea", novaPolja);
            },

            izbrisi: function izbrisi(index) {
                var templ = this.get("model.template");
                var novaPolja = [].concat(_toConsumableArray(templ.poljaTemplatea.slice(0, index)), _toConsumableArray(templ.poljaTemplatea.slice(index + 1, templ.poljaTemplatea.length)));
                this.set("model.template.poljaTemplatea", novaPolja);
            },

            submit: function submit() {

                if (this.validirajPolje()) {
                    var template = this.get("model.template");
                    this.addTemplate(template);
                }
            }
        }
    });
});
define('posao-fe/controllers/pregled-korisnika', ['exports', 'posao-fe/models/korisnik', 'posao-fe/models/poruka'], function (exports, _korisnik, _poruka) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        korisnikService: Ember.inject.service('korisnik-service'),
        porukeService: Ember.inject.service('poruke-service'),
        session: Ember.inject.service(),
        modalClass: "modal fade",
        modalStyle: "display:hidden",
        poruka: _poruka.default.create({}),
        success: false,
        messageError: false,
        serverError: false,
        serverErrorText: "",

        sendMessage: function sendMessage() {
            var self = this;

            this.get("porukeService").send(this.get("poruka")).then(function (res) {
                self.set("success", true);
                self.set("serverError", false);
                self.set("serverErrorText", "");
            }).catch(function (err) {
                self.set("success", false);
                self.set("serverErrorText", err.responseText);
                self.set("serverError", true);
            });
        },

        validiraj: function validiraj() {
            var validno = this.get("poruka.tekst") != null && this.get("poruka.tekst").length !== 0;

            this.set("serverError", false);
            this.set("success", false);
            this.set("messageError", !validno);

            return validno;
        },

        actions: {

            sakrijModal: function sakrijModal() {
                this.set("modalClass", "modal fade");
                this.set("success", false);
                this.set("messageError", false);
                this.set("serverError", false);
                this.set("modalStyle", "display:none");
                this.set("poruka", _poruka.default.create({}));
                //  this.set("izvjestaj", {brojOglasa: "", brojUspjesnihOglasa: "", brojKorisnika: ""});
            },

            porukaPopout: function porukaPopout(idkorisnika) {
                this.set("modalClass", "modal fade in");
                this.set("modalStyle", "display:block");

                this.set("poruka.primalac", idkorisnika);
                this.set("poruka.posiljalac", this.get("session.data.authenticated.userid"));
                //    this.getReport();
            },

            send: function send() {
                if (this.validiraj()) {
                    this.sendMessage();
                }
            }
        }
    });
});
define('posao-fe/controllers/profile', ['exports', 'posao-fe/models/izvjestaj'], function (exports, _izvjestaj2) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        korisnikService: Ember.inject.service('korisnik-service'),
        izvjestajService: Ember.inject.service('izvjestaj-service'),
        session: Ember.inject.service(),
        modalClass: "modal fade",
        modalStyle: "display:hidden",
        modalProfileDeleteClass: "modal fade",
        modalProfileDeleteStyle: "display:hidden",
        izvjestaj: _izvjestaj2.default.create({}),
        passwordError: false,
        emailError: false,
        telefonError: false,
        imeError: false,
        prezimeError: false,
        nazivFirmeError: false,
        cvError: false,
        serverError: false,
        serverErrorText: "",
        serverSuccess: false,
        ponovljeniPass: "",
        ponovljeniPassError: false,

        confirmationPasswordFailed: "",
        brisanjePass: "",

        validacija: function validacija() {

            var uspjesno = true;

            var _passwordError = false;
            var _emailError = false;
            var _telefonError = false;
            var _imeError = false;
            var _prezimeError = false;
            var _nazivFirmeError = false;
            var _ponovljeniPassError = false;
            var _cvError = false;

            //email unicode
            // let re1   = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var re1 = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if (this.get("model.profil.password") == "" || this.get("model.profil.password").length < 6) {
                _passwordError = true;
                uspjesno = false;
            }

            if (!_passwordError) {
                if (this.get("ponovljeniPass") == null || this.get("ponovljeniPass") !== this.get("model.profil.password")) {
                    uspjesno = false;
                    _ponovljeniPassError = true;
                }
            }

            if (this.get("model.profil.email") == null || !re1.test(this.get("model.profil.email"))) {
                uspjesno = false;
                _emailError = true;
            }

            if (this.get("model.profil.poslodavac")) {
                if (this.get("model.profil.poslodavac.telefon") == null || !this.get("model.profil.poslodavac.telefon").match(/^\d{9}$/) && !this.get("model.profil.poslodavac.telefon").match(/^\d{8}$/)) {
                    uspjesno = false;
                    _telefonError = true;
                }

                if (this.get("model.profil.poslodavac.nazivFirme").replace(/\s/g, "") == "" /*|| !re2.test(this.get("model.profil.poslodavac.nazivFirme"))*/) {
                        uspjesno = false;
                        _nazivFirmeError = true;
                    }

                if (this.get("model.profil.poslodavac.ime") == null || this.get("model.profil.poslodavac.ime").length > 15 || this.get("model.profil.poslodavac.ime").replace(/\s/g, "").length < 1 /*|| !re3.test(this.get("model.profil.nezaposleni.ime"))*/) {
                        uspjesno = false;
                        _imeError = true;
                    }

                if (this.get("model.profil.poslodavac.prezime") == null || this.get("model.profil.poslodavac.prezime").length > 30 || this.get("model.profil.poslodavac.prezime").replace(/\s/g, "").length < 1 /*|| !re3.test(this.get("model.profil.nezaposleni.prezime"))*/) {
                        uspjesno = false;
                        _prezimeError = true;
                    }
            }

            if (this.get("model.profil.nezaposleni")) {
                if (this.get("model.profil.nezaposleni.cv").replace(/\s/g, "") == "") {
                    _cvError = true;
                    uspjesno = false;
                }

                if (this.get("model.profil.nezaposleni.ime") == null || this.get("model.profil.nezaposleni.ime").length > 15 || this.get("model.profil.nezaposleni.ime").replace(/\s/g, "").length < 1 /*|| !re3.test(this.get("model.profil.nezaposleni.ime"))*/) {
                        uspjesno = false;
                        _imeError = true;
                    }

                if (this.get("model.profil.nezaposleni.prezime") == null || this.get("model.profil.nezaposleni.prezime").length > 30 || this.get("model.profil.nezaposleni.prezime").replace(/\s/g, "").length < 1 /*|| !re3.test(this.get("model.profil.nezaposleni.prezime"))*/) {
                        uspjesno = false;
                        _prezimeError = true;
                    }
            }

            this.set("passwordError", _passwordError);
            this.set("emailError", _emailError);
            this.set("telefonError", _telefonError);
            this.set("imeError", _imeError);
            this.set("prezimeError", _prezimeError);
            this.set("nazivFirmeError", _nazivFirmeError);
            this.set("cvError", _cvError);
            this.set("ponovljeniPassError", _ponovljeniPassError);

            return uspjesno;
        },

        update: function update(korisnik, id) {
            var self = this;
            this.get('korisnikService').update(korisnik, id).then(function (x) {
                self.set("serverError", false);
                self.set("serverSuccess", true);
                self.set("serverErrorText", "");
            }).catch(function (err) {
                self.set("serverError", true);
                self.set("serverSuccess", false);
                self.set("serverErrorText", err.responseText);
            });
        },

        delete: function _delete(korisnikId, korisnikPass) {
            return this.get('korisnikService').delete(korisnikId, korisnikPass);
        },

        getReport: function getReport() {
            var _izvjestaj = this.get('korisnikService').izvjestaj();
            this.set("izvjestaj", _izvjestaj);
        },

        actions: {
            update: function update() {
                var korisnik = this.get('model.profil');

                if (this.validacija()) {
                    this.update(korisnik, korisnik.idKorisnika);
                }
            },

            provjeri: function provjeri() {},

            delete: function _delete() {
                var korisnikId = this.get("session.data.authenticated.userid");
                var confirmationPassword = this.get("brisanjePass");
                var self = this;

                if (confirmationPassword.length < 3) this.set("confirmationPasswordFailed", "Morate unijeti password");else this.delete(korisnikId, confirmationPassword).then(function (x) {
                    self.get('session').invalidate();
                    self.transitionToRoute('index');
                }).catch(function (err) {
                    self.set("confirmationPasswordFailed", "Greška: " + err.responseText);
                });
            },

            sakrijModal: function sakrijModal() {
                this.set("modalClass", "modal fade");
                this.set("modalStyle", "display:none");
                this.set("izvjestaj", { brojOglasa: "", brojNezaposlenih: "", brojPoslodavaca: "", brojPrijava: "" });
            },

            sakrijProfileDeleteModal: function sakrijProfileDeleteModal() {
                this.set("modalProfileDeleteClass", "modal fade");
                this.set("modalProfileDeleteStyle", "display:none");
                this.set("brisanjePass", "");
            },

            report: function report() {
                this.set("modalClass", "modal fade in");
                this.set("modalStyle", "display:block");

                this.getReport();
            },

            showProfileDeleteModal: function showProfileDeleteModal() {
                this.set("confirmationPasswordFailed", "");
                this.set("modalProfileDeleteClass", "modal fade in");
                this.set("modalProfileDeleteStyle", "display:block");
            }
        }
    });
});
define('posao-fe/controllers/registracija', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({
		korisnikService: Ember.inject.service('korisnik-service'),
		usernameError: false,
		passwordError: false,
		emailError: false,
		telefonError: false,
		imeError: false,
		prezimeError: false,
		firmaError: false,
		cvError: false,
		tipError: false,
		serverSuccess: false,
		serverError: false,
		serverErrorText: "",
		ponovljeniPass: "",
		ponovljeniPassError: false,

		validiraj: function validiraj() {

			var ispravno = true;

			var _usernameError = false;
			var _passwordError = false;
			var _emailError = false;
			var _telefonError = false;
			var _imeError = false;
			var _prezimeError = false;
			var _firmaError = false;
			var _cvError = false;
			var _tipError = false;
			var _ponovljeniPassError = false;

			//email unicode
			var re1 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

			if (this.get("tip") == null) {
				ispravno = false;
				_tipError = true;
			}

			if (this.get("username") == null || this.get("username").length < 1 || !this.get("username").match(/^[0-9a-z\u0106\u0107\u010C\u010D\u0110\u0111\u0160\u0161\u017D-\u017F\u212A\-_\.]{2,30}$/i)) {
				ispravno = false;
				_usernameError = true;
				this.set("imeVarijable", "Korisničko ime se može sastojati samo od slova, brojeva i znakova . _ -!");
			} else {
				this.set("imeVarijable", "");
			}

			if (this.get("password") == null || this.get("password").length < 6 || !this.get("password").match(/^[0-9a-z\u0106\u0107\u010C\u010D\u0110\u0111\u0160\u0161\u017D-\u017F\u212A\_\+\-\*\:\.\,\;\?\!\$\#]{6,30}$/gi)) {
				ispravno = false;
				_passwordError = true;
			}

			if (!_passwordError) {
				if (this.get("ponovljeniPass") == null || this.get("ponovljeniPass") !== this.get("password")) {
					ispravno = false;
					_ponovljeniPassError = true;
				}
			}

			if (this.get("email") == null || !re1.test(this.get("email"))) {
				ispravno = false;
				_emailError = true;
			}

			if (!_tipError && this.get("tip") == "Nezaposleni") {
				if (this.get("cv") == null || this.get("cv").replace(/\s/g, "").length < 1 || this.get("cv").length < 50 || !this.get("cv").match(/^[ 0-9a-z\u0106\u0107\u010C\u010D\u0110\u0111\u0160\u0161\u017D-\u017F\u212A\ \_\+\-\*\:\.\,\;\?\!\$\#\(\)\[\]\{\}\=\@]{1,500}$/im)) {
					ispravno = false;
					_cvError = true;
				}
			}

			if (!_tipError && this.get("tip") == "Poslodavac") {
				if (this.get("telefon") == null || !this.get("telefon").match(/^\d{9}$/) && !this.get("telefon").match(/^\d{8}$/)) {
					ispravno = false;
					_telefonError = true;
				}

				if (this.get("nazivFirme") == null || this.get("nazivFirme").replace(/\s/g, "").length < 1 || !this.get("nazivFirme").match(/^[ 0-9a-z\u0106\u0107\u010C\u010D\u0110\u0111\u0160\u0161\u017D-\u017F\u212A\-_\.]{2,30}$/i)) {
					ispravno = false;
					_firmaError = true;
				}
			}

			if (this.get("ime") == null || this.get("ime").length > 15 || this.get("ime").replace(/\s/g, "").length < 1 || !this.get("ime").match(/^[ a-z\u0106\u0107\u010C\u010D\u0110\u0111\u0160\u0161\u017D-\u017F\u212A\-]{2,30}$/i)) {
				ispravno = false;
				_imeError = true;
			}

			if (this.get("prezime") == null || this.get("prezime").length > 30 || this.get("prezime").replace(/\s/g, "").length < 1 || !this.get("prezime").match(/^[ a-z\u0106\u0107\u010C\u010D\u0110\u0111\u0160\u0161\u017D-\u017F\u212A\-]{2,30}$/i)) {
				ispravno = false;
				_prezimeError = true;
			}

			this.set("usernameError", _usernameError);
			this.set("passwordError", _passwordError);
			this.set("emailError", _emailError);
			this.set("telefonError", _telefonError);
			this.set("imeError", _imeError);
			this.set("prezimeError", _prezimeError);
			this.set("firmaError", _firmaError);
			this.set("cvError", _cvError);
			this.set("firmaError", _firmaError);
			this.set("tipError", _tipError);
			this.set("ponovljeniPassError", _ponovljeniPassError);

			return ispravno;
		},

		register: function register(korisnik) {
			var self = this;
			this.set("serverErrorText", "");

			this.get('korisnikService').register(korisnik).then(function (data) {
				self.set("serverSuccess", true);
				self.set("serverError", false);
				self.set("serverErrorText", "");
			}).catch(function (err) {
				self.set("serverError", true);
				self.set("serverSuccess", false);
				self.set("serverErrorText", err.responseText);
			});
		},

		actions: {
			register: function register() {
				var korisnik = this.getProperties('username', 'password', 'email');

				if (this.getProperties('tip').tip === "Nezaposleni") {
					var nezaposleni = this.getProperties('ime', 'prezime', 'cv');
					//nezaposleni.cv = this.cv;
					nezaposleni.privatanProfil = 0; //trenutno hardkodirano, treba promijeniti
					korisnik.poslodavac = null;
					korisnik.admin = null;
					korisnik.nezaposleni = nezaposleni;
				} else if (this.getProperties('tip').tip === "Poslodavac") {
					var poslodavac = this.getProperties('ime', 'prezime', 'telefon', 'nazivFirme');
					poslodavac.skriveniPodaci = {}; //trenutno hardkodirano, treba promijeniti
					korisnik.nezaposleni = null;
					korisnik.admin = null;
					korisnik.poslodavac = poslodavac;
				}

				if (this.validiraj()) {
					this.register(korisnik);
				}
			}
		}
	});
});
define('posao-fe/controllers/viewad', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        oglasiService: Ember.inject.service('oglasi-service'),
        session: Ember.inject.service(),
        noviDatumIsteka: null,
        prijavaSuccess: false,
        prijavaError: false,
        reopenSuccess: false,
        reopenError: false,
        zatvaranjeSuccess: false,
        zatvaranjeError: false,

        prijava: function prijava(korisnik, oglas) {
            var self = this;

            return this.get('oglasiService').prijava(korisnik, oglas).then(function (x) {
                self.set("prijavaSuccess", true);
                self.set("prijavaError", false);

                self.set("zatvaranjeSuccess", false);
                self.set("zatvaranjeError", false);
                self.set("reopenSuccess", false);
                self.set("reopenError", false);

                self.set("model.imaprijava", true);
            }).catch(function (err) {
                self.set("prijavaSuccess", false);
                self.set("prijavaError", true);

                self.set("zatvaranjeSuccess", false);
                self.set("zatvaranjeError", false);
                self.set("reopenSuccess", false);
                self.set("reopenError", false);
            });
        },

        delete: function _delete(oglasId) {
            return this.get('oglasiService').delete(oglasId);
        },

        zatvori: function zatvori(oglasId) {
            return this.get('oglasiService').zatvori(oglasId);
        },

        reopen: function reopen(oglasId, brojDana) {
            var self = this;
            if (isNaN(this.get("noviDatumIsteka")) || this.get("noviDatumIsteka") < 1 || !this.get("noviDatumIsteka").toString().match(/^\d+$/)) {
                self.set("datumError", true);
            } else {
                this.get('oglasiService').reopen(oglasId, brojDana).then(function (x) {
                    self.set("reopenSuccess", true);
                    self.set("reopenError", false);
                    self.set("datumError", false);
                    self.set("model.oglas.zatvoren", 0);

                    self.set("zatvaranjeSuccess", false);
                    self.set("zatvaranjeError", false);
                    self.set("prijavaSuccess", false);
                    self.set("prijavaError", false);
                }).catch(function (err) {
                    self.set("reopenError", true);
                    self.set("reopenSuccess", false);
                    self.set("datumError", false);

                    self.set("zatvaranjeSuccess", false);
                    self.set("zatvaranjeError", false);
                    self.set("prijavaSuccess", false);
                    self.set("prijavaError", false);
                });
            }
        },

        actions: {
            prijava: function prijava(oglasId) {
                var korisnikId = this.get("session.data.authenticated.userid");
                this.prijava(korisnikId, oglasId);
            },

            delete: function _delete() {
                var self = this;

                var oglasId = this.get("model.oglas.idOglasa");
                var potvrda = confirm("Jeste li sigurni da želite izbrisati oglas?");
                if (potvrda) {
                    this.delete(oglasId).then(function (x) {
                        alert("Uspješno izbrisan oglas");
                        self.transitionToRoute('index');
                    });
                }
            },

            zatvori: function zatvori() {
                var self = this;

                var oglasId = this.get("model.oglas.idOglasa");

                var potvrda = confirm("Jeste li sigurni da želite zatvoriti oglas?");

                if (potvrda) {
                    this.zatvori(oglasId).then(function (x) {
                        self.set('model.oglas.zatvoren', 1);
                        self.set("zatvaranjeSuccess", true);
                        self.set("zatvaranjeError", false);
                        self.set("reopenSuccess", false);
                        self.set("reopenError", false);
                        self.set("prijavaSuccess", false);
                        self.set("prijavaError", false);
                    }).catch(function (err) {
                        self.set("zatvaranjeSuccess", false);
                        self.set("zatvaranjeError", true);
                        self.set("reopenSuccess", false);
                        self.set("reopenError", false);
                        self.set("prijavaSuccess", false);
                        self.set("prijavaError", false);
                    });
                }
            },

            reopen: function reopen() {
                var oglasId = this.get("model.oglas.idOglasa");
                var noviDatum = this.get("noviDatumIsteka");
                this.reopen(oglasId, noviDatum);
            }
        }
    });
});
define('posao-fe/globals', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var getTimeAgo = function getTimeAgo(timestamp) {
    var date = new Date(timestamp);
    var seconds = Math.floor((new Date() - date) / 1000);

    // manje od minute
    if (seconds < 60) return 'Sada';

    // manje od sata
    if (seconds < 3600) return 'Prije ' + Math.floor(seconds / 60) + 'm';

    // manje od dana
    if (seconds < 86400) {
      return "Prije " + Math.floor(seconds / 3600) + 'h';
    }

    // manje od 2 dana
    if (seconds < 172800) return "Jučer";

    // vrati datum
    return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + '.';
  };

  exports.default = getTimeAgo;
});
define('posao-fe/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_and.andHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_and.andHelper);
  }

  exports.default = forExport;
});
define('posao-fe/helpers/app-version', ['exports', 'posao-fe/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('posao-fe/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('posao-fe/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('posao-fe/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_equal.equalHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_equal.equalHelper);
  }

  exports.default = forExport;
});
define('posao-fe/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gt.gtHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gt.gtHelper);
  }

  exports.default = forExport;
});
define('posao-fe/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gte.gteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gte.gteHelper);
  }

  exports.default = forExport;
});
define('posao-fe/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_isArray.isArrayHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_isArray.isArrayHelper);
  }

  exports.default = forExport;
});
define('posao-fe/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('posao-fe/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lt.ltHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lt.ltHelper);
  }

  exports.default = forExport;
});
define('posao-fe/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lte.lteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lte.lteHelper);
  }

  exports.default = forExport;
});
define("posao-fe/helpers/nezaposleni-helper", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  exports.default = Ember.Helper.helper(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        arg1 = _ref2[0];

    if (arg1) {
      if (arg1 === "Nezaposleni") {
        return false;
      }
    }

    return true;
  });
});
define('posao-fe/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_notEqual.notEqualHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_notEqual.notEqualHelper);
  }

  exports.default = forExport;
});
define('posao-fe/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_not.notHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_not.notHelper);
  }

  exports.default = forExport;
});
define('posao-fe/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_or.orHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_or.orHelper);
  }

  exports.default = forExport;
});
define('posao-fe/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define("posao-fe/helpers/poslodavac-helper", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  exports.default = Ember.Helper.helper(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        arg1 = _ref2[0];

    if (arg1) {
      if (arg1 === "Poslodavac") {
        return false;
      }
    }

    return true;
  });
});
define('posao-fe/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('posao-fe/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_xor.xorHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_xor.xorHelper);
  }

  exports.default = forExport;
});
define('posao-fe/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'posao-fe/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('posao-fe/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('posao-fe/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('posao-fe/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('posao-fe/initializers/ember-simple-auth', ['exports', 'posao-fe/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _environment, _configuration, _setupSession, _setupSessionService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize(registry) {
      var config = _environment.default['ember-simple-auth'] || {};
      config.baseURL = _environment.default.rootURL || _environment.default.baseURL;
      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
    }
  };
});
define('posao-fe/initializers/export-application-global', ['exports', 'posao-fe/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('posao-fe/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('posao-fe/initializers/load-bootstrap-config', ['exports', 'posao-fe/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('posao-fe/initializers/simple-auth-token', ['exports', 'ember-simple-auth-token/authenticators/token', 'ember-simple-auth-token/authenticators/jwt', 'ember-simple-auth-token/authorizers/token', 'ember-simple-auth-token/configuration', 'posao-fe/config/environment'], function (exports, _token, _jwt, _token2, _configuration, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth-token',
    before: 'ember-simple-auth',
    initialize: function initialize(container) {
      _configuration.default.load(container, _environment.default['ember-simple-auth-token'] || {});
      container.register('authorizer:token', _token2.default);
      container.register('authenticator:token', _token.default);
      container.register('authenticator:jwt', _jwt.default);
    }
  };
});
define('posao-fe/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('posao-fe/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('posao-fe/initializers/truth-helpers', ['exports', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _registerHelper, _and, _or, _equal, _not, _isArray, _notEqual, _gt, _gte, _lt, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (Ember.Helper) {
      return;
    }

    (0, _registerHelper.registerHelper)('and', _and.andHelper);
    (0, _registerHelper.registerHelper)('or', _or.orHelper);
    (0, _registerHelper.registerHelper)('eq', _equal.equalHelper);
    (0, _registerHelper.registerHelper)('not', _not.notHelper);
    (0, _registerHelper.registerHelper)('is-array', _isArray.isArrayHelper);
    (0, _registerHelper.registerHelper)('not-eq', _notEqual.notEqualHelper);
    (0, _registerHelper.registerHelper)('gt', _gt.gtHelper);
    (0, _registerHelper.registerHelper)('gte', _gte.gteHelper);
    (0, _registerHelper.registerHelper)('lt', _lt.ltHelper);
    (0, _registerHelper.registerHelper)('lte', _lte.lteHelper);
  }

  exports.default = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("posao-fe/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('posao-fe/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _setupSessionRestoration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize(instance) {
      (0, _setupSessionRestoration.default)(instance);
    }
  };
});
define('posao-fe/instance-initializers/session-injection', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "session-injection",
    after: 'ember-simple-auth',

    initialize: function initialize(appInstance) {
      appInstance.inject('route', 'session', 'service:session');
      /*    appInstance.inject('route', 'currentUser', 'service:current-user');
          appInstance.inject('controller', 'session', 'service:session');
          appInstance.inject('component', 'session', 'service:session');
          appInstance.inject('component', 'currentUser', 'service:current-user');
          appInstance.inject('service:current-user', 'session', 'service:session');*/
    }
  };
});
define('posao-fe/models/base-model', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Object.extend({
        modelProperties: [],

        getModelProperties: function getModelProperties() {
            return this.get('modelProperties');
        },

        serialize: function serialize() {
            var obj = {};
            var _modelProperties = this.getModelProperties();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _modelProperties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var property = _step.value;

                    obj[property] = this.get(property);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return JSON.stringify(obj);
        },

        deserialize: function deserialize() {}
    });
});
define('posao-fe/models/izvjestaj', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['brojOglasa', 'brojPoslodavaca', 'brojNezaposlenih', 'brojPrijava'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});
define('posao-fe/models/kategorija', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['idkategorije', 'naziv'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});
define('posao-fe/models/korisnik', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['idKorisnika', 'username', 'password', 'email', 'nezaposleni', 'admin', 'poslodavac'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});
define('posao-fe/models/lokacija', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['id', 'kanton', 'naziv'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});
define('posao-fe/models/nezaposleni', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['idKorisnika', 'ime', 'prezime', 'cv', 'privatanProfil'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});
define('posao-fe/models/oglas', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['idOglasa', 'poslodavac', 'lokacija', 'datumObjave', 'datumIsteka', 'kategorije', 'oglasPodaci', 'zatvoren', 'uspjesan', 'prioritet'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});
define('posao-fe/models/poruka', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['tekst', 'posiljalac', 'primalac'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});
define('posao-fe/models/poslodavac', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['idKorisnika', 'ime', 'prezime', 'nazivFirme', 'telefon', 'sakriveniPodaci'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});
define('posao-fe/models/template', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['id', 'naziv', 'poljaTemplatea'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});
define('posao-fe/models/wrappedboolean', ['exports', 'posao-fe/models/base-model'], function (exports, _baseModel) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var _modelProperties = ['bool'];

	exports.default = _baseModel.default.extend({
		modelProperties: _modelProperties
	});
});
define('posao-fe/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('posao-fe/router', ['exports', 'posao-fe/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('index', { path: '/' });
    this.route('registracija', { path: '/registracija' });
    this.route('login', { path: '/login' });
    this.route('personal-adverts', { path: '/moji-oglasi' });
    this.route('dodaj-oglas', { path: '/dodaj-oglas' });
    this.route('viewad', { path: '/ad/:id' });
    this.route('profile');
    this.route('kreiraj-template', { path: '/kreiraj-template' });
    this.route('edit-kategorije');
    this.route('outbox');
    this.route('pregled-notifikacija');
    this.route('pregled-korisnika');
    this.route('pregled-profila-public');

    this.route('unauthorized');
    this.route("error", { path: "*path" });
  });

  exports.default = Router;
});
define('posao-fe/routes/application', ['exports', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _applicationRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_applicationRouteMixin.default);
});
define('posao-fe/routes/dodaj-oglas', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		templateService: Ember.inject.service('template-service'),
		kategorijaService: Ember.inject.service(),
		lokacijaService: Ember.inject.service(),
		session: Ember.inject.service('session'),

		beforeModel: function beforeModel(transition) {

			if (!this.get('session.isAuthenticated') || this.get('session.data.authenticated.role') !== "ROLE_POSLODAVAC") {
				return this.transitionTo("unauthorized");
			}
		},

		model: function model(params, transition) {
			return Ember.RSVP.hash({
				templatei: this.get("templateService").all(),
				lokacije: this.get('lokacijaService').all(),
				kategorije: this.get('kategorijaService').all()

			});
		}
	});
});
define('posao-fe/routes/edit-kategorije', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		kategorijaService: Ember.inject.service('kategorija-service'),
		session: Ember.inject.service('session'),

		beforeModel: function beforeModel(transition) {
			if (!this.get('session.isAuthenticated') || this.get('session.data.authenticated.role') !== "ROLE_ADMIN") {
				return this.transitionTo("unauthorized");
			}
		},

		model: function model(params, transition) {
			return Ember.RSVP.hash({
				kategorije: this.get('kategorijaService').all()

			});
		}
	});
});
define('posao-fe/routes/error', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('posao-fe/routes/index', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = Ember.$;
	exports.default = Ember.Route.extend({

		oglasiService: Ember.inject.service(),
		kategorijaService: Ember.inject.service(),
		lokacijaService: Ember.inject.service(),
		session: Ember.inject.service(),

		model: function model(params, transition) {
			var _kategorije = this.get('kategorijaService').all();

			return Ember.RSVP.hash({
				oglasi: this.get('oglasiService').all(),
				lokacije: this.get('lokacijaService').all(),
				kategorije: _kategorije
			});
		}
	});
});
define('posao-fe/routes/kreiraj-template', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({

		beforeModel: function beforeModel(transition) {

			if (!this.get('session.isAuthenticated') || this.get('session.data.authenticated.role') !== "ROLE_ADMIN") {
				return this.transitionTo("unauthorized");
			}
		},

		model: function model(params, transition) {
			var _template = {};
			_template.naziv = "";
			_template.poljaTemplatea = [];

			return Ember.RSVP.hash({
				template: _template
			});
		}

	});
});
define('posao-fe/routes/outbox', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		porukeService: Ember.inject.service('poruke-service'),
		korisnikService: Ember.inject.service('korisnik-service'),
		session: Ember.inject.service('session'),

		profil: {},

		beforeModel: function beforeModel(transition) {
			if (!this.get('session.isAuthenticated') || this.get('session.data.authenticated.role') !== "ROLE_POSLODAVAC" && this.get('session.data.authenticated.role') !== "ROLE_NEZAPOSLENI") {
				return this.transitionTo("unauthorized");
			}
		},

		model: function model(params, transition) {
			var userid = this.get("session.data.authenticated.userid");
			var _poruke = this.get("porukeService").my(userid);

			return Ember.RSVP.hash({
				poruke: _poruke
			});
		}

	});
});
define('posao-fe/routes/personal-adverts', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		oglasiService: Ember.inject.service(),
		session: Ember.inject.service(),

		beforeModel: function beforeModel(transition) {
			if (!this.get('session.isAuthenticated') || this.get('session.data.authenticated.role') !== "ROLE_POSLODAVAC") {
				return this.transitionTo("unauthorized");
			}
		},

		model: function model(params, transition) {
			var id = this.get('session.data.authenticated.userid');
			var _oglasi = this.get('oglasiService').my(id);

			return Ember.RSVP.hash({
				oglasi: _oglasi
			});
		}
	});
});
define('posao-fe/routes/pregled-korisnika', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({

		korisnikService: Ember.inject.service('korisnik-service'),

		beforeModel: function beforeModel(transition) {
			if (!this.get('session.isAuthenticated') || this.get('session.data.authenticated.role') !== "ROLE_POSLODAVAC") {
				return this.transitionTo("unauthorized");
			}
		},

		model: function model(params, transition) {
			return Ember.RSVP.hash({
				korisnici: this.get("korisnikService").nezaposleni()
			});
		}
	});
});
define('posao-fe/routes/pregled-notifikacija', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		porukeService: Ember.inject.service('poruke-service'),
		korisnikService: Ember.inject.service('korisnik-service'),
		session: Ember.inject.service('session'),

		profil: {},

		beforeModel: function beforeModel(transition) {
			if (!this.get('session.isAuthenticated') || this.get('session.data.authenticated.role') !== "ROLE_POSLODAVAC" && this.get('session.data.authenticated.role') !== "ROLE_NEZAPOSLENI") {
				return this.transitionTo("unauthorized");
			}
			this.set("session.imaNeprocitanih", false);
		},

		model: function model(params, transition) {
			var userid = this.get("session.data.authenticated.userid");
			var _poruke = this.get("porukeService").all(userid);

			return Ember.RSVP.hash({
				poruke: _poruke
			});
		}

	});
});
define('posao-fe/routes/pregled-profila-public', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('posao-fe/routes/profile', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		korisnikService: Ember.inject.service('korisnik-service'),
		session: Ember.inject.service('session'),

		beforeModel: function beforeModel(transition) {

			if (!this.get('session.isAuthenticated')) {
				return this.transitionTo("unauthorized");
			}
		},

		model: function model(params, transition) {
			var username = this.get("session.data.authenticated.username");
			var _profil = this.get('korisnikService').profil(username);

			return Ember.RSVP.hash({
				profil: _profil
			});
		}
	});
});
define('posao-fe/routes/registracija', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		session: Ember.inject.service('session'),

		beforeModel: function beforeModel(transition) {
			if (this.get('session.isAuthenticated')) return this.transitionTo("unauthorized");
		}

	});
});
define('posao-fe/routes/unauthorized', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("posao-fe/routes/viewad", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    oglasiService: Ember.inject.service(),
    session: Ember.inject.service(),

    model: function model(params, transition) {
      var _userid = this.get("session.data.authenticated.userid");
      var _role = this.get("session.data.authenticated.role");

      var _imaprijava = null;

      if (_role === "ROLE_NEZAPOSLENI") {
        _imaprijava = this.get('oglasiService').imaprijava(_userid, params.id);
      }

      return Ember.RSVP.hash({
        oglas: this.get('oglasiService').details(params.id),
        userid: Number.parseInt(_userid),
        imaprijava: _imaprijava
      });
    }
  });
});
define('posao-fe/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.JSONSerializer.extend({});
});
define('posao-fe/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
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
define('posao-fe/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _cookies) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _cookies.default;
});
define('posao-fe/services/izvjestaj-service', ['exports', 'posao-fe/services/base-service', 'posao-fe/models/izvjestaj'], function (exports, _baseService, _izvjestaj) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _baseService.default.extend({

        get: function get() {
            var izvjestaj = _izvjestaj.default.create({});

            this.ajax({ url: 'izvjestaj/', type: "GET" }).then(function (data) {
                //izvjestaj.setProperties(data);
            });

            return izvjestaj;
        }
    });
});
define('posao-fe/services/kategorija-service', ['exports', 'posao-fe/services/base-service', 'posao-fe/models/kategorija'], function (exports, _baseService, _kategorija) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _baseService.default.extend({

        all: function all() {
            var kategorije = [];
            this.ajax({ url: 'kategorije/get/all', type: "GET" }).then(function (data) {
                data.forEach(function (kategorija) {
                    kategorije.addObject(_kategorija.default.create(kategorija));
                });
            });

            return kategorije;
        },

        update: function update(kategorija, kategorijaId) {
            return this.ajax({ url: 'kategorije/update?id=' + kategorijaId, type: "POST", data: JSON.stringify(kategorija) });
        },

        delete: function _delete(id) {
            return this.ajax({ url: 'kategorije/remove?id=' + id, type: "DELETE" });
        },

        add: function add(kategorija) {
            return this.ajax({ url: 'kategorije/add', type: "POST", data: JSON.stringify(kategorija) });
        }

    });
});
define('posao-fe/services/korisnik-service', ['exports', 'posao-fe/services/base-service', 'posao-fe/models/korisnik', 'posao-fe/models/nezaposleni', 'posao-fe/models/poslodavac', 'posao-fe/models/izvjestaj'], function (exports, _baseService, _korisnik, _nezaposleni, _poslodavac, _izvjestaj) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _baseService.default.extend({

        register: function register(korisnik) {
            return this.ajax({ url: 'korisnici/register', type: "POST", data: JSON.stringify(korisnik) });
        },

        profil: function profil(username) {
            var korisnik = _korisnik.default.create({});

            this.ajax({ url: 'korisnici/get/exact?name=' + username, type: "GET" }).then(function (data) {
                data.password = "";
                korisnik.setProperties(data);
            });

            return korisnik;
        },

        update: function update(korisnik, id) {
            return this.ajax({ url: 'korisnici/update?id=' + id, type: "POST", data: JSON.stringify(korisnik) });
        },

        delete: function _delete(korisnikid, korisnikPass) {
            return this.ajax({ url: 'korisnici/delete?id=' + korisnikid + '&pw=' + korisnikPass,
                type: "DELETE", data: JSON.stringify({}) });
        },

        izvjestaj: function izvjestaj() {
            var izvjestaj = _izvjestaj.default.create({});
            this.ajax({ url: 'izvjestaj', type: "GET" }).then(function (data) {
                izvjestaj.setProperties(data);
            });

            return izvjestaj;
        },

        all: function all() {
            var korisnici = [];
            this.ajax({ url: 'korisnici/get/all', type: "GET" }).then(function (data) {
                data.forEach(function (korisnik) {
                    korisnici.addObject(_korisnik.default.create(korisnik));
                });
            });

            return korisnici;
        },

        nezaposleni: function nezaposleni() {
            var korisnici = [];
            this.ajax({ url: 'korisnici/nezaposleni', type: "GET" }).then(function (data) {
                data.forEach(function (korisnik) {
                    korisnici.addObject(_korisnik.default.create(korisnik));
                });
            });

            return korisnici;
        }

    });
});
define('posao-fe/services/lokacija-service', ['exports', 'posao-fe/services/base-service', 'posao-fe/models/lokacija'], function (exports, _baseService, _lokacija) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _baseService.default.extend({

        all: function all() {
            var lokacije = [];
            this.ajax({ url: 'lokacije/get/all', type: "GET" }).then(function (data) {
                data.forEach(function (lokacija) {
                    lokacije.addObject(_lokacija.default.create(lokacija));
                });
            });

            return lokacije;
        }
    });
});
define('posao-fe/services/oglasi-service', ['exports', 'posao-fe/services/base-service', 'posao-fe/models/oglas', 'posao-fe/models/wrappedboolean', 'posao-fe/globals'], function (exports, _baseService, _oglas, _wrappedboolean, _globals) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _baseService.default.extend({

        all: function all() {
            var oglasi = [];
            //this.ajax({ url: `oglasi/all`, type: "GET"}).then(function(data) {
            this.ajax({ url: 'oglasi/search?asc=false', type: "GET" }).then(function (data) {
                data.forEach(function (oglas) {
                    oglas.datumObjave = (0, _globals.default)(oglas.datumObjave);
                    var date = new Date(oglas.datumIsteka);
                    oglas.datumIsteka = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + '.';

                    oglasi.addObject(_oglas.default.create(oglas));
                });
            });

            return oglasi;
        },

        details: function details(id) {
            var oglas = _oglas.default.create({});
            this.ajax({ url: 'oglasi/get?id=' + id, type: "GET" }).then(function (data) {
                oglas.datumObjave = (0, _globals.default)(oglas.datumObjave);
                oglas.setProperties(data);
            });
            return oglas;
        },

        imaprijava: function imaprijava(korisnik, oglas) {
            var wrappedboolean = _wrappedboolean.default.create({});
            this.ajax({ url: 'prijave/?korisnik=' + korisnik + '&oglas=' + oglas, type: "GET" }).then(function (data) {
                wrappedboolean.setProperties({ bool: data });
            });

            return wrappedboolean;
        },

        my: function my(id) {
            var oglasi = [];
            this.ajax({ url: 'oglasi/poslodavac?id=' + id, type: "GET" }).then(function (data) {
                data.forEach(function (oglas) {
                    oglas.datumObjave = (0, _globals.default)(oglas.datumObjave);
                    var date = new Date(oglas.datumIsteka);
                    oglas.datumIsteka = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + '.';

                    oglasi.addObject(_oglas.default.create(oglas));
                });
            });

            return oglasi;
        },

        postavi: function postavi(oglas) {
            return this.ajax({ url: 'oglasi/postavioglas', type: "POST", data: JSON.stringify(oglas) });
        },

        prijava: function prijava(userid, adid) {
            return this.ajax({ url: 'prijave/add?korisnik=' + userid + '&oglas=' + adid, type: "POST", data: {} });
        },

        zatvori: function zatvori(id) {
            return this.ajax({ url: 'oglasi/close?id=' + id, type: "POST", data: {} });
        },

        delete: function _delete(adid) {
            return this.ajax({ url: 'oglasi/remove?id=' + adid, type: "DELETE", data: {} });
        },

        reopen: function reopen(adid, days) {
            return this.ajax({ url: 'oglasi/reopen?id=' + adid + '&date=' + days, type: "POST", data: {} });
        },

        search: function search(name, kategorijaId, filter, asc) {
            var query = "oglasi/search?";

            if (kategorijaId !== null && filter !== null) {
                query = query + "idk=" + kategorijaId + "&idlok=" + filter;

                if (name !== null) {
                    query = query + "&name=" + name;
                }
            } else if (kategorijaId === null && filter !== null) {
                query = query + "idlok=" + filter;

                if (name !== null) {
                    query = query + "&name=" + name;
                }
            } else if (kategorijaId !== null && filter === null) {
                query = query + "idk=" + kategorijaId;

                if (name !== null) {
                    query = query + "&name=" + name;
                }
            } else if (name !== null) {
                query = query + "name=" + name;
            }

            if (asc) {
                if (name !== null || kategorijaId !== null || filter !== null) {
                    query = query + "&asc=true";
                } else query = query + "asc=true";
            }

            var oglasi = [];
            this.ajax({ url: query, type: "GET" }).then(function (data) {
                data.forEach(function (oglas) {
                    oglas.datumObjave = (0, _globals.default)(oglas.datumObjave);
                    var date = new Date(oglas.datumIsteka);
                    oglas.datumIsteka = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + '.';
                    oglasi.addObject(_oglas.default.create(oglas));
                });
            });

            return oglasi;
        }

    });
});
define('posao-fe/services/poruke-service', ['exports', 'posao-fe/services/base-service', 'posao-fe/models/poruka', 'posao-fe/globals'], function (exports, _baseService, _poruka, _globals) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _baseService.default.extend({

        all: function all(id) {
            var poruke = [];
            this.ajax({ url: 'poruke/get?recipient=' + id, type: "GET" }).then(function (data) {
                data.forEach(function (poruka) {
                    poruka.vrijeme = (0, _globals.default)(poruka.vrijeme);
                    poruke.addObject(_poruka.default.create(poruka));
                });
            });

            return poruke;
        },

        my: function my(id) {
            var poruke = [];
            this.ajax({ url: 'poruke/get/sender?sender=' + id, type: "GET" }).then(function (data) {
                data.forEach(function (poruka) {
                    poruka.vrijeme = (0, _globals.default)(poruka.vrijeme);
                    poruke.addObject(_poruka.default.create(poruka));
                });
            });

            return poruke;
        },

        send: function send(poruka) {
            return this.ajax({ url: 'poruke/send', type: "POST", data: JSON.stringify(poruka) });
        },

        getUnread: function getUnread(id) {
            return this.ajax({ url: 'poruke/unread?korisnik=' + id, type: "GET" });
        }
    });
});
define('posao-fe/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _session) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _session.default;
});
define('posao-fe/services/template-service', ['exports', 'posao-fe/services/base-service', 'posao-fe/models/template'], function (exports, _baseService, _template) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _baseService.default.extend({

        add: function add(template) {
            return this.ajax({ url: 'template/add', type: "POST", data: JSON.stringify(template) });
        },

        all: function all(template) {
            var templatei = [];
            this.ajax({ url: 'template/get/all', type: "GET" }).then(function (data) {
                data.forEach(function (template) {
                    templatei.addObject(_template.default.create(template));
                });
            });

            return templatei;
        }

    });
});
define('posao-fe/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _adaptive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _adaptive.default.extend();
});
define("posao-fe/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yeCr5UJ1", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"wrap\"],[13],[0,\"\\n  \"],[11,\"nav\",[]],[15,\"class\",\"navbar navbar-default\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container-fluid\"],[13],[0,\"\\n      \"],[4,\" Brand and toggle get grouped for better mobile display \"],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"navbar-header\"],[13],[0,\"\\n        \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"navbar-toggle collapsed\"],[15,\"data-toggle\",\"collapse\"],[15,\"data-target\",\"#bs-example-navbar-collapse-1\"],[15,\"aria-expanded\",\"false\"],[5,[\"action\"],[[28,[null]],\"collapse\"]],[13],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"sr-only\"],[13],[0,\"Toggle navigation\"],[14],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"icon-bar\"],[13],[14],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"icon-bar\"],[13],[14],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"icon-bar\"],[13],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"a\",[]],[15,\"href\",\"/\"],[15,\"class\",\"navbar-brand\"],[13],[0,\"Document management sistem\"],[14],[0,\"\\n      \"],[14],[0,\"\\n\\n      \"],[4,\" Collect the nav links, forms, and other content for toggling \"],[0,\"\\n      \"],[11,\"div\",[]],[16,\"class\",[26,[\"collapsedStr\"]],null],[15,\"id\",\"bs-example-navbar-collapse-1\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"navbar-form navbar-right\"],[13],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"dobrodosli\"],[13],[0,\"Dobro došli, \\n\"],[6,[\"link-to\"],[\"profile\"],[[\"class\"],[\"registracija-link\"]],{\"statements\":[[0,\"              \"],[1,[28,[\"session\",\"data\",\"authenticated\",\"username\"]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"             \\n          \"],[14],[0,\"\\n          \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default login-button\"],[5,[\"action\"],[[28,[null]],\"logout\"]],[13],[0,\"Odjava\"],[14],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[11,\"form\",[]],[15,\"class\",\"navbar-form navbar-right login-form\"],[5,[\"action\"],[[28,[null]],\"loginNormal\"],[[\"on\"],[\"submit\"]]],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"credentialsError\"]]],null,{\"statements\":[[0,\"            \"],[11,\"span\",[]],[15,\"class\",\"registracija-link\"],[15,\"style\",\"color: red !important;\"],[13],[0,\"Pogrešni pristupni podaci\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"          \"],[6,[\"link-to\"],[\"registracija\"],[[\"class\"],[\"registracija-link\"]],{\"statements\":[[0,\"Nemaš profil? Registruj se!\"]],\"locals\":[]},null],[0,\"\\n          \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n            \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Korisničko ime\",[28,[\"identification\"]]]]],false],[0,\"\\n          \"],[14],[0,\"\\n          \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n            \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"Lozinka\",[28,[\"password\"]]]]],false],[0,\"\\n          \"],[14],[0,\"\\n          \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"btn btn-default login-button\"],[13],[0,\"Prijava\"],[14],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"      \"],[14],[4,\" /.navbar-collapse \"],[0,\"\\n    \"],[14],[4,\" /.container-fluid \"],[0,\"\\n  \"],[14],[0,\"\\n  \"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "posao-fe/templates/application.hbs" } });
});
define('posao-fe/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("posao-fe/templates/error", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "N2NMRgra", "block": "{\"statements\":[[11,\"p\",[]],[13],[0,\"Pokušali ste pristupiti sadržaju koji ne postoji ili je došlo do greške.\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "posao-fe/templates/error.hbs" } });
});
define("posao-fe/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/N70iHIg", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"main-page\"],[13],[0,\"     \\n    \"],[11,\"div\",[]],[15,\"class\",\"img img-responsive pozadinaRegistracije cover-screen\"],[13],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n      \"],[11,\"form\",[]],[15,\"class\",\"distinct-page-form col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 col-lg-8 col-lg-offset-2 \"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 text-center\"],[13],[0,\"\\n          \"],[11,\"h1\",[]],[13],[0,\"Dobrodošli\"],[14],[0,\"\\n\\n          \"],[11,\"br\",[]],[13],[14],[0,\"\\n\\n          \"],[11,\"p\",[]],[13],[0,\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n\"],[11,\"h1\",[]],[13],[0,\"Welcome\"],[14],[0,\"\\n\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "posao-fe/templates/index.hbs" } });
});
define("posao-fe/templates/main", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1SAoR2Ex", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"main-page\"],[13],[0,\"\\n\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "posao-fe/templates/main.hbs" } });
});
define("posao-fe/templates/outbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jAC/OjaV", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"templatePage\"],[13],[0,\"\\n  \"],[4,\" Background Image \"],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"img img-responsive pozadinaPregledKorisnika cover-screen\"],[13],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n    \\t\"],[11,\"div\",[]],[15,\"class\",\"col-md-6 col-md-offset-3\"],[13],[0,\"\\n\\t\\t\\t\"],[11,\"table\",[]],[15,\"class\",\"table table-hover advert-table tamnijaPodloga\"],[13],[0,\"\\n\\t\\t\\t\\t\"],[11,\"tbody\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\",\"poruke\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\"],[11,\"tr\",[]],[15,\"class\",\"row \"],[13],[0,\"\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\"],[11,\"td\",[]],[15,\"class\",\"col-md-3 \"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"h4\",[]],[15,\"class\",\"title\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[1,[28,[\"poruka\",\"primalac\",\"username\"]],false],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t                \"],[11,\"p\",[]],[15,\"class\",\"desc\"],[13],[1,[28,[\"poruka\",\"vrijeme\"]],false],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\t\\n\\t\\t\\t\\t\\t\\t\"],[11,\"td\",[]],[15,\"class\",\"col-md-8 col-md-offset-1 \"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"br\",[]],[13],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"p\",[]],[15,\"class\",\"desc\"],[13],[1,[28,[\"poruka\",\"tekst\"]],false],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\t\\t\\t\\n\\t\\t\\t\\t\\t\"],[14],[0,\"\\t\\t\\t\\n\"]],\"locals\":[\"poruka\"]},null],[0,\"\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "posao-fe/templates/outbox.hbs" } });
});
define("posao-fe/templates/personal-adverts", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8glS6USO", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"main-page\"],[13],[0,\"     \\n\\t\"],[11,\"div\",[]],[15,\"class\",\"container-fluid\"],[13],[0,\"\\n\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"row row-eq-height\"],[13],[0,\"\\n\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"col-md-8 col-md-offset-2\"],[13],[0,\"\\n\\t\\t\\t\\t\"],[11,\"table\",[]],[15,\"class\",\"table table-hover advert-table\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\"],[11,\"tbody\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\",\"oglasi\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\"],[11,\"tr\",[]],[15,\"class\",\"row\"],[13],[0,\"\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"td\",[]],[15,\"class\",\"col-md-3\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[11,\"h4\",[]],[15,\"class\",\"title\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"viewad\",[28,[\"oglas\",\"idOglasa\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[1,[28,[\"oglas\",\"naziv\"]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\t\\t\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t                \"],[11,\"p\",[]],[15,\"class\",\"desc\"],[13],[1,[28,[\"oglas\",\"poslodavac\",\"nazivFirme\"]],false],[14],[0,\"\\n\\t\\t\\t\\t                \"],[11,\"p\",[]],[15,\"class\",\"desc\"],[13],[0,\"Objavljen: \"],[1,[28,[\"oglas\",\"datumObjave\"]],false],[14],[0,\"\\n\\t\\t\\t\\t                \"],[11,\"p\",[]],[15,\"class\",\"desc\"],[13],[0,\"Datum isteka: \"],[1,[28,[\"oglas\",\"datumIsteka\"]],false],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\t\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"td\",[]],[15,\"class\",\"col-md-8 col-md-offset-1\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[11,\"p\",[]],[15,\"class\",\"desc\"],[13],[1,[28,[\"oglas\",\"opis\"]],false],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\t\\t\\t\\n\"]],\"locals\":[\"oglas\"]},null],[0,\"\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\"],[14],[0,\"\\n\\t\"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "posao-fe/templates/personal-adverts.hbs" } });
});
define("posao-fe/templates/pregled-korisnika", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "N8uZSt9C", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"templatePage\"],[13],[0,\"\\n  \"],[4,\" Background Image \"],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"img img-responsive pozadinaPregledKorisnika cover-screen\"],[13],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n  \\n  \"],[11,\"div\",[]],[16,\"class\",[26,[\"modalClass\"]],null],[15,\"id\",\"myModal\"],[15,\"role\",\"dialog\"],[16,\"style\",[26,[\"modalStyle\"]],null],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"modal-dialog modal-lg\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"modal-content\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"modal-header\"],[13],[0,\"\\n          \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"close\"],[15,\"data-dismiss\",\"modal\"],[5,[\"action\"],[[28,[null]],\"sakrijModal\"]],[13],[0,\"×\"],[14],[0,\"\\n          \"],[11,\"h4\",[]],[15,\"class\",\"modal-title\"],[13],[0,\"Slanje poruke\"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"modal-body\"],[13],[0,\"\\n            \"],[1,[33,[\"textarea\"],null,[[\"class\",\"id\",\"value\"],[\"form-control\",\"inputPoruka\",[28,[\"poruka\",\"tekst\"]]]]],false],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"modal-footer\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"success\"]]],null,{\"statements\":[[0,\"          \"],[11,\"span\",[]],[13],[0,\"Poruka uspješno poslana.\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"serverError\"]]],null,{\"statements\":[[0,\"          \"],[11,\"span\",[]],[13],[0,\"Došlo je do greške.\"],[14],[0,\"\\n          \"],[11,\"span\",[]],[13],[1,[26,[\"serverErrorText\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"messageError\"]]],null,{\"statements\":[[0,\"          \"],[11,\"span\",[]],[13],[0,\"Morate unijeti poruku.\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n          \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-default\"],[15,\"data-dismiss\",\"modal\"],[5,[\"action\"],[[28,[null]],\"sakrijModal\"]],[13],[0,\"Close\"],[14],[0,\"\\n          \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-primary\"],[15,\"data-dismiss\",\"modal\"],[5,[\"action\"],[[28,[null]],\"send\"]],[13],[0,\"Pošalji\"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"col-md-6 col-md-offset-3\"],[13],[0,\"\\n      \"],[11,\"table\",[]],[15,\"class\",\"table table-hover advert-table tamnijaPodloga\"],[13],[0,\"\\n        \"],[11,\"tbody\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\",\"korisnici\"]]],null,{\"statements\":[[0,\"          \"],[11,\"tr\",[]],[15,\"class\",\"row \"],[13],[0,\"   \\n            \"],[11,\"td\",[]],[15,\"class\",\"col-md-3 \"],[13],[0,\"\\n              \"],[11,\"h4\",[]],[15,\"class\",\"title\"],[13],[0,\"\\n                  \"],[1,[28,[\"korisnik\",\"ime\"]],false],[0,\" \"],[1,[28,[\"korisnik\",\"prezime\"]],false],[0,\" \\n              \"],[14],[0,\"\\n                      \"],[11,\"p\",[]],[15,\"class\",\"desc\"],[13],[1,[28,[\"korisnik\",\"email\"]],false],[14],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"td\",[]],[15,\"class\",\"col-md-2\"],[13],[0,\"\\n                    \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default login-button\"],[5,[\"action\"],[[28,[null]],\"porukaPopout\",[28,[\"korisnik\",\"idKorisnika\"]]]],[13],[0,\"Pošalji poruku\"],[14],[0,\"\\n            \"],[14],[0,\"\\n            \"],[4,\"da se stavi ime, prezime i cv i tjt??\\n            btw ove se tabele moraju sredit jos pa zanemarite to\"],[0,\"   \\n          \"],[14],[0,\"     \\n\"]],\"locals\":[\"korisnik\"]},null],[0,\"        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "posao-fe/templates/pregled-korisnika.hbs" } });
});
define("posao-fe/templates/pregled-notifikacija", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CLXANC9c", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"templatePage\"],[13],[0,\"\\n  \"],[4,\" Background Image \"],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"img img-responsive pozadinaPregledKorisnika cover-screen\"],[13],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n    \\t\"],[11,\"div\",[]],[15,\"class\",\"col-md-6 col-md-offset-3\"],[13],[0,\"\\n\\t\\t\\t\"],[11,\"table\",[]],[15,\"class\",\"table table-hover advert-table tamnijaPodloga\"],[13],[0,\"\\n\\t\\t\\t\\t\"],[11,\"tbody\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\",\"poruke\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\"],[11,\"tr\",[]],[15,\"class\",\"row \"],[13],[0,\"\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\"],[11,\"td\",[]],[15,\"class\",\"col-md-3 \"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"h4\",[]],[15,\"class\",\"title\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[1,[28,[\"poruka\",\"posiljalac\",\"username\"]],false],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t                \"],[11,\"p\",[]],[15,\"class\",\"desc\"],[13],[1,[28,[\"poruka\",\"vrijeme\"]],false],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\t\\n\\t\\t\\t\\t\\t\\t\"],[11,\"td\",[]],[15,\"class\",\"col-md-8 col-md-offset-1 \"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"br\",[]],[13],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"p\",[]],[15,\"class\",\"desc\"],[13],[1,[28,[\"poruka\",\"tekst\"]],false],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\t\\t\\t\\n\\t\\t\\t\\t\\t\"],[14],[0,\"\\t\\t\\t\\n\"]],\"locals\":[\"poruka\"]},null],[0,\"\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "posao-fe/templates/pregled-notifikacija.hbs" } });
});
define("posao-fe/templates/pregled-profila-public", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TL10zkFq", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"templatePage\"],[13],[0,\"\\n  \"],[4,\" Background Image \"],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"img img-responsive pozadinaProfil cover-screen\"],[13],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 col-sm-10 col-sm-offset-0 col-md-6 col-md-offset-3 distinct-page-form tamnijaPodloga\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 text-center\"],[13],[0,\"\\n                \"],[11,\"h1\",[]],[13],[0,\"Pregled korisnika\"],[14],[0,\"\\n                \"],[11,\"hr\",[]],[15,\"class\",\"h-divider\"],[13],[14],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"form-horizontal col-xs-12\"],[13],[0,\"       \\n                \"],[11,\"div\",[]],[13],[0,\"\\n                  \\t\"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n                        \"],[11,\"label\",[]],[15,\"class\",\"col-sm-2 control-label\"],[13],[0,\"Ime:\"],[14],[0,\"\\n                        \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10 oglas-data\"],[13],[0,\"\\n                            \"],[11,\"p\",[]],[13],[1,[28,[\"model\",\"korisnik\",\"username\"]],false],[14],[0,\"\\n                        \"],[14],[0,\"\\n                    \"],[14],[0,\"  \\n                \"],[14],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "posao-fe/templates/pregled-profila-public.hbs" } });
});
define("posao-fe/templates/profile", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JeD39DF1", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"profilePage\"],[13],[0,\"\\n\\n    \"],[4,\" Background Image \"],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"img img-responsive pozadinaProfil cover-screen\"],[13],[14],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n\\n\"],[6,[\"if\"],[[33,[\"eq\"],[[28,[\"session\",\"data\",\"authenticated\",\"role\"]],\"ROLE_ADMIN\"],null]],null,{\"statements\":[[0,\"      \"],[11,\"div\",[]],[16,\"class\",[26,[\"modalClass\"]],null],[15,\"id\",\"myModal\"],[15,\"role\",\"dialog\"],[16,\"style\",[26,[\"modalStyle\"]],null],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"modal-dialog modal-lg\"],[13],[0,\"\\n          \"],[11,\"div\",[]],[15,\"class\",\"modal-content\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"modal-header\"],[13],[0,\"\\n              \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"close\"],[15,\"data-dismiss\",\"modal\"],[5,[\"action\"],[[28,[null]],\"sakrijModal\"]],[13],[0,\"×\"],[14],[0,\"\\n              \"],[11,\"h4\",[]],[15,\"class\",\"modal-title\"],[13],[0,\"Izvještaj\"],[14],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"modal-body\"],[13],[0,\"\\n              \"],[11,\"div\",[]],[13],[0,\"Ukupni broj oglasa: \"],[14],[0,\" \"],[11,\"div\",[]],[13],[1,[28,[\"izvjestaj\",\"brojOglasa\"]],false],[14],[0,\"\\n              \"],[11,\"div\",[]],[13],[0,\"Broj registrovanih poslodavaca: \"],[14],[0,\" \"],[11,\"div\",[]],[13],[1,[28,[\"izvjestaj\",\"brojOglasa\"]],false],[14],[0,\"\\n              \"],[11,\"div\",[]],[13],[0,\"Broj registrovanih nezaposlenih korisnika: \"],[14],[0,\" \"],[11,\"div\",[]],[13],[1,[28,[\"izvjestaj\",\"brojNezaposlenih\"]],false],[14],[0,\"\\n              \"],[11,\"div\",[]],[13],[0,\"Broj prijava na oglase: \"],[14],[0,\" \"],[11,\"div\",[]],[13],[1,[28,[\"izvjestaj\",\"brojPrijava\"]],false],[14],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"modal-footer\"],[13],[0,\"\\n              \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-default\"],[15,\"data-dismiss\",\"modal\"],[5,[\"action\"],[[28,[null]],\"sakrijModal\"]],[13],[0,\"Close\"],[14],[0,\"\\n            \"],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n      \"],[4,\" On Profile Delete Prompt Modal \"],[0,\"\\n      \"],[11,\"div\",[]],[16,\"class\",[26,[\"modalProfileDeleteClass\"]],null],[15,\"id\",\"myModal\"],[15,\"role\",\"dialog\"],[16,\"style\",[26,[\"modalProfileDeleteStyle\"]],null],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"modal-dialog modal-lg\"],[13],[0,\"\\n          \"],[11,\"form\",[]],[15,\"class\",\"modal-content\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"modal-header\"],[13],[0,\"\\n              \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"close\"],[15,\"data-dismiss\",\"modal\"],[5,[\"action\"],[[28,[null]],\"sakrijProfileDeleteModal\"]],[13],[0,\"\\n                ×\\n              \"],[14],[0,\"\\n              \"],[11,\"h4\",[]],[15,\"class\",\"modal-title\"],[13],[0,\"Brisanje profila\"],[14],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"modal-body\"],[13],[0,\"\\n              \"],[11,\"p\",[]],[13],[0,\"Ako ste sigurni da želite izbrisati svoj profil, u polje ispod unesite svoj password. Ova akcija se ne može poništiti.\"],[14],[0,\"\\n              \"],[11,\"div\",[]],[15,\"class\",\"form-horizontal\"],[13],[0,\"\\n              \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n                \"],[11,\"label\",[]],[15,\"for\",\"brisanjePassword\"],[15,\"class\",\"control-label col-sm-2\"],[13],[0,\"Password:\"],[14],[0,\"\\n                \"],[11,\"div\",[]],[15,\"class\",\"col-sm-3\"],[13],[0,\"\\n                  \"],[1,[33,[\"input\"],null,[[\"type\",\"id\",\"class\",\"value\",\"required\"],[\"password\",\"brisanjePassword\",\"form-control\",[28,[\"brisanjePass\"]],\"required\"]]],false],[0,\"\\n                  \"],[11,\"p\",[]],[15,\"style\",\"color:red !important;\"],[13],[0,\"\\n                  \"],[1,[26,[\"confirmationPasswordFailed\"]],false],[0,\"\\n                  \"],[14],[0,\"\\n                \"],[14],[0,\"\\n              \"],[14],[0,\"\\n              \"],[14],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"modal-footer\"],[13],[0,\"\\n              \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-default\"],[15,\"data-dismiss\",\"modal\"],[5,[\"action\"],[[28,[null]],\"sakrijProfileDeleteModal\"]],[13],[0,\"Odustani\"],[14],[0,\"\\n              \"],[11,\"input\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"btn btn-danger\"],[15,\"value\",\"Obriši račun\"],[5,[\"action\"],[[28,[null]],\"delete\"]],[13],[14],[0,\"\\n            \"],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n\\n\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[4,\" Left side \"],[0,\"\\n            \"],[11,\"form\",[]],[15,\"class\",\"col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 col-lg-5 col-lg-offset-1\"],[13],[0,\"\\n                \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 distinct-page-form\"],[13],[0,\"\\n                  \"],[11,\"div\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n                    \"],[11,\"h1\",[]],[13],[0,\"Pregled korisničkog računa\"],[14],[0,\"\\n                    \"],[11,\"p\",[]],[13],[0,\"Na ovoj stranici možete izmijeniti svoje lične podatke\"],[14],[0,\"\\n                    \"],[11,\"hr\",[]],[15,\"class\",\"h-divider\"],[13],[14],[0,\"\\n                  \"],[14],[0,\"\\n                  \"],[11,\"div\",[]],[13],[0,\"\\n                    \"],[11,\"div\",[]],[15,\"class\",\"form-group pomjereniTextBox\"],[13],[0,\"\\n                      \"],[11,\"label\",[]],[15,\"for\",\"inputPassword3_profil\"],[13],[0,\"Lozinka:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"passwordError\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Password mora imati minimalno 6 karaktera!\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                      \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"inputPassword3_profil\",\"Password\",[28,[\"model\",\"profil\",\"password\"]]]]],false],[0,\"\\n                    \"],[14],[0,\"\\n\\n                  \"],[11,\"div\",[]],[15,\"class\",\"form-group pomjereniTextBox\"],[13],[0,\"\\n                    \"],[11,\"label\",[]],[15,\"for\",\"inputPassword3_pon_profil\"],[13],[0,\"Ponovite lozinku:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"ponovljeniPassError\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Unosi lozinke se ne podudaraju.\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                    \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"inputPassword3_pon_profil\",\"Password\",[28,[\"ponovljeniPass\"]]]]],false],[0,\"\\n                  \"],[14],[0,\"\\n\\n                    \"],[11,\"div\",[]],[15,\"class\",\"form-group pomjereniTextBox\"],[13],[0,\"\\n                      \"],[11,\"label\",[]],[15,\"for\",\"inputEmail3_profil\"],[13],[0,\"Email:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"emailError\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Morate unijeti validan email!\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                      \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"email\",\"form-control\",\"inputEmail3_profil\",\"Email\",[28,[\"model\",\"profil\",\"email\"]]]]],false],[0,\"\\n                    \"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[null,\"model\",\"profil\",\"poslodavac\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"div\",[]],[15,\"class\",\"form-group pomjereniTextBox\"],[13],[0,\"\\n                      \"],[11,\"label\",[]],[15,\"for\",\"inputTelefon1_profil\"],[13],[0,\"Telefon:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"telefonError\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Morate unijeti telefon u formatu 661234567 ili 66123456!\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                      \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"inputTelefon1_profil\",\"123456789\",[28,[\"model\",\"profil\",\"poslodavac\",\"telefon\"]]]]],false],[0,\"\\n                    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[null,\"model\",\"profil\",\"nezaposleni\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"div\",[]],[15,\"class\",\"form-group pomjereniTextBox\"],[13],[0,\"\\n                      \"],[11,\"label\",[]],[15,\"for\",\"inputIme1_profil\"],[13],[0,\"Ime:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"imeError\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Morate unijeti ime!\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                      \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"inputIme1_profil\",\"Ime\",[28,[\"model\",\"profil\",\"nezaposleni\",\"ime\"]]]]],false],[0,\"\\n                    \"],[14],[0,\"\\n\\n\\n                    \"],[11,\"div\",[]],[15,\"class\",\"form-group pomjereniTextBox\"],[13],[0,\"\\n                      \"],[11,\"label\",[]],[15,\"for\",\"inputPrezime1_profil\"],[13],[0,\"Prezime:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"prezimeError\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Morate unijeti prezime!\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                      \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"inputPrezime1_profil\",\"Prezime\",[28,[\"model\",\"profil\",\"nezaposleni\",\"prezime\"]]]]],false],[0,\"\\n                    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[null,\"model\",\"profil\",\"poslodavac\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"div\",[]],[15,\"class\",\"form-group pomjereniTextBox\"],[13],[0,\"\\n                      \"],[11,\"label\",[]],[15,\"for\",\"inputIme1_profil\"],[13],[0,\"Ime:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"imeError\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Morate unijeti ime!\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                      \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"inputIme1_profilP\",\"Ime\",[28,[\"model\",\"profil\",\"poslodavac\",\"ime\"]]]]],false],[0,\"\\n                    \"],[14],[0,\"\\n\\n\\n                    \"],[11,\"div\",[]],[15,\"class\",\"form-group pomjereniTextBox\"],[13],[0,\"\\n                      \"],[11,\"label\",[]],[15,\"for\",\"inputPrezime1_profil\"],[13],[0,\"Prezime:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"prezimeError\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Morate unijeti prezime!\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                      \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"inputPrezime1_profilP\",\"Prezime\",[28,[\"model\",\"profil\",\"poslodavac\",\"prezime\"]]]]],false],[0,\"\\n                    \"],[14],[0,\"\\n\\n                    \"],[11,\"div\",[]],[15,\"class\",\"form-group pomjereniTextBox\"],[13],[0,\"\\n                      \"],[11,\"label\",[]],[15,\"for\",\"inputFirma1_profil\"],[13],[0,\"Firma:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"nazivFirmeError\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Morate unijeti firmu!\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                      \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"inputFirma1_profil\",\"Firma\",[28,[\"model\",\"profil\",\"poslodavac\",\"nazivFirme\"]]]]],false],[0,\"\\n                    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[null,\"model\",\"profil\",\"nezaposleni\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"div\",[]],[15,\"class\",\"form-group firma\"],[13],[0,\"\\n                      \"],[11,\"label\",[]],[15,\"for\",\"inputCV_profil\"],[13],[0,\"CV:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"cvError\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Morate unijeti CV!\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                      \"],[1,[33,[\"textarea\"],null,[[\"class\",\"id\",\"value\"],[\"form-control\",\"inputCV_profil\",[28,[\"model\",\"profil\",\"nezaposleni\",\"cv\"]]]]],false],[0,\"\\n                    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n                    \"],[11,\"div\",[]],[15,\"class\",\"form-group text-center\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"serverError\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Došlo je do greške prilikom ažuriranja profila.\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n                        \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[1,[26,[\"serverErrorText\"]],false],[14],[11,\"br\",[]],[13],[14],[0,\"\\n                        \"],[11,\"p\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"serverSuccess\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Uspješno ažuriran profil.\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                        \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"btn btn-success\"],[5,[\"action\"],[[28,[null]],\"update\"]],[13],[0,\"Spasi izmjene\"],[14],[0,\"\\n                    \"],[14],[0,\"\\n                  \"],[14],[0,\"\\n                \"],[14],[0,\"\\n            \"],[14],[0,\"\\n\\n            \"],[4,\" Right side \"],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-1\"],[13],[0,\"\\n                \"],[4,\" Generate Report Form \"],[0,\"\\n\"],[6,[\"if\"],[[33,[\"eq\"],[[28,[\"session\",\"data\",\"authenticated\",\"role\"]],\"ROLE_ADMIN\"],null]],null,{\"statements\":[[0,\"\\n                \"],[11,\"form\",[]],[15,\"class\",\"distinct-page-form col-xs-12\"],[13],[0,\"\\n                    \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 text-center\"],[13],[0,\"\\n                      \"],[11,\"h1\",[]],[13],[0,\"Generisanje izvještaja\"],[14],[0,\"\\n                      \"],[11,\"p\",[]],[13],[0,\"Kreirajte izvještaja stanja i uspjeha oglasa\"],[14],[0,\"\\n                      \"],[11,\"hr\",[]],[15,\"class\",\"h-divider\"],[13],[14],[0,\"\\n                    \"],[14],[0,\"\\n                    \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12\"],[13],[0,\"\\n                      \"],[11,\"div\",[]],[15,\"class\",\"form-group text-center\"],[13],[0,\"\\n                          \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"btn btn-success\"],[5,[\"action\"],[[28,[null]],\"report\"]],[13],[0,\"Generiši izvještaj\"],[14],[0,\"\\n                      \"],[14],[0,\"\\n                    \"],[14],[0,\"\\n                \"],[14],[0,\"\\n\\n\"]],\"locals\":[]},null],[0,\"                \"],[4,\" Delete Profile Form \"],[0,\"\\n                \"],[11,\"form\",[]],[15,\"class\",\"distinct-page-form col-xs-12\"],[13],[0,\"\\n                    \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 text-center\"],[13],[0,\"\\n                        \"],[11,\"h1\",[]],[13],[0,\"Brisanje korisničkog računa\"],[14],[0,\"\\n                        \"],[11,\"p\",[]],[13],[0,\"Da li zaista želite napustiti portal Posao.ba?\"],[14],[0,\"\\n                        \"],[11,\"hr\",[]],[15,\"class\",\"h-divider\"],[13],[14],[0,\"\\n                    \"],[14],[0,\"\\n\\n                    \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12\"],[13],[0,\"\\n                      \"],[11,\"div\",[]],[15,\"class\",\"form-group text-center\"],[13],[0,\"\\n                          \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"btn btn-danger\"],[5,[\"action\"],[[28,[null]],\"showProfileDeleteModal\"]],[13],[0,\"\\n                            Obriši račun\\n                          \"],[14],[0,\"\\n                      \"],[14],[0,\"\\n                    \"],[14],[0,\"\\n                \"],[14],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "posao-fe/templates/profile.hbs" } });
});
define("posao-fe/templates/registracija", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yhAf3Vkr", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"registrationPage\"],[13],[0,\"\\n\"],[4,\" Background Image \"],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"img img-responsive pozadinaRegistracije cover-screen\"],[13],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n      \"],[11,\"form\",[]],[15,\"class\",\"distinct-page-form col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 col-lg-8 col-lg-offset-2 \"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 text-center\"],[13],[0,\"\\n          \"],[11,\"h1\",[]],[13],[0,\"Kreiranje korisničkog računa\"],[14],[0,\"\\n          \"],[4,\"<p>i<i>The expert in anything was once a begginer</i></p>,\"],[0,\"\\n          \"],[11,\"hr\",[]],[15,\"class\",\"h-divider\"],[13],[14],[0,\"\\n        \"],[14],[0,\"\\n\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12\"],[13],[0,\"\\n\\n           \"],[11,\"div\",[]],[15,\"class\",\"form-group pomjereniTextBox\"],[13],[0,\"\\n            \"],[11,\"label\",[]],[15,\"for\",\"inputIme1\"],[13],[0,\"Ime i prezime:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"imeError\"]]],null,{\"statements\":[[0,\"            \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Ime se može sastojati samo od slova i znaka -!\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"            \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"inputIme1\",\"Ime\",[28,[\"ime\"]]]]],false],[0,\"\\n\\n          \"],[14],[0,\"\\n          \"],[11,\"div\",[]],[15,\"class\",\"form-group pomjereniTextBox\"],[13],[0,\"\\n            \"],[11,\"label\",[]],[15,\"for\",\"inputUsername1\"],[13],[0,\"Korisničko ime:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"usernameError\"]]],null,{\"statements\":[[0,\"            \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[1,[26,[\"imeVarijable\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"            \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"inputUsername1\",\"Username\",[28,[\"username\"]]]]],false],[0,\"\\n          \"],[14],[0,\"\\n\\n          \"],[11,\"div\",[]],[15,\"class\",\"form-group pomjereniTextBox\"],[13],[0,\"\\n            \"],[11,\"label\",[]],[15,\"for\",\"inputPassword3\"],[13],[0,\"Lozinka:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"passwordError\"]]],null,{\"statements\":[[0,\"            \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Password mora imati minimalno 6 karaktera i to samo slova, brojeve i znakove +-_*:.,;?!$#!\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"            \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"inputPassword3\",\"Password\",[28,[\"password\"]]]]],false],[0,\"\\n          \"],[14],[0,\"\\n\\n          \"],[11,\"div\",[]],[15,\"class\",\"form-group pomjereniTextBox\"],[13],[0,\"\\n            \"],[11,\"label\",[]],[15,\"for\",\"inputEmail3\"],[13],[0,\"Email:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"emailError\"]]],null,{\"statements\":[[0,\"            \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Morate unijeti validan email!\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"            \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"email\",\"form-control\",\"inputEmail3\",\"Email\",[28,[\"email\"]]]]],false],[0,\"\\n          \"],[14],[0,\"\\n\\n          \"],[11,\"div\",[]],[15,\"class\",\"form-group pomjereniTextBox\"],[13],[0,\"\\n            \"],[11,\"label\",[]],[15,\"for\",\"inputPassword3_pon\"],[13],[0,\"Ponovite lozinku:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"ponovljeniPassError\"]]],null,{\"statements\":[[0,\"            \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Unosi lozinke se ne podudaraju.\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"            \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"inputPassword3_pon\",\"Password\",[28,[\"ponovljeniPass\"]]]]],false],[0,\"\\n          \"],[14],[0,\"\\n          \\n\"],[6,[\"if\"],[[28,[\"serverSuccess\"]]],null,{\"statements\":[[0,\"            \"],[11,\"p\",[]],[13],[0,\"Uspješno ste registrovani!\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"serverError\"]]],null,{\"statements\":[[0,\"            \"],[11,\"p\",[]],[13],[0,\"Nažalost, došlo je do greške prilikom registracije.\"],[14],[0,\"\\n            \"],[11,\"p\",[]],[13],[1,[26,[\"serverErrorText\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                    \\n          \"],[11,\"div\",[]],[15,\"class\",\"form-group text-center\"],[13],[0,\"\\n              \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"btn btn-success\"],[5,[\"action\"],[[28,[null]],\"register\"]],[13],[0,\"Registruj se\"],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "posao-fe/templates/registracija.hbs" } });
});
define("posao-fe/templates/viewad", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "X/nqDCmL", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"viewadPage\"],[13],[0,\"\\n\\n    \"],[4,\" Background Image \"],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"img img-responsive pozadinaPregledOglasa cover-screen\"],[13],[14],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row \"],[13],[0,\"\\n            \"],[4,\" Left side \"],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 col-sm-10 col-sm-offset-0 col-md-7 col-md-offset-0 distinct-page-form\"],[13],[0,\"\\n                \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 text-center\"],[13],[0,\"\\n                    \"],[11,\"h1\",[]],[13],[0,\"Pregled oglasa\"],[14],[0,\"\\n                    \"],[11,\"h2\",[]],[13],[1,[28,[\"model\",\"oglas\",\"naziv\"]],false],[14],[0,\"\\n                    \"],[11,\"hr\",[]],[15,\"class\",\"h-divider\"],[13],[14],[0,\"\\n                \"],[14],[0,\"\\n\\n                \"],[11,\"div\",[]],[15,\"class\",\"form-horizontal col-xs-12\"],[13],[0,\"\\n                    \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n                        \"],[11,\"label\",[]],[15,\"class\",\"col-sm-2 control-label\"],[13],[0,\"Kategorija:\"],[14],[0,\"\\n                        \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10 oglas-data\"],[13],[0,\"\\n                            \"],[11,\"p\",[]],[13],[1,[28,[\"model\",\"oglas\",\"kategorije\",\"naziv\"]],false],[14],[0,\"\\n                        \"],[14],[0,\"\\n                    \"],[14],[0,\"     \\n                    \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n                        \"],[11,\"label\",[]],[15,\"class\",\"col-sm-2 control-label\"],[13],[0,\"Opis oglasa:\"],[14],[0,\"\\n                        \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10 oglas-data\"],[13],[0,\"\\n                            \"],[11,\"p\",[]],[13],[1,[28,[\"model\",\"oglas\",\"opis\"]],false],[14],[0,\"\\n                        \"],[14],[0,\"\\n                    \"],[14],[0,\"\\n\\n                    \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n                        \"],[11,\"label\",[]],[15,\"class\",\"col-sm-2 control-label\"],[13],[0,\"Otvoren:\"],[14],[0,\"\\n                        \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10 oglas-data\"],[13],[0,\"\\n\\n\"],[6,[\"if\"],[[33,[\"eq\"],[[28,[\"model\",\"oglas\",\"zatvoren\"]],0],null]],null,{\"statements\":[[0,\"                            \"],[11,\"p\",[]],[13],[0,\"Da\"],[14],[0,\"\\n\"],[6,[\"if\"],[[33,[\"eq\"],[[28,[\"model\",\"userid\"]],[28,[\"model\",\"oglas\",\"poslodavac\",\"idKorisnika\"]]],null]],null,{\"statements\":[[0,\"                            \"],[11,\"div\",[]],[15,\"class\",\"form-group text-center\"],[13],[0,\"\\n                                \"],[6,[\"if\"],[[28,[\"zatvaranjeSuccess\"]]],null,{\"statements\":[[11,\"p\",[]],[13],[0,\"Uspješno ste zatvorili oglas!\"],[14]],\"locals\":[]},null],[0,\"\\n                                \"],[6,[\"if\"],[[28,[\"zatvaranjeError\"]]],null,{\"statements\":[[11,\"p\",[]],[13],[0,\"Došlo je do greške prilikom.\"],[14]],\"locals\":[]},null],[0,\"\\n                                \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default login-button\"],[5,[\"action\"],[[28,[null]],\"zatvori\"]],[13],[0,\"Zatvori\"],[14],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n                            \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                          \\n\"]],\"locals\":[]},{\"statements\":[[0,\"                            \"],[11,\"p\",[]],[13],[0,\"Ne\"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"                        \"],[14],[0,\"\\n                    \"],[14],[0,\"\\n                        \"],[6,[\"if\"],[[28,[\"prijavaSuccess\"]]],null,{\"statements\":[[11,\"p\",[]],[13],[0,\"Uspješno ste prijavljeni na oglas!\"],[14]],\"locals\":[]},null],[0,\"\\n                        \"],[6,[\"if\"],[[28,[\"prijavaError\"]]],null,{\"statements\":[[11,\"p\",[]],[13],[0,\"Došlo je do greške prilikom prijave.\"],[14]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[33,[\"eq\"],[[28,[\"model\",\"imaprijava\",\"bool\"]],false],null]],null,{\"statements\":[[6,[\"if\"],[[33,[\"eq\"],[[28,[\"model\",\"oglas\",\"zatvoren\"]],0],null]],null,{\"statements\":[[0,\"                        \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default login-button\"],[5,[\"action\"],[[28,[null]],\"prijava\",[28,[\"model\",\"oglas\",\"idOglasa\"]]]],[13],[0,\"Prijavi se\"],[14],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[6,[\"if\"],[[33,[\"eq\"],[[28,[\"session\",\"data\",\"authenticated\",\"role\"]],\"ROLE_NEZAPOSLENI\"],null]],null,{\"statements\":[[6,[\"if\"],[[33,[\"eq\"],[[28,[\"model\",\"imaprijava\",\"bool\"]],true],null]],null,{\"statements\":[[0,\"                        Već ste prijavljeni ste na ovaj oglas.\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"                            \\n                    \"],[11,\"div\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\",\"oglas\",\"oglasPodaci\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n                            \"],[11,\"label\",[]],[15,\"class\",\"col-sm-2 control-label\"],[13],[1,[28,[\"podatak\",\"staje\"]],false],[0,\":\"],[14],[0,\"\\n                            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10 oglas-data\"],[13],[0,\"\\n                                \"],[11,\"p\",[]],[13],[1,[28,[\"podatak\",\"vrijednost\"]],false],[14],[0,\"\\n                            \"],[14],[0,\"\\n                        \"],[14],[0,\"\\n\"]],\"locals\":[\"podatak\"]},null],[0,\"                    \"],[14],[0,\"\\n                \"],[14],[0,\"\\n            \"],[14],[0,\"\\n            \"],[4,\" Right side \"],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 col-sm-10 col-sm-offset-0 col-md-4 col-md-offset-1\"],[13],[0,\"\\n                \"],[4,\" Obnova oglasa \"],[0,\"\\n\"],[6,[\"if\"],[[33,[\"eq\"],[[28,[\"model\",\"userid\"]],[28,[\"model\",\"oglas\",\"poslodavac\",\"idKorisnika\"]]],null]],null,{\"statements\":[[6,[\"if\"],[[33,[\"eq\"],[[28,[\"model\",\"oglas\",\"zatvoren\"]],1],null]],null,{\"statements\":[[0,\"                \"],[11,\"div\",[]],[15,\"class\",\"distinct-page-form col-xs-12\"],[13],[0,\"\\n                  \"],[11,\"div\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n                    \"],[11,\"h1\",[]],[13],[0,\"Obnavljanje oglasa\"],[14],[0,\"\\n                    \"],[11,\"hr\",[]],[15,\"class\",\"h-divider\"],[13],[14],[0,\"\\n                    \"],[11,\"p\",[]],[13],[0,\"Odredite na koliko dana želite produžiti otvorenost oglasa. Obnavljanje se vrši u odnosu na današnji datum.\"],[14],[0,\"\\n                  \"],[14],[0,\"\\n                  \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n                      \"],[11,\"label\",[]],[15,\"for\",\"inputDateTime\"],[13],[0,\"Broj dana:\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"datumError\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Trebate unijeti broj dana kao pozitivan cijeli broj.\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"reopenError\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Došlo je do greške prilikom obnavljanja oglasa.\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"reopenSuccess\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"span\",[]],[15,\"class\",\"greskaUnosa\"],[13],[0,\"Uspješno obnovljen oglas!\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n                      \"],[11,\"div\",[]],[15,\"class\",\"input-group date\"],[15,\"id\",\"inputDateTime\"],[13],[0,\"\\n                          \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"value\"],[\"number\",\"form-control\",[28,[\"noviDatumIsteka\"]]]]],false],[0,\"\\n                          \"],[11,\"span\",[]],[15,\"class\",\"input-group-addon\"],[13],[0,\"\\n                              \"],[11,\"i\",[]],[15,\"class\",\"glyphicon glyphicon-calendar\"],[13],[14],[0,\"\\n                          \"],[14],[0,\"\\n                      \"],[14],[0,\"\\n                  \"],[14],[0,\"\\n                  \"],[11,\"div\",[]],[15,\"class\",\"form-group text-center\"],[13],[0,\"\\n                    \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-success\"],[5,[\"action\"],[[28,[null]],\"reopen\"]],[13],[0,\"Obnovi\"],[14],[0,\"\\n                  \"],[14],[0,\"\\n                \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},{\"statements\":[[0,\"                \"],[11,\"div\",[]],[15,\"class\",\"distinct-page-form col-xs-12\"],[13],[0,\"\\n                    \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 text-center\"],[13],[0,\"\\n                        \"],[11,\"h1\",[]],[13],[0,\"Podaci o poslodavcu\"],[14],[0,\"\\n                        \"],[11,\"hr\",[]],[15,\"class\",\"h-divider\"],[13],[14],[0,\"\\n                    \"],[14],[0,\"\\n                    \"],[11,\"form\",[]],[15,\"class\",\"form-horizontal col-xs-12\"],[13],[0,\"\\n                        \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n                            \"],[11,\"label\",[]],[15,\"class\",\"col-sm-3 control-label\"],[13],[0,\"Poslodavac:\"],[14],[0,\"\\n                            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-9 oglas-data\"],[13],[0,\"\\n                                \"],[11,\"p\",[]],[13],[1,[28,[\"model\",\"oglas\",\"poslodavac\",\"nazivFirme\"]],false],[14],[0,\"\\n                            \"],[14],[0,\"\\n                        \"],[14],[0,\"\\n                            \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n                                \"],[11,\"label\",[]],[15,\"class\",\"col-sm-3 control-label\"],[13],[0,\"Kontakt:\"],[14],[0,\"\\n                                \"],[11,\"div\",[]],[15,\"class\",\"col-sm-9 oglas-data\"],[13],[0,\"\\n                                    \"],[11,\"p\",[]],[13],[1,[28,[\"model\",\"oglas\",\"poslodavac\",\"telefon\"]],false],[14],[0,\"\\n                            \"],[14],[0,\"\\n                        \"],[14],[0,\"\\n                    \"],[14],[0,\"\\n                \"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"\\n                \"],[4,\" Brisanje oglasa \"],[0,\"\\n\"],[6,[\"if\"],[[33,[\"eq\"],[[28,[\"session\",\"data\",\"authenticated\",\"role\"]],\"ROLE_ADMIN\"],null]],null,{\"statements\":[[0,\"                \"],[11,\"div\",[]],[15,\"class\",\"distinct-page-form col-xs-12\"],[13],[0,\"\\n                  \"],[11,\"div\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n                    \"],[11,\"h1\",[]],[13],[0,\"Brisanje oglasa\"],[14],[0,\"\\n                    \"],[11,\"hr\",[]],[15,\"class\",\"h-divider\"],[13],[14],[0,\"\\n                  \"],[14],[0,\"\\n                  \"],[11,\"div\",[]],[15,\"class\",\"form-group text-center\"],[13],[0,\"\\n                    \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-danger\"],[5,[\"action\"],[[28,[null]],\"delete\"]],[13],[0,\"Obriši\"],[14],[0,\"\\n                  \"],[14],[0,\"\\n                \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "posao-fe/templates/viewad.hbs" } });
});


define('posao-fe/config/environment', ['ember'], function(Ember) {
  var prefix = 'posao-fe';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("posao-fe/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"posao-fe","version":"0.0.0+"});
}
//# sourceMappingURL=posao-fe.map
