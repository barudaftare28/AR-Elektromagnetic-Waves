// ==========================================
// PAGE 2: MEDAN LISTRIK, MEDAN MAGNET, GELOMBANG ELEKTROMAGNETIK
// TAHAP 1: Box 1 (Medan Listrik). Tahap 2 dan 3 menambah fungsi di file ini.
// ==========================================

import { t } from "../Main/Bahasa.js";

// ---------- TERJEMAHAN ----------
export const i18n = {
  id: {
    p2_sim: "(SIMULASI)",
    p2_desc: "Pelajari medan listrik dan medan magnet, lalu lihat bagaimana keduanya membentuk gelombang elektromagnetik.",
    btn_reset: "RESET",
    btn_back: "Kembali ke Intro",
    btn_next: "Lanjut ke Spectrum (AR)",
    p2_formula: "Rumus",
    p2_sim_title: "Simulasi",
    p2_mat_title: "Memahami rumus",
      // Box 1: Medan Listrik
    p2_e_title: "Medan Listrik (E)",
    p2_e_intro: "Medan listrik adalah daerah di sekitar muatan listrik tempat muatan lain merasakan gaya. Muatan positif menghasilkan medan yang arahnya menjauhi muatan, sedangkan muatan negatif menghasilkan medan yang arahnya menuju muatan.",
    p2_e_leg_E: "Kuat Medan Listrik",
    p2_e_leg_F: "Gaya Listrik pada Muatan Uji",
    p2_e_leg_qt: "Muatan Uji",
    p2_e_leg_k: "Konstanta Coulomb",
    p2_e_leg_qs: "Muatan Sumber",
    p2_e_leg_r: "Jarak Dari Muatan Sumber",
    p2_e_r: "Jarak (r)",
    p2_e_out: "Kuat medan E",
    p2_e_q: "Muatan",
    p2_e_qlabel: "Muatan sumber",
    p2_e_note: "(besarnya tetap). Tombol + dan − mengganti jenis muatan, tanda − pada nilai E berarti arah medan menuju muatan sedangkan + (tidak ada tanda) pada nilai E berarti arah medan menjauhi muatan . Panjang panah bersifat skematis, sedangkan angka hasil dihitung dengan rumus.",
    p2_e_mat_1: "Semakin jauh jarak suatu titik dari muatan sumber, semakin kecil kuat medan listriknya. Tetapi semakin dekat suatu titik dari muatan sumber, makin besar pula kuat medan listriknya.",
    p2_e_mat_2: "Muatan listrik positif menghasilkan medan listrik yang arahnya menjauhi muatan. Sebaliknya, muatan listrik negatif menghasilkan medan listrik yang arahnya menuju muatan.",
    p2_e_mat_3: "Besar kuat medan listrik sebanding dengan besar muatan sumber.",
      // Box 2: Medan Magnet
    p2_b_title: "Medan Magnet (B)",
    p2_b_intro: "Medan magnet adalah daerah di sekitar magnet atau arus listrik tempat muncul gaya magnetik. Di sekitar kawat lurus berarus, garis medan magnet berbentuk lingkaran yang mengelilingi kawat.",
    p2_b_leg_B: "Kuat Medan Magnet",
    p2_b_leg_I: "Kuat Arus Listrik",
    p2_b_leg_r: "Jarak dari Kawat",
    p2_b_leg_mu: "Permeabilitas Ruang Hampa",
    p2_b_i: "Arus (I)",
    p2_b_r: "Jarak (r)",
    p2_b_out: "Kuat medan B",
    p2_b_note: "Arus mengalir keluar dari layar (⊙), sehingga garis medan berputar berlawanan arah jarum jam (kaidah tangan kanan). Tanda panah yang bergerak hanya ilustrasi arah medan, dan makin cepat saat arus makin besar atau titik makin dekat kawat. Panjang panah bersifat skematis.",
    p2_b_dir: "Arah arus",
    p2_b_dir_out: "Keluar layar",
    p2_b_dir_in: "Masuk layar",
    p2_b_note_in: "Arus mengalir masuk ke layar (⊗), sehingga garis medan berputar searah jarum jam (kaidah tangan kanan). Tanda panah yang bergerak hanya ilustrasi arah medan, dan makin cepat saat arus makin besar atau titik makin dekat kawat. Panjang panah bersifat skematis.",
    p2_b_mat_1: "Semakin jauh jarak suatu titik dari sumber magnet, semakin lemah kuat medan magnetnya. Tetapi semakin dekat jarak suatu titik dari sumber magnet, semakin kuat medan magnetnya.",
    p2_b_mat_2: "Semakin besar arusnya, semakin besar medan magnetnya. Tetapi semakin kecil arusnya, semakin kecil medan magnetnya.",
    p2_b_mat_3: "Semakin banyak lilitan kawat pada elektromagnet, semakin kuat medan magnet yang dihasilkan. Tetapi semakin sedikit lilitannya, semakin lemah medan magnetnya.",
    p2_b_mat_4: "Jika arah arus listrik di balik, arah putaran medan magnet di sekitar kawat juga akan ikut berputar.",
    // Tombol header dan kontrol bersama
    btn_pause: "PAUSE",
    btn_play: "PLAY",
      // Box 3: Gelombang Elektromagnetik
    p2_w_title: "Gelombang Elektromagnetik",
    p2_tt: "Gelombang merambat lurus dengan kecepatan konstan di ruang hampa.",
    p2_tab_e: "Medan Listrik",
    p2_tab_b: "Medan Magnet",
    p2_tab_eb: "Gelombang Elektromagnetik",
    p2_leg_e: "E (Vertikal, V/m)",
    p2_leg_b: "B (Horizontal, nT)",
    btn_zin: "Zoom In",
    btn_zout: "Zoom Out",
    p2_wave_f: "Frekuensi f",
    p2_wave_speed: "Kecepatan animasi",
    p2_note: "Frekuensi mengatur kerapatan gelombang. Kecepatan animasi hanya mengatur tayangan di layar.",
    p2_note_zoom: "Zoom hanya mengubah tampilan grafik, bukan nilai E, B, maupun frekuensi.",
    p2_sensor: "Sensor Real-time",
    p2_rt_e: "Medan Listrik (E) Saat Ini",
    p2_rt_b: "Medan Magnet (B) Saat Ini",
    p2_sensor_note: "Nilai dibaca pada garis putus-putus di grafik. Di ruang hampa B = E/c, sehingga B bernilai sangat kecil (dalam nT).",
    p2_how_title: "Bagaimana gelombang elektromagnetik terbentuk?",
    p2_how_1: "Perubahan medan listrik menghasilkan medan magnet. Ketika medan listrik berubah terhadap waktu, perubahan tersebut menghasilkan medan magnet yang juga berubah.",
    p2_how_2: "Perubahan medan magnet menghasilkan medan listrik. Medan magnet yang berubah terhadap waktu dapat menghasilkan medan listrik melalui proses induksi elektromagnetik.",
    p2_how_3: "Kedua medan saling berkaitan. Medan listrik dan medan magnet yang berubah secara terus-menerus saling mendukung dalam pembentukan dan perambatan gelombang elektromagnetik.",
  },
  en: {
    p2_sim: "(SIMULATION)",
    p2_desc: "Learn about electric and magnetic fields, then see how together they form an electromagnetic wave.",
    btn_reset: "RESET",
    btn_back: "Back to Intro",
    btn_next: "Next to Spectrum (AR)",
    p2_formula: "Formula",
    p2_sim_title: "Simulation",
    p2_mat_title: "Understanding the formula",
      // Box 1: Electric field
    p2_e_title: "Electric Field (E)",
    p2_e_intro: "An electric field is the region around an electric charge where other charges feel a force. A positive charge produces a field pointing away from it, while a negative charge produces a field pointing toward it.",
    p2_e_leg_E: "Electric Field Strength",
    p2_e_leg_F: "Electric Force on the Test Charge",
    p2_e_leg_qt: "Test Charge",
    p2_e_leg_k: "Coulomb constant",
    p2_e_leg_qs: "Source Charge",
    p2_e_leg_r: "Distance from the Source Charge",
    p2_e_r: "Distance (r)",
    p2_e_out: "Field strength E",
    p2_e_q: "Charge",
    p2_e_qlabel: "Source charge",
    p2_e_note: "(the magnitude remains constant). The + and − buttons change the type of charge; a − sign for the value of E indicates that the field is directed toward the charge, while a + sign (or the absence of a sign) for the value of E indicates that the field is directed away from the charge. The length of the arrow is schematic, whereas the numerical result is calculated using a formula.",
    p2_e_mat_1: "The further a point is from a source charge, the weaker the electric field strength at that point. Conversely, the closer a point is to a source charge, the greater the electric field strength.",
    p2_e_mat_2: "A positive electric charge produces an electric field directed away from the charge. Conversely, a negative electric charge produces an electric field directed toward the charge.",
    p2_e_mat_3: "The magnitude of the electric field strength is proportional to the magnitude of the source charge.",
      // Box 2: Magnetic field
    p2_b_title: "Magnetic Field (B)",
    p2_b_intro: "A magnetic field is the region around a magnet or an electric current where magnetic forces appear. Around a straight current-carrying wire, the magnetic field lines form circles around the wire.",
    p2_b_leg_B: "Magnetic Field Strength",
    p2_b_leg_I: "Electric Current",
    p2_b_leg_r: "Distance from the Wire",
    p2_b_leg_mu: "Permeability of Free Space",
    p2_b_i: "Current (I)",
    p2_b_r: "Distance (r)",
    p2_b_out: "Field strength B",
    p2_b_note: "The current flows out of the screen, so the field lines circle counterclockwise (right-hand rule). The moving arrows only illustrate the field direction, and they speed up as the current grows or the point gets closer to the wire. Arrow length is schematic.",
    p2_b_dir: "Current direction",
    p2_b_dir_out: "Out of screen",
    p2_b_dir_in: "Into screen",
    p2_b_note_in: "The current flows into the screen, so the field lines circle clockwise (right-hand rule). The moving arrows only illustrate the field direction, and they speed up as the current grows or the point gets closer to the wire. Arrow length is schematic.",
    p2_b_mat_1: "The further a point is from a magnetic source, the weaker its magnetic field strength becomes. Conversely, the closer a point is to a magnetic source, the stronger its magnetic field becomes.",
    p2_b_mat_2: "The greater the current, the stronger the magnetic field. Conversely, the smaller the current, the weaker the magnetic field.",
    p2_b_mat_3: "The more turns of wire an electromagnet has, the stronger the magnetic field it produces. Conversely, the fewer the turns, the weaker the magnetic field.",
    p2_b_mat_4: "If the direction of the electric current is reversed, the direction of the magnetic field's rotation around the wire will also change.",
    // Header buttons and shared controls
    btn_pause: "PAUSE",
    btn_play: "PLAY",
      // Box 3: Electromagnetic wave
    p2_w_title: "Electromagnetic Wave",
    p2_tt: "Waves propagate in a straight line at a constant speed in a vacuum.",
    p2_tab_e: "Electric Field",
    p2_tab_b: "Magnetic Field",
    p2_tab_eb: "Electromagnetic Wave",
    p2_leg_e: "E (Vertical, V/m)",
    p2_leg_b: "B (Horizontal, nT)",
    btn_zin: "Zoom In",
    btn_zout: "Zoom Out",
    p2_wave_f: "Frequency f",
    p2_wave_speed: "Animation speed",
    p2_note: "Frequency sets how closely spaced the waves are. Animation speed only changes the on-screen playback.",
    p2_note_zoom: "Zoom only changes the graph view, not the E, B, or frequency values.",
    p2_sensor: "Real-time Sensor",
    p2_rt_e: "Current Electric Field (E)",
    p2_rt_b: "Current Magnetic Field (B)",
    p2_sensor_note: "Values are read at the dashed line on the graph. In a vacuum B = E/c, so B is very small (in nT).",
    p2_how_title: "How is an electromagnetic wave formed?",
    p2_how_1: "A changing electric field produces a magnetic field. When an electric field changes over time, this change generates a magnetic field that also varies.",
    p2_how_2: "A changing magnetic field produces an electric field. A magnetic field that varies over time can generate an electric field through the process of electromagnetic induction.",
    p2_how_3: "The two fields are interrelated. Continuously changing electric and magnetic fields support one another in the formation and propagation of electromagnetic waves.",
  },
};

