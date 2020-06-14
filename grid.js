// takes a canvas ID and prints a grid
export const printGrid = (canvasEl, rows) => {
  const ctx = canvasEl.getContext('2d');
  const cWidth = canvasEl.offsetWidth;
  const cHeight = canvasEl.offsetHeight;
  let span = cWidth / rows;

  ctx.rect(0, 0, cWidth, cHeight);
  ctx.save();
  ctx.beginPath();
  for (let i = 0; i <= rows; i++) {
    let x = i * span;
    let y = i * span;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, cHeight);
    ctx.moveTo(0, y);
    ctx.lineTo(cHeight, y);
  }
  ctx.lineWidth = 0.3;
  ctx.stroke();
  ctx.restore();
};

// takes a canvas ID, the rows, the color and prints a square
export const printSquare = (canvasEl, rows, color) => {
  const ctx = canvasEl.getContext('2d');
  const cWidth = canvasEl.offsetWidth;
  const span = cWidth / rows;

  // getting canvas coordinates of click
  let rect = canvasEl.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  // calculate the coordinate of the square
  x = (Math.ceil(x / span) - 1) * span;
  y = (Math.ceil(y / span) - 1) * span;

  ctx.fillStyle = color;
  ctx.fillRect(x, y, span, span);
};

export const clear = (canvasEl) => {
  const ctx = canvasEl.getContext('2d');
  const cWidth = canvasEl.offsetWidth;
  const cHeight = canvasEl.offsetHeight;

  ctx.clearRect(0, 0, cWidth, cHeight);
};

export const download = (canvasEl) => {
  const img = canvasEl.toDataURL('image/png');
  downloadDataUrl('image', img);
};

const downloadDataUrl = (filename, dataUrl) => {
  // build the 'a' element
  let link = document.createElement('a');
  link.download = filename;
  link.target = '_blank';

  // build the URI
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();

  // cleanup the DOM
  document.body.removeChild(link);
};
