import { getLang } from "../Main/Bahasa.js";

export const i18n = {
  id: {
    p3_sub: "Eksplorasi spektrum gelombang elektromagnetik dan ubah frekuensinya!",
    p3_choose: "Pilih Jenis Gelombang", p3_view: "AR VIEW", p3_active: "● AR Aktif",
    p3_params: "UBAH PARAMETER GELOMBANG",
    p3_freq: "Frekuensi (f)", p3_amp: "Amplitudo (A)", p3_speed: "Kecepatan (c)", p3_vacuum: "(Tetap di ruang hampa)",
    p3_info: "Informasi Real-time", p3_type: "Jenis Gelombang", p3_lambda: "Panjang Gelombang (λ)", p3_energy: "Energi (E)",
    p3_fact: "💡 Fun Fact & Pengaplikasian",
    p3_back: "⬅ Kembali ke Wave Lab", p3_next: "Lanjut ke Challenge ➔",
  },
  en: {
    p3_sub: "Explore the electromagnetic spectrum and change its frequency!",
    p3_choose: "Choose Wave Type", p3_view: "AR VIEW", p3_active: "● AR Active",
    p3_params: "ADJUST WAVE PARAMETERS",
    p3_freq: "Frequency (f)", p3_amp: "Amplitude (A)", p3_speed: "Speed (c)", p3_vacuum: "(Constant in vacuum)",
    p3_info: "Real-time Information", p3_type: "Wave Type", p3_lambda: "Wavelength (λ)", p3_energy: "Energy (E)",
    p3_fact: "💡 Fun Fact & Applications",
    p3_back: "⬅ Back to Wave Lab", p3_next: "Next to Challenge ➔",
  },
};

// ---------- DATA SPEKTRUM ----------
const SPECTRUM = {
  radio: { name: "Radio Waves", minFreq: 3, maxFreq: 300e9, minLabel: "3 Hz", maxLabel: "300 GHz", color: "#ef4444",
    fact: { id: "Digunakan untuk komunikasi jarak jauh, siaran TV, radio FM, hingga WiFi dan Bluetooth.", en: "Used for long-distance communication, TV broadcasts, FM radio, and even WiFi and Bluetooth." } },
  microwave: { name: "Microwave", minFreq: 300e6, maxFreq: 300e9, minLabel: "300 MHz", maxLabel: "300 GHz", color: "#f97316",
    fact: { id: "Biasa digunakan pada oven microwave, komunikasi satelit, dan radar.", en: "Commonly used in microwave ovens, satellite communication, and radar." } },
  infrared: { name: "Infrared", minFreq: 300e9, maxFreq: 430e12, minLabel: "300 GHz", maxLabel: "430 THz", color: "#eab308",
    fact: { id: "Dipancarkan oleh benda hangat, digunakan pada remote control dan kamera thermal.", en: "Emitted by warm objects; used in remote controls and thermal cameras." } },
  visible: { name: "Visible Light", minFreq: 430e12, maxFreq: 790e12, minLabel: "430 THz", maxLabel: "790 THz", color: "#22c55e",
    fact: { id: "Satu-satunya spektrum gelombang yang dapat dilihat langsung oleh mata manusia.", en: "The only part of the spectrum that the human eye can see directly." } },
  ultraviolet: { name: "Ultraviolet", minFreq: 790e12, maxFreq: 30e15, minLabel: "790 THz", maxLabel: "30 PHz", color: "#3b82f6",
    fact: { id: "Berasal dari sinar matahari, membantu pembentukan Vitamin D tetapi bisa merusak kulit.", en: "Comes from sunlight; helps produce Vitamin D but can damage skin." } },
  xray: { name: "X-Ray", minFreq: 30e15, maxFreq: 30e18, minLabel: "30 PHz", maxLabel: "30 EHz", color: "#8b5cf6",
    fact: { id: "Dapat menembus jaringan lunak tubuh, sangat berguna dalam dunia medis (foto rontgen).", en: "Can pass through soft tissue; very useful in medicine (radiography)." } },
  gamma: { name: "Gamma Ray", minFreq: 30e18, maxFreq: 300e18, minLabel: "30 EHz", maxLabel: "300 EHz ++", color: "#ec4899",
    fact: { id: "Gelombang paling bertenaga di alam semesta, dihasilkan oleh reaksi nuklir.", en: "The most energetic waves in the universe, produced by nuclear reactions." } },
};

