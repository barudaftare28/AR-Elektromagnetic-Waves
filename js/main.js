// 1. KAMUS BAHASA (DICTIONARY I18N)
// ==========================================
// Kita menyimpan semua teks bahasa di dalam satu objek/variabel bernama 'i18n'.
// Jika ingin menambah bahasa baru (misal: 'kr' Korea), tambahkan blok baru di bawah 'en'.
const i18n = {
  id: {
    logo_sub: "Eksplorasi. Eksperimen. Pahami.",
    nav_intro: "Intro",
    nav_lab: "Wave Lab",
    btn_guide: "Panduan",
    btn_glossary: "Glosarium",
    btn_settings: "Pengaturan",
    modal_guide_title: "Panduan Penggunaan",
    modal_guide_p1: "Page 1 (Intro):",
    modal_guide_d1:
      "Pahami konsep dasar, arah rambat, dan komponen medan listrik & magnet.",
    modal_guide_p2: "Page 2 (Wave Lab):",
    modal_guide_d2:
      "Observasi gelombang 2D. Gunakan fitur Pause, Zoom, dan perhatikan nilai sensor.",
    glo_freq_title: "Frekuensi (f):",
    glo_freq_desc: "Jumlah getaran dalam satu detik (Hertz).",
    glo_wave_title: "Panjang Gelombang (λ):",
    glo_wave_desc: "Jarak antara satu puncak ke puncak berikutnya (Meter).",
    glo_amp_title: "Amplitudo (A):",
    glo_amp_desc: "Simpangan terjauh dari titik setimbang.",
    set_lang: "Bahasa / Language",
    set_lang_desc: "Pilih bahasa antarmuka.",
    set_theme: "Tema Tampilan",
    set_theme_desc: "Pilih mode gelap atau terang.",
    set_perf: "Kualitas Animasi",
    set_perf_desc: "Gunakan 30 FPS untuk hemat baterai.",
    p1_title:
      "APA ITU <br><span class='highlight'>GELOMBANG ELEKTROMAGNETIK?</span>",
    p1_desc:
      "Gelombang yang dihasilkan oleh getaran medan listrik dan medan magnet yang dapat merambat tanpa medium.",
    p1_e_title: "Medan Listrik (E)",
    p1_e_desc: "Bergetar naik turun",
    p1_b_title: "Medan Magnet (B)",
    p1_b_desc: "Bergetar tegak lurus terhadap E",
    p1_med_title: "Tanpa Medium",
    p1_med_desc: "Dapat merambat di ruang hampa",
    p1_fact_title: "Tahukah Kamu?",
    p1_fact_desc:
      "Teori elektromagnetik dikembangkan oleh <strong>James Clerk Maxwell</strong> yang menyatakan bahwa perubahan medan listrik dan magnet dapat merambat sebagai gelombang.",
    lbl_e: "Medan Listrik (E)",
    lbl_b: "Medan Magnet (B)",
    lbl_dir: "Arah Rambat",
    p1_form_title: "Hubungan Dasar",
    p1_form_desc:
      "Kecepatan (c), frekuensi (f), dan panjang gelombang (λ) saling berhubungan.",
    form_c: "kecepatan cahaya",
    form_f: "frekuensi",
    form_l: "panjang gelombang",
    btn_start: "MULAI EKSPLORASI",
    p2_sim: "(SIMULASI)",
    p2_desc: "Amati gelombang elektromagnetik dan pahami sifat-sifatnya.",
    btn_reset: "RESET",
    btn_pause: "PAUSE",
    btn_play: "PLAY",
    p2_observe: "Lihat dan Pahami",
    p2_cant_change: "(Tidak Dapat Diubah)",
    p2_tt: "Gelombang merambat lurus dengan kecepatan konstan di ruang hampa.",
    btn_zin: "Zoom In",
    btn_zout: "Zoom Out",
    p2_short: "Penjelasan Singkat",
    p2_short_desc:
      "Gelombang elektromagnetik terdiri dari medan listrik (E) dan medan magnet (B) yang saling tegak lurus dan merambat ke depan dengan kecepatan cahaya (c).",
    p2_sensor: "Sensor Real-time",
    p2_rt_e: "Medan Listrik (E) Saat Ini",
    p2_rt_b: "Medan Magnet (B) Saat Ini",
    p2_const: "Nilai Konstan Gelombang",
    p2_amp: "Amplitudo Maks",
    p2_why: "Kenapa nilai di atas tidak bisa diubah?",
    p2_why_desc:
      "Frekuensi dan panjang gelombang adalah identitas asli gelombang tersebut. Yang bergerak naik-turun secara real-time hanyalah simpangannya.",
    btn_back: "Kembali ke Intro",
    btn_next: "Lanjut ke Spectrum (AR)",
        nav_spec: "Spectrum (AR)",
    nav_challenge: "Challenge",
    p3_sub: "Eksplorasi spektrum gelombang elektromagnetik dan ubah frekuensinya!",
    p3_choose: "Pilih Jenis Gelombang",
    p3_view: "AR VIEW",
    p3_active: "● AR Aktif",
    p3_instruction: "Arahkan kamera ke benda nyata (contoh: radio)",
    p3_params: "UBAH PARAMETER GELOMBANG",
    p3_freq: "Frekuensi (f)",
    p3_amp: "Amplitudo (A)",
    p3_speed: "Kecepatan (c)",
    p3_vacuum: "(Tetap di ruang hampa)",
    p3_info: "Informasi Real-time",
    p3_type: "Jenis Gelombang",
    p3_lambda: "Panjang Gelombang (λ)",
    p3_energy: "Energi (E)",
    p3_fact: "💡 Fun Fact & Pengaplikasian",
    p3_back: "⬅ Kembali ke Wave Lab",
    p3_next: "Lanjut ke Challenge ➔",
    p4_sub: "Uji pemahamanmu tentang gelombang elektromagnetik!",
    p4_progress: "PROGRESS",
    p4_check: "Cek Jawaban",
    p4_nextq: "Soal Berikutnya →",
    p4_lock_exp: "🔒 Jawab soal ini untuk membuka penjelasan",
    p4_lock_viz: "🔒 Jawab soal ini untuk membuka visualisasi",
    p4_explain: "Penjelasan",
    p4_viz: "Visualisasi Hasil",
    p4_score: "Skor Kamu",
    p4_retry: "Ulangi Quiz",
    p4_finish: "Selesai",
    p4_back: "⬅ Kembali ke Spectrum",
    p4_intro: "Kembali ke Introduction ➔",
    p4_q: "SOAL",
  },
  en: {
    logo_sub: "Explore. Experiment. Understand.",
    nav_intro: "Intro",
    nav_lab: "Wave Lab",
    btn_guide: "Guide",
    btn_glossary: "Glossary",
    btn_settings: "Settings",
    modal_guide_title: "User Guide",
    modal_guide_p1: "Page 1 (Intro):",
    modal_guide_d1:
      "Understand basic concepts, propagation direction, and components.",
    modal_guide_p2: "Page 2 (Wave Lab):",
    modal_guide_d2: "Observe 2D waves. Use Pause, Zoom, and real-time sensors.",
    glo_freq_title: "Frequency (f):",
    glo_freq_desc: "Number of oscillations per second (Hertz).",
    glo_wave_title: "Wavelength (λ):",
    glo_wave_desc: "Distance between consecutive peaks (Meter).",
    glo_amp_title: "Amplitude (A):",
    glo_amp_desc: "Maximum displacement from equilibrium.",
    set_lang: "Language / Bahasa",
    set_lang_desc: "Select interface language.",
    set_theme: "Appearance Theme",
    set_theme_desc: "Choose dark or light mode.",
    set_perf: "Animation Quality",
    set_perf_desc: "Use 30 FPS to save battery life.",
    p1_title:
      "WHAT IS AN <br><span class='highlight'>ELECTROMAGNETIC WAVE?</span>",
    p1_desc:
      "A wave produced by the vibration of electric and magnetic fields that can travel without a medium.",
    p1_e_title: "Electric Field (E)",
    p1_e_desc: "Oscillates up and down",
    p1_b_title: "Magnetic Field (B)",
    p1_b_desc: "Oscillates perpendicular to E",
    p1_med_title: "No Medium Needed",
    p1_med_desc: "Can travel through a vacuum",
    p1_fact_title: "Did You Know?",
    p1_fact_desc:
      "The theory of electromagnetism was developed by <strong>James Clerk Maxwell</strong>, showing that changes in fields propagate as waves.",
    lbl_e: "Electric Field (E)",
    lbl_b: "Magnetic Field (B)",
    lbl_dir: "Propagation",
    p1_form_title: "Basic Relationship",
    p1_form_desc:
      "Speed (c), frequency (f), and wavelength (λ) are interrelated.",
    form_c: "speed of light",
    form_f: "frequency",
    form_l: "wavelength",
    btn_start: "START EXPLORING",
    p2_sim: "(SIMULATION)",
    p2_desc: "Observe the electromagnetic wave and understand its properties.",
    btn_reset: "RESET",
    btn_pause: "PAUSE",
    btn_play: "PLAY",
    p2_observe: "Observe and Learn",
    p2_cant_change: "(Cannot Be Changed)",
    p2_tt:
      "Waves propagate in a straight line at a constant speed in a vacuum.",
    btn_zin: "Zoom In",
    btn_zout: "Zoom Out",
    p2_short: "Brief Explanation",
    p2_short_desc:
      "Electromagnetic waves consist of electric (E) and magnetic (B) fields oscillating perpendicular to each other, traveling forward at the speed of light.",
    p2_sensor: "Real-time Sensor",
    p2_rt_e: "Current Electric Field (E)",
    p2_rt_b: "Current Magnetic Field (B)",
    p2_const: "Constant Wave Values",
    p2_amp: "Max Amplitude",
    p2_why: "Why can't these values be changed?",
    p2_why_desc:
      "Frequency and wavelength are the inherent identities of the wave. Only the displacements oscillate in real-time.",
    btn_back: "Back to Intro",
    btn_next: "Next to Spectrum (AR)",
        nav_spec: "Spectrum (AR)",
    nav_challenge: "Challenge",
    p3_sub: "Explore the electromagnetic spectrum and change its frequency!",
    p3_choose: "Choose Wave Type",
    p3_view: "AR VIEW",
    p3_active: "● AR Active",
    p3_instruction: "Point the camera at a real object (e.g. a radio)",
    p3_params: "ADJUST WAVE PARAMETERS",
    p3_freq: "Frequency (f)",
    p3_amp: "Amplitude (A)",
    p3_speed: "Speed (c)",
    p3_vacuum: "(Constant in vacuum)",
    p3_info: "Real-time Information",
    p3_type: "Wave Type",
    p3_lambda: "Wavelength (λ)",
    p3_energy: "Energy (E)",
    p3_fact: "💡 Fun Fact & Applications",
    p3_back: "⬅ Back to Wave Lab",
    p3_next: "Next to Challenge ➔",
    p4_sub: "Test your understanding of electromagnetic waves!",
    p4_progress: "PROGRESS",
    p4_check: "Check Answer",
    p4_nextq: "Next Question →",
    p4_lock_exp: "🔒 Answer this question to unlock the explanation",
    p4_lock_viz: "🔒 Answer this question to unlock the visualization",
    p4_explain: "Explanation",
    p4_viz: "Result Visualization",
    p4_score: "Your Score",
    p4_retry: "Retry Quiz",
    p4_finish: "Finish",
    p4_back: "⬅ Back to Spectrum",
    p4_intro: "Back to Introduction ➔",
    p4_q: "QUESTION",
  },
};

