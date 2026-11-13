import { getLang } from "../Main/Bahasa.js";

export const i18n = {
  id: {
    p3_sub: "Eksplorasi 7 jenis gelombang elektromagnetik, bandingkan, dan lihat dampaknya!",
    p3_map: "Peta Spektrum", 
    p3_map_hint: "Klik jenis gelombang atau geser slider pada Simulasi Spectrum Elektromagnetik.",
    p3_lo: "◀ f Rendah · λ Panjang · Energi Kecil", 
    p3_hi: "f Tinggi · λ Pendek · Energi Besar ▶",
    p3_title: "Simulasi Spektrum EM", 
    p3_tt: "Semua gelombang EM merambat dengan kecepatan c di ruang hampa. Yang berbeda hanya frekuensinya.",
    p3_ylabel: "Gelombang (ilustrasi, tinggi = amplitudo)", 
    p3_active: "● AR Aktif",
    p3_mode1: "Satu Gelombang", 
    p3_mode2: "Bandingkan 2 Gelombang", 
    p3_cmpA: "Gelombang A", 
    p3_cmpB: "Gelombang B",
    p3_extreme: "Ekstrem (terendah vs tertinggi)",
    p3_freq: "Frekuensi (f)", 
    p3_amp: "Amplitudo (A)", 
    p3_speed: "Kecepatan (c)",
    p3_note: "Jika amplitudo dinaikkan, tinggi gelombang akan meningkat. Jika diperkecil, tinggi gelombang akan menurun. Amplitudo tidak mengubah f, λ, maupun c.",
    p3_note_f: "Jika frekuensi dinaikkan, gelombang menjadi makin rapat dan panjang gelombang (λ) mengecil. Jika diturunkan, gelombang menjadi makin renggang dan λ membesar. Kecepatan tetap c. Jumlah gelombang di layar hanya ilustrasi, angka di panel info adalah nilai sebenarnya.",
    p3_note_cmp: "Mode ini menampilkan kedua gelombang pada frekuensi maksimal dari rentang jenisnya masing-masing.",
    p3_info: "Informasi Real-time", 
    p3_type: "Jenis Gelombang", 
    p3_range: "Rentang Frekuensi",
    p3_lambda: "Panjang Gelombang (λ)", 
    p3_energy: "Energi Foton (E)",
    p3_cause: "🔁 Apa yang berubah?", 
    p3_fact: "💡 Fun Fact & Pengaplikasian",
    p3_cause0: "Geser slider atau pilih jenis lain untuk melihat sebab-akibatnya.",
    p3_causeF: (d, r) => `f ${d ? "naik" : "turun"} <b>${r}×</b> → λ ${d ? "mengecil" : "membesar"} <b>${r}×</b> → energi foton ${d ? "naik" : "turun"} <b>${r}×</b>. Kecepatan tetap c.`,
    p3_lg_c: "Kecepatan Cahaya", 
    p3_lg_lam: "Panjang Gelombang", 
    p3_lg_f: "Frekuensi", 
    p3_lg_E: "Energi Foton", 
    p3_lg_h: "Konstanta Planck",
    p3_safety: "Meter Keamanan", 
    p3_ion: "pengion (≈10 eV)",
    lv0: "Aman", 
    lv1: "Waspada", 
    lv2: "Berbahaya", 
    lv3: "Sangat berbahaya", 
    p3_ionY: "Pengion", 
    p3_ionN: "Non-pengion",
    p3_safe_hint: "Makin tinggi f, makin besar energi tiap foton (E = h·f). Foton ≥ ~10 eV dapat mengionisasi atom dan merusak sel. Bahaya juga bergantung pada intensitas dan lama paparan.",
    p3_ex: "Contoh di Kehidupan Nyata", 
    p3_quiz: "Cek Pemahaman", 
    p3_score: (s, n) => `Skor kamu: ${s} dari ${n}`,
    p3_ok: "Benar. ", 
    p3_no: "Belum tepat. ", 
    p3_pause: "PAUSE", 
    p3_resume: "PLAY", 
    p3_reset: "RESET",
    p3_cmpHead: ["", "Perbandingan B terhadap A"], 
    p3_row: ["Frekuensi", "Panjang gelombang", "Energi foton", "Kecepatan", "Tingkat bahaya"], 
    p3_same: "sama",
    p3_back: "⬅ Kembali ke Wave Lab", 
    p3_next: "Lanjut ke Challenge ➔",
  },
  en: {
    p3_sub: "Explore the 7 electromagnetic wave types, compare them, and see their effects!",
    p3_map: "Spectrum Map", 
    p3_map_hint: "Click on a type of wave or move the slider in the Electromagnetic Spectrum Simulation.",
    p3_lo: "◀ Low f · Long λ · Low Energy", 
    p3_hi: "High f · Short λ · High Energy ▶",
    p3_title: "EM Spectrum Simulation", 
    p3_tt: "All EM waves travel at speed c in a vacuum. Only their frequency differs.",
    p3_ylabel: "Wave (illustrative, height = amplitude)", 
    p3_active: "● AR Active",
    p3_mode1: "Single Wave", 
    p3_mode2: "Compare 2 Waves", 
    p3_cmpA: "Wave A", 
    p3_cmpB: "Wave B",
    p3_extreme: "Extreme (lowest vs highest)",
    p3_freq: "Frequency (f)", 
    p3_amp: "Amplitude (A)", 
    p3_speed: "Speed (c)",
    p3_note: "If the amplitude is increased, the wave height rises. If it is decreased, the wave height drops. Amplitude does not change f, λ, or c.",
    p3_note_f: "If the frequency is increased, the waves become more closely spaced and the wavelength (λ) shrinks. If it is decreased, the waves spread out and λ grows. Speed stays c. Waves on screen are illustrative, the info panel shows real values.",
    p3_note_cmp: "This mode shows both waves at the maximum frequency of their own range.",
    p3_info: "Real-time Information", 
    p3_type: "Wave Type",
    p3_range: "Frequency Range", 
    p3_lambda: "Wavelength (λ)", 
    p3_energy: "Photon Energy (E)",
    p3_cause: "🔁 What changed?", 
    p3_fact: "💡 Fun Fact & Applications",
    p3_cause0: "Move the slider or pick another type to see cause and effect.",
    p3_causeF: (d, r) => `f ${d ? "up" : "down"} <b>${r}×</b> → λ ${d ? "shrinks" : "grows"} <b>${r}×</b> → photon energy ${d ? "up" : "down"} <b>${r}×</b>. Speed stays c.`,
    p3_lg_c: "Speed of Light", 
    p3_lg_lam: "Wavelength", 
    p3_lg_f: "Frequency", 
    p3_lg_E: "Photon Energy", 
    p3_lg_h: "Planck Constant",
    p3_safety: "Safety Meter", 
    p3_ion: "ionizing (≈10 eV)",
    lv0: "Safe", 
    lv1: "Caution", 
    lv2: "Dangerous", 
    lv3: "Very dangerous", 
    p3_ionY: "Ionizing", 
    p3_ionN: "Non-ionizing",
    p3_safe_hint: "Higher f means more energy per photon (E = h·f). Photons ≥ ~10 eV can ionize atoms and damage cells. Risk also depends on intensity and exposure time.",
    p3_ex: "Real-life Examples", 
    p3_quiz: "Check Your Understanding", 
    p3_score: (s, n) => `Your score: ${s} of ${n}`,
    p3_ok: "Correct. ", 
    p3_no: "Not quite. ", 
    p3_pause: "PAUSE", 
    p3_resume: "PLAY", 
    p3_reset: "RESET",
    p3_cmpHead: ["", "B relative to A"], 
    p3_row: ["Frequency", "Wavelength", "Photon energy", "Speed", "Risk level"], 
    p3_same: "same",
    p3_back: "⬅ Back to Wave Lab", 
    p3_next: "Next to Challenge ➔",
  },
};

