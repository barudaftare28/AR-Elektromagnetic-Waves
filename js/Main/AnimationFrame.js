// Satu requestAnimationFrame untuk semua page.
// Setiap page boleh mengekspor update(ts, dt) — dt dalam detik.
let last = 0;

export function startLoop(getPages) {
  const tick = (ts) => {
    requestAnimationFrame(tick);
    const interval = 1000 / (window.fpsLimit || 60);
    const elapsed = ts - last;
    if (elapsed < interval) return;
    last = ts - (elapsed % interval);
    const dt = Math.min(elapsed, 100) / 1000; // batasi agar tidak "loncat" setelah tab tidak aktif
    for (const page of Object.values(getPages())) page.update?.(ts, dt);
  };
  requestAnimationFrame(tick);
}
