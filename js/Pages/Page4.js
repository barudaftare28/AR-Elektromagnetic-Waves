import { getLang, t } from "../Main/Bahasa.js";

export const i18n = {
  id: {
    p4_start_title: "Isi datamu dulu", p4_name: "Nama", p4_class: "Kelas", p4_start: "Mulai Quiz",
    p4_ph_name: "Nama lengkap", p4_ph_class: "contoh: XI IPA 2",
    p4_need: "Isi nama (minimal 2 huruf) dan kelas dulu ya.",
    p4_saving: "Menyimpan hasil…", p4_saved: "✔ Hasil tersimpan", p4_time: "Waktu:",
    p4_save_fail: "⚠ Hasil belum tersimpan.", p4_save_retry: "Coba lagi",
    p4_loading: "Memuat soal…",          
    p4_sub: "Uji pemahamanmu tentang gelombang elektromagnetik!", p4_progress: "PROGRESS",
    p4_check: "Cek Jawaban", p4_nextq: "Soal Berikutnya →",
    p4_lock_exp: "🔒 Jawab soal ini untuk membuka penjelasan", p4_lock_viz: "🔒 Jawab soal ini untuk membuka visualisasi",
    p4_explain: "Penjelasan", p4_viz: "Visualisasi Hasil", p4_score: "Skor Kamu",
    p4_retry: "Ulangi Quiz", p4_finish: "Selesai",
    p4_back: "⬅ Kembali ke Spectrum", p4_intro: "Kembali ke Introduction ➔", p4_q: "SOAL",
    p4_ok: "✔ Benar! +{n} poin", p4_no: "✘ Kurang tepat. Lihat penjelasannya di bawah.",
    p4_msg_start: "Jawab semua soal ya!", p4_msg_high: "Bagus! Terus tingkatkan!",
    p4_msg_mid: "Lumayan! Coba lagi untuk skor lebih tinggi.", p4_msg_low: "Jangan menyerah, pelajari lagi lalu ulangi!",
  },
  en: {
    p4_start_title: "Enter your details", p4_name: "Name", p4_class: "Class", p4_start: "Start Quiz",
    p4_ph_name: "Full name", p4_ph_class: "e.g. XI IPA 2",
    p4_need: "Please enter your name (min. 2 letters) and class.",
    p4_saving: "Saving result…", p4_saved: "✔ Result saved", p4_time: "Time:",
    p4_save_fail: "⚠ Result not saved.", p4_save_retry: "Try again",
    p4_loading: "Loading questions…",
    p4_sub: "Test your understanding of electromagnetic waves!", p4_progress: "PROGRESS",
    p4_check: "Check Answer", p4_nextq: "Next Question →",
    p4_lock_exp: "🔒 Answer this question to unlock the explanation", p4_lock_viz: "🔒 Answer this question to unlock the visualization",
    p4_explain: "Explanation", p4_viz: "Result Visualization", p4_score: "Your Score",
    p4_retry: "Retry Quiz", p4_finish: "Finish",
    p4_back: "⬅ Back to Spectrum", p4_intro: "Back to Introduction ➔", p4_q: "QUESTION",
    p4_ok: "✔ Correct! +{n} points", p4_no: "✘ Not quite. See the explanation below.",
    p4_msg_start: "Answer all the questions!", p4_msg_high: "Great! Keep it up!",
    p4_msg_mid: "Not bad! Try again for a higher score.", p4_msg_low: "Don't give up, review and try again!",
  },
};