// ---------- DATA ([id, en]) ----------
const WV = [
  { k: "radio", n: ["Gelombang Radio", "Radio Waves"], col: "#ef4444", lo: 3, hi: 3e8, def: 1e8, rg: "3 Hz – 300 MHz", lv: 0, img: ["radio-fm", "radio-walkie"], em: ["📻", "📡"],
    fact: ["Dipakai untuk siaran radio FM, TV, dan komunikasi jarak jauh.", "Used for FM radio, TV broadcasts, and long-distance communication."],
    sf: ["Umumnya aman: tidak mengionisasi dan energi fotonnya sangat kecil.", "Generally safe: non-ionizing with very small photon energy."],
    ex: [["Radio FM", "FM Radio"], ["Sinyal ±100 MHz (λ ≈ 3 m) ditangkap antena dan diubah jadi suara. λ panjang mudah menembus dinding.", "A ~100 MHz signal (λ ≈ 3 m) is picked up by an antenna and turned into sound. Long λ passes walls easily."], ["Walkie-talkie", "Walkie-talkie"], ["Dipakai petugas dan pendaki untuk komunikasi tanpa sinyal seluler (±150 MHz).", "Used by guards and hikers to communicate without cellular signal (~150 MHz)."]] },
  { k: "microwave", n: ["Gelombang Mikro", "Microwave"], col: "#f97316", lo: 3e8, hi: 3e11, def: 2.4e9, rg: "300 MHz – 300 GHz", lv: 0, img: ["microwave-oven", "microwave-wifi"], em: ["🍲", "📶"],
    fact: ["Dipakai pada oven microwave, WiFi, satelit, dan radar.", "Used in microwave ovens, WiFi, satellites, and radar."],
    sf: ["Aman pada intensitas rendah (WiFi). Intensitas tinggi memanaskan air, itulah cara kerja oven.", "Safe at low intensity (WiFi). High intensity heats water, which is how ovens work."],
    ex: [["Oven microwave", "Microwave oven"], ["2,45 GHz (λ ≈ 12 cm) membuat molekul air bergetar dan panas. Jaring di kaca pintu menahan gelombang.", "2.45 GHz (λ ≈ 12 cm) shakes water molecules into heat. The door mesh blocks the waves."], ["WiFi & Bluetooth", "WiFi & Bluetooth"], ["Membawa data lewat 2,4 dan 5 GHz. Intensitas rendah sehingga tidak memanaskan tubuh.", "Carries data at 2.4 and 5 GHz. Intensity is too low to heat the body."]] },
  { k: "infrared", n: ["Inframerah", "Infrared"], col: "#eab308", lo: 3e11, hi: 4.3e14, def: 3e13, rg: "300 GHz – 430 THz", lv: 0, img: ["infrared-remote", "infrared-thermal"], em: ["📺", "🌡️"],
    fact: ["Dipancarkan benda hangat; dipakai pada remote dan kamera termal.", "Emitted by warm objects; used in remotes and thermal cameras."],
    sf: ["Aman pada intensitas normal. Terasa sebagai panas; intensitas tinggi bisa membakar kulit.", "Safe at normal intensity. Felt as heat; high intensity can burn skin."],
    ex: [["Remote TV", "TV remote"], ["LED inframerah berkedip membawa kode perintah. Tak terlihat mata dan harus diarahkan ke sensor.", "A blinking IR LED carries command codes. Invisible to the eye; must point at the sensor."], ["Kamera termal", "Thermal camera"], ["Benda hangat memancarkan lebih banyak inframerah; kamera mengubahnya jadi peta warna suhu.", "Warmer objects emit more IR; the camera turns it into a temperature color map."]] },
  { k: "visible", n: ["Cahaya Tampak", "Visible Light"], col: "#22c55e", lo: 4.3e14, hi: 7.9e14, def: 5.5e14, rg: "430 – 790 THz", lv: 0, img: ["visible-prism", "visible-led"], em: ["🌈", "💡"],
    fact: ["Satu-satunya bagian spektrum yang bisa dilihat langsung oleh mata.", "The only part of the spectrum the eye can see directly."],
    sf: ["Aman untuk penglihatan. Laser berdaya tinggi tetap bisa merusak mata.", "Safe for vision. High-power lasers can still damage eyes."],
    ex: [["Pelangi & prisma", "Rainbow & prism"], ["Tiap warna dibelokkan berbeda. Merah λ terpanjang (±700 nm), ungu terpendek (±400 nm).", "Each color bends differently. Red has the longest λ (~700 nm), violet the shortest (~400 nm)."], ["Layar & lampu LED", "Screens & LEDs"], ["Warna layar berasal dari campuran merah, hijau, biru. Mata hanya peka di rentang sempit ini.", "Screen colors mix red, green, and blue. Our eyes only sense this narrow band."]] },
  { k: "ultraviolet", n: ["Ultraviolet", "Ultraviolet"], col: "#3b82f6", lo: 7.9e14, hi: 3e16, def: 1e15, rg: "790 THz – 30 PHz", lv: 1, img: ["uv-sun", "uv-sterilizer"], em: ["☀️", "🧼"],
    fact: ["Dari sinar matahari; membantu vitamin D tetapi bisa merusak kulit.", "From sunlight; helps make Vitamin D but can damage skin."],
    sf: ["Waspada. Paparan berlebih merusak kulit dan mata. Gunakan pelindung.", "Caution. Overexposure harms skin and eyes. Use protection."],
    ex: [["Matahari & tabir surya", "Sun & sunscreen"], ["UV memicu vitamin D, berlebih membakar kulit. Tabir surya menyerap/memantulkan sebagian UV.", "UV triggers Vitamin D but too much burns skin. Sunscreen absorbs/reflects some UV."], ["Lampu UV-C", "UV-C sterilizer"], ["UV-C merusak DNA kuman. Juga merusak sel manusia, jangan terkena kulit/mata.", "UV-C damages germ DNA. It also harms human cells; avoid skin/eye exposure."]] },
  { k: "xray", n: ["Sinar-X", "X-Ray"], col: "#8b5cf6", lo: 3e16, hi: 3e19, def: 1e18, rg: "30 PHz – 30 EHz", lv: 2, img: ["xray-rontgen", "xray-bagasi"], em: ["🦴", "🧳"],
    fact: ["Menembus jaringan lunak, sangat berguna dalam medis (rontgen).", "Passes through soft tissue; very useful in medicine (radiography)."],
    sf: ["Berbahaya pada dosis tinggi. Di medis dipakai singkat, terkontrol, dengan pelindung timbal.", "Dangerous at high doses. Medical use is brief and controlled with lead shielding."],
    ex: [["Rontgen", "Radiography"], ["Tulang (kaya kalsium) menyerap lebih banyak sinar-X sehingga tampak putih. Dosis singkat dan terkontrol.", "Bones (calcium-rich) absorb more X-rays so they look white. Doses are short and controlled."], ["Pemindai bagasi", "Baggage scanner"], ["Benda padat/logam menyerap lebih banyak sehingga bentuknya terlihat di layar petugas.", "Dense/metal items absorb more, so their shapes show on the operator's screen."]] },
  { k: "gamma", n: ["Sinar Gamma", "Gamma Ray"], col: "#ec4899", lo: 3e19, hi: 3e20, def: 1e20, rg: "30 – 300 EHz", lv: 3, img: ["gamma-terapi", "gamma-sterilisasi"], em: ["🏥", "🧪"],
    fact: ["Gelombang paling bertenaga di alam semesta, dihasilkan reaksi nuklir.", "The most energetic waves in the universe, produced by nuclear reactions."],
    sf: ["Sangat berbahaya. Menembus tubuh dan merusak DNA. Hanya di fasilitas berpelindung.", "Very dangerous. Penetrates the body and damages DNA. Only in shielded facilities."],
    ex: [["Radioterapi kanker", "Cancer radiotherapy"], ["Berkas gamma dari beberapa sisi merusak DNA sel kanker; dosis dihitung ketat.", "Gamma beams from several angles damage cancer-cell DNA; doses are strictly calculated."], ["Sterilisasi alat medis", "Medical sterilization"], ["Membunuh kuman pada alat terkemas tanpa pemanasan, di fasilitas berpelindung tebal.", "Kills germs on packaged tools without heat, in heavily shielded facilities."]] },
];
const LVCOL = ["#22c55e", "#eab308", "#f97316", "#ef4444"];