// ---------- KONSTANTA FISIKA ----------
const K_COULOMB = 9e9;   // N·m²/C²
const Q_SOURCE = 1e-6;   // C (muatan sumber tetap 1 µC)
const R_MIN = 0.1;       // m
const R_MAX = 5;         // m
const MU0 = 4 * Math.PI * 1e-7;   // T·m/A
const I_MAX = 20;        // A
const RB_MIN = 0.01;     // m
const RB_MAX = 1;        // m
const C_LIGHT = 3e8;     // m/s
const E0 = 2;            // V/m: simpangan E pada simulasi gelombang (nilai belajar)
const ZOOM_LEVELS = [0.5, 1, 2];
const ZOOM_IDS = ["z-05", "z-1", "z-2"];

// ---------- STATE ----------
const DEFAULTS = { r: 1, i: 5, R: 0.1, mode: "eb", zoom: 1, freq: 1, speed: 1, sign: 1, dir: 1 }; 
const S = { ...DEFAULTS, time: 0, paused: false };
const $ = (id) => document.getElementById(id);
const isLight = () => document.body.classList.contains("light-mode");

// ---------- HELPER UMUM ----------
// Kuat medan listrik (N/C) pada jarak r (m)
const fieldE = (r) => (K_COULOMB * Q_SOURCE) / (r * r);