// ---------- DATA SOAL ----------
const FALLBACK = [
  {
    viz: "amp",
    q: {
      id: "Ketika pengguna menaikkan nilai Amplitudo pada slider interaktif, apa perubahan visual yang paling jelas terlihat pada gelombang di layar, dan apa artinya bagi gelombang tersebut?",
      en: "When the user increases the Amplitude on the interactive slider, what is the most visible change in the wave on screen, and what does it mean for the wave?",
    },
    opts: {
      id: [
        "Gelombang bergerak lebih cepat ke kanan, artinya kecepatan rambatnya bertambah.",
        "Puncak gelombang menjadi lebih tinggi dan lembah lebih dalam, artinya simpangan maksimum (energi) gelombang bertambah.",
        "Jarak antar puncak gelombang menjadi lebih rapat, artinya panjang gelombangnya memendek.",
        "Jumlah gelombang yang muncul di layar semakin sedikit dalam waktu yang sama.",
      ],
      en: [
        "The wave moves faster to the right, meaning its speed increases.",
        "The crests get higher and the troughs deeper, meaning the wave's maximum displacement (energy) increases.",
        "The distance between crests gets shorter, meaning the wavelength decreases.",
        "Fewer waves appear on screen in the same amount of time.",
      ],
    },
    ans: 1,
    steps: {
      id: [
        "Amplitudo adalah simpangan dari titik setimbang ke puncak.",
        "Saat amplitudo naik, puncak makin tinggi dan lembah makin dalam.",
        "Kecepatan dan panjang gelombang tidak berubah. Yang bertambah adalah simpangan maksimum, sehingga energi gelombang juga bertambah.",
      ],
      en: [
        "Amplitude is the displacement from the equilibrium point to the crest.",
        "When amplitude increases, crests get higher and troughs get deeper.",
        "Speed and wavelength do not change. Only the maximum displacement grows, so the wave's energy also increases.",
      ],
    },
    chip: { id: "A ↑ → energi ↑", en: "A ↑ → energy ↑" },
  },
  {
    viz: "freq",
    q: {
      id: "Jika Anda memperbesar nilai Frekuensi gelombang secara signifikan pada simulasi (sementara cepat rambat dianggap tetap), apa yang akan terlihat pada visualisasi gelombang?",
      en: "If you significantly increase the wave Frequency in the simulation (while the wave speed is assumed constant), what will you see in the wave visualization?",
    },
    opts: {
      id: [
        "Gelombang menjadi lebih renggang dan panjang gelombangnya bertambah.",
        "Tinggi puncak gelombang (amplitudo) ikut bertambah secara otomatis.",
        "Gelombang menjadi jauh lebih rapat (panjang gelombang memendek) dan jumlah gelombang di layar bertambah.",
        "Gelombang berhenti bergerak dan membentuk garis lurus.",
      ],
      en: [
        "The wave becomes more spread out and its wavelength increases.",
        "The crest height (amplitude) increases automatically.",
        "The wave becomes much denser (shorter wavelength) and more waves appear on screen.",
        "The wave stops moving and forms a straight line.",
      ],
    },
    ans: 2,
    steps: {
      id: [
        "Dari c = f × λ, jika c tetap maka f berbanding terbalik dengan λ.",
        "Frekuensi naik berarti jarak antar puncak makin pendek.",
        "Akibatnya gelombang tampak lebih rapat dan jumlah gelombang di layar bertambah.",
      ],
      en: [
        "From c = f × λ, if c is constant then f is inversely proportional to λ.",
        "Higher frequency means a shorter distance between crests.",
        "As a result the wave looks denser and more waves appear on screen.",
      ],
    },
    chip: { id: "f ↑ 2× → λ ↓ ½", en: "f ↑ 2× → λ ↓ ½" },
  },
  {
    viz: "pp",
    q: {
      id: "Jarak dari titik A (puncak pertama) ke titik B (puncak kedua) adalah 4 meter, berapakah nilai panjang gelombang (lambda) dari gelombang tersebut?",
      en: "The distance from point A (first crest) to point B (second crest) is 4 meters. What is the wavelength (lambda) of the wave?",
    },
    opts: {
      id: ["2 meter", "4 meter", "8 meter", "16 meter"],
      en: ["2 meters", "4 meters", "8 meters", "16 meters"],
    },
    ans: 1,
    steps: {
      id: ["A dan B adalah dua puncak yang berdekatan.", "Jarak dua puncak berdekatan adalah satu panjang gelombang penuh.", "Jadi λ = 4 meter."],
      en: ["A and B are two adjacent crests.", "The distance between two adjacent crests is one full wavelength.", "So λ = 4 meters."],
    },
    chip: { id: "λ = 4 m", en: "λ = 4 m" },
  },
  {
    viz: "speed",
    q: {
      id: "Pada animasi gelombang di layar Anda, diketahui panjang gelombang (lambda) adalah 2 meter dan frekuensi (f) yang diatur pada slider adalah 3 Hz. Berapakah kecepatan rambat gelombang (v) tersebut?",
      en: "In the wave animation on your screen, the wavelength (lambda) is 2 meters and the frequency (f) set on the slider is 3 Hz. What is the wave speed (v)?",
    },
    opts: {
      id: ["0,67 m/s", "1,5 m/s", "5 m/s", "6 m/s"],
      en: ["0.67 m/s", "1.5 m/s", "5 m/s", "6 m/s"],
    },
    ans: 3,
    steps: {
      id: ["Rumus cepat rambat gelombang: v = λ × f.", "Masukkan nilainya: v = 2 m × 3 Hz.", "Hasilnya v = 6 m/s."],
      en: ["Wave speed formula: v = λ × f.", "Substitute the values: v = 2 m × 3 Hz.", "The result is v = 6 m/s."],
    },
    chip: { id: "v = 2 × 3 = 6 m/s", en: "v = 2 × 3 = 6 m/s" },
  },
  {
    viz: "one",
    q: {
      id: "Terdapat satu gelombang penuh (terdiri dari 1 bukit dan 1 lembah) menempati jarak horizontal sepanjang 2 meter, berapakah nilai panjang gelombang (lambda) tersebut?",
      en: "One full wave (made of 1 crest and 1 trough) spans a horizontal distance of 2 meters. What is the wavelength (lambda)?",
    },
    opts: {
      id: ["0,5 meter", "1 meter", "2 meter", "4 meter"],
      en: ["0.5 meters", "1 meter", "2 meters", "4 meters"],
    },
    ans: 2,
    steps: {
      id: [
        "Panjang gelombang adalah jarak yang ditempuh satu gelombang penuh (1 bukit + 1 lembah).",
        "Di layar, 1 bukit dan 1 lembah menempati jarak 2 meter.",
        "Jadi λ = 2 meter.",
      ],
      en: [
        "Wavelength is the distance covered by one full wave (1 crest + 1 trough).",
        "On screen, 1 crest and 1 trough span 2 meters.",
        "So λ = 2 meters.",
      ],
    },
    chip: { id: "λ = 2 m", en: "λ = 2 m" },
  },
];

const SUPABASE_URL = "https://zhhibutkjisgtoqkiuoc.supabase.co";
const SUPABASE_KEY = "sb_publishable__hC16Dkxl6OqMXD6d3DgEQ_4ppOFbEn";
const QUIZ_SIZE = 5; 
const VIZ_OK = ["amp", "freq", "pp", "speed", "one", "em", "spectrum", "fieldE", "fieldB", "medium"];