const C = 3e8;                 // kecepatan cahaya (m/s)
const H_EV = 4.135667696e-15;  // konstanta Planck (eV·s)
let currentKey = "radio";
let sFreq, sAmp, el = {};

// ---------- HELPER FISIKA & FORMAT ----------
// Slider frekuensi menyimpan log10(Hz) agar rentang 3 Hz – 300 EHz bisa dijangkau.
const sliderToHz = (v) => Math.pow(10, parseFloat(v));
const hzToSlider = (hz) => Math.log10(hz);

function roundFreq(hz) { // 3 angka signifikan
  const factor = Math.pow(10, Math.floor(Math.log10(hz)) - 2);
  return Math.round(hz / factor) * factor;
}

function getDynamicStep(hz, decreasing = false) { // step = satu satuan di bawahnya
  const v = decreasing ? hz - 1 : hz;
  for (const [limit, step] of [[1e3, 1], [1e6, 1e3], [1e9, 1e6], [1e12, 1e9], [1e15, 1e12], [1e18, 1e15]]) {
    if (v < limit) return step;
  }
  return 1e18;
}

const FREQ_UNITS = [[1e18, "EHz"], [1e15, "PHz"], [1e12, "THz"], [1e9, "GHz"], [1e6, "MHz"], [1e3, "kHz"]];
function formatFrequency(hz) {
  for (const [div, unit] of FREQ_UNITS) if (hz >= div) return `${(hz / div).toFixed(2)} ${unit}`;
  return `${hz.toFixed(2)} Hz`;
}

function formatLength(m) {
  if (m >= 1e3) return `${(m / 1e3).toLocaleString("en-US", { maximumFractionDigits: 2 })} km`;
  if (m >= 1) return `${m.toFixed(2)} m`;
  if (m >= 1e-2) return `${(m * 1e2).toFixed(2)} cm`;
  if (m >= 1e-3) return `${(m * 1e3).toFixed(2)} mm`;
  if (m >= 1e-6) return `${(m * 1e6).toFixed(2)} µm`;
  if (m >= 1e-9) return `${(m * 1e9).toFixed(2)} nm`;
  return `${(m * 1e12).toFixed(2)} pm`;
}

function formatEnergy(ev) {
  if (ev >= 1e6) return `${(ev / 1e6).toFixed(2)} MeV`;
  if (ev >= 1e3) return `${(ev / 1e3).toFixed(2)} keV`;
  if (ev >= 1) return `${ev.toFixed(2)} eV`;
  return `${ev.toExponential(2)} eV`;
}

// ---------- UPDATE PANEL INFO ----------
function updateInfo() {
  const hz = roundFreq(sliderToHz(sFreq.value));
  const amp = parseFloat(sAmp.value);
  const freqText = formatFrequency(hz);

  el.valF.textContent = el.infoFreq.textContent = freqText;
  el.valA.textContent = el.infoAmp.textContent = `${amp.toFixed(2)} m`;
  el.infoLambda.textContent = formatLength(C / hz);
  el.infoEnergy.textContent = formatEnergy(H_EV * hz);
}

function renderFact() {
  el.infoFact.textContent = SPECTRUM[currentKey].fact[getLang()];
}

function loadSpectrum(key) {
  const d = SPECTRUM[key];
  if (!d) return;
  currentKey = key;

  sFreq.min = hzToSlider(d.minFreq);
  sFreq.max = hzToSlider(d.maxFreq);
  sFreq.value = (parseFloat(sFreq.min) + parseFloat(sFreq.max)) / 2;
  sAmp.value = 5;

  el.lblMin.textContent = d.minLabel;
  el.lblMax.textContent = d.maxLabel;
  el.infoName.textContent = d.name;
  el.infoName.style.color = d.color;
  renderFact();
  updateInfo();
}

