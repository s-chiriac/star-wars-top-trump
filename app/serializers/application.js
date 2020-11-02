import RESTSerializer from '@ember-data/serializer/rest';
import { pluralize } from 'ember-inflector';
import { underscore } from '@ember/string';

export default class ApplicationSerializer extends RESTSerializer {
  normalizeArrayResponse(store, modelClass, payload) {
    payload[pluralize(modelClass.modelName)] = payload.results.map((result) => {
      const id = result.url.replace(/\//g, '').split(pluralize(modelClass.modelName)).get('lastObject');
      return { id, ...result};
    });

    delete payload.results;
    delete payload.previous;
    delete payload.next;

    return super.normalizeArrayResponse(...arguments);
  }

  extractMeta(store, ModelClass, payload) {
    if (payload.count) {
      payload.meta = {
        total: payload.count,
      };

      delete payload.count;
    }

    return super.extractMeta(...arguments);
  }

  keyForAttribute(attr) {
    return underscore(attr);
  }
}
