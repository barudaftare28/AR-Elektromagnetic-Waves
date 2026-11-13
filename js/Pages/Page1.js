import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.module.js";

export const i18n = {
  id: {
    p1_title: "APA ITU <br><span class='highlight'>GELOMBANG ELEKTROMAGNETIK?</span>",
    p1_desc: "Gelombang yang dihasilkan oleh getaran medan listrik dan medan magnet yang dapat merambat tanpa medium.",
    p1_e_title: "Medan Listrik (E)", p1_e_desc: "Bergetar naik turun",
    p1_b_title: "Medan Magnet (B)", p1_b_desc: "Bergetar tegak lurus terhadap E",
    p1_med_title: "Tanpa Medium", p1_med_desc: "Dapat merambat di ruang hampa",
    p1_fact_title: "Konsep Gelombang Elektromagnetik",
    p1_fact_desc: "<strong>Gelombang elektromagnetik adalah gelombang yang tidak membutuhkan medium dalam perambatannya.</strong> &nbsp;&nbsp;&nbsp;&nbsp;Energi elektromagnetik merambat dalam gelombang melalui beberapa karakter seperti panjang gelombang, amplitudo, frekuensi, dan kecepatan. <br>&nbsp;&nbsp;&nbsp;&nbsp;Energi elektromagnetik dipancarkan atau dilepaskan pada level yang berbeda. Semakin tinggi level energi dalam suatu sumber energi, maka semakin rendah panjang gelombang dari energi yang dihasilkan akan tetapi semakin tinggi frekuensinya.",
    p1_ref: "Referensi Materi:",
    lbl_e: "Medan Listrik (E)", lbl_b: "Medan Magnet (B)", lbl_dir: "Arah Rambat",
    p1_form_title: "Hubungan Dasar",
    p1_form_desc: "Kecepatan (c), frekuensi (f), dan panjang gelombang (λ) saling berhubungan.",
    form_c: "kecepatan cahaya", form_f: "frekuensi", form_l: "panjang gelombang",
    btn_start: "MULAI EKSPLORASI",
  },
  en: {
    p1_title: "WHAT IS AN <br><span class='highlight'>ELECTROMAGNETIC WAVE?</span>",
    p1_desc: "A wave produced by the vibration of electric and magnetic fields that can travel without a medium.",
    p1_e_title: "Electric Field (E)", p1_e_desc: "Oscillates up and down",
    p1_b_title: "Magnetic Field (B)", p1_b_desc: "Oscillates perpendicular to E",
    p1_med_title: "No Medium Needed", p1_med_desc: "Can travel through a vacuum",
    p1_fact_title: "Electromagnetic Waves Concept",
    p1_fact_desc: "The theory of electromagnetism was developed by <strong>James Clerk Maxwell (1862 - 1864)</strong>, showing that changes in electric and magnetic fields propagate as waves.",
    p1_ref: "Reference:",
    lbl_e: "Electric Field (E)", lbl_b: "Magnetic Field (B)", lbl_dir: "Propagation",
    p1_form_title: "Basic Relationship",
    p1_form_desc: "Speed (c), frequency (f), and wavelength (λ) are interrelated.",
    form_c: "speed of light", form_f: "frequency", form_l: "wavelength",
    btn_start: "START EXPLORING",
  },
};

(function initWaveSimulation() {
    const canvas = document.getElementById('waveCanvas');
    const sliderF = document.getElementById('slider-f');
    const displayF = document.getElementById('display-f');
    const displayLambda = document.getElementById('display-lambda');

    // JIKA elemen canvas belum ada (misal karena halaman di-load dinamis), tunggu 100ms dan cek lagi
    if (!canvas || !sliderF) {
        setTimeout(initWaveSimulation, 100);
        return;
    }

    const ctx = canvas.getContext('2d');
    const C = 300000000; // Kecepatan cahaya konstan m/s
    let currentFreq = parseFloat(sliderF.value);
    let timeOffset = 0;
    
    // Variabel untuk Swipe/Drag
    let isDragging = false;
    let lastMouseX = 0;

    function updateValues() {
        let freqHz = currentFreq * 1000; 
        let lambda = C / freqHz;
        displayF.innerHTML = currentFreq.toFixed(2) + " kHz";
        displayLambda.innerHTML = lambda.toFixed(2) + " m";
    }

    sliderF.addEventListener('input', function() {
        currentFreq = parseFloat(this.value);
        updateValues();
    });

    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        lastMouseX = e.clientX;
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        let deltaX = e.clientX - lastMouseX;
        lastMouseX = e.clientX;
        currentFreq += deltaX * 2; 

        if(currentFreq < parseInt(sliderF.min)) currentFreq = parseInt(sliderF.min);
        if(currentFreq > parseInt(sliderF.max)) currentFreq = parseInt(sliderF.max);

        sliderF.value = currentFreq;
        updateValues();
    });

    // Mencegah penumpukan frame jika script terpanggil lebih dari sekali
    if (window.waveAnimFrame) cancelAnimationFrame(window.waveAnimFrame);

 