const C = 3e8, H_EV = 4.135667696e-15, ION_EV = 10, U_MAX = 7, L = Math.log10;
const $ = (id) => document.getElementById(id);
const T = (k) => i18n[getLang()][k];
const P2 = (a) => a[getLang() === "en" ? 1 : 0];

// ---------- FISIKA & FORMAT ----------
const fAt = (u) => { const i = Math.min(6, Math.floor(u)), w = WV[i]; return 10 ** (L(w.lo) + (u - i) * (L(w.hi) - L(w.lo))); };
const uOf = (f) => { let i = WV.findIndex((w) => f <= w.hi); if (i < 0) i = 6; const w = WV[i]; return i + (L(f) - L(w.lo)) / (L(w.hi) - L(w.lo)); };
const typeOf = (u) => Math.min(6, Math.floor(u));
const fmtF = (hz) => { for (const [d, n] of [[1e18, "EHz"], [1e15, "PHz"], [1e12, "THz"], [1e9, "GHz"], [1e6, "MHz"], [1e3, "kHz"]]) if (hz >= d) return `${(hz / d).toFixed(2)} ${n}`; return `${hz.toFixed(2)} Hz`; };
const fmtL = (m) => { for (const [d, n] of [[1e3, "km"], [1, "m"], [1e-2, "cm"], [1e-3, "mm"], [1e-6, "µm"], [1e-9, "nm"], [1e-12, "pm"]]) if (m >= d) return `${(m / d).toFixed(2)} ${n}`; return `${(m / 1e-15).toFixed(2)} fm`; };
const fmtE = (ev) => ev >= 1e6 ? `${(ev / 1e6).toFixed(2)} MeV` : ev >= 1e3 ? `${(ev / 1e3).toFixed(2)} keV` : ev >= 1 ? `${ev.toFixed(2)} eV` : `${ev.toExponential(2)} eV`;
const fmtX = (r) => (r >= 1000 || r < 0.001 ? r.toExponential(2) : r.toFixed(2));

