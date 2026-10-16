(function () {
  // ---------- DATA SOAL ----------
    const QUESTIONS = [
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
        id: [
          "A dan B adalah dua puncak yang berdekatan.",
          "Jarak dua puncak berdekatan adalah satu panjang gelombang penuh.",
          "Jadi λ = 4 meter.",
        ],
        en: [
          "A and B are two adjacent crests.",
          "The distance between two adjacent crests is one full wavelength.",
          "So λ = 4 meters.",
        ],
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
        id: [
          "Rumus cepat rambat gelombang: v = λ × f.",
          "Masukkan nilainya: v = 2 m × 3 Hz.",
          "Hasilnya v = 6 m/s.",
        ],
        en: [
          "Wave speed formula: v = λ × f.",
          "Substitute the values: v = 2 m × 3 Hz.",
          "The result is v = 6 m/s.",
        ],
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

  const TOTAL = QUESTIONS.length;
  const POINT = 100 / TOTAL;
  const $ = (id) => document.getElementById(id);
  const L = () => (typeof currentLang !== "undefined" ? currentLang : "id");
  const tr = (key) => (i18n[L()] && i18n[L()][key]) || key;

  let order, sel, checked, cur;

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const curQ = () => QUESTIONS[order[cur]];
  const score = () =>
    checked.reduce((s, c, i) => s + (c && sel[i] === QUESTIONS[order[i]].ans ? POINT : 0), 0);

  function resetQuiz(doShuffle) {
    order = QUESTIONS.map((_, i) => i);
    if (doShuffle) shuffle(order);
    sel = Array(TOTAL).fill(null);
    checked = Array(TOTAL).fill(false);
    cur = 0;
    render();
  }

  // ---------- RENDER ----------
  function renderProgress() {
    const box = $("q-progress");
    box.innerHTML = "";
    for (let i = 0; i < TOTAL; i++) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "q-step";
      const isCorrect = checked[i] && sel[i] === QUESTIONS[order[i]].ans;
      if (checked[i]) b.classList.add(isCorrect ? "correct" : "wrong");
      if (i === cur) b.classList.add("current");
      b.textContent = checked[i] ? (isCorrect ? "✓" : "✕") : i + 1;
      b.onclick = () => { cur = i; render(); };
      box.appendChild(b);
    }
  }

  function renderQuestion() {
    const q = curQ();
    $("q-num").textContent = `${tr("p4_q")} ${cur + 1} / ${TOTAL}`;
    $("q-text").textContent = q.q[L()];

    const box = $("q-options");
    box.innerHTML = "";
    q.opts[L()].forEach((text, i) => {
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

        const res = $("q-result");
    const act = $("q-action");
    const en = L() === "en";
    if (checked[cur]) {
      const ok = sel[cur] === q.ans;
      res.textContent = ok
        ? (en ? `✔ Correct! +${POINT} points` : `✔ Benar! +${POINT} poin`)
        : (en ? "✘ Not quite. See the explanation below." : "✘ Kurang tepat. Lihat penjelasannya di bawah.");
      res.className = "q-result " + (ok ? "ok" : "no");
      act.textContent = tr("p4_nextq");
      act.disabled = false;
      act.style.display = cur === TOTAL - 1 ? "none" : "";
    } else {
      res.textContent = "";
      res.className = "q-result";
      act.textContent = tr("p4_check");
      act.disabled = sel[cur] === null;
      act.style.display = "";
    }
  }

  function renderLocked() {
    const open = checked[cur];
    $("q-explain-card").classList.toggle("locked", !open);
    $("q-viz-card").classList.toggle("locked", !open);
    const list = $("q-explain");
    if (open) {
      list.innerHTML = curQ().steps[L()].map((s) => `<li>${s}</li>`).join("");
      $("q-chip").textContent = curQ().chip[L()];
    } else {
      list.innerHTML = "<li>••••••••••••••••</li><li>••••••••••••</li><li>••••••••••••••••••</li>";
      $("q-chip").textContent = "••••";
    }
  }

    function renderScore() {
    const s = Math.round(score());
    const done = checked.every(Boolean);
    const en = L() === "en";
    $("q-score").textContent = s;
    $("q-finish").disabled = !done;
    let msg = en ? "Answer all the questions!" : "Jawab semua soal ya!";
    if (done) {
      if (s >= 80) msg = en ? "Great! Keep it up!" : "Bagus! Terus tingkatkan!";
      else if (s >= 60) msg = en ? "Not bad! Try again for a higher score." : "Lumayan! Coba lagi untuk skor lebih tinggi.";
      else msg = en ? "Don't give up, review and try again!" : "Jangan menyerah, pelajari lagi lalu ulangi!";
    }
    $("q-score-msg").textContent = msg;
  }

  function render() {
    renderProgress();
    renderQuestion();
    renderLocked();
    renderScore();
  }

  // ---------- TOMBOL ----------
  $("q-action").onclick = () => {
    if (!checked[cur]) {
      if (sel[cur] === null) return;
      checked[cur] = true;
    } else if (cur < TOTAL - 1) {
      cur++;
    }
    render();
  };
  $("q-retry").onclick = () => resetQuiz(true);
  $("q-finish").onclick = () => {
    resetQuiz(false);
    navigateToPage(1);
  };
  $("nav-page4")?.addEventListener("click", () => navigateToPage(4));
  $("btn-p4-back")?.addEventListener("click", () => navigateToPage(3));

  // ---------- VISUALISASI (CANVAS) ----------
  const canvas = $("q-canvas");
  const ctx = canvas.getContext("2d");

  function palette() {
    const light = document.body.classList.contains("light-mode");
    return light
      ? { text: "#111827", dim: "rgba(0,0,0,0.45)", grid: "rgba(0,0,0,0.07)", axis: "rgba(0,0,0,0.3)",
          blue: "#0891b2", red: "#dc2626", green: "#16a34a", orange: "#d97706", purple: "#7c3aed" }
      : { text: "#f9fafb", dim: "rgba(255,255,255,0.5)", grid: "rgba(255,255,255,0.06)", axis: "rgba(255,255,255,0.3)",
          blue: "#06b6d4", red: "#f87171", green: "#34d399", orange: "#fbbf24", purple: "#a78bfa" };
  }
  let C = palette();

  // y = mid - amp * cos(2π (x - x0 - ph) / lam)  -> puncak di x0 + ph + n·lam
  function wave(x0, x1, mid, amp, lam, ph, color) {
    ctx.beginPath();
    for (let x = x0; x <= x1; x += 2) {
      const y = mid - amp * Math.cos((2 * Math.PI * (x - x0 - ph)) / lam);
      x === x0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();
  }
  function axisLine(x0, x1, y) {
    ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y);
    ctx.strokeStyle = C.axis; ctx.lineWidth = 1; ctx.stroke();
  }
  function label(t, x, y, color, size, align) {
    ctx.font = `600 ${size || 12}px Poppins, sans-serif`;
    ctx.fillStyle = color || C.text;
    ctx.textAlign = align || "center";
    ctx.textBaseline = "middle";
    ctx.fillText(t, x, y);
  }
  function hBracket(xa, xb, y, text, color) {
    ctx.strokeStyle = color; ctx.lineWidth = 2;
    ctx.beginPath();
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
  // posisi puncak pertama yang bergerak di dalam rentang [x0, x0+lam)
  const firstCrest = (x0, lam, ph) => x0 + (((ph % lam) + lam) % lam);

    const VT = {
    id: { before: "Sebelum (A kecil)", after: "Sesudah (A besar)", f1: "Frekuensi f", f2: "Frekuensi f × 2",
          pp: "Jarak puncak ke puncak = 1 λ", f3: "f = 3 Hz (3 gelombang tiap detik)",
          crest: "bukit", trough: "lembah" },
    en: { before: "Before (small A)", after: "After (large A)", f1: "Frequency f", f2: "Frequency f × 2",
          pp: "Crest to crest distance = 1 λ", f3: "f = 3 Hz (3 waves per second)",
          crest: "crest", trough: "trough" },
  };

  function drawViz(t) {
    const w = canvas.width, h = canvas.height, pad = 24;
    const x0 = pad, x1 = w - pad;
    const type = curQ().viz;
    const speed = 60; // px/detik (kecepatan visual)
     const T = VT[L()];

    // grid tipis
    ctx.strokeStyle = C.grid; ctx.lineWidth = 1; ctx.beginPath();
    for (let x = 0; x <= w; x += 30) { ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, h); }
    for (let y = 0; y <= h; y += 30) { ctx.moveTo(0, y + 0.5); ctx.lineTo(w, y + 0.5); }
    ctx.stroke();

    if (type === "amp") {
      const lam = (x1 - x0) / 3, ph = speed * t;
      const rows = [
        { mid: h * 0.27, amp: h * 0.07, text: T.before, col: C.blue },
        { mid: h * 0.74, amp: h * 0.19, text: T.after, col: C.orange },
      ];
      rows.forEach((r) => {
        axisLine(x0, x1, r.mid);
        ctx.setLineDash([4, 4]); ctx.strokeStyle = C.dim; ctx.lineWidth = 1;
        [-1, 1].forEach((s) => { ctx.beginPath(); ctx.moveTo(x0, r.mid + s * r.amp); ctx.lineTo(x1, r.mid + s * r.amp); ctx.stroke(); });
        ctx.setLineDash([]);
        wave(x0, x1, r.mid, r.amp, lam, ph, r.col);
        // panah amplitudo
        ctx.strokeStyle = C.red; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(x1 - 14, r.mid); ctx.lineTo(x1 - 14, r.mid - r.amp); ctx.stroke();
        label("A", x1 - 28, r.mid - r.amp / 2, C.red, 13);
        label(r.text, x0 + 4, r.mid - r.amp - 16, C.dim, 12, "left");
      });
    }

    if (type === "freq") {
      const ph = speed * t;
      const rows = [
        { mid: h * 0.3, lam: (x1 - x0) / 2, text: T.f1, lt: "λ", col: C.blue },
        { mid: h * 0.74, lam: (x1 - x0) / 4, text: T.f2, lt: "λ/2", col: C.purple },
      ];
      rows.forEach((r) => {
        axisLine(x0, x1, r.mid);
        wave(x0, x1, r.mid, h * 0.1, r.lam, ph, r.col);
        const c = firstCrest(x0, r.lam, ph);
        if (c + r.lam <= x1) hBracket(c, c + r.lam, r.mid - h * 0.1 - 14, r.lt, C.text);
        label(r.text, x0 + 4, r.mid + h * 0.1 + 18, C.dim, 12, "left");
      });
    }

    if (type === "pp") {
      const mid = h * 0.52, amp = h * 0.2, lam = (x1 - x0) / 2.6, ph = lam * 0.6;
      axisLine(x0, x1, mid);
      wave(x0, x1, mid, amp, lam, ph, C.blue);
      const ax = x0 + ph, bx = ax + lam;
      dot(ax, mid - amp, C.green, "A");
      dot(bx, mid - amp, C.green, "B");
      hBracket(ax, bx, mid - amp - 32, "λ = 4 m", C.orange);
      label(T.pp, w / 2, h - 20, C.dim, 12);
    }

    if (type === "speed") {
      const lam = (x1 - x0) / 3, ph = speed * 1.5 * t, amp = h * 0.13;
      const mid = h * 0.28;
      axisLine(x0, x1, mid);
      wave(x0, x1, mid, amp, lam, ph, C.blue);
      const c = firstCrest(x0, lam, ph);
      if (c + lam <= x1) hBracket(c, c + lam, mid - amp - 14, "λ = 2 m", C.orange);
      label(T.f3, x0 + 4, mid + amp + 18, C.dim, 12, "left");

      // kecepatan
      const y2 = h * 0.7;
      ctx.strokeStyle = C.green; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(x0 + 10, y2); ctx.lineTo(x1 - 14, y2); ctx.stroke();
      ctx.fillStyle = C.green;
      ctx.beginPath(); ctx.moveTo(x1 - 4, y2); ctx.lineTo(x1 - 18, y2 - 9); ctx.lineTo(x1 - 18, y2 + 9); ctx.fill();
      const px = x0 + 10 + (((t * 0.6) % 1) * (x1 - x0 - 40));
      dot(px, y2, C.green, "v");
      label("v = λ × f = 2 × 3 = 6 m/s", w / 2, y2 + 34, C.text, 14);
    }

    if (type === "one") {
      const lam = (x1 - x0) * 0.62, xs = (w - lam) / 2, mid = h * 0.5, amp = h * 0.2;
      axisLine(x0, x1, mid);
      // gelombang penuh: bukit dulu, lalu lembah (y = mid - amp·sin)
      ctx.beginPath();
      for (let x = xs; x <= xs + lam; x += 2) {
        const y = mid - amp * Math.sin((2 * Math.PI * (x - xs)) / lam);
        x === xs ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = C.blue; ctx.lineWidth = 3.5; ctx.stroke();
      label(T.crest, xs + lam * 0.25, mid - amp - 14, C.green, 13);
      label(T.trough, xs + lam * 0.75, mid + amp + 16, C.red, 13);
      hBracket(xs, xs + lam, mid + amp + 52, "2 m = 1 λ", C.orange);
    }
  }

  function loop(ts) {
    requestAnimationFrame(loop);
    if (canvas.offsetParent === null) return;           // Page 4 tidak tampil
    const fps = window.fpsLimit || 60;
    if (loop.last && ts - loop.last < 1000 / fps) return;
    loop.last = ts;

    const cw = canvas.clientWidth, ch = canvas.clientHeight;
    if (canvas.width !== cw || canvas.height !== ch) { canvas.width = cw; canvas.height = ch; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!checked[cur]) return;                           // terkunci: tidak digambar

    C = palette();
    drawViz(ts / 1000);
  }
  requestAnimationFrame(loop);

  resetQuiz(false);
  window.addEventListener("langChanged", render);
})();