// Kuat medan magnet (T) di sekitar kawat lurus: arus I (A), jarak R (m)
const fieldB = (I, R) => (MU0 * I) / (2 * Math.PI * R);
const B_MAX = fieldB(I_MAX, RB_MIN);   // 4 × 10⁻⁴ T (skala panjang panah)

// Angka ilmiah: 9000 -> "9.00 × 10<sup>3</sup>", 360 -> "360.00"
function fmtSci(v) {
  if (v === 0) return "0.00";
  const a = Math.abs(v);
  if (a >= 0.01 && a < 1000) return v.toFixed(2);
  const [m, e] = v.toExponential(2).split("e");
  return `${m} × 10<sup>${parseInt(e, 10)}</sup>`;
}

// Warna kanvas mengikuti tema
function pal() {
  return isLight()
    ? { text: "#111827", dim: "rgba(0,0,0,0.5)", e: "#0891b2", b: "#7c3aed", pos: "#dc2626", neg: "#2563eb", bg: "#ffffff", hi: "#111827", blue: "#2563eb", outline: "#000000", wire: "#374151", axis: "rgba(0,0,0,0.35)", grid: "rgba(0,0,0,0.12)" }
    : { text: "#f9fafb", dim: "rgba(255,255,255,0.55)", e: "#06b6d4", b: "#8b5cf6", pos: "#ef4444", neg: "#3b82f6", bg: "#111827", hi: "#ffffff", blue: "#3b82f6", outline: "#000000", wire: "#e5e7eb", axis: "rgba(255,255,255,0.4)", grid: "rgba(255,255,255,0.12)" };
}

// Samakan ukuran gambar kanvas dengan ukuran tampilnya
function fit(c) {
  const w = c.clientWidth, h = c.clientHeight;
  if (w && h && (c.width !== w || c.height !== h)) { c.width = w; c.height = h; }
  return [c.width, c.height];
}

