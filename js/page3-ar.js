
  // Setup untuk Canvas 1 (Gelombang Atas)
  const canvasTop = document.getElementById('topWaveCanvas');
  const ctxTop = canvasTop.getContext('2d');
  
  // Setup untuk Canvas 2 (Animasi TV)
  const canvasTV = document.getElementById('tvCanvas');
  const ctxTV = canvasTV.getContext('2d');

  // Resize handler untuk memastikan canvas tidak gepeng
  function resizeCanvases() {
    canvasTop.width = canvasTop.parentElement.clientWidth;
    canvasTop.height = canvasTop.parentElement.clientHeight;
    
    canvasTV.width = canvasTV.parentElement.clientWidth;
    canvasTV.height = canvasTV.parentElement.clientHeight;
  }
  window.addEventListener('resize', resizeCanvases);
  resizeCanvases(); // Panggil sekali saat pertama load

  let time = 0;

  // ─── ANIMASI 1: GELOMBANG ATAS (Seperti sketch coretan) ───
  function drawTopWave() {
    ctxTop.clearRect(0, 0, canvasTop.width, canvasTop.height);
    
    const centerY = canvasTop.height / 2;
    const amplitude = canvasTop.height * 0.3;
    const frequency = 0.02;

    ctxTop.beginPath();
    ctxTop.moveTo(0, centerY);
    
    for (let x = 0; x < canvasTop.width; x++) {
      // Membuat gelombang gabungan agar terlihat sedikit acak tapi mulus
      const y = centerY + Math.sin(x * frequency - time * 3) * amplitude 
                        + Math.cos(x * frequency * 1.5 - time * 2) * (amplitude * 0.3);
      ctxTop.lineTo(x, y);
    }
    
    ctxTop.strokeStyle = '#64748b'; // Warna abu-abu pudar
    ctxTop.lineWidth = 2;
    ctxTop.stroke();
  }

  // ─── ANIMASI 2: TV MENYEBARKAN GELOMBANG ───
  function drawTVScene() {
    ctxTV.clearRect(0, 0, canvasTV.width, canvasTV.height);
    
    const w = canvasTV.width;
    const h = canvasTV.height;
    
    // Posisi TV di kiri bawah
    const tvX = w * 0.2;
    const tvY = h * 0.7;
    
    // 1. Gambar Gelombang/Sinyal yang menyebar dari TV (Garis Lengkung)
    ctxTV.lineWidth = 2;
    const maxRadius = w * 0.6; // Seberapa jauh sinyal menyebar
    
    for (let i = 0; i < 4; i++) {
      // Menghitung radius yang melebar seiring waktu
      let radius = ((time * 50) + (i * (maxRadius / 4))) % maxRadius;
      
      // Semakin jauh, semakin pudar (Opacity menurun)
      let opacity = 1 - (radius / maxRadius);
      ctxTV.strokeStyle = `rgba(6, 182, 212, ${opacity})`; 
      
      ctxTV.beginPath();
      // Menggambar busur (arc) yang mengarah ke kanan atas (sudut -90 hingga 0 derajat)
      ctxTV.arc(tvX, tvY, radius, -Math.PI/2, 0);
      ctxTV.stroke();
    }

    // 2. Gambar Objek TV (Stylized)
    ctxTV.fillStyle = '#0f172a';
    ctxTV.strokeStyle = '#3b82f6';
    ctxTV.lineWidth = 3;
    ctxTV.beginPath();
    ctxTV.roundRect(tvX - 40, tvY - 30, 80, 60, 8); // Body TV
    ctxTV.fill();
    ctxTV.stroke();
    
    // Layar TV
    ctxTV.fillStyle = 'rgba(59, 130, 246, 0.2)';
    ctxTV.fillRect(tvX - 30, tvY - 20, 60, 40);
    
    // Antena TV
    ctxTV.beginPath();
    ctxTV.moveTo(tvX - 10, tvY - 30);
    ctxTV.lineTo(tvX - 25, tvY - 50);
    ctxTV.moveTo(tvX + 10, tvY - 30);
    ctxTV.lineTo(tvX + 25, tvY - 50);
    ctxTV.strokeStyle = '#64748b';
    ctxTV.stroke();

    // 3. Gambar Penerima (Cloud/Antenna di kanan atas)
    const dishX = w * 0.8;
    const dishY = h * 0.3;
    
    ctxTV.fillStyle = '#0f172a';
    ctxTV.strokeStyle = '#e2e8f0';
    ctxTV.beginPath();
    ctxTV.arc(dishX, dishY, 20, 0, Math.PI, true); // Mangkok parabola
    ctxTV.lineTo(dishX, dishY + 20); // Tiang
    ctxTV.stroke();
    
    ctxTV.beginPath();
    ctxTV.arc(dishX, dishY, 3, 0, Math.PI * 2); // Titik tengah parabola
    ctxTV.fillStyle = '#e2e8f0';
    ctxTV.fill();
  }

  // Loop Master Animasi
  function animate() {
    drawTopWave();
    drawTVScene();
    
    time += 0.05;
    requestAnimationFrame(animate);
  }

  // Jalankan Animasi
  animate();

  // Logika sederhana untuk klik list gelombang
  const waveItems = document.querySelectorAll('.wave-item');
  waveItems.forEach(item => {
    item.addEventListener('click', () => {
      waveItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

