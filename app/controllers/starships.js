import Controller from '@ember/controller';
import { A } from '@ember/array';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class StarshipsController extends Controller {
  @tracked roundWinner;
  @tracked leftScore = 0;
  @tracked rightScore = 0;

  @tracked leftStarship;
  @tracked rightStarship;

  @tracked showMatchHistory = false;
  @tracked matchHistory = A([]);

  starships;

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
    if (!this.starships || this.starships.length < 2) {
      this.shuffle();
    }

    this.leftStarship = this.starships.pop();
    this.rightStarship = this.starships.pop();

    this.calculateScore();
    this.addResultsToHistory();
  }

  @action
  toggleMatchHistory() {
    this.showMatchHistory = !this.showMatchHistory;
  }

  calculateScore() {
    const leftAttribute = parseInt(this.leftStarship.crew.replace(/\D/g,''));
    const rightAttribute = parseInt(this.rightStarship.crew.replace(/\D/g,''));

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
        starshipName: this.leftStarship.name,
        crew: this.leftStarship.crew,
        totalScore: this.leftScore
      },
      right: {
        starshipName: this.rightStarship.name,
        crew: this.rightStarship.crew,
        totalScore: this.rightScore
      },
      winner: this.roundWinner
    });
  }

  shuffle() {
    this.starships = [...this.model.sort(() => 0.5 - Math.random())];
  }
}
