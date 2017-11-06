'use strict';

define('posao-fe/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass ESLint\n\n16:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n19:58 - \'value\' is defined but never used. (no-unused-vars)\n24:42 - \'reason\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/dodaj-oglas.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/dodaj-oglas.js should pass ESLint\n\n118:13 - \'trajanjeOglasa\' is already defined. (no-redeclare)\n122:55 - \'x\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/edit-kategorije.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/edit-kategorije.js should pass ESLint\n\n24:60 - \'x\' is defined but never used. (no-unused-vars)\n38:78 - \'x\' is defined but never used. (no-unused-vars)\n53:66 - \'x\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/kreiraj-template.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/kreiraj-template.js should pass ESLint\n\n51:56 - \'x\' is defined but never used. (no-unused-vars)\n56:18 - \'x\' is defined but never used. (no-unused-vars)\n59:41 - \'err\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/pregled-korisnika.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/pregled-korisnika.js should pass ESLint\n\n2:8 - \'Korisnik\' is defined but never used. (no-unused-vars)\n20:65 - \'res\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/profile.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/profile.js should pass ESLint\n\n121:63 - \'x\' is defined but never used. (no-unused-vars)\n164:69 - \'x\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/registracija.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/registracija.js should pass ESLint\n\n85:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n127:61 - \'data\' is defined but never used. (no-unused-vars)\n128:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n129:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n133:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n134:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n141:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n162:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('controllers/viewad.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/viewad.js should pass ESLint\n\n17:72 - \'x\' is defined but never used. (no-unused-vars)\n26:56 - \'err\' is defined but never used. (no-unused-vars)\n52:69 - \'x\' is defined but never used. (no-unused-vars)\n63:22 - \'err\' is defined but never used. (no-unused-vars)\n79:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n82:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n84:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n87:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n90:43 - \'x\' is defined but never used. (no-unused-vars)\n95:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n105:44 - \'x\' is defined but never used. (no-unused-vars)\n113:26 - \'err\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'globals.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/nezaposleni-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/nezaposleni-helper.js should pass ESLint\n\n5:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('helpers/poslodavac-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/poslodavac-helper.js should pass ESLint\n\n5:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('instance-initializers/session-injection.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'instance-initializers/session-injection.js should pass ESLint\n\n1:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('models/base-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/base-model.js should pass ESLint\n\n');
  });

  QUnit.test('models/izvjestaj.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/izvjestaj.js should pass ESLint\n\n1:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('models/kategorija.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/kategorija.js should pass ESLint\n\n1:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('models/korisnik.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/korisnik.js should pass ESLint\n\n1:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('models/lokacija.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/lokacija.js should pass ESLint\n\n1:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('models/nezaposleni.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/nezaposleni.js should pass ESLint\n\n1:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('models/oglas.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/oglas.js should pass ESLint\n\n1:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('models/poruka.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/poruka.js should pass ESLint\n\n1:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('models/poslodavac.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/poslodavac.js should pass ESLint\n\n1:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('models/template.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/template.js should pass ESLint\n\n1:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('models/wrappedboolean.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/wrappedboolean.js should pass ESLint\n\n1:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/dodaj-oglas.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/dodaj-oglas.js should pass ESLint\n\n9:24 - \'transition\' is defined but never used. (no-unused-vars)\n16:26 - \'transition\' is defined but never used. (no-unused-vars)\n18:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n19:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n22:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('routes/edit-kategorije.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/edit-kategorije.js should pass ESLint\n\n7:24 - \'transition\' is defined but never used. (no-unused-vars)\n13:26 - \'transition\' is defined but never used. (no-unused-vars)\n17:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('routes/error.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/error.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass ESLint\n\n2:8 - \'$\' is defined but never used. (no-unused-vars)\n11:26 - \'transition\' is defined but never used. (no-unused-vars)\n14:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n15:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n16:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n17:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n18:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('routes/kreiraj-template.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/kreiraj-template.js should pass ESLint\n\n5:24 - \'transition\' is defined but never used. (no-unused-vars)\n12:26 - \'transition\' is defined but never used. (no-unused-vars)\n18:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n19:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('routes/outbox.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/outbox.js should pass ESLint\n\n10:24 - \'transition\' is defined but never used. (no-unused-vars)\n16:26 - \'transition\' is defined but never used. (no-unused-vars)\n21:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n22:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('routes/personal-adverts.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/personal-adverts.js should pass ESLint\n\n8:24 - \'transition\' is defined but never used. (no-unused-vars)\n14:26 - \'transition\' is defined but never used. (no-unused-vars)\n18:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n19:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n20:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('routes/pregled-korisnika.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/pregled-korisnika.js should pass ESLint\n\n7:24 - \'transition\' is defined but never used. (no-unused-vars)\n13:26 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/pregled-notifikacija.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/pregled-notifikacija.js should pass ESLint\n\n10:24 - \'transition\' is defined but never used. (no-unused-vars)\n17:26 - \'transition\' is defined but never used. (no-unused-vars)\n22:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n23:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('routes/pregled-profila-public.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pregled-profila-public.js should pass ESLint\n\n');
  });

  QUnit.test('routes/profile.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/profile.js should pass ESLint\n\n7:24 - \'transition\' is defined but never used. (no-unused-vars)\n15:26 - \'transition\' is defined but never used. (no-unused-vars)\n20:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n21:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('routes/registracija.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/registracija.js should pass ESLint\n\n6:24 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/unauthorized.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/unauthorized.js should pass ESLint\n\n');
  });

  QUnit.test('routes/viewad.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/viewad.js should pass ESLint\n\n7:26 - \'transition\' is defined but never used. (no-unused-vars)\n17:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n18:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n19:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n20:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n21:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('services/base-service.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/base-service.js should pass ESLint\n\n12:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n13:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n14:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('services/izvjestaj-service.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/izvjestaj-service.js should pass ESLint\n\n9:64 - \'data\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('services/kategorija-service.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/kategorija-service.js should pass ESLint\n\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n9:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n10:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n11:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('services/korisnik-service.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/korisnik-service.js should pass ESLint\n\n3:8 - \'Nezaposleni\' is defined but never used. (no-unused-vars)\n4:8 - \'Poslodavac\' is defined but never used. (no-unused-vars)\n16:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n18:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n19:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('services/lokacija-service.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/lokacija-service.js should pass ESLint\n\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n10:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n11:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n12:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('services/oglasi-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/oglasi-service.js should pass ESLint\n\n');
  });

  QUnit.test('services/poruke-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/poruke-service.js should pass ESLint\n\n');
  });

  QUnit.test('services/template-service.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/template-service.js should pass ESLint\n\n10:19 - \'template\' is defined but never used. (no-unused-vars)\n11:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });
});
define('posao-fe/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('posao-fe/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _test) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;


  var TEST_CONTAINER_KEY = 'authenticator:test'; /* global wait */

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _test.default);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }
});
define('posao-fe/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'posao-fe/tests/helpers/start-app', 'posao-fe/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var Promise = Ember.RSVP.Promise;
});
define('posao-fe/tests/helpers/resolver', ['exports', 'posao-fe/resolver', 'posao-fe/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('posao-fe/tests/helpers/start-app', ['exports', 'posao-fe/app', 'posao-fe/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('posao-fe/tests/test-helper', ['posao-fe/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('posao-fe/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/main-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/main-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/dodaj-oglas-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/dodaj-oglas-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-kategorije-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-kategorije-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/main-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/main-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/pregled-korisnika-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pregled-korisnika-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/pregled-notifikacija-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pregled-notifikacija-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/pregled-profila-public-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pregled-profila-public-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/profile-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/profile-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/viewad-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/viewad-test.js should pass ESLint\n\n');
  });
});
define('posao-fe/tests/unit/models/main-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('main', 'Unit | Model | main', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posao-fe/tests/unit/routes/dodaj-oglas-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:dodaj-oglas', 'Unit | Route | dodaj oglas', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('posao-fe/tests/unit/routes/edit-kategorije-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:/edit-kategorije', 'Unit | Route | /edit kategorije', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('posao-fe/tests/unit/routes/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('posao-fe/tests/unit/routes/main-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:main', 'Unit | Route | main', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('posao-fe/tests/unit/routes/pregled-korisnika-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:/pregled-korisnika', 'Unit | Route | /pregled korisnika', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('posao-fe/tests/unit/routes/pregled-notifikacija-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:/pregled-notifikacija', 'Unit | Route | /pregled notifikacija', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('posao-fe/tests/unit/routes/pregled-profila-public-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:/pregled-profila-public', 'Unit | Route | /pregled profila public', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('posao-fe/tests/unit/routes/profile-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:profile', 'Unit | Route | profile', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('posao-fe/tests/unit/routes/viewad-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:viewad', 'Unit | Route | viewad', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('posao-fe/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