// 2. VARIABEL STATE (KONDISI SAAT INI)
let currentLang = "id"; // Bahasa default saat web pertama kali dibuka
let isDark = true; // Tema default adalah Dark Mode
window.fpsLimit = 60; // Global FPS limit accessed by waveEngine

// 3. FUNGSI GANTI BAHASA (LANGUAGE SWITCHER)
window.toggleLang = function () {
  // Cek bahasa saat ini, lalu tukar. Jika 'id' ubah ke 'en', sebaliknya jadi 'id'.
  currentLang = currentLang === "id" ? "en" : "id";
  // Ubah teks di tombol pengaturannya sendiri
  document.getElementById("btn-lang").innerText = currentLang.toUpperCase();
  // Cari SEMUA elemen HTML yang punya atribut 'data-i18n' (contoh: <span data-i18n="nav_intro">)
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    // Ambil nama kunci/kodenya (misal: "nav_intro")
    const key = el.getAttribute("data-i18n");
    // Jika kunci tsb ada di dalam kamus bahasa, ganti teks di HTML-nya secara instan
    if (i18n[currentLang][key]) {
      el.innerHTML = i18n[currentLang][key];
    }
  });
  
  window.dispatchEvent(new Event("langChanged"));
  
};

// 4. FUNGSI GANTI TEMA (DARK / LIGHT MODE)
window.toggleTheme = function () {
  // Balikkan nilai dari true ke false atau sebaliknya
  isDark = !isDark;
  const btn = document.getElementById("btn-theme");
  if (isDark) {
    // Jika mode gelap, hapus class 'light-mode' dari tag <body>
    document.body.classList.remove("light-mode");
    btn.innerText = "🌙 Dark"; // Ubah teks tombol
  } else {
    // Jika mode terang, tambahkan class 'light-mode' ke tag <body>
    document.body.classList.add("light-mode");
    btn.innerText = "☀️ Light"; // Ubah teks tombol
  }
  // PENTING: Beri sinyal/event ke file `waveEngine.js` bahwa tema telah berubah.
  // Ini agar garis sumbu dalam animasi canvas ikut berubah warna (hitam/putih).
  window.dispatchEvent(new Event("themeChanged"));
};

