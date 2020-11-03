import {
  create,
  visitable,
  clickable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/'),
  categories: {
    starships: {
      scope: 'button:contains("Starships")',
      click: clickable()
    },
    people: {
      scope: 'button:contains("People")',
      click: clickable()
    }
  }
});
