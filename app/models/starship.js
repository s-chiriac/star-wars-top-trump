import Model, { attr } from '@ember-data/model';

export default class StarshipModel extends Model {
  @attr('string') name;
  @attr('string') cargoCapacity;
  @attr('string') consumables;
  @attr('string') costInCredits;
  @attr('string') crew;
  @attr('string') hyperdriveRating;
  @attr('string') length;
  @attr('string') passengers;
  @attr('string') starshipClass;
}
