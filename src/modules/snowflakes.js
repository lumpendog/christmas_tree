import { Module } from '../core/module';
import './snowflakes.css';

export class Snowflakes extends Module {
  constructor(type, coordinates) {
    super(type, coordinates);
  }

  trigger() {
    const snowCheck = document.querySelector('.snowflakes');
    if (snowCheck) {
      snowCheck.remove();
      return;
    }
    const snow = document.createElement('div');
    snow.ariaHidden = 'true';
    snow.className = 'snowflakes';
    for (let i = 1; i < 10; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❅';
      snow.append(snowflake);
    }
    document.body.append(snow);
  }
}
