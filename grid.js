// takes a canvas ID and prints a grid
export const printGrid = (canvasEl, rows) => {
  const canvas = document.getElementById(canvasEl);
  const ctx = canvas.getContext('2d');
  const cWidth = canvas.offsetWidth;
  const cHeight = canvas.offsetHeight;
  let span = cWidth / rows;

  ctx.rect(0, 0, cWidth, cHeight);
  ctx.save();
  if (rows / 2 === parseInt(rows / 2)) {
    ctx.translate(0.5, 0.5);
  }
  ctx.beginPath();
  for (let i = 0; i < rows; i++) {
    let x = (i + 1) * span;
    let y = (i + 1) * span;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, cHeight);
    ctx.moveTo(0, y);
    ctx.lineTo(cHeight, y);
  }
  ctx.lineWidth = 0.5;
  ctx.stroke();
  ctx.restore();
};

// takes a canvas ID, the rows, the color and prints a square
export const printSquare = (canvasEl, rows, color) => {
  const canvas = document.getElementById(canvasEl);
  const ctx = canvas.getContext('2d');
  const cWidth = canvas.offsetWidth;
  const span = cWidth / rows;

  // getting canvas coordinates of click
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  // calculate the coordinate of the square
  x = (Math.ceil(x / span) - 1) * span;
  y = (Math.ceil(y / span) - 1) * span;

  ctx.fillStyle = '#FF0000';
  ctx.fillRect(x, y, span, span);
};
