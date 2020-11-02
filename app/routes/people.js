import Route from '@ember/routing/route';
import fetchAllRecordsForModel from 'star-wars-top-trumps/utils/fetch-all-records-for-model';

export default class PeopleRoute extends Route {
  async model() {
    return await fetchAllRecordsForModel.apply(this, ['person']);
  }

  setupController(controller, model) {
    controller.model = model;
    controller.play();
  }
}