function arrow(ctx, x1, y1, x2, y2, color, lw = 2.5) {
  const ang = Math.atan2(y2 - y1, x2 - x1), head = 8 + lw;
  ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = lw; ctx.lineCap = "round";
  ctx.beginPath(); ctx.moveTo(x1, y1);
  ctx.lineTo(x2 - Math.cos(ang) * head * 0.6, y2 - Math.sin(ang) * head * 0.6); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - head * Math.cos(ang - 0.4), y2 - head * Math.sin(ang - 0.4));
  ctx.lineTo(x2 - head * Math.cos(ang + 0.4), y2 - head * Math.sin(ang + 0.4));
  ctx.closePath(); ctx.fill();
}

// Panah berbingkai: badan dan kepala diberi garis tepi yang sama tebal ke segala arah
function arrowOutlined(ctx, x1, y1, x2, y2, color, outline, lw = 3, ow = 2) {
  const ang = Math.atan2(y2 - y1, x2 - x1), head = 8 + lw;   // sama dengan perhitungan di arrow()
  const bx = x2 - Math.cos(ang) * head * 0.6, by = y2 - Math.sin(ang) * head * 0.6;
  const lx = x2 - head * Math.cos(ang - 0.4), ly = y2 - head * Math.sin(ang - 0.4);
  const rx = x2 - head * Math.cos(ang + 0.4), ry = y2 - head * Math.sin(ang + 0.4);

  ctx.strokeStyle = outline; ctx.fillStyle = outline;
  ctx.lineCap = "round"; ctx.lineJoin = "round";

  // bingkai badan
  ctx.lineWidth = lw + ow * 2;
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(bx, by); ctx.stroke();

  // bingkai kepala: isi + stroke selebar 2×ow, sehingga melebar ow ke semua sisi
  ctx.beginPath(); ctx.moveTo(x2, y2); ctx.lineTo(lx, ly); ctx.lineTo(rx, ry); ctx.closePath();
  ctx.lineWidth = ow * 2;
  ctx.fill(); ctx.stroke();

  // panah berwarna di atasnya
  arrow(ctx, x1, y1, x2, y2, color, lw);
}

function label(ctx, s, x, y, color, size = 13, align = "center") {
  ctx.font = `600 ${size}px Poppins, sans-serif`;
  ctx.fillStyle = color; ctx.textAlign = align; ctx.textBaseline = "middle";
  ctx.fillText(s, x, y);
}

// ==========================================
// BOX 1: MEDAN LISTRIK
// ==========================================

// ---------- PANAH DINAMIS (Box 1) ----------
const PULSE = {
  life: 1.8,        // detik: umur satu panah
  len: 30,          // px: panjang panah, TETAP
  gapNear: 0.30,    // detik: jeda antar panah saat r terkecil (ramai)
  gapFar: 0.5,      // detik: jeda antar panah saat r terbesar (jarang)
  reachMin: 28,     // px: jarak tempuh saat r kecil
  reachMax: 90,     // px: jarak tempuh saat r besar
};

// Tingkat kekuatan medan: 0 (jauh/lemah) sampai 1 (dekat/kuat), skala log
function fieldLevel() {
  const lo = Math.log10(fieldE(R_MAX)), hi = Math.log10(fieldE(R_MIN));
  return Math.min(1, Math.max(0, (Math.log10(fieldE(S.r)) - lo) / (hi - lo)));
}

const pulses = [];   // { a: sudut (rad), age: umur (detik) }
let pulseTimer = 0;  // hitung mundur ke kemunculan berikutnya

function stepPulses(dt) {
  // jeda antar panah: makin kuat medan, makin singkat jedanya
  const gap = PULSE.gapFar + (PULSE.gapNear - PULSE.gapFar) * fieldLevel();

  pulseTimer = Math.min(pulseTimer - dt, gap * 1.4);  // langsung menyesuaikan saat slider digeser
  if (pulseTimer <= 0) {
    pulses.push({ a: Math.random() * Math.PI * 2, age: 0 });  // 1 panah, sudut acak
    pulseTimer = gap * (0.6 + Math.random() * 0.8);           // jeda diacak sedikit
  }

  for (let i = pulses.length - 1; i >= 0; i--) {
    pulses[i].age += dt;
    if (pulses[i].age >= PULSE.life) pulses.splice(i, 1);
  }
}