// ---------- STATE ----------
let u = 0, baseF = fAt(0), mode = "one", playing = true, offsetPx = 0;
let sFreq, sAmp, selA, selB, el = {}, segBtns = [];
let canvas, canvasB, ctx, ctxA, ctxB, W = 0, H = 0, PAL = {};

function setU(v) { u = Math.max(0, Math.min(U_MAX, v)); sFreq.value = u; refresh(); }
function pickType(i) { baseF = fAt(i); setU(i); }

// ---------- PANEL ----------
function refresh() {
  const f = fAt(u), i = typeOf(u), w = WV[i], E = H_EV * f;
  el.valF.textContent = el.infoFreq.textContent = fmtF(f);
  el.valA.textContent = el.infoAmp.textContent = `${parseFloat(sAmp.value).toFixed(2)} m`;
  el.infoLambda.textContent = fmtL(C / f);
  el.infoEnergy.textContent = fmtE(E);
  el.infoName.textContent = P2(w.n); el.infoName.style.color = w.col;
  el.infoRange.textContent = w.rg;
  segBtns.forEach((b, k) => b.classList.toggle("on", k === i));
  el.mark.style.left = el.meterMark.style.left = (u / 7) * 100 + "%";
  const ion = E >= ION_EV;
  el.safe.innerHTML = `<span class="tag-pill" style="background:${LVCOL[w.lv]}">${T("lv" + w.lv)}</span>` +
    `<span class="tag-pill" style="background:${ion ? "#fff" : "#94a3b8"}">${ion ? T("p3_ionY") : T("p3_ionN")}</span>` +
    `<p style="margin-top:.6rem"><b>${P2(w.n)}:</b> ${P2(w.sf)}</p>`;
  if (mode === "cmp") { renderTable(); fillCard("ca", WV[selA.value], "A"); fillCard("cb", WV[selB.value], "B"); }
}

