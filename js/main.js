const i18n = {
    id: {
        logo_sub: "Eksplorasi. Eksperimen. Pahami.",
        nav_intro: "Intro", nav_lab: "Wave Lab",
        btn_guide: "Panduan", btn_glossary: "Glosarium", btn_settings: "Pengaturan",
        modal_guide_title: "Panduan Penggunaan",
        modal_guide_p1: "Page 1 (Intro):", modal_guide_d1: "Pahami konsep dasar, arah rambat, dan komponen medan listrik & magnet secara 3D.",
        modal_guide_p2: "Page 2 (Wave Lab):", modal_guide_d2: "Observasi gelombang 2D. Gunakan fitur Pause, Zoom, dan perhatikan sensor simpangan real-time.",
        glo_freq_title: "Frekuensi (f):", glo_freq_desc: "Jumlah siklus gelombang penuh yang melewati suatu titik dalam satu detik (Hertz).",
        glo_wave_title: "Panjang Gelombang (λ):", glo_wave_desc: "Jarak spasial antara satu puncak ke puncak berikutnya (Meter).",
        glo_amp_title: "Amplitudo (A):", glo_amp_desc: "Besar simpangan maksimum medan listrik atau magnet dari titik setimbangnya.",
        set_lang: "Bahasa / Language", set_lang_desc: "Pilih bahasa antarmuka.",
        set_theme: "Tema Tampilan", set_theme_desc: "Pilih mode gelap atau terang.",
        set_perf: "Kualitas Animasi", set_perf_desc: "Gunakan 30 FPS untuk hemat baterai.",
        p1_title: "APA ITU <br><span class='highlight'>GELOMBANG ELEKTROMAGNETIK?</span>",
        p1_desc: "Gelombang yang terdiri dari medan listrik dan medan magnet yang berosilasi dan merambat melintasi ruang, membawa energi. Gelombang ini tidak memerlukan medium rambat.",
        p1_e_title: "Medan Listrik (E)", p1_e_desc: "Berosilasi secara sinusoidal",
        p1_b_title: "Medan Magnet (B)", p1_b_desc: "Tegak lurus terhadap E dan sefase",
        p1_med_title: "Merambat di Ruang Hampa", p1_med_desc: "Bergerak dengan kecepatan cahaya (c)",
        p1_fact_title: "Tahukah Kamu?", p1_fact_desc: "Pada tahun 1865, <strong>James Clerk Maxwell</strong> menerbitkan <em>'A Dynamical Theory of the Electromagnetic Field'</em>, yang membuktikan secara matematis bahwa cahaya adalah gelombang elektromagnetik.",
        lbl_e: "Medan Listrik (E)", lbl_b: "Medan Magnet (B)", lbl_dir: "Arah Rambat (c)",
        p1_form_title: "Hubungan Matematis", p1_form_desc: "Kecepatan rambat (c) merupakan hasil kali antara frekuensi (f) dan panjang gelombang (λ).",
        form_c: "kecepatan cahaya", form_f: "frekuensi osilasi", form_l: "panjang gelombang",
        btn_start: "MULAI EKSPLORASI",
        p2_sim: "(OBSERVASI)", p2_desc: "Amati grafik sinusoidal E dan B pada gelombang elektromagnetik.",
        btn_reset: "RESET", btn_pause: "PAUSE", btn_play: "PLAY",
        p2_observe: "Grafik Transversal 2D", p2_cant_change: "(Konstan)",
        p2_tt: "Proyeksi 2D dari medan listrik dan magnet yang berosilasi sefase.",
        btn_zin: "Zoom In", btn_zout: "Zoom Out",
        p2_short: "Penjelasan Fisika", p2_short_desc: "Medan listrik (E) dan medan magnet (B) berosilasi secara <strong>sefase</strong> (mencapai puncak dan nol bersamaan), saling tegak lurus, dan arah rambatnya tegak lurus terhadap kedua medan tersebut.",
        p2_sensor: "Sensor Real-time", p2_rt_e: "Simpangan Medan Listrik (E)", p2_rt_b: "Simpangan Medan Magnet (B)",
        p2_const: "Identitas Gelombang", p2_amp: "Amplitudo (E₀)",
        p2_why: "Mengapa tidak bisa diubah?", p2_why_desc: "Kecepatan gelombang (c) mutlak konstan di ruang hampa. Nilai yang bergerak pada sensor real-time di atas hanyalah simpangan sesaat dari E dan B yang berosilasi, bukan amplitudonya.",
        btn_back: "Kembali ke Intro", btn_next: "Lanjut ke Spectrum (AR)"
    },
    en: {
        logo_sub: "Explore. Experiment. Understand.",
        nav_intro: "Intro", nav_lab: "Wave Lab",
        btn_guide: "Guide", btn_glossary: "Glossary", btn_settings: "Settings",
        modal_guide_title: "User Guide",
        modal_guide_p1: "Page 1 (Intro):", modal_guide_d1: "Understand basic concepts, propagation direction, and components in 3D.",
        modal_guide_p2: "Page 2 (Wave Lab):", modal_guide_d2: "Observe 2D waves. Use Pause, Zoom, and real-time displacement sensors.",
        glo_freq_title: "Frequency (f):", glo_freq_desc: "Number of full wave cycles passing a point per second (Hertz).",
        glo_wave_title: "Wavelength (λ):", glo_wave_desc: "Spatial distance between consecutive peaks (Meter).",
        glo_amp_title: "Amplitude (A):", glo_amp_desc: "Maximum displacement of the electric or magnetic field from equilibrium.",
        set_lang: "Language / Bahasa", set_lang_desc: "Select interface language.",
        set_theme: "Appearance Theme", set_theme_desc: "Choose dark or light mode.",
        set_perf: "Animation Quality", set_perf_desc: "Use 30 FPS to save battery life.",
        p1_title: "WHAT IS AN <br><span class='highlight'>ELECTROMAGNETIC WAVE?</span>",
        p1_desc: "A wave consisting of oscillating electric and magnetic fields that propagate through space, carrying energy. It does not require a medium.",
        p1_e_title: "Electric Field (E)", p1_e_desc: "Oscillates sinusoidally",
        p1_b_title: "Magnetic Field (B)", p1_b_desc: "Perpendicular to E and in-phase",
        p1_med_title: "Propagates in Vacuum", p1_med_desc: "Travels at the speed of light (c)",
        p1_fact_title: "Did You Know?", p1_fact_desc: "In 1865, <strong>James Clerk Maxwell</strong> published <em>'A Dynamical Theory of the Electromagnetic Field'</em>, mathematically proving that light is an electromagnetic wave.",
        lbl_e: "Electric Field (E)", lbl_b: "Magnetic Field (B)", lbl_dir: "Propagation (c)",
        p1_form_title: "Mathematical Relationship", p1_form_desc: "Propagation speed (c) is the product of frequency (f) and wavelength (λ).",
        form_c: "speed of light", form_f: "oscillation frequency", form_l: "wavelength",
        btn_start: "START EXPLORING",
        p2_sim: "(OBSERVATION)", p2_desc: "Observe the sinusoidal graphs of E and B in an electromagnetic wave.",
        btn_reset: "RESET", btn_pause: "PAUSE", btn_play: "PLAY",
        p2_observe: "2D Transverse Graph", p2_cant_change: "(Constant)",
        p2_tt: "2D projection of in-phase oscillating electric and magnetic fields.",
        btn_zin: "Zoom In", btn_zout: "Zoom Out",
        p2_short: "Physics Explanation", p2_short_desc: "The electric field (E) and magnetic field (B) oscillate <strong>in-phase</strong> (reaching peaks and zeros simultaneously), are perpendicular to each other, and their propagation direction is perpendicular to both.",
        p2_sensor: "Real-time Sensor", p2_rt_e: "Electric Field Displacement (E)", p2_rt_b: "Magnetic Field Displacement (B)",
        p2_const: "Wave Identity", p2_amp: "Amplitude (E₀)",
        p2_why: "Why can't these be changed?", p2_why_desc: "Wave speed (c) is absolutely constant in a vacuum. The values moving on the real-time sensor above are just instantaneous displacements of the oscillating E and B, not their amplitude.",
        btn_back: "Back to Intro", btn_next: "Next to Spectrum (AR)"
    }
};

