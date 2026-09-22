import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.module.js';

window.WaveApp = {
    lastFrameTime: 0,
    p1: {
        scene: null, camera: null, renderer: null, time: 0,
        geoE: null, geoB: null, axisMat: null,
        init: function() {
            const container = document.getElementById('wave-container-1');
            if (!container) return;
            
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 100);
            this.camera.position.set(6, 3, 7);
            this.camera.lookAt(0, 0, 0);

            this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            this.renderer.setSize(container.clientWidth, container.clientHeight);
            container.appendChild(this.renderer.domElement);

            this.axisMat = new THREE.LineBasicMaterial({ color: 0x94a3b8, opacity: 0.3, transparent: true });
            this.scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-6,0,0), new THREE.Vector3(6,0,0)]), this.axisMat));

            const matE = new THREE.LineBasicMaterial({ color: 0xFFA500 , linewidth: 3 });
            const matB = new THREE.LineBasicMaterial({ color: 0xc76ef7, linewidth: 3 });

            this.geoE = new THREE.BufferGeometry();
            this.geoB = new THREE.BufferGeometry();
            this.geoE.setAttribute('position', new THREE.BufferAttribute(new Float32Array(150 * 3), 3));
            this.geoB.setAttribute('position', new THREE.BufferAttribute(new Float32Array(150 * 3), 3));
            
            this.scene.add(new THREE.Line(this.geoE, matE));
            this.scene.add(new THREE.Line(this.geoB, matB));
            
            this.linesE = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0xFFA500, opacity: 0.3, transparent: true }));
            this.linesB = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0xc76ef7, opacity: 0.3, transparent: true }));
            this.linesE.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(150 * 6), 3));
            this.linesB.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(150 * 6), 3));
            this.scene.add(this.linesE);
            this.scene.add(this.linesB);

            window.addEventListener('themeChanged', () => {
                const isLight = document.body.classList.contains('light-mode');
                this.axisMat.color.setHex(isLight ? 0x64748b : 0x94a3b8);
                this.axisMat.opacity = isLight ? 0.3 : 0.3;
            });
        },
        update: function() {
            if(!this.scene) return;
            this.time += 0.04;
            const posE = this.geoE.attributes.position.array;
            const posB = this.geoB.attributes.position.array;
            const lE = this.linesE.geometry.attributes.position.array;
            const lB = this.linesB.geometry.attributes.position.array;
            
            let peakE = new THREE.Vector3(), peakB = new THREE.Vector3(), endZ = new THREE.Vector3(4.5, 0, 0);

            for(let i=0; i<150; i++) {
                const x = (i/150)*11 - 5.5; 
                const phase = x*1.5 - this.time;
                const y = Math.sin(phase) * 1.5;
                const z = Math.sin(phase) * 1.5;
                
                posE[i*3] = x; posE[i*3+1] = y; posE[i*3+2] = 0;
                posB[i*3] = x; posB[i*3+1] = 0; posB[i*3+2] = z;
                
                lE[i*6] = x; lE[i*6+1] = 0; lE[i*6+2] = 0;
                lE[i*6+3] = x; lE[i*6+4] = y; lE[i*6+5] = 0;
                
                lB[i*6] = x; lB[i*6+1] = 0; lB[i*6+2] = 0;
                lB[i*6+3] = x; lB[i*6+4] = 0; lB[i*6+5] = z;
                
                if(i === 70) peakE.set(x, y + 0.8, 0); 
                if(i === 35) peakB.set(x, 0, z + 0.8); 
            }
            this.geoE.attributes.position.needsUpdate = true;
            this.geoB.attributes.position.needsUpdate = true;
            this.linesE.geometry.attributes.position.needsUpdate = true;
            this.linesB.geometry.attributes.position.needsUpdate = true;
            this.renderer.render(this.scene, this.camera);
            
            this.updateLabels(peakE, peakB, endZ);
        },
        updateLabels: function(pE, pB, pZ) {
            const container = document.getElementById('wave-container-1');
            if(!container || container.offsetParent === null) return;
            const w = container.clientWidth, h = container.clientHeight;
            
            const to2D = (vec, el, isDir) => {
                vec.project(this.camera);
                let x = (vec.x * .5 + .5) * w;
                let y = (vec.y * -.5 + .5) * h;
                
                if(isDir) {
                    if (x > w - 120) x = w - 120; 
                    el.style.left = `${x}px`; 
                    el.style.top = `${y}px`;
                } else {
                    el.style.left = `${x}px`;
                    el.style.top = `${y}px`;
                }
                el.style.opacity = 1;
            };
            
            to2D(pE, document.getElementById('label-e'), false);
            to2D(pB, document.getElementById('label-b'), false);
            to2D(pZ, document.getElementById('label-dir'), true);
        }
    },

    p2: {
        canvas: null, ctx: null, time: 0, zoom: 1, isPaused: false, axisColor: "rgba(148, 163, 184, 0.3)",
        init: function() {
            this.canvas = document.getElementById('wave-canvas-2d');
            if(!this.canvas) return;
            this.ctx = this.canvas.getContext('2d');
            this.resize();
            this.setupControls();

            window.addEventListener('themeChanged', () => {
                const isLight = document.body.classList.contains('light-mode');
                this.axisColor = isLight ? "rgba(100, 116, 139, 0.3)" : "rgba(148, 163, 184, 0.3)";
            });
        },
        resize: function() {
            if(!this.canvas) return;
            const parent = this.canvas.parentElement;
            this.canvas.width = parent.clientWidth;
            this.canvas.height = parent.clientHeight;
        },
        setupControls: function() {
            const setZoom = (val, btnId) => {
                this.zoom = val;
                document.querySelectorAll('.zoom-presets .zoom-btn').forEach(b => b.classList.remove('active'));
                if(btnId) document.getElementById(btnId).classList.add('active');
            };
            document.getElementById('z-05').onclick = () => setZoom(0.5, 'z-05');
            document.getElementById('z-1').onclick = () => setZoom(1, 'z-1');
            document.getElementById('z-2').onclick = () => setZoom(2, 'z-2');
            
            document.getElementById('z-in').onclick = () => { if(this.zoom < 3) setZoom(this.zoom + 0.5, null); };
            document.getElementById('z-out').onclick = () => { if(this.zoom > 0.5) setZoom(this.zoom - 0.5, null); };
            
            const btnPause = document.getElementById('btn-pause');
            btnPause.onclick = () => {
                this.isPaused = !this.isPaused;
                const isEn = document.getElementById('btn-lang').innerText === 'EN';
                const playText = isEn ? "PLAY" : "PLAY";
                const pauseText = isEn ? "PAUSE" : "PAUSE";
                
                btnPause.innerHTML = this.isPaused ? `▶ ${playText}` : `⏸ ${pauseText}`;
                btnPause.style.borderColor = this.isPaused ? "var(--cyan)" : "var(--border-light)";
                btnPause.style.color = this.isPaused ? "var(--cyan)" : "var(--text-main)";
            };
            
            document.getElementById('btn-reset').onclick = () => {
                this.time = 0; setZoom(1, 'z-1'); this.isPaused = false;
                btnPause.innerHTML = "⏸ PAUSE";
                btnPause.style.borderColor = "var(--border-light)";
                btnPause.style.color = "var(--text-main)";
            };
        },
        update: function() {
            if(!this.canvas || this.canvas.offsetParent === null) return;
            if(!this.isPaused) this.time += 0.05;
            
            const w = this.canvas.width, h = this.canvas.height;
            const midY = h / 2;
            const amp = (h / 4) * this.zoom;
            const freq = 0.02 * this.zoom;
            
            const rtE = Math.sin(-this.time) * (2.0 * this.zoom); 
            const rtB = Math.sin(-this.time) * (2.0 * this.zoom);
            
            const elE = document.getElementById('rt-e');
            const elB = document.getElementById('rt-b');
            if(elE && elB) {
                const signE = rtE >= 0 ? '+' : '';
                const signB = rtB >= 0 ? '+' : '';
                elE.innerHTML = `${signE}${rtE.toFixed(2)} <span class="val-unit">V/m</span>`;
                elB.innerHTML = `${signB}${rtB.toFixed(2)} <span class="val-unit">T</span>`;
            }

            this.ctx.clearRect(0, 0, w, h);
            
            this.ctx.beginPath();
            this.ctx.moveTo(0, midY);
            this.ctx.lineTo(w, midY);
            this.ctx.strokeStyle = this.axisColor;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            this.ctx.lineWidth = 3;
            
            this.ctx.beginPath();
            for(let x=0; x<w; x+=2) {
                const phase = x*freq - this.time;
                const y = midY + Math.sin(phase) * amp;
                if(x===0) this.ctx.moveTo(x,y); else this.ctx.lineTo(x,y);
            }
            this.ctx.strokeStyle = "#7DA2A9"; 
            this.ctx.stroke();

            this.ctx.beginPath();
            for(let x=0; x<w; x+=2) {
                const phase = x*freq - this.time;
                const y = midY - Math.sin(phase) * (amp * 0.5); 
                if(x===0) this.ctx.moveTo(x,y); else this.ctx.lineTo(x,y);
            }
            this.ctx.strokeStyle = "#9B8EA2"; 
            this.ctx.stroke();
            
            this.ctx.beginPath();
            this.ctx.moveTo(w-12, midY-8);
            this.ctx.lineTo(w, midY);
            this.ctx.lineTo(w-12, midY+8);
            const isLight = document.body.classList.contains('light-mode');
            this.ctx.fillStyle = isLight ? "#64748b" : "#cbd5e1";
            this.ctx.fill();
        }
    },
    
    animate: function(timestamp) {
        requestAnimationFrame((ts) => this.animate(ts));
        
        const fpsInterval = 1000 / window.fpsLimit;
        const elapsed = timestamp - this.lastFrameTime;
        
        if (elapsed > fpsInterval) {
            this.lastFrameTime = timestamp - (elapsed % fpsInterval);
            this.p1.update();
            this.p2.update();
        }
    }
};

window.addEventListener('load', () => {
    window.WaveApp.p1.init();
    window.WaveApp.p2.init();
    requestAnimationFrame((ts) => window.WaveApp.animate(ts));
});

window.addEventListener('resize', () => {
    if(window.WaveApp.p1.renderer) {
        const c1 = document.getElementById('wave-container-1');
        if(c1) {
            window.WaveApp.p1.camera.aspect = c1.clientWidth / c1.clientHeight;
            window.WaveApp.p1.camera.updateProjectionMatrix();
            window.WaveApp.p1.renderer.setSize(c1.clientWidth, c1.clientHeight);
        }
    }
    window.WaveApp.p2.resize();
});