function fillCard(p, w, tag) {
  $(p + "-name").textContent = P2(w.n); $(p + "-name").style.color = w.col;
  $(p + "-range").textContent = w.rg;
  $(p + "-f").textContent = fmtF(w.hi);
  $(p + "-l").textContent = fmtL(C / w.hi);
  $(p + "-e").textContent = fmtE(H_EV * w.hi);
  $(p + "-a").textContent = `${parseFloat(sAmp.value).toFixed(2)} m`;
}

function renderTable() {
  const A = WV[selA.value], B = WV[selB.value], r = B.hi / A.hi, [h0, h1] = T("p3_cmpHead"), rows = T("p3_row");
  const tr = (n, a, b, c) => `<tr><td>${n}</td><td>${a}</td><td>${b}</td><td>${c}</td></tr>`;
  el.table.innerHTML = `<table><tr><th>${h0}</th><th style="color:${A.col}">A: ${P2(A.n)}</th><th style="color:${B.col}">B: ${P2(B.n)}</th><th>${h1}</th></tr>` +
    tr(rows[0], fmtF(A.hi), fmtF(B.hi), fmtX(r) + "×") + tr(rows[1], fmtL(C / A.hi), fmtL(C / B.hi), fmtX(A.hi / B.hi) + "×") +
    tr(rows[2], fmtE(H_EV * A.hi), fmtE(H_EV * B.hi), fmtX(r) + "×") + tr(rows[3], "c", "c", T("p3_same")) +
    tr(rows[4], T("lv" + A.lv), T("lv" + B.lv), "–") + "</table>";
}