function drawSimulation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 1. CEK LIGHT MODE (Berdasarkan CSS yang kamu pakai)
    // Jika body memiliki class 'light-mode', berarti sedang mode terang.
    let isLight = document.body.classList.contains('light-mode') || 
                  document.documentElement.classList.contains('light-mode');
                  
    // Karena default CSS-mu adalah dark mode, maka isDark kebalikan dari isLight
    let isDark = !isLight;

    // 2. SET WARNA (Light mode = teks hitam, Dark mode = teks putih)
    let textColor = isDark ? "#ffffff" : "#000000"; 
    
    // Warna untuk Garis Sumbu (Tengah)
    let axisColor = isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)";
    
    // Warna untuk Grid Kotak-Kotak (Gunakan opacity rendah agar tidak menutupi gelombang)
    let gridColor = isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)";

    const midY = canvas.height / 2;
    const midX = canvas.width / 2;
        
        // 1. BESARKAN GELOMBANG (Amplitudo dinaikkan ke 135)
        let amplitude = 135; 

        // 2. GAMBAR GRID
        ctx.beginPath();
        ctx.globalAlpha = 1.0;
        ctx.strokeStyle = gridColor; 
        ctx.lineWidth = 1;
        for(let i=0; i<canvas.width; i+=40) { ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); }
        for(let i=0; i<canvas.height; i+=40) { ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); }
        ctx.stroke();

        // 3. GAMBAR GELOMBANG MERAH
        ctx.beginPath();
        ctx.strokeStyle = "#ff4757"; 
        ctx.lineWidth = 4;
        let visualFreq = (Math.PI * 2 * currentFreq) / 100000; 
        for(let x = 0; x <= canvas.width; x++) {
            let y = midY - amplitude * Math.sin((x - midX) * visualFreq - timeOffset);
            if(x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // 4. GARIS SUMBU UTAMA
        ctx.beginPath();
        ctx.strokeStyle = axisColor; 
        ctx.lineWidth = 1.5;
        
        ctx.moveTo(0, midY); ctx.lineTo(canvas.width, midY); 
        ctx.moveTo(midX, 0); ctx.lineTo(midX, canvas.height); 

        ctx.moveTo(midX - 5, midY - amplitude); ctx.lineTo(midX + 5, midY - amplitude);
        ctx.moveTo(midX - 5, midY + amplitude); ctx.lineTo(midX + 5, midY + amplitude);

        let stepX = 100;
        let meterPerStep = 300;
        
        for(let x = midX + stepX; x < canvas.width; x += stepX) {
            ctx.moveTo(x, midY - 5); ctx.lineTo(x, midY + 5);
        }
        for(let x = midX - stepX; x > 0; x -= stepX) {
            ctx.moveTo(x, midY - 5); ctx.lineTo(x, midY + 5);
        }
        ctx.stroke();

        // 5. TEKS KOORDINAT (Warna dipaksa Solid Putih)
        ctx.globalAlpha = 1.0; // Pastikan teks tidak ikut transparan
        ctx.fillStyle = textColor; 
        ctx.font = "bold 13px Arial"; 
        
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillText("1", midX - 10, midY - amplitude);
        ctx.fillText("-1", midX - 10, midY + amplitude);
        
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText("0 m", midX + 15, midY + 10); 

        let distance = meterPerStep;
        for(let x = midX + stepX; x < canvas.width; x += stepX) {
            ctx.fillText(distance + " m", x, midY + 10); 
            distance += meterPerStep;
        }
        
        distance = -meterPerStep;
        for(let x = midX - stepX; x > 0; x -= stepX) {
            ctx.fillText(distance + " m", x, midY + 10); 
            distance -= meterPerStep;
        }

        timeOffset += 0.05;
        window.waveAnimFrame = requestAnimationFrame(drawSimulation);
    }
    updateValues();
    drawSimulation();
})();