let pool = FALLBACK, set = [], TOTAL = 0, POINT = 0;
const $ = (id) => document.getElementById(id);

let sel, checked, cur;
let canvas, ctx, C;
let t0 = 0, attempt = 0, durasi = 0, saved = false, player = null;
const fmtTime = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

let stage = 2, stageAt = 0, stageCur = -1, stageTimer = null, nowMs = 0;

function setStage(n) {
  stage = n; stageAt = performance.now();
  document.querySelectorAll("#q-explain li").forEach((li, i) => li.classList.toggle("on", i === n));
}
function startStages() {
  clearTimeout(stageTimer);
  stageCur = cur;
  setStage(0);
  stageTimer = setTimeout(() => {
    setStage(1);
    stageTimer = setTimeout(() => setStage(2), 1800);
  }, 1800);
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const curQ = () => set[cur];
const isCorrect = (i) => checked[i] && sel[i] === set[i].ans;
const score = () => checked.reduce((s, _, i) => s + (isCorrect(i) ? POINT : 0), 0);

function resetQuiz() {
  set = pickSet(pool).map(shuffleOptions); 
  TOTAL = set.length;
  POINT = 100 / TOTAL;
  sel = Array(TOTAL).fill(null);
  checked = Array(TOTAL).fill(false);
  cur = 0;
  t0 = Date.now();
  saved = false;
  attempt++;
  $("q-save").textContent = "";
  clearTimeout(stageTimer);
  stageCur = -1;
  render();
}

async function loadQuestions() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/questions?select=*&aktif=eq.true`, {
    headers: { apikey: SUPABASE_KEY },
  });
  if (!res.ok) throw new Error("HTTP " + res.status);
  const rows = await res.json();
  return rows
    .filter((r) => VIZ_OK.includes(r.viz) && r.opts_id?.length === 4 && r.opts_en?.length === 4)
    .map((r) => ({
      viz: r.viz,
      q: { id: r.q_id, en: r.q_en },
      opts: { id: r.opts_id, en: r.opts_en },
      ans: r.ans,
      steps: { id: r.steps_id, en: r.steps_en },
      chip: { id: r.chip_id, en: r.chip_en },
      params: r.params || {},
    }));
}

async function saveResult() {
  if (saved || !player) return;
  const box = $("q-save");
  box.className = "q-save";
  box.textContent = t("p4_saving");
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/results`, {
      method: "POST",
      headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({
        nama: player.nama, kelas: player.kelas,
        skor: Math.round(score()),
        benar: checked.filter((_, i) => isCorrect(i)).length,
        total_soal: TOTAL, durasi_detik: durasi, percobaan: attempt,
      }),
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    saved = true;
    box.className = "q-save ok";
    box.textContent = `${t("p4_saved")} · ${t("p4_time")} ${fmtTime(durasi)}`;
  } catch (e) {
    console.warn("Gagal menyimpan hasil:", e);
    box.className = "q-save no";
    box.textContent = t("p4_save_fail");
    const b = document.createElement("button");
    b.type = "button"; b.className = "q-btn-sec"; b.textContent = t("p4_save_retry");
    b.onclick = saveResult;
    box.appendChild(b);
  }
}

function showStart() {
  player = null; attempt = 1;
  $("q-name").value = ""; $("q-class").value = "";
  $("q-start").hidden = false; $("q-layout").hidden = true;
}

function applyStartText() {
  $("q-name").placeholder = t("p4_ph_name");
  $("q-class").placeholder = t("p4_ph_class");
}


// ---------- RENDER ----------
function renderProgress() {
  const box = $("q-progress");
  box.innerHTML = "";
  for (let i = 0; i < TOTAL; i++) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "q-step";
    if (checked[i]) b.classList.add(isCorrect(i) ? "correct" : "wrong");
    if (i === cur) b.classList.add("current");
    b.textContent = checked[i] ? (isCorrect(i) ? "✓" : "✕") : i + 1;
    b.onclick = () => { cur = i; render(); };
    box.appendChild(b);
  }
}

function renderQuestion() {
  const q = curQ(), lang = getLang();
  $("q-num").textContent = `${t("p4_q")} ${cur + 1} / ${TOTAL}`;
  $("q-text").textContent = q.q[lang];

  const box = $("q-options");
  box.innerHTML = "";
  q.opts[lang].forEach((text, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "q-opt";
    if (sel[cur] === i) b.classList.add("selected");
    if (checked[cur]) {
      b.disabled = true;
      if (i === q.ans) b.classList.add("correct");
      else if (i === sel[cur]) b.classList.add("wrong");
    }
    b.innerHTML = `<span class="q-letter">${"ABCD"[i]}</span><span>${text}</span>`;
    b.onclick = () => {
      if (checked[cur]) return;
      sel[cur] = i;
      renderQuestion();
    };
    box.appendChild(b);
  });

  const res = $("q-result"), act = $("q-action");
  if (checked[cur]) {
    const ok = sel[cur] === q.ans;
    res.textContent = ok ? t("p4_ok").replace("{n}", POINT) : t("p4_no");
    res.className = "q-result " + (ok ? "ok" : "no");
    act.textContent = t("p4_nextq");
    act.disabled = false;
    act.style.display = cur === TOTAL - 1 ? "none" : "";
  } else {
    res.textContent = "";
    res.className = "q-result";
    act.textContent = t("p4_check");
    act.disabled = sel[cur] === null;
    act.style.display = "";
  }
}