// 5. FUNGSI BATASI FPS (KUALITAS ANIMASI)
window.toggleFPS = function () {
  // Jika sedang 60 turunkan ke 30 (hemat baterai), jika 30 naikkan ke 60 (animasi super mulus)
  window.fpsLimit = window.fpsLimit === 60 ? 30 : 60;
  // Ubah teks pada tombol pengaturan
  document.getElementById("btn-fps").innerText = window.fpsLimit + " FPS";
};

// Navigation Logic
function navigateToPage(pageNum) {
  // 1. Sembunyikan semua halaman
  const pages = document.querySelectorAll(".page");
  pages.forEach((p) => {
    p.classList.remove("active");
  });

  // 2. Tampilkan halaman target jika elemennya ada
  const targetPage = document.getElementById(`page-${pageNum}`);
  if (targetPage) {
    targetPage.classList.add("active");
  } else {
    console.warn(`Halaman page-${pageNum} tidak ditemukan!`);
    return;
  }

  // 3. Update status tombol navigasi header/navbar
  document.querySelectorAll(".nav-links .nav-btn").forEach((btn, idx) => {
    if (!btn.classList.contains("disabled")) {
      btn.classList.toggle("active", idx + 1 === pageNum);
    }
  });

  // 4. Trigger resize event untuk menyesuaikan Canvas 2D/3D
  window.dispatchEvent(new Event("resize"));

  // 5. Scroll otomatis ke atas setiap kali pindah halaman
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  // Navigasi yang sudah ada
  document.getElementById("nav-page1")?.addEventListener("click", () => navigateToPage(1));
  document.getElementById("btn-back")?.addEventListener("click", () => navigateToPage(1));
  document.getElementById("nav-page2")?.addEventListener("click", () => navigateToPage(2));
  document.getElementById("btn-mulai")?.addEventListener("click", () => navigateToPage(2));

  // Tambahan khusus Page 3
  document.getElementById("nav-page3")?.addEventListener("click", () => navigateToPage(3));
  document.getElementById("btn-p2-next")?.addEventListener("click", () => navigateToPage(3));
  document.getElementById("btn-p3-back")?.addEventListener("click", () => navigateToPage(2));
  document.getElementById("btn-p3-next")?.addEventListener("click", () => navigateToPage(4));
  document.querySelectorAll(".pagination [data-goto]").forEach((dot) => {
    dot.addEventListener("click", () => navigateToPage(parseInt(dot.dataset.goto, 10)));
  });
  document.getElementById("btn-p4-intro")?.addEventListener("click", () => navigateToPage(1));


  // Page 3
  // === SETUP SLIDER BUTTONS ===
  setupSliderStep("slider-freq", "btn-f-minus", "btn-f-plus", 1);
  setupSliderStep("slider-amp", "btn-a-minus", "btn-a-plus", 0.1);

  // === Dapatkan Elemen DOM ===
  const sliderFreq = document.getElementById("slider-freq");
  const sliderAmp = document.getElementById("slider-amp");

  const valF = document.getElementById("val-f");
  const valA = document.getElementById("val-a");

  const infoFreq = document.getElementById("info-freq");
  const infoAmp = document.getElementById("info-amp");
  const infoLambda = document.getElementById("info-lambda");
  const infoEnergy = document.getElementById("info-energy");

  // Konstanta Fisika
  const C = 3e8; // Kecepatan cahaya (m/s)
  const H_EV = 4.135667696e-15; // Konstanta Planck dalam eV.s

  // Fungsi Kalkulasi & Pembaruan Teks
  function updateWaveParameters() {
    if (!sliderFreq || !sliderAmp) return;

    const data = spectrumData[currentSpectrumKey] || spectrumData.radio;
    const freqVal = parseFloat(sliderFreq.value);
    
    // 1. Konversi Dinamis Nilai Frekuensi ke Hz Murni
    const freqHz = roundFreq(sliderToHz(sliderFreq.value));

    const ampMeters = parseFloat(sliderAmp.value);

    // Hitung Panjang Gelombang & Energi
    const lambda = C / freqHz;
    const energyEV = H_EV * freqHz;

    // 2. Format Teks Frekuensi Otomatis (Mengubah 1000 Hz -> 1 kHz, 1000 MHz -> 1 GHz, dst.)
    const formattedFreqStr = formatFrequency(freqHz);

    // Update Teks di Atas Slider & Panel Informasi
    if (valF) valF.innerText = formattedFreqStr;
    if (infoFreq) infoFreq.innerText = formattedFreqStr;

    if (valA) valA.innerText = `${ampMeters.toFixed(2)} m`;
    if (infoAmp) infoAmp.innerText = `${ampMeters.toFixed(2)} m`;

    // 3. Format Panjang Gelombang
    if (infoLambda) {
      if (lambda >= 1) {
        infoLambda.innerText = `${lambda.toFixed(2)} m`;
      } else if (lambda >= 1e-2) {
        infoLambda.innerText = `${(lambda * 100).toFixed(2)} cm`;
      } else if (lambda >= 1e-3) {
        infoLambda.innerText = `${(lambda * 1000).toFixed(2)} mm`;
      } else if (lambda >= 1e-9) {
        infoLambda.innerText = `${(lambda * 1e9).toFixed(2)} nm`;
      } else {
        infoLambda.innerText = `${(lambda * 1e12).toFixed(2)} pm`;
      }
    }

    // 4. Format Energi
    if (infoEnergy) {
      if (energyEV >= 1e6) {
        infoEnergy.innerText = `${(energyEV / 1e6).toFixed(2)} MeV`;
      } else if (energyEV >= 1e3) {
        infoEnergy.innerText = `${(energyEV / 1e3).toFixed(2)} keV`;
      } else if (energyEV >= 1) {
        infoEnergy.innerText = `${energyEV.toFixed(2)} eV`;
      } else {
        infoEnergy.innerText = `${energyEV.toExponential(2)} eV`;
      }
    }
  }

  // Pasang Listener Input pada Slider
  sliderFreq?.addEventListener("input", updateWaveParameters);
  sliderAmp?.addEventListener("input", updateWaveParameters);

  // === EVENT SWITCH SPECTRUM BUTTONS ===
  const specButtons = document.querySelectorAll(".spec-btn");
  const labelMinFreq = document.querySelector(".slider-range-labels span:first-child");
  const labelMaxFreq = document.querySelector(".slider-range-labels span:last-child");

  specButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      specButtons.forEach((b) => b.classList.remove("active"));
      
      const currentBtn = e.currentTarget;
      currentBtn.classList.add("active");

      const type = currentBtn.getAttribute("data-type");
      loadSpectrumData(type);
    });
  });

  // === FUNGSI LOAD DATA SPEKTRUM (BISA DIGUNAKAN UNTUK SEMUA SPEKTRUM) ===
  function loadSpectrumData(typeKey) {
    const data = spectrumData[typeKey] || spectrumData.radio;
    const sliderFreq = document.getElementById("slider-freq");

    if (data && sliderFreq) {
      currentSpectrumKey = typeKey;

      const midFreq = data.defaultFreq !== undefined 
        ? data.defaultFreq 
        : (data.minFreq + data.maxFreq) / 2;

      // 1. Set Min, Max, dan Value
      sliderFreq.step = "any"; // 2. Set Step Awal secara Dinamis (sesuai posisi midFreq)

      sliderFreq.min = hzToSlider(data.minFreq);
      sliderFreq.max = hzToSlider(data.maxFreq);
      sliderFreq.value = (parseFloat(sliderFreq.min) + parseFloat(sliderFreq.max)) / 2;

      const sliderAmp = document.getElementById("slider-amp");
      if (sliderAmp) {
        if (sliderAmp) {
          sliderAmp.min = 0;
          sliderAmp.max = 10;
          sliderAmp.step = 0.1;
          sliderAmp.value = 5;   // tengah
        }
      }

      // 3. Update Label Min/Max & UI
      const labelMinFreq = document.querySelector(".slider-range-labels span:first-child");
      const labelMaxFreq = document.querySelector(".slider-range-labels span:last-child");
      if (labelMinFreq) labelMinFreq.innerText = data.minLabel;
      if (labelMaxFreq) labelMaxFreq.innerText = data.maxLabel;

      // 4. Update Informasi Panel & Kalkulasi Fisika
      const infoName = document.getElementById("info-name");
      const infoFact = document.getElementById("info-fact");

      if (infoName) {
        infoName.innerText = data.name;
        infoName.style.color = data.color;
      }
      if (infoFact) infoFact.innerText = data.fact[currentLang] || data.fact.id;

      updateWaveParameters();
    }
  }

  // === INISIALISASI AWAL SAAT PAGE DI-REFRESH (DEFAULT: RADIO) ===
  loadSpectrumData("radio");

  window.addEventListener("langChanged", () => {
    const d = spectrumData[currentSpectrumKey];
    const infoFact = document.getElementById("info-fact");
    if (d && infoFact) infoFact.innerText = d.fact[currentLang] || d.fact.id;
  });
});

