import { CircleProgressBar } from './circleProgressBar';
import './timer.css';

export class Timer extends CircleProgressBar {
  #element;
  #time;
  #content;
  #header;

  constructor(header, svgSize) {
    super(svgSize);
    this.#time = '00';
    this.#header = header;
  }

  createTimer() {
    const container = document.createElement('div');
    container.className = 'timer';
    this.#element = this.create();
    container.append(this.#element);
    this.#content = document.createElement('span');
    this.#content.className = 'timer__content';
    this.#content.textContent = this.#time;
    const header = document.createElement('h3');
    header.textContent = this.#header;
    header.className = 'timer__header';
    container.append(this.#content, header);
    this.#element = container;
    return this.#element;
  }

  update(value, percent) {
    this.#content.textContent = value;
    this.setProgress(percent);
  }
}
