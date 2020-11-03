import { Factory } from 'ember-cli-mirage';
import faker from 'faker';
import moment from 'moment';

export default Factory.extend({
  name() {
    return faker.name.findName();
  },

  birthYear() {
    return `${faker.random.number({ min: 20, max: 500 })}BBY`;
  },

  eyeColor() {
    return faker.random.arrayElement(['Brown', 'Blue', 'Green', 'Hazel']);
  },

  hairColor() {
    return faker.random.arrayElement(['Black', 'Brunette', 'Blonde']);
  },

  skinColor() {
    return faker.random.arrayElement(['Pale', 'Fair', 'Light', 'Gold', 'Green', 'Brown', 'Metal', 'Dark']);
  },

  gender() {
    return faker.random.arrayElement(['Male', 'Female']);
  },

  height() {
    return faker.random.number({ min: 60, max: 300 });
  },

  mass() {
    return faker.random.number({ min: 10, max: 500 });
  },

  url(i) {
    return `https://some.url/people/${i}`;
  }
});
