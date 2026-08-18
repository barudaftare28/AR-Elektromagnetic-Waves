let canvas, ctx;
let time = 0;

export function initEngine() {
  canvas = document.getElementById('waveCanvas');
  ctx = canvas.getContext('2d');

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  requestAnimationFrame(renderLoop);
}

function resizeCanvas() {
  const container = document.getElementById('canvas-container');
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
}

function renderLoop() {
  time += 0.03;
  drawScene();
  requestAnimationFrame(renderLoop);
}

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const width = canvas.width;
  const height = canvas.height;
  
  // Titik pusat koordinat gelombang
  const originX = width * 0.42;
  const originY = height * 0.42;

  // Draw Grid Perspektif Dasar (Lantai)
  drawPerspectiveGrid(originX, originY, width, height);

  // Parameter Gelombang
  const wavelength = 180;
  const k = (2 * Math.PI) / wavelength;
  const ampE = 65;
  const ampB = 50;
  const isoAngle = Math.PI / 5; // Sudut Isometric Medan Magnet B

  // 1. Draw Sumbu Arah Rambat (Panah)
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.lineWidth = 1.5;
  ctx.moveTo(originX - 180, originY + 60);
  ctx.lineTo(originX + 320, originY - 60);
  ctx.stroke();

  // Label Arah Rambat
  ctx.fillStyle = '#fff';
  ctx.font = '11px sans-serif';
  ctx.fillText('Arah', originX + 330, originY - 70);
  ctx.fillText('Rambat', originX + 330, originY - 58);

  // 2. Medan Magnet B (Orange Wave)
  ctx.beginPath();
  ctx.strokeStyle = '#ff6a00';
  ctx.lineWidth = 2.5;

  for (let x = -180; x <= 300; x += 2) {
    const bVal = ampB * Math.sin(k * x - time);
    const screenX = originX + x + bVal * Math.cos(isoAngle);
    const screenY = originY - (x * 0.18) + bVal * Math.sin(isoAngle);

    if (x === -180) ctx.moveTo(screenX, screenY);
    else ctx.lineTo(screenX, screenY);
  }
  ctx.stroke();

  // Garis Vertical Hatched Fill B
  for (let x = -180; x <= 300; x += 12) {
    const bVal = ampB * Math.sin(k * x - time);
    const baseX = originX + x;
    const baseY = originY - (x * 0.18);
    const targetX = baseX + bVal * Math.cos(isoAngle);
    const targetY = baseY + bVal * Math.sin(isoAngle);

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 106, 0, 0.35)';
    ctx.lineWidth = 1;
    ctx.moveTo(baseX, baseY);
    ctx.lineTo(targetX, targetY);
    ctx.stroke();
  }

  // 3. Medan Listrik E (Cyan Wave)
  ctx.beginPath();
  ctx.strokeStyle = '#00d2ff';
  ctx.lineWidth = 2.5;

  for (let x = -180; x <= 300; x += 2) {
    const eVal = ampE * Math.sin(k * x - time);
    const screenX = originX + x;
    const screenY = originY - (x * 0.18) - eVal;

    if (x === -180) ctx.moveTo(screenX, screenY);
    else ctx.lineTo(screenX, screenY);
  }
  ctx.stroke();

  // Garis Vertical Hatched Fill E
  for (let x = -180; x <= 300; x += 12) {
    const eVal = ampE * Math.sin(k * x - time);
    const baseX = originX + x;
    const baseY = originY - (x * 0.18);

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0, 210, 255, 0.35)';
    ctx.lineWidth = 1;
    ctx.moveTo(baseX, baseY);
    ctx.lineTo(baseX, baseY - eVal);
    ctx.stroke();
  }

  // Label & Annotations
  ctx.fillStyle = '#00d2ff';
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText('Medan Listrik (E)', originX + 30, originY - 120);

  ctx.fillStyle = '#ff6a00';
  ctx.fillText('Medan', originX + 220, originY + 60);
  ctx.fillText('Magnet (B)', originX + 220, originY + 74);
}

function drawPerspectiveGrid(ox, oy, w, h) {
  ctx.strokeStyle = 'rgba(0, 162, 255, 0.06)';
  ctx.lineWidth = 1;

  for (let i = -10; i <= 10; i++) {
    ctx.beginPath();
    ctx.moveTo(ox + i * 40 - 200, oy + 120);
    ctx.lineTo(ox + i * 20 + 200, oy - 150);
    ctx.stroke();
  }
}