// ---------- CONTOH & KUIS ----------
function renderExamples() {
  el.exList.innerHTML = "";
  WV.forEach((w) => {
    const g = document.createElement("div"); g.className = "ex-grp"; g.style.setProperty("--c", w.col);
    g.innerHTML = `<h4>${P2(w.n)} <small style="color:var(--text-muted)">${w.rg}</small></h4><div class="ex-pair"></div>`;
    [0, 1].forEach((j) => {
      const d = document.createElement("article"); d.className = "ex-card";
      d.innerHTML = `<div class="ex-pic"><img src="img/${w.img[j]}.gif" alt="${P2(w.ex[j * 2])}"></div><div class="ex-txt"><strong>${P2(w.ex[j * 2])}</strong>${P2(w.ex[j * 2 + 1])}</div>`;
      const im = d.querySelector("img"); im.onerror = () => { im.parentNode.textContent = w.em[j]; };
      g.querySelector(".ex-pair").appendChild(d);
    });
    el.exList.appendChild(g);
  });
}

function applyLang() { // bagian yang diisi JS (bukan data-i18n)
  segBtns.forEach((b, i) => { b.innerHTML = P2(WV[i].n).replace(" ", "<br>"); });
  [selA, selB].forEach((s) => [...s.options].forEach((o, i) => { o.textContent = P2(WV[i].n); }));
  renderPause(); renderExamples(); refresh();
}