function renderLocked() {
  const open = checked[cur];
  $("q-explain-card").classList.toggle("locked", !open);
  $("q-viz-card").classList.toggle("locked", !open);
  if (open) {
    if (stageCur !== cur) { clearTimeout(stageTimer); stageCur = cur; stage = 2; }
    const ol = $("q-explain");
    ol.innerHTML = curQ().steps[getLang()].map((s) => `<li>${s}</li>`).join("");
    ol.querySelectorAll("li").forEach((li, i) => {
      li.classList.toggle("on", i === stage);
      li.onclick = () => { clearTimeout(stageTimer); setStage(i); };
    });
    $("q-chip").textContent = curQ().chip[getLang()];
  } else {
    $("q-explain").innerHTML = "<li>••••••••••••••••</li><li>••••••••••••</li><li>••••••••••••••••••</li>";
    $("q-chip").textContent = "••••";
  }
}

function renderScore() {
  const s = Math.round(score());
  const done = checked.every(Boolean);
  $("q-score").textContent = s;
  $("q-finish").disabled = !done;
  let key = "p4_msg_start";
  if (done) key = s >= 80 ? "p4_msg_high" : s >= 60 ? "p4_msg_mid" : "p4_msg_low";
  $("q-score-msg").textContent = t(key);
}

function render() {
  renderProgress();
  renderQuestion();
  renderLocked();
  renderScore();
}

// ---------- VISUALISASI (CANVAS) ----------
const palette = () =>
  document.body.classList.contains("light-mode")
    ? { text: "#111827", dim: "rgba(0,0,0,0.45)", grid: "rgba(0,0,0,0.07)", axis: "rgba(0,0,0,0.3)",
        blue: "#0891b2", red: "#dc2626", green: "#16a34a", orange: "#d97706", purple: "#7c3aed" }
    : { text: "#f9fafb", dim: "rgba(255,255,255,0.5)", grid: "rgba(255,255,255,0.06)", axis: "rgba(255,255,255,0.3)",
        blue: "#06b6d4", red: "#f87171", green: "#34d399", orange: "#fbbf24", purple: "#a78bfa" };

// y = mid - amp * cos(2π (x - x0 - ph) / lam)  → puncak di x0 + ph + n·lam
function wave(x0, x1, mid, amp, lam, ph, color) {
  ctx.beginPath();
  for (let x = x0; x <= x1; x += 2) {
    const y = mid - amp * Math.cos((2 * Math.PI * (x - x0 - ph)) / lam);
    x === x0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.stroke();
}
function axisLine(x0, x1, y) {
  ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y);
  ctx.strokeStyle = C.axis; ctx.lineWidth = 1; ctx.stroke();
}
function label(text, x, y, color, size, align) {
  ctx.font = `600 ${size || 12}px Poppins, sans-serif`;
  ctx.fillStyle = color || C.text;
  ctx.textAlign = align || "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y);
}
function hBracket(xa, xb, y, text, color) {
  ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.beginPath();
  ctx.moveTo(xa, y); ctx.lineTo(xb, y);
  ctx.moveTo(xa, y - 6); ctx.lineTo(xa, y + 6);
  ctx.moveTo(xb, y - 6); ctx.lineTo(xb, y + 6);
  ctx.stroke();
  label(text, (xa + xb) / 2, y - 12, color, 13);
}
function dot(x, y, color, letter) {
  ctx.beginPath(); ctx.arc(x, y, 11, 0, Math.PI * 2);
  ctx.fillStyle = color; ctx.fill();
  label(letter, x, y + 1, "#fff", 12);
}
const firstCrest = (x0, lam, ph) => x0 + (((ph % lam) + lam) % lam);

const VT = {
  id: { before: "Sebelum (A kecil)", after: "Sesudah (A besar)", fq: "Frekuensi f", crest: "bukit", trough: "lembah",
        ampNote: "Amplitudo ↑ → energi ↑ (λ dan f tetap)", inv: "Frekuensi ↑ → panjang gelombang ↓ (v tetap)",
        pp: "Jarak puncak ke puncak = 1 λ", f3: (f) => `f = ${f} Hz (${f} gelombang tiap detik)` },
  en: { before: "Before (small A)", after: "After (large A)", fq: "Frequency f", crest: "crest", trough: "trough",
        ampNote: "Amplitude ↑ → energy ↑ (λ and f unchanged)", inv: "Frequency ↑ → wavelength ↓ (v constant)",
        pp: "Crest to crest distance = 1 λ", f3: (f) => `f = ${f} Hz (${f} waves per second)` },
};

// Angka bawaan bila kolom params di database kosong
const DEF = { amp: { a1: 1, a2: 3 }, freq: { k: 2 }, pp: { lam: 4 }, speed: { lam: 2, f: 3 }, one: { lam: 2 } };
const num = (n) => String(+(+n).toFixed(2)).replace(".", getLang() === "id" ? "," : ".");
const fade = (s) => (stage > s ? 1 : stage === s ? Math.min(1, (nowMs - stageAt) / 400) : 0);
function at(s, fn) { const a = fade(s); if (a <= 0) return; ctx.globalAlpha = a; fn(); ctx.globalAlpha = 1; }