// Helper Function untuk Format Otomatis Hz -> kHz -> MHz -> GHz -> THz -> PHz -> EHz
function formatFrequency(freqHz) {
  if (freqHz >= 1e18) {
    return `${(freqHz / 1e18).toFixed(2)} EHz`;
  } else if (freqHz >= 1e15) {
    return `${(freqHz / 1e15).toFixed(2)} PHz`;
  } else if (freqHz >= 1e12) {
    return `${(freqHz / 1e12).toFixed(2)} THz`;
  } else if (freqHz >= 1e9) {
    return `${(freqHz / 1e9).toFixed(2)} GHz`;
  } else if (freqHz >= 1e6) {
    return `${(freqHz / 1e6).toFixed(2)} MHz`;
  } else if (freqHz >= 1e3) {
    return `${(freqHz / 1e3).toFixed(2)} kHz`;
  } else {
    return `${freqHz.toFixed(2)} Hz`;
  }
}

// 6. FUNGSI BUKA / TUTUP POP-UP (MODAL)
window.openModal = function (id) {
  // Tambahkan class 'active' agar CSS memunculkan efek fade-in pop-up
  document.getElementById(id).classList.add("active");
};
window.closeModal = function (id) {
  // Hapus class 'active' agar pop-up kembali menghilang
  document.getElementById(id).classList.remove("active");
};