// ---------- PAUSE / RESET / MODE ----------
function renderPause() {
  el.pIcon.textContent = playing ? "⏸" : "▶";
  el.pLabel.textContent = playing ? T("p3_pause") : T("p3_resume");
}
function setMode(m) {
  mode = m;
  document.querySelectorAll("#page-3 .wave-tab[data-mode]").forEach((b) => {
    const on = b.dataset.mode === m;
    b.classList.toggle("active", on); b.setAttribute("aria-pressed", String(on));
  });
  $("cmp-bar").hidden = $("cmp-table").hidden = m === "one";
  $("box-freq").style.opacity = m === "cmp" ? 0.4 : 1;

  const cmp = m === "cmp";
  $("note-cmp").hidden = !cmp;
  $("box-spec").classList.toggle("is-cmp", cmp);
  $("wrap-b").hidden = $("side-cmp").hidden = !cmp;
  $("side-one").hidden = cmp;
  sFreq.disabled = $("btn-f-minus").disabled = $("btn-f-plus").disabled = cmp;
  ["box-map", "box-safety", "box-ex"].forEach((id) => {
    const b = $(id);
    b.classList.toggle("is-disabled", cmp); b.inert = cmp; b.setAttribute("aria-disabled", String(cmp));
  });

  refresh();
}
function resetAll() {
  playing = true; offsetPx = 0; sAmp.value = 5; selA.value = 0; selB.value = 6;
  renderPause(); setMode("one"); pickType(0);
}

// ---------- STEPPER (tekan-tahan = berulang) ----------
function setupStepper(minusId, plusId, step) {
  let holdTimer = null, repeat = null;
  const stop = () => { clearTimeout(holdTimer); clearInterval(repeat); holdTimer = repeat = null; };
  const start = (dir) => { stop(); step(dir); holdTimer = setTimeout(() => { repeat = setInterval(() => step(dir), 60); }, 300); };
  [[minusId, -1], [plusId, 1]].forEach(([id, dir]) => {
    const btn = $(id);
    btn.addEventListener("pointerdown", (e) => { e.preventDefault(); baseF = fAt(u); start(dir); });
    ["pointerup", "pointerleave", "pointercancel"].forEach((ev) => btn.addEventListener(ev, stop));
  });
}
const stepFreq = (dir) => { if (mode === "cmp") return; setU(u + dir * 0.02); };
function stepAmp(dir) {
  const v = Math.round((parseFloat(sAmp.value) + dir * 0.1) * 10) / 10;
  sAmp.value = Math.min(parseFloat(sAmp.max), Math.max(parseFloat(sAmp.min), v));
  refresh();
}

// ---------- CANVAS ----------
function updatePalette() {
  const light = document.body.classList.contains("light-mode");
  PAL = light
    ? { grid: "rgba(0,0,0,0.12)", axis: "rgba(0,0,0,0.35)", text: "#111827", glow: 4 }
    : { grid: "rgba(255,255,255,0.12)", axis: "rgba(255,255,255,0.4)", text: "#f9fafb", glow: 12 };
}
function prep(cv, cx) {
  const dpr = window.devicePixelRatio || 1, w = cv.clientWidth, h = cv.clientHeight;
  if (!w || !h) return false;
  if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(h * dpr)) { cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); }
  cx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx = cx; W = w; H = h; return true;
}

