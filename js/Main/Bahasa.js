// Kamus umum (header, modal, pengaturan). Kamus tiap page ada di js/pages/pageN.js
// dan digabung lewat registerI18n(). Tambah bahasa baru: tambah blok baru + ubah toggleLang.
const dict = {
  id: {
    logo_sub: "Eksplorasi. Eksperimen. Pahami.",
    nav_intro: "Intro", nav_lab: "Wave Lab", nav_spec: "Spectrum (AR)", nav_challenge: "Challenge",
    btn_guide: "Panduan", btn_glossary: "Glosarium", btn_settings: "Pengaturan",
    modal_guide_title: "Panduan Penggunaan",
    modal_guide_p1: "Page 1 (Intro):", modal_guide_d1: "Pahami konsep dasar, arah rambat, dan komponen medan listrik & magnet.",
    modal_guide_p2: "Page 2 (Wave Lab):", modal_guide_d2: "Observasi gelombang 2D. Gunakan Pause, Zoom, dan perhatikan nilai sensor real-time E dan B.",
    modal_guide_p3: "Page 3 (Spectrum):", modal_guide_d3: "Pilih jenis gelombang lalu ubah frekuensi dan amplitudonya.",
    modal_guide_p4: "Page 4 (Challenge):", modal_guide_d4: "Jawab 5 soal untuk menguji pemahamanmu.",
    glo_freq_title: "Frekuensi (f):", glo_freq_desc: "Jumlah getaran dalam satu detik (Hertz).",
    glo_wave_title: "Panjang Gelombang (λ):", glo_wave_desc: "Jarak antara satu puncak ke puncak berikutnya (Meter).",
    glo_amp_title: "Amplitudo (A):", glo_amp_desc: "Simpangan terjauh dari titik setimbang.",
    set_lang: "Bahasa / Language", set_lang_desc: "Pilih bahasa antarmuka.",
    set_theme: "Tema Tampilan", set_theme_desc: "Pilih mode gelap atau terang.",
    set_perf: "Kualitas Animasi", set_perf_desc: "Gunakan 30 FPS untuk hemat baterai.",
  },
  en: {
    logo_sub: "Explore. Experiment. Understand.",
    nav_intro: "Intro", nav_lab: "Wave Lab", nav_spec: "Spectrum (AR)", nav_challenge: "Challenge",
    btn_guide: "Guide", btn_glossary: "Glossary", btn_settings: "Settings",
    modal_guide_title: "User Guide",
    modal_guide_p1: "Page 1 (Intro):", modal_guide_d1: "Understand basic concepts, propagation direction, and field components.",
    modal_guide_p2: "Page 2 (Wave Lab):", modal_guide_d2: "Observe 2D waves. Use Pause, Zoom, and the real-time E and B sensors.",
    modal_guide_p3: "Page 3 (Spectrum):", modal_guide_d3: "Choose a wave type, then change its frequency and amplitude.",
    modal_guide_p4: "Page 4 (Challenge):", modal_guide_d4: "Answer 5 questions to test your understanding.",
    glo_freq_title: "Frequency (f):", glo_freq_desc: "Number of oscillations per second (Hertz).",
    glo_wave_title: "Wavelength (λ):", glo_wave_desc: "Distance between consecutive peaks (Meter).",
    glo_amp_title: "Amplitude (A):", glo_amp_desc: "Maximum displacement from equilibrium.",
    set_lang: "Language / Bahasa", set_lang_desc: "Select interface language.",
    set_theme: "Appearance Theme", set_theme_desc: "Choose dark or light mode.",
    set_perf: "Animation Quality", set_perf_desc: "Use 30 FPS to save battery life.",
  },
};

let lang = "id";
export const getLang = () => lang;
export const t = (key) => dict[lang][key] ?? dict.id[key] ?? key;

export function applyLang(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[lang][el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });
}

// Gabungkan kamus milik sebuah page, lalu terapkan ke elemen page tsb.
export function registerI18n(extra, root) {
  if (extra) for (const l of Object.keys(dict)) Object.assign(dict[l], extra[l]);
  applyLang(root || document);
}

export function toggleLang() {
  lang = lang === "id" ? "en" : "id";
  document.documentElement.lang = lang;
  document.getElementById("btn-lang").textContent = lang.toUpperCase();
  applyLang();
  window.dispatchEvent(new Event("langChanged")); // dipakai Page 3 & 4 untuk teks dinamis
}
