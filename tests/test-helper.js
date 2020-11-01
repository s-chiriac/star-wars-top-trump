import Application from 'star-wars-top-trumps/app';
import config from 'star-wars-top-trumps/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
