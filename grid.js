// takes a node and prints a grid in a html canvas

export const print = (canvasEl, rows) => {
  const canvas = document.getElementById(canvasEl);
  const ctx = canvas.getContext('2d');
  const cWidth = canvas.offsetWidth;
  const cHeight = canvas.offsetHeight;
  let xSpan = cWidth / rows;
  let ySpan = cWidth / rows;
  ctx.rect(0, 0, cWidth, cHeight);
  ctx.save();
  if (rows / 2 === parseInt(rows / 2)) {
    ctx.translate(0.5, 0.5);
  }
  ctx.beginPath();
  for (let i = 0; i < rows; i++) {
    let x = (i + 1) * xSpan;
    let y = (i + 1) * ySpan;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, cHeight);
    ctx.moveTo(0, y);
    ctx.lineTo(cHeight, y);
  }
  ctx.lineWidth = 0.5;
  ctx.stroke();
  ctx.restore();
};
