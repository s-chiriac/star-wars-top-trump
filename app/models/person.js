import Model, { attr } from '@ember-data/model';

export default class PersonModel extends Model {
  @attr('string') name;
  @attr('string') birthYear;
  @attr('string') eyeColor;
  @attr('string') hairColor;
  @attr('string') skinColor;
  @attr('string') gender;
  @attr('string') height;
  @attr('string') mass;
}