function drawE() {
  const c = $("e-canvas");
  if (!c) return;
  const [w, h] = fit(c);
  if (!w) return;
  const ctx = c.getContext("2d"), P = pal();
  ctx.clearRect(0, 0, w, h);

  const len = PULSE.len;                        // panjang panah (skematis, mengikuti E)

  // jarak tempuh panah dinamis: makin besar r, makin jauh
  const tR = (S.r - R_MIN) / (R_MAX - R_MIN);     // 0 sampai 1
  const reach = PULSE.reachMin + (PULSE.reachMax - PULSE.reachMin) * tR;

  // sumbu digeser ke bawah supaya kotak di kanan atas tidak menutupi
  const cx = 120, cy = h - 105;

  // Panah dinamis dari muatan
  pulses.forEach((p) => {
    const u = p.age / PULSE.life;                  // 0 sampai 1
    const s = S.sign > 0 ? u : 1 - u;              // + : keluar,  − : masuk
    const base = 24 + reach * s;                   // ujung dalam panah
    const tail = S.sign > 0 ? base : base + len;   // pangkal panah
    const head = S.sign > 0 ? base + len : base;   // kepala panah
    const cs = Math.cos(p.a), sn = Math.sin(p.a);
    ctx.globalAlpha = Math.sin(Math.PI * u);
    arrow(ctx, cx + cs * tail, cy + sn * tail, cx + cs * head, cy + sn * head, P.e, 2.2);
  });
  ctx.globalAlpha = 1;

  // Muatan sumber (+)
  ctx.beginPath(); ctx.arc(cx, cy, 15, 0, Math.PI * 2);
  ctx.fillStyle = S.sign > 0 ? P.pos : P.neg; ctx.fill();
  label(ctx, S.sign > 0 ? "+" : "−", cx, cy + 1, "#fff", 20);

  // Titik uji P pada jarak r
  const x0 = cx + 70, x1 = w - 70;
  const px = x0 + ((S.r - R_MIN) / (R_MAX - R_MIN)) * Math.max(0, x1 - x0);

  ctx.setLineDash([5, 4]); ctx.strokeStyle = P.dim; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(cx + 16, cy); ctx.lineTo(px - 10, cy); ctx.stroke();
  ctx.setLineDash([]);

  ctx.beginPath(); ctx.arc(px, cy, 8, 0, Math.PI * 2);
  ctx.lineWidth = 2; ctx.strokeStyle = P.text; ctx.stroke();
  label(ctx, "P", px, cy - 22, P.text, 13);

  // Panah medan di P                                        ← (3)
  if (S.sign > 0) arrow(ctx, px + 12, cy, px + 12 + len, cy, P.e, 3);   // menjauhi muatan
  else            arrow(ctx, px + 12 + len, cy, px + 12, cy, P.e, 3);   // menuju muatan

  // Garis ukur jarak r
  const yDim = cy + 62;
  ctx.strokeStyle = P.dim; ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(cx, yDim); ctx.lineTo(px, yDim);
  ctx.moveTo(cx, yDim - 6); ctx.lineTo(cx, yDim + 6);
  ctx.moveTo(px, yDim - 6); ctx.lineTo(px, yDim + 6);
  ctx.stroke();
  label(ctx, `r = ${S.r.toFixed(1)} m`, (cx + px) / 2, yDim + 16, P.text, 13);
}

function updateE() {
  const E = fieldE(S.r) * S.sign;
  $("e-r-val").textContent = `${S.r.toFixed(1)} m`;
  $("e-out").innerHTML = `${fmtSci(E)} N/C`;
  $("e-q-val").textContent = `${S.sign > 0 ? "" : "−"}1 µC`; 
  drawE();
}

function setSign(sign) {
  S.sign = sign;
  document.querySelectorAll("#page-2 .charge-btn").forEach((b) => {
    const on = +b.dataset.sign === sign;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", String(on));
  });
  pulses.length = 0;    // buang panah lama supaya arah baru langsung terlihat
  pulseTimer = 0;
  updateE();
}

// ==========================================
// BOX 2: MEDAN MAGNET
// ==========================================
// Segitiga kecil pada lingkaran, menunjukkan arah putaran medan (berlawanan arah jarum jam)
// Segitiga kecil pada lingkaran, menunjukkan arah putaran medan (berlawanan arah jarum jam)
function chevron(ctx, cx, cy, r, th, color, sc = 1) {
  const x = cx + r * Math.cos(th), y = cy + r * Math.sin(th);
  const tx = Math.sin(th) * S.dir, ty = -Math.cos(th) * S.dir;   // arah singgung
  const nx = Math.cos(th), ny = Math.sin(th);    // arah jari-jari
  const a = 6 * sc, b = 5 * sc;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x + tx * a, y + ty * a);
  ctx.lineTo(x - tx * b + nx * b, y - ty * b + ny * b);
  ctx.lineTo(x - tx * b - nx * b, y - ty * b - ny * b);
  ctx.closePath();
  ctx.fill();
}

// ---------- GARIS MEDAN BERPUTAR (Box 2) ----------
const B_RINGS = [0.34, 0.55, 0.76, 0.97];                 // jari-jari lingkaran garis medan (× rMax)
const bSpin = { rings: [0, 0.6, 1.2, 1.8], probe: 0 };    // sudut tanda panah (rad), awal berbeda agar tidak sejajar

// Lingkaran yang melewati titik uji P (× rMax), skala akar agar R kecil tetap terpisah
const probeFrac = () => 0.28 + 0.68 * Math.sqrt((S.R - RB_MIN) / (RB_MAX - RB_MIN));

// Kecepatan putar (rad/detik): makin besar arus makin cepat, makin dekat kawat makin cepat
function spinSpeed(f) {
  if (S.i <= 0) return 0;
  return (0.5 + 3 * (S.i / I_MAX)) * Math.sqrt(B_RINGS[0] / f);
}

function stepSpin(dt) {
  const TWO_PI = Math.PI * 2;
  // tanda minus = berputar berlawanan arah jarum jam
  B_RINGS.forEach((f, i) => { bSpin.rings[i] = (bSpin.rings[i] - S.dir * spinSpeed(f) * dt) % TWO_PI; });
  bSpin.probe = (bSpin.probe - S.dir * spinSpeed(probeFrac()) * dt) % TWO_PI;
}

