export default function() {
  this.urlPrefix = 'https://swapi.dev';
  this.namespace = 'api';
  this.timing = 400;

  this.pageSize = 10;

  this.get('/starships', function(schema, request) {
    const pageNumber = request.queryParams.page;

    const { starships } = this.serialize(schema.starships.all());
    const page = starships.slice((pageNumber - 1) * 10, pageNumber * 10);

    return {
      count: starships.length,
      next: null,
      previous: null,
      results: page
    };
  });

  this.get('/people', function(schema, request) {
    const pageNumber = request.queryParams.page;

    const { people } = this.serialize(schema.people.all());
    const page = people.slice((pageNumber - 1) * 10, pageNumber * 10);

    return {
      count: people.length,
      next: null,
      previous: null,
      results: page
    };
  });
}
