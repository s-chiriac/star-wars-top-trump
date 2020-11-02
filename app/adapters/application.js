import RESTAdapter from '@ember-data/adapter/rest';

export default class Application extends RESTAdapter {
  host = 'https://swapi.dev';
  namespace = 'api';

  headers = {
    'Accept': 'application/json'
  }
}
