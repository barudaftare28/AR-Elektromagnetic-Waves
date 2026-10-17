import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.module.js";

export const i18n = {
  id: {
    p1_title: "APA ITU <br><span class='highlight'>GELOMBANG ELEKTROMAGNETIK?</span>",
    p1_desc: "Gelombang yang dihasilkan oleh getaran medan listrik dan medan magnet yang dapat merambat tanpa medium.",
    p1_e_title: "Medan Listrik (E)", p1_e_desc: "Bergetar naik turun",
    p1_b_title: "Medan Magnet (B)", p1_b_desc: "Bergetar tegak lurus terhadap E",
    p1_med_title: "Tanpa Medium", p1_med_desc: "Dapat merambat di ruang hampa",
    p1_fact_title: "Tahukah Kamu?",
    p1_fact_desc: "Teori elektromagnetik dikembangkan oleh <strong>James Clerk Maxwell (1862 - 1864)</strong> yang menyatakan bahwa perubahan medan listrik dan magnet dapat merambat sebagai gelombang.",
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
    p1_fact_title: "Did You Know?",
    p1_fact_desc: "The theory of electromagnetism was developed by <strong>James Clerk Maxwell (1862 - 1864)</strong>, showing that changes in electric and magnetic fields propagate as waves.",
    p1_ref: "Reference:",
    lbl_e: "Electric Field (E)", lbl_b: "Magnetic Field (B)", lbl_dir: "Propagation",
    p1_form_title: "Basic Relationship",
    p1_form_desc: "Speed (c), frequency (f), and wavelength (λ) are interrelated.",
    form_c: "speed of light", form_f: "frequency", form_l: "wavelength",
    btn_start: "START EXPLORING",
  },
};

const N = 150; // jumlah titik gelombang
let container, scene, camera, renderer, axisMat;
let geoE, geoB, linesE, linesB;
let time = 0;
const el = {};

function makeLine(geo, color) {
  return new THREE.Line(geo, new THREE.LineBasicMaterial({ color }));
}
function makeSticks(color) {
  const s = new THREE.LineSegments(
    new THREE.BufferGeometry(),
    new THREE.LineBasicMaterial({ color, opacity: 0.4, transparent: true })
  );
  s.geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(N * 6), 3));
  return s;
}
function makePoints() {
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  return g;
}

export function init() {
  container = document.getElementById("wave-container-1");
  if (!container) return;
  el.e = document.getElementById("label-e");
  el.b = document.getElementById("label-b");
  el.dir = document.getElementById("label-dir");

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(6, 3, 7);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  axisMat = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true });
  scene.add(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-6, 0, 0), new THREE.Vector3(6, 0, 0)]),
    axisMat
  ));

  geoE = makePoints();
  geoB = makePoints();
  linesE = makeSticks(0x06b6d4);
  linesB = makeSticks(0x8b5cf6);
  scene.add(makeLine(geoE, 0x06b6d4), makeLine(geoB, 0x8b5cf6), linesE, linesB);

  window.addEventListener("themeChanged", applyTheme);
  window.addEventListener("resize", onResize);
  applyTheme();
}

function applyTheme() {
  const light = document.body.classList.contains("light-mode");
  axisMat.color.setHex(light ? 0x000000 : 0xffffff);
  axisMat.opacity = light ? 0.3 : 0.5;
}

function onResize() {
  if (!renderer || container.clientWidth === 0) return;
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

export function update(ts, dt) {
  if (!renderer || container.offsetParent === null) return;
  time += dt * 2.4; // kecepatan sama dengan versi lama (0.04/frame @60fps), tapi tidak tergantung FPS

  const pE = geoE.attributes.position.array, pB = geoB.attributes.position.array;
  const sE = linesE.geometry.attributes.position.array, sB = linesB.geometry.attributes.position.array;
  const peakE = new THREE.Vector3(), peakB = new THREE.Vector3();

  for (let i = 0; i < N; i++) {
    const x = (i / N) * 11 - 5.5;
    const v = Math.sin(x * 1.5 - time) * 1.5;

    pE.set([x, v, 0], i * 3);           // E bergetar pada sumbu Y
    pB.set([x, 0, v], i * 3);           // B bergetar pada sumbu Z (tegak lurus E)
    sE.set([x, 0, 0, x, v, 0], i * 6);
    sB.set([x, 0, 0, x, 0, v], i * 6);

    if (i === 70) peakE.set(x, v + 0.8, 0);
    if (i === 35) peakB.set(x, 0, v + 0.8);
  }
  [geoE, geoB, linesE.geometry, linesB.geometry].forEach((g) => (g.attributes.position.needsUpdate = true));
  renderer.render(scene, camera);

  placeLabel(peakE, el.e);
  placeLabel(peakB, el.b);
  placeLabel(new THREE.Vector3(4, 2, 0), el.dir, true);
}

function placeLabel(vec, label, clampRight) {
  const w = container.clientWidth, h = container.clientHeight;
  vec.project(camera);
  let x = (vec.x * 0.5 + 0.5) * w;
  const y = (vec.y * -0.5 + 0.5) * h;
  if (clampRight && x > w - 140) x = w - 140; // cegah label terpotong di tepi kanan
  label.style.left = `${x}px`;
  label.style.top = `${y}px`;
  label.style.opacity = 1;
}