// Database Spektrum Elektromagnetik
const spectrumData = {
  radio: {
    name: "Radio Waves",
    minFreq: 3,             // 3 Hz
    maxFreq: 300e9,         // 300 GHz
    minLabel: "3 Hz",
    maxLabel: "300 GHz",
    color: "#ef4444",
    fact: {
      id: "Digunakan untuk komunikasi jarak jauh, siaran TV, radio FM, hingga WiFi.",
      en: "Used for long-distance communication, TV broadcasting, FM radio, and even WiFi.",
    },
  },
  microwave: {
    name: "Microwave",
    minFreq: 300e6,         // 300 MHz
    maxFreq: 300e9,         // 300 GHz
    minLabel: "300 MHz",
    maxLabel: "300 GHz",
    color: "#f97316",
    fact: {
      id: "Biasa digunakan pada oven microwave, komunikasi satelit, dan radar.",
      en: "Commonly used in microwave ovens, satellite communication, and radar.",
    },
  },
  infrared: {
    name: "Infrared",
    minFreq: 300e9,         // 300 GHz
    maxFreq: 430e12,        // 430 THz
    minLabel: "300 GHz",
    maxLabel: "430 THz",
    color: "#eab308",
    fact: {
      id: "Dipancarkan oleh benda hangat, digunakan pada remote control dan kamera thermal.",
      en: "Emitted by warm objects, used in remote controls and thermal cameras.",
    },
  },
  visible: {
    name: "Visible Light",
    minFreq: 430e12,        // 430 THz
    maxFreq: 790e12,        // 790 THz
    minLabel: "430 THz",
    maxLabel: "790 THz",
    color: "#22c55e",
    fact: {
      id: "Satu-satunya spektrum gelombang yang dapat dilihat langsung oleh mata manusia.",
      en: "The only part of the spectrum that the human eye can see directly.",
    },
  },
  ultraviolet: {
    name: "Ultraviolet",
    minFreq: 790e12,        // 790 THz
    maxFreq: 30e15,         // 30 PHz
    minLabel: "790 THz",
    maxLabel: "30 PHz",
    color: "#3b82f6",
    fact: {
      id: "Berasal dari sinar matahari, membantu pembentukan Vitamin D tetapi bisa merusak kulit.",
      en: "Comes from sunlight, helps the body produce Vitamin D but can damage the skin.",
    },
  },
  xray: {
    name: "X-Ray",
    minFreq: 30e15,         // 30 PHz
    maxFreq: 30e18,         // 30 EHz
    minLabel: "30 PHz",
    maxLabel: "30 EHz",
    color: "#8b5cf6",
  fact: {
      id: "Dapat menembus jaringan lunak tubuh, sangat berguna dalam dunia medis (foto rontgen).",
      en: "Can pass through soft body tissue, very useful in medicine (X-ray imaging).",
    },
  },
  gamma: {
    name: "Gamma Ray",
    minFreq: 30e18,         // 30 EHz
    maxFreq: 300e18,        // 300 EHz (>30 EHz)
    minLabel: "30 EHz",
    maxLabel: "300 EHz ++",
    color: "#ec4899",
    fact: {
      id: "Gelombang paling bertenaga di alam semesta, dihasilkan oleh reaksi nuklir.",
      en: "The most energetic waves in the universe, produced by nuclear reactions.",
    },
  }
};

