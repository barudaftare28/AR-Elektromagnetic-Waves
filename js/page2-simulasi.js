import * as THREE from 'three';

const container = document.getElementById('three-container');
const scene = new THREE.Scene();

const aspect = container.clientWidth / container.clientHeight;
const viewSize = 10;
const camera = new THREE.OrthographicCamera(-aspect * viewSize / 2, aspect * viewSize / 2, viewSize / 2, -viewSize / 2, 0.1, 100);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const pointsCount = 200;
const eFieldGeometry = new THREE.BufferGeometry();
const bFieldGeometry = new THREE.BufferGeometry();

const positionsE = new Float32Array(pointsCount * 3);
const positionsB = new Float32Array(pointsCount * 3);

for(let i = 0; i < pointsCount; i++) {
    const x = (i / pointsCount) * 20 - 10; 
    positionsE[i * 3] = x;
    positionsB[i * 3] = x;
}

eFieldGeometry.setAttribute('position', new THREE.BufferAttribute(positionsE, 3));
bFieldGeometry.setAttribute('position', new THREE.BufferAttribute(positionsB, 3));

const eMaterial = new THREE.LineBasicMaterial({ color: 0xf87171, linewidth: 2 });
const bMaterial = new THREE.LineBasicMaterial({ color: 0x60a5fa, linewidth: 2 });

const eLine = new THREE.Line(eFieldGeometry, eMaterial);
const bLine = new THREE.Line(bFieldGeometry, bMaterial);

eLine.position.y = 2; 
bLine.position.y = -2;
scene.add(eLine);
scene.add(bLine);

const freqSlider = document.getElementById('freqSlider');
const ampSlider = document.getElementById('ampSlider');
const speedSlider = document.getElementById('speedSlider');

const freqLabel = document.getElementById('freqLabel');
const ampLabel = document.getElementById('ampLabel');
const speedLabel = document.getElementById('speedLabel');

let time = 0;

function animate() {
    requestAnimationFrame(animate);

    const freq = parseFloat(freqSlider.value);
    const amp = parseFloat(ampSlider.value);
    const speed = parseFloat(speedSlider.value);

    freqLabel.innerText = freq.toFixed(1);
    ampLabel.innerText = amp.toFixed(1);
    speedLabel.innerText = speed.toFixed(1);

    time += 0.01 * speed;

    const posE = eLine.geometry.attributes.position.array;
    const posB = bLine.geometry.attributes.position.array;

    for (let i = 0; i < pointsCount; i++) {
        const x = posE[i * 3]; 
        const yValue = amp * Math.sin(x * freq * 0.2 - time * 5);
        posE[i * 3 + 1] = yValue; 
        posB[i * 3 + 1] = yValue; 
    }

    eLine.geometry.attributes.position.needsUpdate = true;
    bLine.geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    const aspect = container.clientWidth / container.clientHeight;
    camera.left = -aspect * viewSize / 2;
    camera.right = aspect * viewSize / 2;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});

animate();