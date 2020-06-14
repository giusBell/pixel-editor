import { a } from './moduleA';
import { printGrid, printSquare } from './grid';

console.log(a);

const CANVAS_ID = 'canvas-grid';
const canvasEl = document.getElementById(CANVAS_ID);

printGrid(CANVAS_ID, 32);
canvasEl.addEventListener('click', () => printSquare(CANVAS_ID, 32, 'black'));
