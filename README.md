# Star Wars Top Trumps

An Ember app that uses [SWAPI](https://swapi.dev/) to load different types of resources, then pick one at random and
compare one of their attributes to choose a winner.

## Things to improve

There are several areas for potential improvement, including:

- Add Mirage & tests
- Avoid repetition in controllers and templates
- Add serializer logic for single queries
- Let users choose which attribute to compare
- Add more resource types
- Loading screens
- Localization
- Responsiveness
- Animations
- Styling

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd star-wars-top-trumps`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)
