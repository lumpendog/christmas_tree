import './circleProgressBar.css';

export class CircleProgressBar {
  #element;
  #options;
  #circleOptions;
  #circumference;
  #circle;

  constructor(
    options = {
      width: '120',
      height: '120',
      strokeWidth: '8',
      fillColor: 'transparent',
      strokeColor: '#dbcf29',
    }
  ) {
    this.#element = null;
    this.#circle = null;
    this.#options = options;
    this.#circleOptions = {
      cx: +this.#options.width / 2,
      cy: +this.#options.height / 2,
      r: +this.#options.width / 2 - 2 * +this.#options.strokeWidth,
      strokeWidth: this.#options.strokeWidth,
      strokeColor: this.#options.strokeColor,
      fillColor: this.#options.fillColor,
    };
    this.#circumference = 2 * Math.PI * this.#circleOptions.r;
  }

  create() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
    <svg class="progress-bar" width="${this.#options.width}" height="${
      this.#options.height
    }">
    <circle class="progress-bar__circle" cx="${this.#circleOptions.cx}" cy="${
      this.#circleOptions.cy
    }" r="${this.#circleOptions.r}" stroke="${
      this.#circleOptions.strokeColor
    }" stroke-width="${this.#circleOptions.strokeWidth}" fill="${
      this.#circleOptions.fillColor
    }" />
</svg>
    `;
    this.#element = wrapper.firstElementChild;
    this.#circle = this.#element.firstElementChild;
    this.#circle.style.strokeDasharray = `${this.#circumference} ${
      this.#circumference
    }`;
    this.#circle.style.strokeDashoffset = this.#circumference;
    return this.#element;
  }

  setProgress(percent = 0) {
    if (percent < 0 && percent > 100) {
      throw new Error('Percent should be only between 0 and 100');
    }
    const offset = this.#circumference * (1 - percent / 100);
    this.#circle.style.strokeDashoffset = offset;
  }
}
