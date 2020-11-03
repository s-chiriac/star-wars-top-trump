import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { currentURL } from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import page from '../pages/homepage';

module('Acceptance | Homepage', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    this.server.createList('starship', 20);
    this.server.createList('person', 20);

    await page.visit();
  });

  test('clicking Starships goes to starships game page', async function(assert) {
    await page.categories.starships.click();

    assert.equal(currentURL(), '/starships', 'on starships game page');
  });

  test('clicking People goes to people game page', async function(assert) {
    await page.categories.people.click();

    assert.equal(currentURL(), '/people', 'on people game page');
  });
});
