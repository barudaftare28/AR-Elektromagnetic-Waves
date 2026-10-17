import { registerI18n, applyLang, toggleLang } from "./Bahasa.js";
import { startLoop } from "./AnimationFrame.js";

window.fpsLimit = 60;

// ---------- LOADER & NAVIGASI PAGE ----------
const loading = {};   // promise per page (mencegah dimuat dua kali)
const running = {};   // modul page yang sudah di-init (dipakai loop)

async function loadPage(n) {
  const [html, mod] = await Promise.all([
    fetch(`pages/page${n}.html`).then((r) => {
      if (!r.ok) throw new Error(`pages/page${n}.html tidak ditemukan`);
      return r.text();
    }),
    import(`../pages/page${n}.js`),
  ]);
  document.getElementById("app").insertAdjacentHTML("beforeend", html);
  registerI18n(mod.i18n, document.getElementById(`page-${n}`));
  return mod;
}

export async function navigateToPage(n) {
  const mod = await (loading[n] ??= loadPage(n));

  document.querySelectorAll(".page").forEach((p) => p.classList.toggle("active", p.id === `page-${n}`));
  document.querySelectorAll(".nav-links .nav-btn").forEach((b) => b.classList.toggle("active", +b.dataset.goto === n));

  // init setelah page tampil, supaya ukuran canvas/WebGL benar
  if (!running[n]) {
    running[n] = mod;
    mod.init?.();
  }
  window.dispatchEvent(new Event("resize"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
window.navigateToPage = navigateToPage; // dipakai tombol "Selesai" di quiz

// ---------- MODAL ----------
const openModal = (id) => document.getElementById(id)?.classList.add("active");
const closeModals = () => document.querySelectorAll(".modal-overlay.active").forEach((m) => m.classList.remove("active"));

// ---------- TEMA & FPS ----------
function toggleTheme() {
  const light = document.body.classList.toggle("light-mode");
  document.getElementById("btn-theme").textContent = light ? "☀️ Light" : "🌙 Dark";
  window.dispatchEvent(new Event("themeChanged"));
}
function toggleFPS() {
  window.fpsLimit = window.fpsLimit === 60 ? 30 : 60;
  document.getElementById("btn-fps").textContent = `${window.fpsLimit} FPS`;
}

// ---------- EVENT ----------
document.addEventListener("click", (e) => {
  const go = e.target.closest("[data-goto]");
  if (go) return navigateToPage(+go.dataset.goto);
  const open = e.target.closest("[data-modal-open]");
  if (open) return openModal(open.dataset.modalOpen);
  if (e.target.closest("[data-modal-close]") || e.target.classList.contains("modal-overlay")) closeModals();
});
document.addEventListener("keydown", (e) => e.key === "Escape" && closeModals());

document.getElementById("btn-lang").addEventListener("click", toggleLang);
document.getElementById("btn-theme").addEventListener("click", toggleTheme);
document.getElementById("btn-fps").addEventListener("click", toggleFPS);

// ---------- START ----------
applyLang();
startLoop(() => running);
navigateToPage(1).catch((err) => {
  document.getElementById("app").innerHTML =
    `<p style="padding:40px">⚠️ ${err.message}. Jalankan lewat server lokal (mis. Live Server di VS Code), bukan dengan membuka file langsung.</p>`;
  console.error(err);
});