function ruler(x, y, pxm, maxM) {
  const step = maxM > 14 ? 2 : 1, every = maxM > 8 ? 2 : 1;
  ctx.strokeStyle = C.dim; ctx.lineWidth = 1; ctx.beginPath();
  ctx.moveTo(x, y); ctx.lineTo(x + maxM * pxm, y);
  for (let m = 0; m <= maxM + 1e-9; m += step) { ctx.moveTo(x + m * pxm, y - 4); ctx.lineTo(x + m * pxm, y + 4); }
  ctx.stroke();
  for (let m = 0; m <= maxM + 1e-9; m += step * every) label(String(m), x + m * pxm, y + 14, C.dim, 10);
  label("m", x + maxM * pxm + 10, y, C.dim, 10);
}



const EM_VIZ = ["em", "medium", "spectrum", "fieldE", "fieldB"];
const NEWVIZ = EM_VIZ;
const B_COL = "#EC4899";
Object.assign(DEF, { em: {}, spectrum: { a: 0, b: 6 }, fieldE: { r1: 1, r2: 2, s: 1 }, fieldB: { r1: 1, r2: 2 }, medium: {} });

// ---- Pengacakan pilihan jawaban (bahasa ID dan EN diacak dengan urutan yang sama) ----
function shuffleOptions(q) {
  const idx = shuffle([0, 1, 2, 3]);
  return { ...q, opts: { id: idx.map((i) => q.opts.id[i]), en: idx.map((i) => q.opts.en[i]) }, ans: idx.indexOf(q.ans) };
}

// ---- Pemilihan 5 soal seimbang: maks 2 per jenis gambar, minimal 2 soal bertema EM ----
function pickSet(list) {
  for (let n = 0; n < 300; n++) {
    const s = shuffle([...list]).slice(0, QUIZ_SIZE), cnt = {};
    s.forEach((q) => (cnt[q.viz] = (cnt[q.viz] || 0) + 1));
    if (Object.values(cnt).every((c) => c <= 2) && s.filter((q) => EM_VIZ.includes(q.viz)).length >= 2) return s;
  }
  return shuffle([...list]).slice(0, QUIZ_SIZE); // cadangan (mis. soal cadangan lokal)
}

// ---- Visualisasi baru ----
function arrow(xa, ya, xb, yb, col, wd) {
  const a = Math.atan2(yb - ya, xb - xa);
  ctx.strokeStyle = ctx.fillStyle = col; ctx.lineWidth = wd || 2;
  ctx.beginPath(); ctx.moveTo(xa, ya); ctx.lineTo(xb, yb); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(xb, yb);
  ctx.lineTo(xb - 8 * Math.cos(a - 0.4), yb - 8 * Math.sin(a - 0.4));
  ctx.lineTo(xb - 8 * Math.cos(a + 0.4), yb - 8 * Math.sin(a + 0.4)); ctx.fill();
}

const SPEC = {
  col: ["#FF4D5E", "#FF8A00", "#F5D000", "#2ECC71", "#3B82F6", "#A855F7", "#EC4899"],
  id: ["Radio", "Mikro", "IR", "Tampak", "UV", "Sinar-X", "Gamma"],
  en: ["Radio", "Micro", "IR", "Visible", "UV", "X-ray", "Gamma"],
};
const VT2 = {
  id: { E: "E (vertikal)", B: "B (masuk–keluar layar)", prop: "arah rambat", perp: "E ⟂ B ⟂ arah rambat", inphase: "puncak E dan B sefase",
        up: ["frekuensi (f) ↑", "energi foton ↑", "panjang gelombang (λ) ↓"], nonion: "non-pengion", ion: "pengion",
        wire: "kawat berarus (arus keluar layar)", rhr: "kaidah tangan kanan: B berlawanan arah jarum jam",
        air: "Bunyi: butuh medium (partikel udara)", vac: "Ruang hampa: tidak ada partikel", emv: "Gelombang EM: tanpa medium",
        sum: "Bunyi butuh medium, gelombang EM tidak" },
  en: { E: "E (vertical)", B: "B (into/out of screen)", prop: "direction of travel", perp: "E ⟂ B ⟂ direction of travel", inphase: "E and B crests line up (in phase)",
        up: ["frequency (f) ↑", "photon energy ↑", "wavelength (λ) ↓"], nonion: "non-ionizing", ion: "ionizing",
        wire: "current-carrying wire (current out of screen)", rhr: "right-hand rule: B runs counter-clockwise",
        air: "Sound: needs a medium (air particles)", vac: "Vacuum: no particles", emv: "EM wave: no medium needed",
        sum: "Sound needs a medium, EM waves do not" },
};
const ratioTxt = (L, k) => `r × ${num(k)} → ${L} ÷ ${num(L === "E" ? k * k : k)}`;

