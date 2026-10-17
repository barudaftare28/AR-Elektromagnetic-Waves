import { t } from "../Main/Bahasa.js";

export const i18n = {
  id: {
    p2_sim: "(SIMULASI)", p2_desc: "Amati gelombang elektromagnetik dan pahami sifat-sifatnya.",
    btn_reset: "RESET", btn_pause: "PAUSE", btn_play: "PLAY",
    p2_observe: "Lihat dan Pahami", p2_cant_change: "(Tidak Dapat Diubah)",
    p2_tt: "Gelombang merambat lurus dengan kecepatan konstan di ruang hampa.",
    btn_zin: "Zoom In", btn_zout: "Zoom Out",
    p2_short: "Penjelasan Singkat",
    p2_short_desc: "Gelombang elektromagnetik terdiri dari medan listrik (E) dan medan magnet (B) yang berosilasi secara bersamaan, saling tegak lurus, dan merambat ke depan dengan kecepatan cahaya (c). Kedua medan ini dapat merambat tanpa memerlukan medium, sehingga gelombang elektromagnetik dapat bergerak melalui ruang hampa. Gelombang ini juga membawa energi yang dapat dimanfaatkan dalam berbagai teknologi, seperti komunikasi radio, gelombang mikro, dan cahaya yang kita lihat sehari-hari.",
    p2_sensor: "Sensor Real-time", p2_rt_e: "Medan Listrik (E) Saat Ini", p2_rt_b: "Medan Magnet (B) Saat Ini",
    p2_const: "Nilai Konstan Gelombang",
    p2_freq: "Frekuensi (f)", p2_lambda: "Panjang Gelombang (λ)", p2_amp: "Amplitudo Maks", p2_speed: "Kecepatan (c)",
    p2_why: "Kenapa nilai di atas tidak bisa diubah?",
    p2_why_desc: "Frekuensi dan panjang gelombang adalah identitas asli gelombang tersebut. Yang bergerak naik-turun (berubah) secara real-time hanyalah simpangan medan listrik dan magnetnya.",
    btn_back: "Kembali ke Intro", btn_next: "Lanjut ke Spectrum (AR)",
  },
  en: {
    p2_sim: "(SIMULATION)", p2_desc: "Observe the electromagnetic wave and understand its properties.",
    btn_reset: "RESET", btn_pause: "PAUSE", btn_play: "PLAY",
    p2_observe: "Observe and Learn", p2_cant_change: "(Cannot Be Changed)",
    p2_tt: "Waves propagate in a straight line at a constant speed in a vacuum.",
    btn_zin: "Zoom In", btn_zout: "Zoom Out",
    p2_short: "Brief Explanation",
    p2_short_desc: "Electromagnetic waves consist of an electric field (E) and a magnetic field (B) that oscillate simultaneously, are perpendicular to each other, and travel forward at the speed of light (c). Both fields can propagate without needing a medium, so electromagnetic waves can move through a vacuum. These waves also carry energy that can be used in many technologies, such as radio communication, microwaves, and the light we see every day.",
    p2_sensor: "Real-time Sensor", p2_rt_e: "Current Electric Field (E)", p2_rt_b: "Current Magnetic Field (B)",
    p2_const: "Constant Wave Values",
    p2_freq: "Frequency (f)", p2_lambda: "Wavelength (λ)", p2_amp: "Max Amplitude", p2_speed: "Speed (c)",
    p2_why: "Why can't these values be changed?",
    p2_why_desc: "Frequency and wavelength are the inherent identities of the wave. Only the displacements of the electric and magnetic fields oscillate in real-time.",
    btn_back: "Back to Intro", btn_next: "Next to Spectrum (AR)",
  },
};

const ZOOM_LEVELS = [0.5, 1, 2];
const ZOOM_IDS = ["z-05", "z-1", "z-2"];

let canvas, ctx, elE, elB;
let time = 0, zoom = 1, paused = false;
let axisColor = "rgba(255,255,255,0.4)";
const $ = (id) => document.getElementById(id);

export function init() {
  canvas = $("wave-canvas-2d");
  if (!canvas) return;
  ctx = canvas.getContext("2d");
  elE = $("rt-e");
  elB = $("rt-b");

  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("themeChanged", () => {
    axisColor = isLight() ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.4)";
  });
  window.addEventListener("langChanged", renderPauseButton);

  // Zoom
  ZOOM_IDS.forEach((id, i) => ($(id).onclick = () => setZoom(ZOOM_LEVELS[i])));
  $("z-in").onclick = () => setZoom(ZOOM_LEVELS[Math.min(ZOOM_LEVELS.indexOf(zoom) + 1, ZOOM_LEVELS.length - 1)]);
  $("z-out").onclick = () => setZoom(ZOOM_LEVELS[Math.max(ZOOM_LEVELS.indexOf(zoom) - 1, 0)]);

  // Pause & Reset (sebelumnya tombol ini belum punya handler sama sekali)
  $("btn-pause").onclick = () => { paused = !paused; renderPauseButton(); };
  $("btn-reset").onclick = () => { time = 0; paused = false; setZoom(1); renderPauseButton(); };

  setZoom(1);
}

const isLight = () => document.body.classList.contains("light-mode");

function resize() {
  if (!canvas) return;
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
}

function setZoom(val) {
  zoom = val;
  ZOOM_IDS.forEach((id, i) => $(id).classList.toggle("active", ZOOM_LEVELS[i] === val));
  $("z-out").disabled = val <= ZOOM_LEVELS[0];
  $("z-in").disabled = val >= ZOOM_LEVELS[ZOOM_LEVELS.length - 1];
}

function renderPauseButton() {
  const label = $("pause-label");
  label.dataset.i18n = paused ? "btn_play" : "btn_pause";
  label.textContent = t(label.dataset.i18n);
  $("pause-icon").textContent = paused ? "▶" : "⏸";
}

export function update(ts, dt) {
  if (!canvas || canvas.offsetParent === null) return;
  if (!paused) time += dt * 3; // setara 0.05/frame @60fps

  const w = canvas.width, h = canvas.height, midY = h / 2;
  const amp = (h / 4) * zoom;
  const k = 0.02 * zoom;
  const s = Math.sin(-time);

  // Sensor real-time
  const rt = s * 2 * zoom;
  const sign = rt >= 0 ? "+" : "";
  elE.innerHTML = `${sign}${rt.toFixed(2)} <span class="val-unit">V/m</span>`;
  elB.innerHTML = `${sign}${rt.toFixed(2)} <span class="val-unit">T</span>`;

  ctx.clearRect(0, 0, w, h);

  // Sumbu tengah
  ctx.beginPath(); ctx.moveTo(0, midY); ctx.lineTo(w, midY);
  ctx.strokeStyle = axisColor; ctx.lineWidth = 2; ctx.stroke();

  // E (cyan) dan B (ungu, setengah amplitudo & berlawanan arah)
  ctx.lineWidth = 3.5;
  [["#06B6D4", 1, amp], ["#8B5CF6", -1, amp * 0.5]].forEach(([color, dir, a]) => {
    ctx.beginPath();
    for (let x = 0; x < w; x += 2) {
      const y = midY + dir * Math.sin(x * k - time) * a;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = color; ctx.stroke();
  });

  // Panah arah rambat
  ctx.beginPath();
  ctx.moveTo(w - 12, midY - 8); ctx.lineTo(w, midY); ctx.lineTo(w - 12, midY + 8);
  ctx.fillStyle = isLight() ? "#000" : "#fff";
  ctx.fill();
}