// Letakkan lingkaran medan di area yang tidak tertutup tiga kotak di kanan atas (kiri-bawah)
function layoutB(c, w, h) {
  const full = {
    rMax: Math.max(30, Math.min((w / 2 - 26) / 0.97, w / 2 - 10, (h - 24) / 2)),
    cx: w / 2, cy: h / 2,
  };
  const o = $("b-overlay");
  if (!o) return full;
  const cr = c.getBoundingClientRect(), or = o.getBoundingClientRect();
  const left = or.left - cr.left, top = or.top - cr.top, bottom = or.bottom - cr.top;
  if (or.width === 0 || bottom <= 0 || top >= h || left >= w) return full;   // kotak tidak menutupi kanvas

  // A: di kiri kotak. B: di bawah kotak. Pilih yang lebih luas, rapatkan ke kiri-bawah.
  // (sisakan 10 px di kiri, dan 26 px di kanan untuk huruf B)
  const d = $("b-dir-box");
  const dBottom = d ? d.getBoundingClientRect().bottom - cr.top + 8 : 0;
  const limit = (aw, ah) => Math.min((aw - 36) / 1.97, (ah - 24) / 2);
  const rA = limit(left - 8, h - dBottom);
  const rB = limit(w, h - bottom - 8);
  const rMax = Math.max(30, rA >= rB ? rA : rB);
  return { rMax, cx: 10 + rMax, cy: h - 12 - rMax };
}

// Teks dengan garis tepi warna latar, agar tetap terbaca di atas garis medan
function tag(ctx, s, x, y, color, bg, size = 12, align = "center") {
  ctx.font = `600 ${size}px Poppins, sans-serif`;
  ctx.textAlign = align; ctx.textBaseline = "middle";
  ctx.lineJoin = "round"; ctx.lineWidth = 4; ctx.strokeStyle = bg;
  ctx.strokeText(s, x, y);
  ctx.fillStyle = color; ctx.fillText(s, x, y);
}

function drawB() {
  const c = $("b-canvas");
  if (!c) return;
  const [w, h] = fit(c);
  if (!w) return;
  const ctx = c.getContext("2d"), P = pal();
  ctx.clearRect(0, 0, w, h);

  const on = S.i > 0;
  const B = fieldB(S.i, S.R);
  const tB = on ? Math.sqrt(Math.min(1, B / B_MAX)) : 0;   // akar agar arus kecil tetap terlihat
  const { rMax, cx, cy } = layoutB(c, w, h);
  const marks = (phase) => [0, 1, 2, 3].map((k) => phase + (k * Math.PI) / 2);   // 4 tanda panah per lingkaran

  // Garis medan: lingkaran konsentris, makin terang bila arus makin besar. Tanda panah berputar.
  const alpha = on ? 0.35 + 0.45 * (S.i / I_MAX) : 0.15;
  B_RINGS.forEach((f, i) => {
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = P.b; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(cx, cy, f * rMax, 0, Math.PI * 2); ctx.stroke();
    ctx.globalAlpha = 1;
    if (on) marks(bSpin.rings[i]).forEach((th) => chevron(ctx, cx, cy, f * rMax, th, P.b));
  });

  // Titik uji P pada jarak R
  const pr = probeFrac() * rMax;
  const px = cx + pr;

  // Lingkaran medan yang melewati titik uji (tanda panahnya sedikit lebih besar)
  ctx.globalAlpha = on ? 0.95 : 0.3;
  ctx.strokeStyle = P.hi; ctx.lineWidth = 3;                    // ← sebelumnya P.b
  ctx.beginPath(); ctx.arc(cx, cy, pr, 0, Math.PI * 2); ctx.stroke();
  ctx.globalAlpha = 1;
  if (on) marks(bSpin.probe).forEach((th) => chevron(ctx, cx, cy, pr, th, P.hi, 1.3));   // ← sebelumnya P.b

  // Garis jarak R
  ctx.setLineDash([5, 4]); ctx.strokeStyle = P.dim; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(cx + 14, cy); ctx.lineTo(px - 7, cy); ctx.stroke();
  ctx.setLineDash([]);
  tag(ctx, `r = ${S.R.toFixed(2)} m`, (cx + 14 + px) / 2, cy + 38, P.text, P.bg, 12);

  // Kawat: arus keluar dari layar (lingkaran dengan titik)
  ctx.strokeStyle = P.b; ctx.fillStyle = P.b; ctx.lineWidth = 2.5;       // ← sebelumnya P.hi
  ctx.beginPath(); ctx.arc(cx, cy, 12, 0, Math.PI * 2); ctx.stroke();
  if (S.dir > 0) { ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2); ctx.fill(); }   // ⊙ keluar layar
  else { ctx.beginPath(); ctx.moveTo(cx - 6, cy - 6); ctx.lineTo(cx + 6, cy + 6); ctx.moveTo(cx + 6, cy - 6); ctx.lineTo(cx - 6, cy + 6); ctx.stroke(); }   // ⊗ masuk layar  
  tag(ctx, "I", cx, cy - (12 + B_RINGS[0] * rMax) / 2, P.b, P.bg, 14);   // ← sebelumnya P.hi

  // Titik uji dan panah B (menyinggung lingkaran, ke atas di sisi kanan)
  ctx.beginPath(); ctx.arc(px, cy, 6, 0, Math.PI * 2);
  ctx.fillStyle = P.text; ctx.fill();
  tag(ctx, "P", px, cy + 20 * S.dir, P.text, P.bg, 13);
  if (on) {
    const len = 10 + 36 * tB;
    const y0 = cy - 10 * S.dir, y1 = y0 - S.dir * len;
    arrowOutlined(ctx, px, y0, px, y1, P.b, P.outline, 3, 1.5);
    tag(ctx, "B", px + 14, (y0 + y1) / 2, P.b, P.bg, 13, "left");
  }
}