function lane(f, col, cy, A, label) {
  const n = 1.5 + (uOf(f) / 7) * 10.5, k = (2 * Math.PI * n) / W;
  ctx.strokeStyle = PAL.axis; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(W, cy); ctx.stroke();
  ctx.beginPath();
  for (let x = 0; x <= W; x += 2) { const y = cy - Math.sin(k * (x - offsetPx)) * A; x ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
  ctx.strokeStyle = col; ctx.lineWidth = 3.5; ctx.lineJoin = "round"; ctx.shadowColor = col; ctx.shadowBlur = PAL.glow; ctx.stroke(); ctx.shadowBlur = 0;
  const lw = W / n, x0 = 24, by = cy + A + 16;
  ctx.strokeStyle = ctx.fillStyle = PAL.text; ctx.lineWidth = 1.5; ctx.beginPath();
  ctx.moveTo(x0, by); ctx.lineTo(x0 + lw, by); ctx.moveTo(x0, by - 5); ctx.lineTo(x0, by + 5); ctx.moveTo(x0 + lw, by - 5); ctx.lineTo(x0 + lw, by + 5); ctx.stroke();
  ctx.font = "600 13px Poppins, sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText("λ = " + fmtL(C / f), x0 + lw / 2, by + 16);
  if (label) { ctx.textAlign = "left"; ctx.fillStyle = col; ctx.font = "700 15px Poppins, sans-serif"; ctx.fillText(label, 14, 20); }
}
function paint(cv, cx, f, col, label) {
  if (!prep(cv, cx)) return;
  const a = (parseFloat(sAmp.value) || 0) / 10;
  ctx.clearRect(0, 0, W, H);
  ctx.setLineDash([4, 6]); ctx.lineWidth = 1; ctx.strokeStyle = PAL.grid; ctx.beginPath();
  for (let y = 40; y < H; y += 40) { ctx.moveTo(0, y); ctx.lineTo(W, y); }
  ctx.stroke(); ctx.setLineDash([]);
  lane(f, col, H / 2 - 4, a * (H / 2 - 50), label);
  ctx.fillStyle = PAL.text; ctx.beginPath(); ctx.moveTo(W - 12, H / 2 - 8); ctx.lineTo(W, H / 2); ctx.lineTo(W - 12, H / 2 + 8); ctx.closePath(); ctx.fill();
}
function draw() {
  if (mode === "one") { const w = WV[typeOf(u)]; paint(canvas, ctxA, fAt(u), w.col, ""); return; }
  const A = WV[selA.value], B = WV[selB.value];
  paint(canvas, ctxA, A.hi, A.col, "");
  paint(canvasB, ctxB, B.hi, B.col, "");
}
export function update(ts, dt) {
  if (!canvas || canvas.offsetParent === null) return;
  if (playing) offsetPx = ((offsetPx + (W / 4) * dt) % (W * 100)) || 0;
  draw();
}

// ---------- INIT ----------
export function init() {
  if (!$("spectrum-canvas")) return;
  sFreq = $("slider-freq"); sAmp = $("slider-amp"); selA = $("sel-a"); selB = $("sel-b");
  el = {
    valF: $("val-f"), valA: $("val-a"), infoName: $("info-name"), infoRange: $("info-range"), infoFreq: $("info-freq"), infoLambda: $("info-lambda"),
    infoAmp: $("info-amp"), infoEnergy: $("info-energy"),
    mark: $("spec-mark"), meterMark: $("meter-mark"), safe: $("safe-box"), table: $("cmp-table"),
    exList: $("ex-list"), pLabel: $("p3-pause-label"), pIcon: $("p3-pause-icon"),
  };
  const map = $("spec-map");
  WV.forEach((w, i) => {
    const b = document.createElement("button"); b.style.setProperty("--c", w.col); b.onclick = () => pickType(i);
    map.insertBefore(b, el.mark); segBtns.push(b);
    selA.add(new Option("", i)); selB.add(new Option("", i));
  });
  selA.value = 0; selB.value = 6;
  [selA, selB].forEach((s) => (s.onchange = refresh));
  $("btn-extreme").onclick = () => { selA.value = 0; selB.value = 6; refresh(); };
  $("meter-tick").style.left = (uOf(ION_EV / H_EV) / 7) * 100 + "%";

  sFreq.addEventListener("input", () => { u = parseFloat(sFreq.value); refresh(); });
  ["pointerdown", "keydown"].forEach((e) => sFreq.addEventListener(e, () => (baseF = fAt(u))));
  sAmp.addEventListener("input", refresh);
  setupStepper("btn-f-minus", "btn-f-plus", stepFreq);
  setupStepper("btn-a-minus", "btn-a-plus", stepAmp);
  $("btn-p3-pause").onclick = () => { playing = !playing; renderPause(); };
  $("btn-p3-reset").onclick = resetAll;
  document.querySelectorAll("#page-3 .wave-tab[data-mode]").forEach((b) => (b.onclick = () => setMode(b.dataset.mode)));

  canvas = $("spectrum-canvas"); ctxA = canvas.getContext("2d");
  canvasB = $("spectrum-canvas-b"); ctxB = canvasB.getContext("2d");
  updatePalette();
  window.addEventListener("themeChanged", updatePalette);
  window.addEventListener("langChanged", applyLang);
  sFreq.value = u; applyLang();
}