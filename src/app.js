import { Tree } from './core/tree';
import './index.css';
import { StarColor } from './modules/starColor';
import { ORNAMENT_COORDINATES } from './constants/ornamentCoordinates';
import { Snowflakes } from './modules/snowflakes';
import { Countdown } from './modules/countdown/countdown';

const tree = new Tree('.merry-xmas');

const starColor = new StarColor('starColor', ORNAMENT_COORDINATES[0]);
const snowflakes = new Snowflakes('snowflakes', ORNAMENT_COORDINATES[1]);
const countdown = new Countdown('countdown', ORNAMENT_COORDINATES[2]);
tree.addOrnament(starColor, snowflakes, countdown);

tree.render();