function updateB() {
  const B = fieldB(S.i, S.R);
  $("b-i-val").textContent = `${S.i.toFixed(1)} A`;
  $("b-r-val").textContent = `${S.R.toFixed(2)} m`;
  $("b-out").innerHTML = `${fmtSci(B * 1e6)} µT`;
  drawB();
}

function setDir(d) {
  S.dir = d;
  document.querySelectorAll("#page-2 .dir-btn").forEach((b) => {
    const on = +b.dataset.dir === d;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", String(on));
  });
  [["b-note", d > 0 ? "p2_b_note" : "p2_b_note_in"], ["b-dir-cap", d > 0 ? "p2_b_dir_out" : "p2_b_dir_in"]].forEach(([id, k]) => {
    const n = $(id); n.dataset.i18n = k; n.textContent = t(k);   // ikut berganti saat bahasa diganti
  });
  updateB();
}

// ==========================================
// BOX 3: GELOMBANG ELEKTROMAGNETIK
// ==========================================
// Angka bertanda: +1.23 / -1.23 / 0.00
const signed = (v) => {
  const s = v.toFixed(2);
  return s === "0.00" || s === "-0.00" ? "0.00" : v > 0 ? "+" + s : s;
};

function setMode(m) {
  S.mode = m;
  document.querySelectorAll("#page-2 .wave-tab").forEach((b) => {
    const on = b.dataset.mode === m;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", String(on));
  });
}

function setZoom(val) {
  S.zoom = val;
  ZOOM_IDS.forEach((id, i) => $(id).classList.toggle("active", ZOOM_LEVELS[i] === val));
  $("z-out").disabled = val <= ZOOM_LEVELS[0];
  $("z-in").disabled = val >= ZOOM_LEVELS[ZOOM_LEVELS.length - 1];
}

function renderWaveControls() {
  $("sl-wave-f-val").textContent = `${S.freq.toFixed(1)}×`;
  $("sl-wave-speed-val").textContent = `${S.speed}×`;
}

function renderPauseButton() {
  const lbl = $("pause-label");
  lbl.dataset.i18n = S.paused ? "btn_play" : "btn_pause";   // agar ikut berganti saat bahasa diganti
  lbl.textContent = t(lbl.dataset.i18n);
  $("pause-icon").textContent = S.paused ? "▶" : "⏸";
}

