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
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById(`page-${pageNum}`).classList.add("active");

  document.querySelectorAll(".nav-btn").forEach((btn, idx) => {
    if (!btn.classList.contains("disabled")) {
      btn.classList.toggle("active", idx + 1 === pageNum);
    }
  });
  window.dispatchEvent(new Event("resize"));
}

document
  .getElementById("nav-page1")
  .addEventListener("click", () => navigateToPage(1));
document
  .getElementById("btn-back")
  .addEventListener("click", () => navigateToPage(1));
document
  .getElementById("nav-page2")
  .addEventListener("click", () => navigateToPage(2));
document
  .getElementById("btn-mulai")
  .addEventListener("click", () => navigateToPage(2));

// 6. FUNGSI BUKA / TUTUP POP-UP (MODAL)
window.openModal = function (id) {
  // Tambahkan class 'active' agar CSS memunculkan efek fade-in pop-up
  document.getElementById(id).classList.add("active");
};
window.closeModal = function (id) {
  // Hapus class 'active' agar pop-up kembali menghilang
  document.getElementById(id).classList.remove("active");
};
