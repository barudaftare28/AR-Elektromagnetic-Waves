// Kamus umum (header, modal, pengaturan). Kamus tiap page ada di js/pages/pageN.js
// dan digabung lewat registerI18n(). Tambah bahasa baru: tambah blok baru + ubah toggleLang.
const dict = {
  id: {
    logo_sub: "Eksplorasi. Eksperimen. Pahami.",
    nav_intro: "Intro", nav_lab: "Wave Lab", nav_spec: "Spectrum", nav_challenge: "Challenge",
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

    // --- TEKS PAGE 1 ---
    p1_title: "APA ITU <br><span class='text-e'>GELOMBANG<br>ELEKTROMAGNETIK?</span>",
    p1_desc: "Gelombang yang dihasilkan oleh getaran medan listrik dan medan magnet yang dapat merambat tanpa medium.",
    p1_feat_e: "<strong class='text-e'>Medan Listrik (E)</strong><br><span>Bergetar naik turun</span>",
    p1_feat_b: "<strong class='text-b'>Medan Magnet (B)</strong><br><span>Tegak lurus thd E</span>",
    p1_feat_v: "<strong>Tanpa Medium</strong><br><span>Merambat di hampa</span>",
    p1_konsep_title: "💡 Konsep Gelombang Elektromagnetik",
    p1_konsep_p1: "<strong>Gelombang elektromagnetik adalah gelombang yang tidak membutuhkan medium dalam perambatannya.</strong> Energi elektromagnetik merambat dalam gelombang melalui beberapa karakter seperti panjang gelombang, amplitudo, frekuensi, dan kecepatan.",
    p1_konsep_p2: "Energi elektromagnetik dipancarkan atau dilepaskan pada level yang berbeda. Semakin tinggi level energi dalam suatu sumber energi, maka semakin rendah panjang gelombang dari energi yang dihasilkan akan tetapi semakin tinggi frekuensinya.",
    p1_sifat_title: "Sifat Gelombang",
    p1_sifat_1: "Merupakan gelombang transversal.",
    p1_sifat_2: "Dapat merambat dalam ruang hampa udara.",
    p1_sifat_3: "Mengalami pemantulan (refleksi), pembiasan (refraksi), interferensi, difraksi, dan polarisasi.",
    p1_sifat_4: "Arah perambatannya tidak dibelokkan oleh medan magnet maupun medan listrik.",
    p1_sifat_5: "Kecepatannya di ruang hampa adalah konstan (c = 3 × 10⁸ m/s).",
    p1_rumus_title: "Rumus Utama",
    p1_rumus_c: "Kecepatan (m/s)",
    p1_rumus_f: "Frekuensi (Hz)",
    p1_rumus_l: "P. Gelombang (m)",
    p1_param_l: "Panjang Gelombang (λ)",
    p1_param_c: "Kecepatan Cahaya (c)",
    p1_param_const: "(Konstan)",
    p1_aturan_title: "💡 ATURAN MAIN:",
    p1_aturan1: "Frekuensi <strong style='color:#d63031'>BESAR</strong> ➡️ Gelombang makin <strong style='color:#d63031'>PENDEK</strong> (rapat).",
    p1_aturan2: "Frekuensi <strong style='color:#d63031'>KECIL</strong> ➡️ Gelombang makin <strong style='color:#d63031'>PANJANG</strong> (renggang).",
    p1_app_title: "📡 Aplikasi Sehari-hari",
    p1_app_desc: "Gelombang <strong>frekuensi rendah</strong> (λ panjang) dipakai untuk sinyal <strong>Radio & TV</strong>. Sedangkan <strong>frekuensi tinggi</strong> (λ pendek) dipakai untuk <strong>Sinar-X</strong> (Rontgen medis).",
    p1_kamus_f: "<strong>Frekuensi (f):</strong> Jumlah gelombang per detik.",
    p1_kamus_l: "<strong>Panjang gelombang (λ):</strong> Jarak 1 lembah dan 1 gunung.",
    p1_kamus_c: "<strong>Kecepatan (c):</strong> Laju gelombang yang nilainya mutlak."
  },
  en: {
    logo_sub: "Explore. Experiment. Understand.",
    nav_intro: "Intro", nav_lab: "Wave Lab", nav_spec: "Spectrum", nav_challenge: "Challenge",
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

    // --- TEKS PAGE 1 ---
    p1_title: "WHAT ARE <br><span class='text-e'>ELECTROMAGNETIC<br>WAVES?</span>",
    p1_desc: "Waves generated by the vibration of electric and magnetic fields that can propagate without a medium.",
    p1_feat_e: "<strong class='text-e'>Electric Field (E)</strong><br><span>Vibrates up and down</span>",
    p1_feat_b: "<strong class='text-b'>Magnetic Field (B)</strong><br><span>Perpendicular to E</span>",
    p1_feat_v: "<strong>No Medium</strong><br><span>Propagates in a vacuum</span>",
    p1_konsep_title: "💡 Electromagnetic Wave Concept",
    p1_konsep_p1: "<strong>Electromagnetic waves are waves that do not require a medium to propagate.</strong> Electromagnetic energy propagates in waves through characteristics like wavelength, amplitude, frequency, and speed.",
    p1_konsep_p2: "Electromagnetic energy is emitted at different levels. The higher the energy level, the shorter the wavelength produced, but the higher the frequency.",
    p1_sifat_title: "Wave Properties",
    p1_sifat_1: "They are transverse waves.",
    p1_sifat_2: "Can propagate in a vacuum.",
    p1_sifat_3: "Experience reflection, refraction, interference, diffraction, and polarization.",
    p1_sifat_4: "Their direction is not deflected by magnetic or electric fields.",
    p1_sifat_5: "Their speed in a vacuum is constant (c = 3 × 10⁸ m/s).",
    p1_rumus_title: "Main Formula",
    p1_rumus_c: "Speed (m/s)",
    p1_rumus_f: "Frequency (Hz)",
    p1_rumus_l: "Wavelength (m)",
    p1_param_l: "Wavelength (λ)",
    p1_param_c: "Speed of Light (c)",
    p1_param_const: "(Constant)",
    p1_aturan_title: "💡 MAIN RULES:",
    p1_aturan1: "<strong style='color:#d63031'>HIGH</strong> Frequency ➡️ <strong style='color:#d63031'>SHORTER</strong> Wavelength.",
    p1_aturan2: "<strong style='color:#d63031'>LOW</strong> Frequency ➡️ <strong style='color:#d63031'>LONGER</strong> Wavelength.",
    p1_app_title: "📡 Daily Applications",
    p1_app_desc: "<strong>Low-frequency</strong> waves (long λ) are used for <strong>Radio & TV</strong> signals. Meanwhile, <strong>high-frequency</strong> waves (short λ) are used for <strong>X-Rays</strong> (Medical).",
    p1_kamus_f: "<strong>Frequency (f):</strong> Number of waves per second.",
    p1_kamus_l: "<strong>Wavelength (λ):</strong> Distance of 1 trough and 1 crest.",
    p1_kamus_c: "<strong>Speed (c):</strong> The absolute speed of the wave."
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
  
  const btnLang = document.getElementById("btn-lang");
  if(btnLang) btnLang.textContent = lang.toUpperCase();
  
  applyLang();
  window.dispatchEvent(new Event("langChanged")); // dipakai Page 3 & 4 untuk teks dinamis
}