function drawWave() {
  const c = $("wave-canvas-2d");
  const [w, h] = fit(c);
  if (!w) return;
  const ctx = c.getContext("2d"), P = pal();
  ctx.clearRect(0, 0, w, h);

  const midY = h / 2;
  const ampPx = (h / 5) * S.zoom;            // simpangan E = 2 V/m
  const bAmp = ampPx * 0.8;                  // simpangan B (skema, bukan skala fisika)
  const k = (0.02 * S.freq) / S.zoom;        // bilangan gelombang (rad per piksel)
  const showE = S.mode !== "b", showB = S.mode !== "e";
  const sinAt = (x) => Math.sin(k * x - S.time);
  // Sumbu keluar-layar diproyeksikan miring (ke kiri bawah) agar B terlihat tegak lurus E
  const projB = (x, s) => [x - s * bAmp * 0.45, midY + s * bAmp * 0.3];

  // Garis bantu nilai E (±1 dan ±2 V/m), label di sisi kanan
  if (showE) {
    ctx.setLineDash([4, 6]); ctx.lineWidth = 1; ctx.strokeStyle = P.grid;
    [-2, -1, 1, 2].forEach((v) => {
      const y = midY - (v / E0) * ampPx;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      label(ctx, (v > 0 ? "+" : "") + v, w - 8, y - 9, P.dim, 11, "right");
    });
    ctx.setLineDash([]);
  }

  // Sumbu rambat
  ctx.strokeStyle = P.axis; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(0, midY); ctx.lineTo(w, midY); ctx.stroke();

  // Garis penghubung dari sumbu ke kurva
  ctx.globalAlpha = 0.22; ctx.lineWidth = 1.5;
  for (let x = 0; x <= w; x += 14) {
    const s = sinAt(x);
    if (showB) {
      const [bx, by] = projB(x, s);
      ctx.strokeStyle = P.b; ctx.beginPath(); ctx.moveTo(x, midY); ctx.lineTo(bx, by); ctx.stroke();
    }
    if (showE) {
      ctx.strokeStyle = P.e; ctx.beginPath(); ctx.moveTo(x, midY); ctx.lineTo(x, midY - s * ampPx); ctx.stroke();
    }
  }
  ctx.globalAlpha = 1;

  // Kurva gelombang (B di belakang, E di depan)
  ctx.lineWidth = 3.5; ctx.lineJoin = "round";
  if (showB) {
    ctx.strokeStyle = P.b; ctx.beginPath();
    for (let x = 0; x <= w; x += 2) {
      const [bx, by] = projB(x, sinAt(x));
      if (x === 0) ctx.moveTo(bx, by); else ctx.lineTo(bx, by);
    }
    ctx.stroke();
  }
  if (showE) {
    ctx.strokeStyle = P.e; ctx.beginPath();
    for (let x = 0; x <= w; x += 2) {
      const y = midY - sinAt(x) * ampPx;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // Titik baca sensor di tengah grafik (garis putus-putus)
  const xp = w / 2, sp = sinAt(xp);
  ctx.setLineDash([5, 5]); ctx.lineWidth = 1.5; ctx.strokeStyle = P.dim;
  ctx.beginPath(); ctx.moveTo(xp, 0); ctx.lineTo(xp, h); ctx.stroke();
  ctx.setLineDash([]);
  const dot = (x, y, color) => {
    ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = color; ctx.fill();
    ctx.lineWidth = 2; ctx.strokeStyle = P.text; ctx.stroke();
  };
  if (showE) dot(xp, midY - sp * ampPx, P.e);
  if (showB) { const [bx, by] = projB(xp, sp); dot(bx, by, P.b); }

  // Panah arah rambat
  ctx.fillStyle = P.text;
  ctx.beginPath(); ctx.moveTo(w - 12, midY - 8); ctx.lineTo(w, midY); ctx.lineTo(w - 12, midY + 8);
  ctx.closePath(); ctx.fill();

  // Sensor real-time: E = 2 V/m × sin, dan B = E/c (dalam nT)
  const eVal = E0 * sp, bVal = (E0 / C_LIGHT) * 1e9 * sp;
  const elE = $("rt-e"), elB = $("rt-b");
  if (elE) elE.innerHTML = `${signed(eVal)} <span class="val-unit">V/m</span>`;
  if (elB) elB.innerHTML = `${signed(bVal)} <span class="val-unit">nT</span>`;
}

// Dipanggil oleh loop animasi (AnimationFrame.js) pada setiap frame
export function update(ts, dt) {
  const c = $("wave-canvas-2d");
  if (!c || c.offsetParent === null) return;
  if (!S.paused) S.time += dt * 3 * S.speed;
  drawWave();
  stepPulses(dt);   // BARU: majukan umur panah
  drawE();          // BARU: gambar ulang Box 1 setiap frame
  stepSpin(dt);   // putar tanda panah Box 2
  drawB();        // gambar ulang Box 2 setiap frame
}

// ==========================================
// TOMBOL RESET DAN INISIALISASI
// ==========================================

// Tombol Reset berada di Box 3, jadi hanya mengatur ulang box gelombang
function resetWave() {
  Object.assign(S, { mode: DEFAULTS.mode, zoom: DEFAULTS.zoom, freq: DEFAULTS.freq, speed: DEFAULTS.speed, time: 0, paused: false });
  $("sl-wave-f").value = S.freq;
  $("sl-wave-speed").value = S.speed;
  setMode(S.mode);
  setZoom(S.zoom);
  renderWaveControls();
  renderPauseButton();
}

// Nilai awal Box 1 dan Box 2 (dipakai saat halaman pertama kali dibuka)
function resetFields() {
  Object.assign(S, { r: DEFAULTS.r, i: DEFAULTS.i, R: DEFAULTS.R, sign: DEFAULTS.sign, dir: DEFAULTS.dir });
  $("e-r").value = S.r;
  $("b-i").value = S.i;
  $("b-r").value = S.R;
  updateE();
  setDir(DEFAULTS.dir);   // sekaligus memanggil updateB()
}

export function init() {
  if (!$("e-canvas")) return;

  // Box 1 dan Box 2
  $("e-r").addEventListener("input", (e) => { S.r = parseFloat(e.target.value); updateE(); });
  $("b-i").addEventListener("input", (e) => { S.i = parseFloat(e.target.value); updateB(); });
  $("b-r").addEventListener("input", (e) => { S.R = parseFloat(e.target.value); updateB(); });

  // Box 3: tombol tampilan, zoom, slider
  document.querySelectorAll("#page-2 .charge-btn").forEach((b) =>b.addEventListener("click", () => setSign(+b.dataset.sign)));
  document.querySelectorAll("#page-2 .dir-btn").forEach((b) => b.addEventListener("click", () => setDir(+b.dataset.dir)));
  document.querySelectorAll("#page-2 .wave-tab").forEach((b) => b.addEventListener("click", () => setMode(b.dataset.mode)));
  ZOOM_IDS.forEach((id, i) => $(id).addEventListener("click", () => setZoom(ZOOM_LEVELS[i])));
  $("z-in").addEventListener("click", () => setZoom(ZOOM_LEVELS[Math.min(ZOOM_LEVELS.indexOf(S.zoom) + 1, ZOOM_LEVELS.length - 1)]));
  $("z-out").addEventListener("click", () => setZoom(ZOOM_LEVELS[Math.max(ZOOM_LEVELS.indexOf(S.zoom) - 1, 0)]));
  $("sl-wave-f").addEventListener("input", (e) => { S.freq = parseFloat(e.target.value); renderWaveControls(); });
  $("sl-wave-speed").addEventListener("input", (e) => { S.speed = parseFloat(e.target.value); renderWaveControls(); });

  // Tombol header
  $("btn-pause").addEventListener("click", () => { S.paused = !S.paused; renderPauseButton(); });
    $("btn-reset").addEventListener("click", resetWave);

  const redraw = () => { drawE(); drawB(); };
  window.addEventListener("resize", redraw);
  window.addEventListener("themeChanged", redraw);

  resetFields();
  resetWave();
}