import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import page from '../pages/starships';

module('Acceptance | Starships', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    this.server.createList('starship', 20);

    await page.visit();
  });

  test('history is hidden by default', function(assert) {
    assert.ok(!page.historyTable.isPresent, 'history table not shown');
  });

  test('clicking History button toggles history table visibility', async function(assert) {
    await page.bottomBar.historyButton.click();

    assert.ok(page.historyTable.isPresent, 'history table shown');

    await page.bottomBar.historyButton.click();

    assert.ok(!page.historyTable.isPresent, 'history table not shown');
  });

  test('entries are added to history table as games are played', async function(assert) {
    await page.bottomBar.historyButton.click();

    assert.equal(page.historyTable.entries.length, 1, 'shows 1 entry in the history table');

    for (let i = 0; i < 25; i++) {
      await page.bottomBar.playAgainButton.click();
    }

    assert.equal(page.historyTable.entries.length, 26, 'shows 26 entry in the history table');
  });
});