// ---------- TOMBOL − / + (tekan-tahan = berulang) ----------
function setupStepper(minusId, plusId, step) {
  let holdTimer = null, repeat = null;
  const stop = () => { clearTimeout(holdTimer); clearInterval(repeat); holdTimer = repeat = null; };
  const start = (dir) => {
    stop();
    step(dir);
    holdTimer = setTimeout(() => { repeat = setInterval(() => step(dir), 60); }, 300);
  };
  [[minusId, -1], [plusId, 1]].forEach(([id, dir]) => {
    const btn = document.getElementById(id);
    btn.addEventListener("pointerdown", (e) => { e.preventDefault(); start(dir); });
    ["pointerup", "pointerleave", "pointercancel"].forEach((ev) => btn.addEventListener(ev, stop));
  });
}

function stepFreq(dir) {
  const hz = roundFreq(sliderToHz(sFreq.value));
  const lo = sliderToHz(sFreq.min), hi = sliderToHz(sFreq.max);
  const next = Math.min(hi, Math.max(lo, hz + dir * getDynamicStep(hz, dir < 0)));
  sFreq.value = hzToSlider(next);
  updateInfo();
}

function stepAmp(dir) {
  const v = Math.round((parseFloat(sAmp.value) + dir * 0.1) * 10) / 10; // hindari 0.30000000000000004
  sAmp.value = Math.min(parseFloat(sAmp.max), Math.max(parseFloat(sAmp.min), v));
  updateInfo();
}

// ---------- CANVAS GELOMBANG ----------
const CYCLES_MIN = 1.5, CYCLES_MAX = 12;  // jumlah gelombang di layar (slider kiri → kanan)
const CROSS_TIME = 4;                      // detik gelombang melintasi panel (kecepatan visual tetap)
const UNITS = ["Hz", "kHz", "MHz", "GHz", "THz", "PHz", "EHz"];
const LOG_MIN = 0, LOG_MAX = 21;

let canvas, ctx, offsetPx = 0, P = {};

function updatePalette() {
  const light = document.body.classList.contains("light-mode");
  P = light
    ? { grid: "rgba(0,0,0,0.07)", axis: "rgba(0,0,0,0.35)", arrow: "rgba(0,0,0,0.7)", rulerBg: "rgba(0,0,0,0.05)",
        rulerBorder: "rgba(0,0,0,0.25)", textActive: "#111827", textDim: "rgba(0,0,0,0.5)", marker: "#111827", glow: 4 }
    : { grid: "rgba(255,255,255,0.06)", axis: "rgba(255,255,255,0.35)", arrow: "rgba(255,255,255,0.7)", rulerBg: "rgba(255,255,255,0.05)",
        rulerBorder: "rgba(255,255,255,0.2)", textActive: "#fff", textDim: "rgba(255,255,255,0.45)", marker: "#fff", glow: 12 };
}

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
}

function drawGrid(w, h, midY) {
  const size = 40;
  ctx.lineWidth = 1; ctx.strokeStyle = P.grid; ctx.beginPath();
  for (let x = 0; x <= w; x += size) { ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, h); }
  for (let y = midY; y >= 0; y -= size) { ctx.moveTo(0, y + 0.5); ctx.lineTo(w, y + 0.5); }
  for (let y = midY + size; y <= h; y += size) { ctx.moveTo(0, y + 0.5); ctx.lineTo(w, y + 0.5); }
  ctx.stroke();
}

