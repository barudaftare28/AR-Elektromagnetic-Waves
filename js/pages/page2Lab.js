import { waveParams } from '../config.js';
import { setScale, setOffset } from '../waveEngine.js';

let isInitialized = false;

export function setupPage2() {
  setOffset(30);

  if (isInitialized) return;
  isInitialized = true;

  document.getElementById('slider-f').addEventListener('input', (e) => {
    waveParams.f = parseFloat(e.target.value);
    updateStats();
  });

  document.getElementById('slider-a').addEventListener('input', (e) => {
    waveParams.amplitude = parseFloat(e.target.value);
    updateStats();
  });

  document.querySelectorAll('.btn-zoom').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const zoom = parseFloat(e.target.getAttribute('data-zoom'));
      setScale(zoom);
    });
  });
}

function updateStats() {
  const lambda = (300 / waveParams.f).toFixed(2);
  
  document.getElementById('val-f').innerText = waveParams.f.toFixed(2);
  document.getElementById('val-a').innerText = waveParams.amplitude.toFixed(2);
  
  document.getElementById('stat-f').innerText = `${waveParams.f.toFixed(2)} Hz`;
  document.getElementById('stat-l').innerText = `${lambda} m`;
  document.getElementById('stat-a').innerText = `${waveParams.amplitude.toFixed(2)} m`;
}