// Variabel Penanda Spektrum Terpilih Saat Ini
let currentSpectrumKey = "radio";

// Event Handler Pilih Spektrum
document.querySelectorAll('.spec-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.spec-btn').forEach(b => b.classList.remove('active'));
    
    const target = e.currentTarget;
    target.classList.add('active');
    
    const type = target.getAttribute('data-type');
    const data = spectrumData[type];
    
    if(data) {
      document.getElementById('info-name').innerText = data.name;
      document.getElementById('info-name').style.color = data.color;
      document.getElementById('info-freq').innerText = data.freqText;
      document.getElementById('info-lambda').innerText = data.lambdaText;
      document.getElementById('info-energy').innerText = data.energyText;
      document.getElementById('info-fact').innerText = data.fact;
    }
  });
});

// Event Navigasi Page 3
document.getElementById('btn-p3-back')?.addEventListener('click', () => navigateToPage(2));

// ==========================================
// SETUP SLIDER BUTTONS & KEYBOARD/HOLD CONTROLS
// ==========================================
function setupSliderStep(sliderId, btnMinusId, btnPlusId) {
  const slider = document.getElementById(sliderId);
  const btnMinus = document.getElementById(btnMinusId);
  const btnPlus = document.getElementById(btnPlusId);

  if (!slider) return;

  // Variabel untuk menyimpan timer tekan-tahan (Hold)
  let holdTimer = null;
  let repeatInterval = null;

  // Hitung besaran perubahan nilai setiap kali langkah
  function calculateStep() {
    const min = parseFloat(slider.min) || 0;

    if (sliderId === "slider-freq") {
      const currentVal = parseFloat(slider.value) || min;
      return getDynamicStep(currentVal);
    }
    return 0.1; // Step default untuk amplitudo
  }

  // Logika Tekan-Tahan (Hold-to-Repeat) untuk Tombol UI
  function startHold(actionFn) {
    stopHold();
    actionFn(); // Eksekusi 1x secara langsung saat pertama kali diklik

    // Tahan 300ms pertama sebelum mulai bertambah/berkurang secara kontinu setiap 60ms
    holdTimer = setTimeout(() => {
      repeatInterval = setInterval(actionFn, 60);
    }, 300);
  }

  function stopHold() {
    if (holdTimer) clearTimeout(holdTimer);
    if (repeatInterval) clearInterval(repeatInterval);
    holdTimer = null;
    repeatInterval = null;
  }

  // === 1. EVENT LISTENER TOMBOL UI (POINTER EVENTS) ===
  if (btnMinus) {
    btnMinus.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      startHold(doDecrement);
    });
    btnMinus.addEventListener("pointerup", stopHold);
    btnMinus.addEventListener("pointerleave", stopHold);
    btnMinus.addEventListener("pointercancel", stopHold);
  }

  if (btnPlus) {
    btnPlus.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      startHold(doIncrement);
    });
    btnPlus.addEventListener("pointerup", stopHold);
    btnPlus.addEventListener("pointerleave", stopHold);
    btnPlus.addEventListener("pointercancel", stopHold);
  }

  // === 2. EVENT LISTENER KEYBOARD (PANAH KANAN / KIRI) ===
  // Khusus untuk kontrol slider frekuensi menggunakan keyboard laptop

  function doIncrement() {
    const max = parseFloat(slider.max);

    if (sliderId === "slider-freq") {
      const currentHz = roundFreq(sliderToHz(slider.value));
      const newHz = Math.min(sliderToHz(max), currentHz + getDynamicStep(currentHz));
      slider.value = hzToSlider(newHz);
    } else {
      slider.value = Math.min(max, parseFloat(slider.value) + 0.1);
    }
    slider.dispatchEvent(new Event("input"));
  }

  function doDecrement() {
    const min = parseFloat(slider.min);

    if (sliderId === "slider-freq") {
      const currentHz = roundFreq(sliderToHz(slider.value));
      const newHz = Math.max(sliderToHz(min), currentHz - getDynamicStep(currentHz, true));
      slider.value = hzToSlider(newHz);
    } else {
      slider.value = Math.max(min, parseFloat(slider.value) - 0.1);
    }
    slider.dispatchEvent(new Event("input"));
  }
}