function drawNew(type, P, time, w, h, x0, x1, span) {
  const T2 = VT2[getLang()], ph = 60 * time;

  if (type === "em") {
    const lam = span / 2, A = h * 0.24, mid = h * 0.5;
    const val = (x) => Math.sin((2 * Math.PI * (x - x0 - ph)) / lam);
    const pt = (k, x) => (k === "E" ? [x, mid - A * val(x)] : [x - 0.5 * A * val(x), mid + 0.4 * A * val(x)]);
    const field = (k, col) => {
      ctx.strokeStyle = col; ctx.lineWidth = 2.5; ctx.beginPath();
      for (let x = x0; x <= x1; x += 3) { const [px, py] = pt(k, x); x === x0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py); }
      ctx.stroke();
      for (let x = x0 + 12; x <= x1; x += 24) if (Math.abs(val(x)) > 0.1) { const [px, py] = pt(k, x); arrow(x, mid, px, py, col, 1.2); }
    };
    axisLine(x0, x1, mid);
    at(0, () => { field("E", C.blue); label(T2.E, x0 + 4, 16, C.blue, 12, "left"); });
    at(1, () => { field("B", B_COL); label(T2.B, x0 + 4, 34, B_COL, 12, "left"); });
    at(2, () => {
      const xc = firstCrest(x0, lam, ph + lam / 4), [ex, ey] = pt("E", xc), [bx, by] = pt("B", xc);
      ctx.setLineDash([4, 4]); ctx.strokeStyle = C.dim; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(ex, ey); ctx.lineTo(bx, by); ctx.stroke(); ctx.setLineDash([]);
      dot(ex, ey, C.blue, "E"); dot(bx, by, B_COL, "B");
      arrow(x0 + 8, h * 0.8, x0 + 64, h * 0.8, C.text, 2); label(T2.prop, x0 + 72, h * 0.8, C.text, 12, "left");
      label(T2.perp, w / 2, h - 34, C.text, 13); label(T2.inphase, w / 2, h - 14, C.dim, 12);
    });
  }

  if (type === "spectrum") {
    const bw = span / 7, by = h * 0.12, bh = 44, names = SPEC[getLang()];
    SPEC.col.forEach((c, i) => {
      const hi = i === P.a || i === P.b;
      ctx.globalAlpha = hi ? 1 : 0.35; ctx.fillStyle = c; ctx.fillRect(x0 + i * bw + 1, by, bw - 2, bh); ctx.globalAlpha = 1;
      label(names[i], x0 + i * bw + bw / 2, by + bh + 12, hi ? C.text : C.dim, 10);
    });
    at(1, () => [[T2.up[0], C.orange, h * 0.5], [T2.up[1], C.purple, h * 0.62], [T2.up[2], C.blue, h * 0.74]].forEach(([tx, col, y]) => {
      arrow(x0, y, x1, y, col, 2.5); label(tx, x0 + 4, y - 11, col, 11, "left");
    }));
    at(2, () => {
      const xb = x0 + span * (4.3 / 7), y = h * 0.88;
      ctx.lineWidth = 5; ctx.strokeStyle = C.green; ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(xb, y); ctx.stroke();
      ctx.strokeStyle = C.red; ctx.beginPath(); ctx.moveTo(xb, y); ctx.lineTo(x1, y); ctx.stroke();
      label(T2.nonion, (x0 + xb) / 2, y + 16, C.green, 12); label(T2.ion, (xb + x1) / 2, y + 16, C.red, 12);
    });
  }

  if (type === "fieldE") {
    const cx = x0 + 34, cy = h * 0.4, s = P.s >= 0 ? 1 : -1, rm = Math.max(P.r1, P.r2), pxm = (x1 - cx - 30) / (rm * 1.05);
    at(0, () => {
      for (let i = 0; i < 8; i++) {
        const a = (i * Math.PI) / 4, c = Math.cos(a), n = Math.sin(a), [p, q] = s > 0 ? [20, 54] : [54, 20];
        arrow(cx + p * c, cy + p * n, cx + q * c, cy + q * n, C.blue, 1.6);
      }
      dot(cx, cy, s > 0 ? C.red : C.blue, s > 0 ? "+" : "−");
    });
    const test = (r, col, tag) => {
      const px = cx + r * pxm, L = 64 * (P.r1 / r) ** 2;
      ctx.setLineDash([4, 4]); ctx.strokeStyle = C.dim; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(cx + 14, cy); ctx.lineTo(px, cy); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = col; ctx.beginPath(); ctx.arc(px, cy, 5, 0, 7); ctx.fill();
      label(`r = ${num(r)} m`, px, cy - 14, C.dim, 11);
      arrow(px, cy + 28, px + s * L, cy + 28, col, 3); label(tag, px, cy + 46, col, 12);
    };
    at(1, () => test(P.r1, C.orange, "E₁"));
    at(2, () => { test(P.r2, C.green, "E₂"); label(ratioTxt("E", P.r2 / P.r1), w / 2, h - 18, C.text, 14); });
  }

  if (type === "fieldB") {
    const cx = x0 + 84, cy = h * 0.5, R = 38;
    at(0, () => {
      [1, 2, 3].forEach((k) => { ctx.strokeStyle = B_COL; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(cx, cy, R * k, 0, 7); ctx.stroke(); });
      ctx.strokeStyle = C.text; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cy, 11, 0, 7); ctx.stroke();
      ctx.fillStyle = C.text; ctx.beginPath(); ctx.arc(cx, cy, 3.5, 0, 7); ctx.fill();
      label(T2.wire, x1, 18, C.dim, 11, "right");
    });
    at(1, () => {
      [1, 2, 3].forEach((k) => {
        arrow(cx + 12, cy - R * k, cx - 12, cy - R * k, B_COL, 2);
        arrow(cx - 12, cy + R * k, cx + 12, cy + R * k, B_COL, 2);
      });
      label(T2.rhr, w / 2, h - 14, C.dim, 11);
    });
    at(2, () => {
      [[P.r1, C.orange, "B₁"], [P.r2, C.green, "B₂"]].forEach(([r, col, tag]) => {
        const px = cx + r * R, L = 64 * (P.r1 / r);
        ctx.fillStyle = col; ctx.beginPath(); ctx.arc(px, cy, 5, 0, 7); ctx.fill();
        arrow(px, cy, px, cy - L, col, 3); label(tag, px + 14, cy - L / 2, col, 12);
        label(`r = ${num(r)} m`, px, cy + 18, col, 11);
      });
      label(ratioTxt("B", P.r2 / P.r1), x1, h * 0.3, C.text, 14, "right");
    });
  }

  if (type === "medium") {
    const lam = span / 3, y1 = h * 0.27, y2 = h * 0.72;
    at(0, () => {
      ctx.setLineDash([4, 4]); ctx.strokeStyle = C.dim; ctx.lineWidth = 1; ctx.strokeRect(x0, y1 - 40, span, 80); ctx.setLineDash([]);
      ctx.fillStyle = C.orange;
      for (let row = -1; row <= 1; row++) for (let x = x0 + 6; x <= x1 - 6; x += 9) {
        const dx = 6 * Math.sin((2 * Math.PI * (x - x0 - ph)) / lam);
        ctx.beginPath(); ctx.arc(x + dx, y1 + row * 22, 2.6, 0, 7); ctx.fill();
      }
      label(T2.air, x0 + 4, y1 - 52, C.orange, 12, "left");
    });
    at(1, () => {
      ctx.setLineDash([4, 4]); ctx.strokeStyle = C.dim; ctx.lineWidth = 1; ctx.strokeRect(x0, y2 - 40, span, 80); ctx.setLineDash([]);
      wave(x0, x1, y2, 26, lam, ph, C.blue);
      label(T2.vac, x0 + 4, y2 - 52, C.dim, 12, "left"); label(T2.emv, x0 + 4, y2 + 54, C.blue, 12, "left");
    });
    at(2, () => label(T2.sum, w / 2, h - 12, C.text, 12));
  }
}

