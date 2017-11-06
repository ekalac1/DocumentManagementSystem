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