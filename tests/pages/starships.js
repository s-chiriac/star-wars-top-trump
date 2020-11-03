import {
  create,
  visitable,
  clickable,
  text,
  collection,
  isPresent
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/starships'),
  leftCard: {
    scope: '.left-card',
    score: text('h2')
  },
  rightCard: {
    scope: '.right-card',
    score: text('h2')
  },
  bottomBar: {
    scope: '.card:eq(2)',
    historyButton: {
      scope: 'button:contains("History")',
      click: clickable()
    },
    playAgainButton: {
      scope: 'button:contains("Play again")',
      click: clickable()
    },
    overallWinner: text('h4')
  },
  historyTable: {
    scope: 'table',
    isPresent: isPresent(),
    entries: collection('tbody tr')
  }
});