function drawViz(time) {
  const w = canvas.width, h = canvas.height, pad = 24, x0 = pad, x1 = w - pad, span = x1 - x0;
  const q = curQ(), type = q.viz, T = VT[getLang()], P = { ...DEF[type], ...(q.params || {}) };

  ctx.strokeStyle = C.grid; ctx.lineWidth = 1; ctx.beginPath();
  for (let x = 0; x <= w; x += 30) { ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, h); }
  for (let y = 0; y <= h; y += 30) { ctx.moveTo(0, y + 0.5); ctx.lineTo(w, y + 0.5); }
  ctx.stroke();

  if (NEWVIZ.includes(type)) { drawNew(type, P, time, w, h, x0, x1, span); return; }
  if (type === "amp") {
    const lam = span / 3, ph = 60 * time, m = Math.max(P.a1, P.a2), maxPx = h * 0.15;
    const rows = [
      { mid: h * 0.25, a: P.a1, text: T.before, col: C.blue, s: 0 },
      { mid: h * 0.66, a: P.a2, text: T.after, col: C.orange, s: 1 },
    ];
    rows.forEach((r) => at(r.s, () => {
      const amp = (maxPx * r.a) / m;
      axisLine(x0, x1, r.mid);
      ctx.setLineDash([4, 4]); ctx.strokeStyle = C.dim; ctx.lineWidth = 1;
      [-1, 1].forEach((s) => { ctx.beginPath(); ctx.moveTo(x0, r.mid + s * amp); ctx.lineTo(x1, r.mid + s * amp); ctx.stroke(); });
      ctx.setLineDash([]);
      wave(x0, x1, r.mid, amp, lam, ph, r.col);
      ctx.strokeStyle = C.red; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x1 - 14, r.mid); ctx.lineTo(x1 - 14, r.mid - amp); ctx.stroke();
      label(`A = ${num(r.a)}`, x1 - 40, r.mid - amp / 2, C.red, 13);
      label(r.text, x0 + 4, r.mid - maxPx - 12, C.dim, 12, "left");
    }));
    at(2, () => {
      rows.forEach((r) => {
        const amp = (maxPx * r.a) / m, c = firstCrest(x0, lam, ph);
        if (c + lam <= x1) hBracket(c, c + lam, r.mid + amp + 26, "λ", C.text);
      });
      label(T.ampNote, w / 2, h - 14, C.text, 13);
    });
  }

  if (type === "freq") {
    const ph = 60 * time, k = P.k, f = P.f, v = P.v, amp = h * 0.1, real = f && v;
    const rows = [
      { mid: h * 0.25, lam: span / 2, s: 0, col: C.blue,
        text: f ? `f = ${num(f)} Hz` : T.fq, lt: real ? `λ = ${num(v / f)} m` : "λ" },
      { mid: h * 0.66, lam: span / 2 / k, s: 1, col: C.purple,
        text: f ? `f = ${num(f * k)} Hz` : `${T.fq} × ${num(k)}`, lt: real ? `λ = ${num(v / (f * k))} m` : `λ/${num(k)}` },
    ];
    rows.forEach((r) => at(r.s, () => {
      axisLine(x0, x1, r.mid);
      wave(x0, x1, r.mid, amp, r.lam, ph, r.col);
      const c = firstCrest(x0, r.lam, ph);
      if (c + r.lam <= x1) hBracket(c, c + r.lam, r.mid - amp - 14, r.lt, C.text);
      label(r.text, x0 + 4, r.mid + amp + 18, C.dim, 12, "left");
    }));
    at(2, () => label(real ? `λ = v / f  (v = ${num(v)} m/s)` : T.inv, w / 2, h - 16, C.text, 13));
  }

  if (type === "pp") {
    const lamM = P.lam, win = Math.max(12, lamM * 2.4), pxm = span / win, lam = lamM * pxm, ph = lam * 0.6;
    const mid = h * 0.45, amp = h * 0.2, ax = x0 + ph, bx = ax + lam;
    axisLine(x0, x1, mid);
    wave(x0, x1, mid, amp, lam, ph, C.blue);
    ruler(x0, h * 0.8, pxm, win);
    at(1, () => { dot(ax, mid - amp, C.green, "A"); dot(bx, mid - amp, C.green, "B"); });
    at(2, () => {
      hBracket(ax, bx, mid - amp - 32, `λ = ${num(lamM)} m`, C.orange);
      label(P.f ? `v = λ × f = ${num(lamM)} × ${num(P.f)} = ${num(lamM * P.f)} m/s` : T.pp, w / 2, h - 18, C.text, 13);
    });
  }

  if (type === "speed") {
    const lamM = P.lam, f = P.f, v = lamM * f, win = Math.max(12, lamM * 2.4), pxm = span / win, lam = lamM * pxm;
    const ph = v * pxm * 0.4 * time, amp = h * 0.1, mid = h * 0.33;
    axisLine(x0, x1, mid);
    wave(x0, x1, mid, amp, lam, ph, C.blue);
    ruler(x0, h * 0.6, pxm, win);
    const c = firstCrest(x0, lam, ph);
    if (c + lam <= x1) hBracket(c, c + lam, mid - amp - 14, `λ = ${num(lamM)} m`, C.orange);
    at(1, () => label(T.f3(num(f)), x0 + 4, mid + amp + 18, C.dim, 12, "left"));
    at(2, () => {
      const y2 = h * 0.78;
      ctx.strokeStyle = C.green; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(x0 + 10, y2); ctx.lineTo(x1 - 14, y2); ctx.stroke();
      ctx.fillStyle = C.green;
      ctx.beginPath(); ctx.moveTo(x1 - 4, y2); ctx.lineTo(x1 - 18, y2 - 9); ctx.lineTo(x1 - 18, y2 + 9); ctx.fill();
      dot(x0 + 10 + ((time * 0.6) % 1) * (span - 40), y2, C.green, "v");
      label(`v = λ × f = ${num(lamM)} × ${num(f)} = ${num(v)} m/s`, w / 2, y2 + 30, C.text, 14);
    });
  }

  if (type === "one") {
    const lamM = P.lam, lam = span * 0.62, xs = x0 + (span - lam) / 2, pxm = lam / lamM;
    const mid = h * 0.36, amp = h * 0.17;
    axisLine(x0, x1, mid);
    ctx.beginPath();
    for (let x = xs; x <= xs + lam; x += 2) {
      const y = mid - amp * Math.sin((2 * Math.PI * (x - xs)) / lam);
      x === xs ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = C.blue; ctx.lineWidth = 3.5; ctx.stroke();
    ruler(xs, h * 0.77, pxm, lamM);
    at(1, () => {
      label(T.crest, xs + lam * 0.25, mid - amp - 14, C.green, 13);
      label(T.trough, xs + lam * 0.75, mid + amp + 16, C.red, 13);
    });
    at(2, () => {
      hBracket(xs, xs + lam, mid + amp + 44, `${num(lamM)} m = 1 λ`, C.orange);
      if (P.f) label(`v = λ × f = ${num(lamM)} × ${num(P.f)} = ${num(lamM * P.f)} m/s`, w / 2, h - 18, C.text, 13);
    });
  }
}

