export class Module {
  #type;
  #coordinates;
  #turnedOn;
  #element;

  constructor(type, coordinates) {
    if (!type) {
      throw new Error('Please specify "type" param');
    }
    if (!coordinates) {
      throw new Error('Please specify "coordinates" param');
    }
    this.#type = type;
    this.#coordinates = coordinates;
    this.#turnedOn = false;
  }

  toggle() {
    this.#turnedOn = !this.#turnedOn;
    this.#element.classList.toggle('active');
  }

  trigger() {
    throw new Error(
      `Trigger method should be implemented in module "${this.type}"`
    );
  }

  renderElement() {
    const container = document.createElement('div');
    container.className = 'ornament-container';
    container.dataset.type = this.#type;
    container.style.left = this.#coordinates.left;
    container.style.top = this.#coordinates.top;
    container.addEventListener('click', this.trigger.bind(this));
    container.addEventListener('click', this.toggle.bind(this));

    const element = document.createElement('div');
    element.className = 'ornament';

    container.append(element);
    this.#element = container;
    return this.#element;
  }
}