function drawFreqRuler(w, h, logF, color, data) {
  const padX = 24, barH = 20, barY = h - 66, x0 = padX, x1 = w - padX;
  const toX = (l) => x0 + ((l - LOG_MIN) / (LOG_MAX - LOG_MIN)) * (x1 - x0);
  const activeIdx = Math.max(0, Math.min(UNITS.length - 1, Math.floor(logF / 3)));

  ctx.font = "600 12px Poppins, sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  UNITS.forEach((name, i) => {
    const sx = toX(i * 3), ex = toX(i * 3 + 3), active = i === activeIdx;
    ctx.fillStyle = active ? color + "55" : P.rulerBg;
    ctx.fillRect(sx, barY, ex - sx, barH);
    ctx.strokeStyle = active ? color : P.rulerBorder; ctx.lineWidth = active ? 1.5 : 1;
    ctx.strokeRect(sx + 0.5, barY + 0.5, ex - sx - 1, barH - 1);
    ctx.fillStyle = active ? P.textActive : P.textDim;
    ctx.fillText(name, (sx + ex) / 2, barY + barH / 2 + 1);
  });

  if (data) { // rentang jenis gelombang terpilih
    const rs = toX(Math.log10(data.minFreq)), re = toX(Math.log10(data.maxFreq));
    ctx.fillStyle = color;
    ctx.fillRect(rs, barY + barH + 4, Math.max(2, re - rs), 3);
  }

  const mx = toX(Math.max(LOG_MIN, Math.min(LOG_MAX, logF))); // penanda posisi
  ctx.fillStyle = P.marker;
  ctx.beginPath(); ctx.moveTo(mx, barY - 1); ctx.lineTo(mx - 6, barY - 10); ctx.lineTo(mx + 6, barY - 10); ctx.closePath(); ctx.fill();

  const label = formatFrequency(roundFreq(Math.pow(10, logF)));
  const tw = ctx.measureText(label).width;
  ctx.fillText(label, Math.max(x0 + tw / 2, Math.min(x1 - tw / 2, mx)), barY - 20);
}

export function update(ts, dt) {
  if (!canvas || canvas.offsetParent === null) return;
  const w = canvas.width, h = canvas.height;

  const fMin = parseFloat(sFreq.min), fMax = parseFloat(sFreq.max);
  const pos = fMax > fMin ? (parseFloat(sFreq.value) - fMin) / (fMax - fMin) : 0.5;
  const amp = parseFloat(sAmp.value) || 0;

  const cycles = CYCLES_MIN * Math.pow(CYCLES_MAX / CYCLES_MIN, pos);
  const k = (2 * Math.PI) / (w / cycles);
  offsetPx = (offsetPx + (w / CROSS_TIME) * dt) % (w * 100); // cegah angka membesar tanpa batas

  const plotH = h - 90, midY = plotH / 2;
  const ampPx = (amp / 10) * (plotH / 2 - 20);
  const data = SPECTRUM[currentKey], color = data.color;

  ctx.clearRect(0, 0, w, h);
  drawGrid(w, h, midY);

  ctx.strokeStyle = P.axis; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(0, midY); ctx.lineTo(w, midY); ctx.stroke();

  ctx.beginPath();
  for (let x = 0; x <= w; x += 2) {
    const y = midY - Math.sin(k * (x - offsetPx)) * ampPx;
    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.strokeStyle = color; ctx.lineWidth = 3.5; ctx.shadowColor = color; ctx.shadowBlur = P.glow;
  ctx.stroke(); ctx.shadowBlur = 0;

  ctx.beginPath(); // panah arah rambat
  ctx.moveTo(w - 14, midY - 8); ctx.lineTo(w - 2, midY); ctx.lineTo(w - 14, midY + 8);
  ctx.fillStyle = P.arrow; ctx.fill();

  drawFreqRuler(w, h, parseFloat(sFreq.value), color, data);
}

// ---------- INIT ----------
export function init() {
  const $ = (id) => document.getElementById(id);
  sFreq = $("slider-freq");
  sAmp = $("slider-amp");
  el = {
    valF: $("val-f"), valA: $("val-a"),
    infoName: $("info-name"), infoFreq: $("info-freq"), infoLambda: $("info-lambda"),
    infoAmp: $("info-amp"), infoEnergy: $("info-energy"), infoFact: $("info-fact"),
    lblMin: $("lbl-fmin"), lblMax: $("lbl-fmax"),
  };

  sFreq.addEventListener("input", updateInfo);
  sAmp.addEventListener("input", updateInfo);
  setupStepper("btn-f-minus", "btn-f-plus", stepFreq);
  setupStepper("btn-a-minus", "btn-a-plus", stepAmp);

  const buttons = document.querySelectorAll("#page-3 .spec-btn");
  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.toggle("active", b === btn));
      loadSpectrum(btn.dataset.type);
    })
  );

  canvas = $("spectrum-canvas");
  ctx = canvas.getContext("2d");
  resizeCanvas();
  updatePalette();
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("themeChanged", updatePalette);
  window.addEventListener("langChanged", renderFact);

  loadSpectrum("radio");
}