let currentLang = 'id';
let isDark = true;
window.fpsLimit = 60;

window.toggleLang = function() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    document.getElementById('btn-lang').innerText = currentLang.toUpperCase();
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(i18n[currentLang][key]) {
            el.innerHTML = i18n[currentLang][key];
        }
    });
}

window.toggleTheme = function() {
    isDark = !isDark;
    const btn = document.getElementById('btn-theme');
    if(isDark) {
        document.body.classList.remove('light-mode');
        btn.innerText = '🌙 Dark';
    } else {
        document.body.classList.add('light-mode');
        btn.innerText = '☀️ Light';
    }
    window.dispatchEvent(new Event('themeChanged'));
}

window.toggleFPS = function() {
    window.fpsLimit = window.fpsLimit === 60 ? 30 : 60;
    document.getElementById('btn-fps').innerText = window.fpsLimit + ' FPS';
}

window.navigateToPage = function(pageNum) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    const targetPage = document.getElementById(`page-${pageNum}`);
    if(targetPage) targetPage.classList.add('active');
    
    document.querySelectorAll('.nav-btn').forEach((btn, idx) => {
        if (!btn.classList.contains('disabled')) {
            btn.classList.toggle('active', (idx + 1) === pageNum);
        }
    });
    window.dispatchEvent(new Event('resize'));
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nav-page1').addEventListener('click', () => navigateToPage(1));
    document.getElementById('nav-page2').addEventListener('click', () => navigateToPage(2));
});

window.openModal = function(id) { document.getElementById(id).classList.add('active'); }
window.closeModal = function(id) { document.getElementById(id).classList.remove('active'); }