// Fungsi menentukan nilai step dalam Hz secara presisi
function getDynamicStep(valHz, isDecreasing = false) {
  // Jika sedang MENGURANGI dan posisi pas di angka persis satuan (misal 1 GHz = 1e9),
  // gunakan step satuan di bawahnya (misal 1 MHz = 1e6) agar turun jadi 999 MHz.
  let checkVal = isDecreasing ? valHz - 1 : valHz;

  if (checkVal < 1e3) return 1;          // Step 1 Hz (untuk < 1 kHz)
  if (checkVal < 1e6) return 1e3;        // Step 1 kHz (1.000 Hz)
  if (checkVal < 1e9) return 1e6;        // Step 1 MHz (1.000.000 Hz)
  if (checkVal < 1e12) return 1e9;       // Step 1 GHz (1.000.000.000 Hz)
  if (checkVal < 1e15) return 1e12;      // Step 1 THz
  if (checkVal < 1e18) return 1e15;      // Step 1 PHz
  return 1e18;                           // Step 1 EHz
}

// Slider menyimpan log10(frekuensi). Helper untuk konversi dua arah.
function sliderToHz(sliderVal) {
  return Math.pow(10, parseFloat(sliderVal));
}
function hzToSlider(hz) {
  return Math.log10(hz);
}

// Bulatkan frekuensi agar angkanya "rapi" (3 angka signifikan)
function roundFreq(hz) {
  const exp = Math.floor(Math.log10(hz));
  const factor = Math.pow(10, exp - 2);
  return Math.round(hz / factor) * factor;
}

function snapFrequency(val, min, max) {
  const step = getDynamicStep(val);
  const snapped = Math.round(val / step) * step;
  return Math.min(max, Math.max(min, snapped));
}

// Fungsi untuk memperbarui step slider secara dinamis saat digeser
function updateSliderStepDynamically() {
  const sliderFreq = document.getElementById("slider-freq");
  if (!sliderFreq) return;

  const currentVal = parseFloat(sliderFreq.value);
  // Ambil step dinamis berdasarkan satuan aktif
  const dynamicStep = getDynamicStep(currentVal);
  
  // Update properti step pada elemen slider
  sliderFreq.step = dynamicStep;
}

// Pasang listener saat slider digeser/diubah
const sliderFreq = document.getElementById("slider-freq");
if (sliderFreq) {
  sliderFreq.addEventListener("input", () => {
    updateWaveParameters(); // Fungsi kalkulasi fisika yang sudah ada
  });
}

