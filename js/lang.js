export const translations = {
  id: {
    // Navigasi
    nav_intro: "1 Intro",
    nav_lab: "2 Wave Lab",
    nav_spectrum: "3 Spectrum (AR)",
    nav_challenge: "4 Challenge",
    
    // Page 1
    p1_badge: "HALAMAN 1 · INTRODUKSI",
    p1_title: "APA ITU GELOMBANG ELEKTROMAGNETIK?",
    p1_desc: "Gelombang yang dihasilkan oleh getaran medan listrik dan medan magnet yang bergetar saling tegak lurus.",
    p1_btn_start: "MULAI EKSPLORASI →",

    // Page 2
    p2_title: "WAVE LAB (SIMULASI 2D)",
    lbl_freq: "Frekuensi (f):",
    lbl_amp: "Amplitudo (A):"
  },
  en: {
    // Navigasi
    nav_intro: "1 Intro",
    nav_lab: "2 Wave Lab",
    nav_spectrum: "3 Spectrum (AR)",
    nav_challenge: "4 Challenge",

    // Page 1
    p1_badge: "PAGE 1 · INTRODUCTION",
    p1_title: "WHAT IS AN ELECTROMAGNETIC WAVE?",
    p1_desc: "Waves produced by perpendicular vibrations of electric and magnetic fields without requiring a physical medium.",
    p1_btn_start: "START EXPLORING →",

    // Page 2
    p2_title: "WAVE LAB (2D SIMULATION)",
    lbl_freq: "Frequency (f):",
    lbl_amp: "Amplitude (A):"
  }
};

export let currentLang = 'id';

// Fungsi otomatis untuk mengganti seluruh teks di HTML
export function switchLanguage(lang) {
  currentLang = lang;
  
  // Cari semua elemen yang punya atribut data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.innerText = translations[lang][key];
    }
  });

  // Simpan pilihan bahasa pengguna di browser
  localStorage.setItem('user_lang', lang);
}