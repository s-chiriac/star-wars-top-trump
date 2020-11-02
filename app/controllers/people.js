import Controller from '@ember/controller';
import { A } from '@ember/array';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PeopleController extends Controller {
  @tracked roundWinner;
  @tracked leftScore = 0;
  @tracked rightScore = 0;

  @tracked leftPerson;
  @tracked rightPerson;

  @tracked showMatchHistory = false;
  @tracked matchHistory = A([]);

  people;

  get overallWinner() {
    if (this.leftScore > this.rightScore) {
      return 'left';
    } else if (this.rightScore > this.leftScore) {
      return 'right';
    }

    return 'tie';
  }

  @action
  play() {
    if (!this.people || this.people.length < 2) {
      this.shuffle();
    }

    this.leftPerson = this.people.pop();
    this.rightPerson = this.people.pop();

    this.calculateScore();
    this.addResultsToHistory();
  }

  @action
  toggleMatchHistory() {
    this.showMatchHistory = !this.showMatchHistory;
  }

  calculateScore() {
    const leftAttribute = parseInt(this.leftPerson.mass.replace(/\D/g,''));
    const rightAttribute = parseInt(this.rightPerson.mass.replace(/\D/g,''));

    if (leftAttribute > rightAttribute) {
      this.leftScore++;
      this.roundWinner = 'left';
    } else if (rightAttribute > leftAttribute) {
      this.rightScore++;
      this.roundWinner = 'right';
    } else {
      this.roundWinner = 'tie';
    }
  }

  addResultsToHistory() {
    this.matchHistory.pushObject({
      left: {
        personName: this.leftPerson.name,
        mass: this.leftPerson.mass,
        totalScore: this.leftScore
      },
      right: {
        personName: this.rightPerson.name,
        mass: this.rightPerson.mass,
        totalScore: this.rightScore
      },
      winner: this.roundWinner
    });
  }

  shuffle() {
    this.people = [...this.model.sort(() => 0.5 - Math.random())];
  }
}
