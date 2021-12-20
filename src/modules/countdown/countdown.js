import { Module } from '../../core/module';
import { Timer } from './timer';
import './countdown.css';
import { getPercent } from '../../utils/getPercent';

export class Countdown extends Module {
  #element;
  #timerDays;
  #timerHours;
  #timerMinutes;
  #timerSeconds;
  #intervalId;

  constructor(type, coordinates) {
    super(type, coordinates);
    this.#element = null;
  }

  trigger() {
    if (!this.#element) this.render();
    this.#element.classList.toggle('active');
  }

  render() {
    this.#element = document.createElement('div');
    this.#element.className = 'countdown';
    this.#timerDays = new Timer('Дни');
    this.#timerHours = new Timer('Часы');
    this.#timerMinutes = new Timer('Минуты');
    this.#timerSeconds = new Timer('Секунды');

    const header = document.createElement('h1');
    header.className = 'countdown__header';
    header.textContent = 'До Нового Года осталось...';

    this.#element.append(
      this.#timerDays.createTimer(),
      this.#timerHours.createTimer(),
      this.#timerMinutes.createTimer(),
      this.#timerSeconds.createTimer(),
      header
    );
    this.#updateTimer();
    this.#intervalId = setInterval(() => this.#updateTimer(), 100);

    document.body.append(this.#element);
  }

  #updateTimer() {
    const newYearDate = new Date(2022, 0, 1);
    const now = Date.now();

    const diff = newYearDate.getTime() - now;
    const diffSeconds = Math.floor(diff / 1000);
    const seconds = diffSeconds % 60;
    const minutes = Math.floor((diffSeconds / 60) % 60);
    const hours = Math.floor((diffSeconds / 3600) % 24);
    const days = Math.floor(diffSeconds / (3600 * 24));

    this.#timerSeconds.update(
      this.#formatData(seconds),
      getPercent((diff / 1000) % 60, 0, 60)
    );
    this.#timerMinutes.update(
      this.#formatData(minutes),
      getPercent(minutes, 0, 60)
    );
    this.#timerHours.update(this.#formatData(hours), getPercent(hours, 0, 24));
    this.#timerDays.update(this.#formatData(days), getPercent(days, 0, 365));
  }

  #formatData(data) {
    return data < 10 ? '0' + data : data.toString();
  }
}