// ==========================================
// ANIMASI GELOMBANG 2D (PAGE 3)
// ==========================================
(function () {
  const canvas = document.getElementById("spectrum-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const CYCLES_MIN = 1.5;   // jumlah gelombang saat slider paling kiri
  const CYCLES_MAX = 12;    // jumlah gelombang saat slider paling kanan
  const CROSS_TIME = 4;     // detik untuk gelombang melintasi lebar panel (kecepatan tetap)

  let offsetPx = 0;         // posisi gelombang (bergerak dengan kecepatan konstan)
  let lastTs = 0;

  function resizeCanvas() {
    const parent = canvas.parentElement;
    if (!parent) return;
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // ---------- PALET WARNA SESUAI TEMA ----------
  let P = {};
  function updatePalette() {
    const light = document.body.classList.contains("light-mode");
    P = light
      ? {
          grid: "rgba(0,0,0,0.07)",
          axis: "rgba(0,0,0,0.35)",
          arrow: "rgba(0,0,0,0.7)",
          rulerBg: "rgba(0,0,0,0.05)",
          rulerBorder: "rgba(0,0,0,0.25)",
          textActive: "#111827",
          textDim: "rgba(0,0,0,0.5)",
          marker: "#111827",
          glow: 4,
        }
      : {
          grid: "rgba(255,255,255,0.06)",
          axis: "rgba(255,255,255,0.35)",
          arrow: "rgba(255,255,255,0.7)",
          rulerBg: "rgba(255,255,255,0.05)",
          rulerBorder: "rgba(255,255,255,0.2)",
          textActive: "#fff",
          textDim: "rgba(255,255,255,0.45)",
          marker: "#fff",
          glow: 12,
        };
  }
  updatePalette();

    // ---------- GRID KOTAK TIPIS ----------
  function drawGrid(w, h, midY) {
    const size = 40;
    ctx.lineWidth = 1;
    ctx.strokeStyle = P.grid;
    ctx.beginPath();
    // Garis vertikal
    for (let x = 0; x <= w; x += size) {
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, h);
    }
    // Garis horizontal (sejajar sumbu tengah)
    for (let y = midY; y >= 0; y -= size) {
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(w, y + 0.5);
    }
    for (let y = midY + size; y <= h; y += size) {
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(w, y + 0.5);
    }
    ctx.stroke();
  }

  // ---------- PENGGARIS SATUAN FREKUENSI ----------
  const UNITS = ["Hz", "kHz", "MHz", "GHz", "THz", "PHz", "EHz"];
  const LOG_MIN = 0;    // 1 Hz
  const LOG_MAX = 21;   // 1000 EHz

  function drawFreqRuler(w, h, logF, color, data) {
    const padX = 24;
    const barH = 20;
    const barY = h - 66;
    const x0 = padX, x1 = w - padX;
    const toX = (l) => x0 + ((l - LOG_MIN) / (LOG_MAX - LOG_MIN)) * (x1 - x0);

    const activeIdx = Math.max(0, Math.min(UNITS.length - 1, Math.floor(logF / 3)));

    // Segmen tiap satuan
    ctx.font = "600 12px Poppins, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    UNITS.forEach((name, i) => {
      const sx = toX(i * 3);
      const ex = toX(i * 3 + 3);
      const isActive = i === activeIdx;

      ctx.fillStyle = isActive ? color + "55" : P.rulerBg;
      ctx.fillRect(sx, barY, ex - sx, barH);

      ctx.strokeStyle = isActive ? color : P.rulerBorder;
      ctx.lineWidth = isActive ? 1.5 : 1;
      ctx.strokeRect(sx + 0.5, barY + 0.5, ex - sx - 1, barH - 1);

      ctx.fillStyle = isActive ? P.textActive : P.textDim;
      ctx.fillText(name, (sx + ex) / 2, barY + barH / 2 + 1);
    });

    // Rentang jenis gelombang yang dipilih (garis tipis di bawah penggaris)
    if (data) {
      const rs = toX(Math.log10(data.minFreq));
      const re = toX(Math.log10(data.maxFreq));
      ctx.fillStyle = color;
      ctx.fillRect(rs, barY + barH + 4, Math.max(2, re - rs), 3);
    }

    // Penanda posisi saat ini
    const mx = toX(Math.max(LOG_MIN, Math.min(LOG_MAX, logF)));
    ctx.fillStyle = P.marker;
    ctx.beginPath();
    ctx.moveTo(mx, barY - 1);
    ctx.lineTo(mx - 6, barY - 10);
    ctx.lineTo(mx + 6, barY - 10);
    ctx.closePath();
    ctx.fill();

    // Teks frekuensi di atas penanda
    const label = formatFrequency(roundFreq(Math.pow(10, logF)));
    ctx.font = "600 12px Poppins, sans-serif";
    const tw = ctx.measureText(label).width;
    const tx = Math.max(x0 + tw / 2, Math.min(x1 - tw / 2, mx));
    ctx.fillStyle = P.marker;
    ctx.fillText(label, tx, barY - 20);
  }

  function draw(ts) {
    requestAnimationFrame(draw);

    // Lewati jika Page 3 tidak tampil
    if (canvas.offsetParent === null) { lastTs = ts; return; }

    // Batasi FPS sesuai pengaturan
    const interval = 1000 / (window.fpsLimit || 60);
    if (ts - lastTs < interval) return;
    const dt = (ts - lastTs) / 1000;
    lastTs = ts;

    const w = canvas.width, h = canvas.height;
    
    updatePalette();

    // --- Ambil nilai slider ---
    const sliderF = document.getElementById("slider-freq");
    const sliderA = document.getElementById("slider-amp");
    if (!sliderF || !sliderA) return;

    const fMin = parseFloat(sliderF.min), fMax = parseFloat(sliderF.max);
    const t = fMax > fMin ? (parseFloat(sliderF.value) - fMin) / (fMax - fMin) : 0.5;
    const ampVal = parseFloat(sliderA.value) || 0;

    // Jumlah gelombang (eksponensial agar terasa merata)
    const cycles = CYCLES_MIN * Math.pow(CYCLES_MAX / CYCLES_MIN, t);
    const wavelengthPx = w / cycles;
    const k = (2 * Math.PI) / wavelengthPx;

    // Kecepatan visual konstan (px per detik)
    const speed = w / CROSS_TIME;
    offsetPx += speed * (dt || 0);

    // Amplitudo: 0-10 m -> 0 sampai hampir setengah tinggi panel
    const plotH = h - 90;                 // area gelombang (sisanya untuk penggaris)
    const maxAmpPx = plotH / 2 - 20;
    const ampPx = (ampVal / 10) * maxAmpPx;

    const color = (typeof spectrumData !== "undefined" && spectrumData[currentSpectrumKey])
      ? spectrumData[currentSpectrumKey].color
      : "#ef4444";

    // --- Gambar ---
    ctx.clearRect(0, 0, w, h);
    const midY = plotH / 2;

    // Garis bantu tipis
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    drawGrid(w, h, midY);

    // Sumbu tengah
    ctx.strokeStyle = P.axis;
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(0, midY); ctx.lineTo(w, midY); ctx.stroke();

    // Gelombang (bergerak ke kanan)
    ctx.beginPath();
    for (let x = 0; x <= w; x += 2) {
      const y = midY - Math.sin(k * (x - offsetPx)) * ampPx;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 3.5;
    ctx.shadowColor = color;
    ctx.shadowBlur = P.glow;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Panah arah rambat
    ctx.beginPath();
    ctx.moveTo(w - 14, midY - 8);
    ctx.lineTo(w - 2, midY);
    ctx.lineTo(w - 14, midY + 8);
    ctx.fillStyle = P.arrow;
    ctx.fill();

    const logF = parseFloat(sliderF.value);
    const spec = (typeof spectrumData !== "undefined") ? spectrumData[currentSpectrumKey] : null;
    drawFreqRuler(w, h, logF, color, spec);
  }

  requestAnimationFrame(draw);
})();