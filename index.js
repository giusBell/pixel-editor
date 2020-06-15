import { printGrid, printSquare, clear, download } from './grid';

// get canvas
const CANVAS_ID = 'canvas-grid';
const canvasEl = document.getElementById(CANVAS_ID);

// get color
const COLOR_INPUT_ID = 'color';
const colorEl = document.getElementById(COLOR_INPUT_ID);
let color = colorEl.value;

// get row number
const ROWS_NUMBER_NAME = 'grid-rows';
const [gridWidth, gridHeight] = document.getElementsByName(ROWS_NUMBER_NAME);
let rows = gridWidth.value;

// init grid
printGrid(canvasEl, rows);

// get download button
const DOWNLOAD_BUTTON_ID = 'btn-download';
const button = document.getElementById(DOWNLOAD_BUTTON_ID);

// set listeners
colorEl.addEventListener('change', (e) => (color = e.target.value));
canvasEl.addEventListener('click', () => printSquare(canvasEl, rows, color));
gridWidth.addEventListener('change', (e) => resizeGrid(e));
gridHeight.addEventListener('change', (e) => resizeGrid(e));
button.addEventListener('click', () => download(canvasEl));

const setValue = (HTMLElement, event) => (HTMLElement.value = event.target.value);

const resizeGrid = (e) => {
  setValue(gridWidth, e);
  setValue(gridHeight, e);
  rows = e.target.value;
  clear(canvasEl);
  printGrid(canvasEl, rows);
};
