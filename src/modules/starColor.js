import { Module } from '../core/module';
import { COLORS } from '../constants/colors';
import { randomNumber } from '../utils/randomNumber';

export class StarColor extends Module {
  constructor(type, coordinates) {
    super(type, coordinates);
  }

  trigger() {
    const starContainer = document.querySelector('.star-container');
    const style = starContainer.style;
    style.setProperty('--star-color', COLORS[randomNumber(0, COLORS.length)]);
  }
}