export function update(ts) {
  if (!checked || !checked[cur]) return;
  if (!canvas || canvas.offsetParent === null) return;
  const cw = canvas.clientWidth, ch = canvas.clientHeight;
  if (canvas.width !== cw || canvas.height !== ch) { canvas.width = cw; canvas.height = ch; }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  C = palette();
  nowMs = performance.now();
  drawViz(ts / 1000);
}

// ---------- INIT ----------
export async function init() {
  canvas = $("q-canvas");
  ctx = canvas.getContext("2d");
  C = palette();
  $("q-start-error").textContent = t("p4_loading");

  try {
    const rows = await loadQuestions();
    if (rows.length >= 1) pool = rows;
  } catch (e) {
    console.warn("Database tidak terjangkau, memakai soal cadangan:", e);
  }

  $("q-start-btn").onclick = () => {
    const nama = $("q-name").value.trim(), kelas = $("q-class").value.trim();
    if (nama.length < 2 || !kelas) { $("q-start-error").textContent = t("p4_need"); return; }
    player = { nama, kelas };
    $("q-start-error").textContent = "";
    $("q-start").hidden = true;
    $("q-layout").hidden = false;
    t0 = Date.now();                      // timer mulai dari sini
  };
  [$("q-name"), $("q-class")].forEach((el) =>
    el.addEventListener("keydown", (e) => { if (e.key === "Enter") $("q-start-btn").click(); })
  );

  $("q-action").onclick = () => {
    if (!checked[cur]) {
      if (sel[cur] === null) return;
      checked[cur] = true;
      if (checked.every(Boolean)) {
        durasi = Math.max(1, Math.round((Date.now() - t0) / 1000));
        render(); startStages(); saveResult();
        return;
      }
      render(); startStages();
      return;
    } else if (cur < TOTAL - 1) {
      cur++;
    }
    render();
  };

  $("q-retry").onclick = () => resetQuiz();
  $("q-finish").onclick = () => { resetQuiz(); showStart(); window.navigateToPage(1); };
  window.addEventListener("langChanged", () => { render(); applyStartText(); });

  resetQuiz();
  showStart();
  applyStartText();
  $("q-start-error").textContent = "";
  $("q-start-btn").disabled = false;
}
