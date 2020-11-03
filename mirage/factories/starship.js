import { Factory } from 'ember-cli-mirage';
import faker from 'faker';
import moment from 'moment';

export default Factory.extend({
  name() {
    return faker.commerce.productName();
  },

  cargoCapacity() {
    return faker.random.number({ min: 1, max: 100000 }).toString();
  },

  consumables() {
    return moment(faker.date.future(2)).toNow(true);
  },

  costInCredits() {
    return (10 ** faker.random.number({ min: 1, max: 8 })).toString();
  },

  crew() {
    return faker.random.number({ min: 1, max: 10000 }).toString();
  },

  hyperdriveRating() {
    return faker.finance.amount(1, 8, 1).toString();
  },

  length() {
    return faker.random.number({ min: 1, max: 10000 }).toString();
  },

  passengers() {
    return faker.random.number({ min: 1, max: 10000 }).toString();
  },

  starshipClass() {
    return faker.commerce.productName();
  },

  url(i) {
    return `https://some.url/starships/${i}`;
  }
});
