import { initEngine } from './waveEngine.js';
import { setupPage1 } from './pages/page1Intro.js';
import { setupPage2 } from './pages/page2Lab.js';
import { setupPage3 } from './pages/page3Spectrum.js';
import { setupPage4 } from './pages/page4Challenge.js';
import { switchLanguage, currentLang } from './lang.js';

document.addEventListener('DOMContentLoaded', () => {
  initEngine();

  // Setup Tombol Ganti Bahasa
  const langBtn = document.getElementById('btn-lang');
  
  langBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'id' ? 'en' : 'id';
    switchLanguage(nextLang);
    langBtn.innerText = nextLang === 'id' ? '🌐 EN' : '🌐 ID';
  });

  // Cek jika pengguna pernah memilih bahasa sebelumnya
  const savedLang = localStorage.getItem('user_lang') || 'id';
  switchLanguage(savedLang);
  langBtn.innerText = savedLang === 'id' ? '🌐 EN' : '🌐 ID';
});

export function navigateTo(pageNumber) {
  document.querySelectorAll('.page-view').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

  const targetPage = document.getElementById(`page-${pageNumber}`);
  if (targetPage) targetPage.classList.add('active');

  const activeTab = document.querySelector(`.tab-btn[data-page="${pageNumber}"]`);
  if (activeTab) activeTab.classList.add('active');

  switch (pageNumber) {
    case 1: setupPage1(); break;
    case 2: setupPage2(); break;
    case 3: setupPage3(); break;
    case 4: setupPage4(); break;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initEngine();

  document.querySelectorAll('.tab-btn[data-page]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const page = parseInt(btn.getAttribute('data-page'));
      navigateTo(page);
    });
  });

  document.getElementById('btn-start-exp').addEventListener('click', () => navigateTo(2));
  document.getElementById('btn-back-intro').addEventListener('click', () => navigateTo(1));
  document.getElementById('btn-next-ar').addEventListener('click', () => navigateTo(3));
  document.getElementById('btn-back-lab').addEventListener('click', () => navigateTo(2));

  navigateTo(1);
});