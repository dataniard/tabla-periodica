/**
 * TABLA PERIÓDICA INTERACTIVA - LÓGICA & EXPERIENCIA MODERNA
 */

const TEXTOS = {
  es: {
    title: "Tabla Periódica",
    subtitle: "Explorador interactivo de los 118 elementos químicos",
    search: "Buscar por nombre, símbolo, número o masa… (/)",
    clear: "Limpiar",
    randomBtn: "Aleatorio",
    randomTitle: "Descubrir un elemento al azar (Atajo: R)",
    colorModeLabel: "Modo de color",
    optFamilia: "Familia química",
    optBloque: "Bloque (s, p, d, f)",
    optEstado: "Estado de agregación",
    bloqueFTag: "Tierras raras y actínidos (Bloque f)",
    lanShort: "Lantánidos",
    actShort: "Actínidos",
    masa: "Masa atómica",
    estado: "Estado a 20°C",
    grupo: "Grupo / Periodo",
    configuracion: "Configuración",
    uso: "Usos y aplicaciones",
    curiosidad: "Curiosidad científica",
    bohrModel: "Modelo Atómico de Bohr",
    copyInfo: "Copiar ficha",
    copyOk: "¡Ficha copiada al portapapeles!",
    footer: "118 elementos químicos · Datos y visualización interactiva educativa",
    contador: (n, total) => `${n} / ${total} elementos`,
    familias: {
      "no-metal": "No metal",
      "gas-noble": "Gas noble",
      "metal-alcalino": "Metal alcalino",
      "alcalinoterreo": "Alcalinotérreo",
      "metaloide": "Metaloide",
      "halogeno": "Halógeno",
      "metal-transicion": "Metal de transición",
      "metal-postransicion": "Metal postransición",
      "lantanido": "Lantánido",
      "actinido": "Actínido"
    },
    estados: {
      solido: "Sólido",
      liquido: "Líquido",
      gas: "Gas",
      desconocido: "Desconocido"
    },
    bloques: {
      s: "Bloque s",
      p: "Bloque p",
      d: "Bloque d",
      f: "Bloque f"
    },
    game: "🎮 Quiz",
    restart: "Reiniciar",
    giveUp: "Rendirse",
    check: "Comprobar",
    hint: "💡 Pista",
    hintFamily: f => `Pista: Pertenece a la familia "${f}"`,
    guessPh: "Escribe símbolo o nombre…",
    guessTitle: "¿Qué elemento es?",
    correct: "¡Correcto! 🎉",
    wrong: "Incorrecto, prueba de nuevo ❌",
    win: "¡Enhorabuena! Has completado todos los elementos 🏆",
    revealed: "Tablero revelado",
    pista: e => `#${e.numero} · ${TEXTOS.es.familias[e.familia]} · Grupo ${e.grupo}, Periodo ${e.periodo} · ${e.masa} u`,
    lanTitulo: "Lantánidos (57–71)",
    lanRango: "15 elementos · Lantano (57) a Lutecio (71)",
    lanUso: "Imanes de neodimio, pantallas OLED, baterías de coches híbridos y lentes ópticas.",
    lanCur: "A pesar del nombre 'tierras raras', elementos como el cerio son más comunes en la corteza terrestre que el plomo.",
    lanWiki: "Lantánido",
    actTitulo: "Actínidos (89–103)",
    actRango: "15 elementos · Actinio (89) a Laurencio (103)",
    actUso: "Generación de energía nuclear, medicina oncológica, detectores de humo y exploración espacial.",
    actCur: "Todos son radiactivos y la mayoría después del uranio son elementos sintéticos creados en laboratorio.",
    actWiki: "Actínido",
    verElementos: "Explorar elementos en el Bloque f ↓"
  },
  en: {
    title: "Periodic Table",
    subtitle: "Interactive explorer of all 118 chemical elements",
    search: "Search by name, symbol, number or mass… (/)",
    clear: "Clear",
    randomBtn: "Random",
    randomTitle: "Discover a random element (Shortcut: R)",
    colorModeLabel: "Color mode",
    optFamilia: "Chemical family",
    optBloque: "Block (s, p, d, f)",
    optEstado: "State of matter",
    bloqueFTag: "Rare earths and actinides (f-Block)",
    lanShort: "Lanthanides",
    actShort: "Actinides",
    masa: "Atomic mass",
    estado: "State at 20°C",
    grupo: "Group / Period",
    configuracion: "Configuration",
    uso: "Uses & applications",
    curiosidad: "Scientific facts",
    bohrModel: "Bohr Atomic Model",
    copyInfo: "Copy card",
    copyOk: "Element data copied to clipboard!",
    footer: "118 chemical elements · Educational interactive visualization",
    contador: (n, total) => `${n} / ${total} elements`,
    familias: {
      "no-metal": "Nonmetal",
      "gas-noble": "Noble gas",
      "metal-alcalino": "Alkali metal",
      "alcalinoterreo": "Alkaline earth",
      "metaloide": "Metalloid",
      "halogeno": "Halogen",
      "metal-transicion": "Transition metal",
      "metal-postransicion": "Post-transition metal",
      "lantanido": "Lanthanide",
      "actinido": "Actinide"
    },
    estados: {
      solido: "Solid",
      liquido: "Liquid",
      gas: "Gas",
      desconocido: "Unknown"
    },
    bloques: {
      s: "s-Block",
      p: "p-Block",
      d: "d-Block",
      f: "f-Block"
    },
    game: "🎮 Quiz",
    restart: "Restart",
    giveUp: "Give up",
    check: "Check",
    hint: "💡 Hint",
    hintFamily: f => `Hint: Belongs to "${f}" family`,
    guessPh: "Type symbol or name…",
    guessTitle: "Which element is this?",
    correct: "Correct! 🎉",
    wrong: "Incorrect, try again ❌",
    win: "Congratulations! You completed all elements 🏆",
    revealed: "Board revealed",
    pista: e => `#${e.numero} · ${TEXTOS.en.familias[e.familia]} · Group ${e.grupo}, Period ${e.periodo} · ${e.masa} u`,
    lanTitulo: "Lanthanides (57–71)",
    lanRango: "15 elements · Lanthanum (57) to Lutetium (71)",
    lanUso: "Neodymium magnets, OLED screens, hybrid electric vehicle batteries and camera lenses.",
    lanCur: "Despite the name 'rare earths', elements like cerium are more abundant in Earth's crust than lead.",
    lanWiki: "Lanthanide",
    actTitulo: "Actinides (89–103)",
    actRango: "15 elements · Actinium (89) to Lawrencium (103)",
    actUso: "Nuclear power generation, targeted cancer therapy, smoke detectors and deep space probes.",
    actCur: "All are radioactive and most beyond uranium are synthetic elements synthesized in particle accelerators.",
    actWiki: "Actinide",
    verElementos: "Explore elements in f-Block ↓"
  }
};

const CAS_GRUPOS = [
  "IA", "IIA", "IIIB", "IVB", "VB", "VIB", "VIIB",
  "VIIIB", "VIIIB", "VIIIB", "IB", "IIB",
  "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA"
];

const SHELL_LETTERS = ["K", "L", "M", "N", "O", "P", "Q"];

// Estado global de la aplicación
let datos = [];
let lang = localStorage.getItem("tp-lang") || "es";
let theme = localStorage.getItem("tp-theme") || "dark";
let colorMode = localStorage.getItem("tp-color-mode") || "familia";
let soundEnabled = localStorage.getItem("tp-sound") === "true";
let gameMode = false;
let famSel = "";
let estSel = "";
let bloqueSel = "";
let acertados = new Set();
let intentosJuego = 0;
let rachaJuego = 0;
let elementoActual = null;
let toastTimeout = null;

const $ = id => document.getElementById(id);
const T = () => TEXTOS[lang];
const nombre = e => lang === "es" ? e.nombre_es : e.nombre_en;

/* ==========================================================================
   SINTETIZADOR DE SONIDO (Web Audio API nativo)
   ========================================================================== */
const AudioSynth = {
  ctx: null,
  getAudioContext() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return this.ctx;
  },
  click() {
    if (!soundEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  },
  correct() {
    if (!soundEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;
    const t = ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, t + i * 0.06);
      gain.gain.setValueAtTime(0.06, t + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.06 + 0.14);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t + i * 0.06);
      osc.stop(t + i * 0.06 + 0.14);
    });
  },
  wrong() {
    if (!soundEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(200, t);
    osc.frequency.linearRampToValueAtTime(130, t + 0.18);
    gain.gain.setValueAtTime(0.05, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.18);
  },
  dice() {
    if (!soundEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;
    const t = ctx.currentTime;
    [400, 550, 750].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t + i * 0.05);
      gain.gain.setValueAtTime(0.04, t + i * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.05 + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t + i * 0.05);
      osc.stop(t + i * 0.05 + 0.06);
    });
  }
};

/* ==========================================================================
   CONFETI CELEBRATORIO (Canvas nativo de alto rendimiento)
   ========================================================================== */
function dispararConfeti() {
  const canvas = $("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colores = ["#38bdf8", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6", "#ef4444"];
  const particulas = [];
  const cantidad = 50;

  for (let i = 0; i < cantidad; i++) {
    particulas.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.35 + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 12,
      size: Math.random() * 8 + 4,
      color: colores[Math.floor(Math.random() * colores.length)],
      rot: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      alpha: 1
    });
  }

  let animFrame;
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let vivas = 0;

    particulas.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // Gravedad
      p.vx *= 0.98;
      p.rot += p.vRot;
      p.alpha -= 0.016;

      if (p.alpha > 0) {
        vivas++;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
    });

    if (vivas > 0) {
      animFrame = requestAnimationFrame(loop);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  cancelAnimationFrame(animFrame);
  loop();
}

/* ==========================================================================
   CÁLCULO DE BLOQUE Y CAPAS ELECTRÓNICAS (MODELO DE BOHR)
   ========================================================================== */
function getBlock(e) {
  if (e.familia === "lantanido" || e.familia === "actinido") return "f";
  if (e.numero === 2) return "s";
  if (e.grupo <= 2) return "s";
  if (e.grupo >= 13) return "p";
  return "d";
}

const NOBLE_CORES = {
  "[He]": [2],
  "[Ne]": [2, 8],
  "[Ar]": [2, 8, 8],
  "[Kr]": [2, 8, 18, 8],
  "[Xe]": [2, 8, 18, 18, 8],
  "[Rn]": [2, 8, 18, 32, 18, 8]
};

const SUPER_MAP = {
  "¹": 1, "²": 2, "³": 3, "⁴": 4, "⁵": 5,
  "⁶": 6, "⁷": 7, "⁸": 8, "⁹": 9, "⁰": 0
};

function getShells(elem) {
  let shells = [0, 0, 0, 0, 0, 0, 0];
  let conf = elem.configuracion || "";

  for (let [k, v] of Object.entries(NOBLE_CORES)) {
    if (conf.startsWith(k)) {
      v.forEach((cnt, idx) => shells[idx] += cnt);
      conf = conf.slice(k.length).trim();
      break;
    }
  }

  const parts = conf.split(/\s+/).filter(Boolean);
  for (let p of parts) {
    const m = p.match(/^(\d+)[spdf]([¹²³⁴⁵⁶⁷⁸⁹⁰]+|\d+)$/);
    if (m) {
      const n = parseInt(m[1], 10) - 1;
      let count = 0;
      for (let ch of m[2]) {
        count = count * 10 + (SUPER_MAP[ch] !== undefined ? SUPER_MAP[ch] : parseInt(ch, 10));
      }
      if (n >= 0 && n < shells.length) {
        shells[n] += count;
      }
    }
  }

  while (shells.length && shells[shells.length - 1] === 0) {
    shells.pop();
  }
  return shells.length ? shells : [elem.numero];
}

function renderBohrModel(elem) {
  const container = $("bohrCanvasWrap");
  if (!container) return;

  const shells = getShells(elem);
  const totalElectrons = shells.reduce((a, b) => a + b, 0);
  $("bohrTotalElec").textContent = `${totalElectrons} e⁻`;

  // Desglose de capas (K: 2 · L: 8 · M: 18...)
  const breakdown = shells
    .map((cnt, i) => `${SHELL_LETTERS[i] || (i + 1)}: ${cnt}`)
    .join(" · ");
  $("bohrShellsBreakdown").textContent = breakdown;

  // Construcción del SVG
  const size = 180;
  const center = 90;
  const baseR = 24;
  const maxR = 82;
  const stepR = shells.length > 1 ? (maxR - baseR) / (shells.length - 1) : 0;

  let svgHtml = `<svg viewBox="0 0 ${size} ${size}" class="bohr-svg" aria-label="Modelo de Bohr de ${elem.simbolo}">
    <circle cx="${center}" cy="${center}" r="12" fill="var(--bohr-nucleus)" class="bohr-nucleus" />
    <text x="${center}" y="${center + 4}" text-anchor="middle" class="bohr-nucleus-text">${elem.simbolo}</text>`;

  shells.forEach((count, i) => {
    const r = Math.round(shells.length === 1 ? 48 : baseR + i * stepR);
    svgHtml += `<g class="bohr-orbit-group bohr-orbit-${i}">
      <circle cx="${center}" cy="${center}" r="${r}" class="bohr-orbit-ring" />`;

    for (let j = 0; j < count; j++) {
      const angle = (2 * Math.PI / count) * j;
      const x = (center + r * Math.cos(angle)).toFixed(1);
      const y = (center + r * Math.sin(angle)).toFixed(1);
      svgHtml += `<circle cx="${x}" cy="${y}" r="2.8" class="bohr-electron-dot" />`;
    }
    svgHtml += `</g>`;
  });

  svgHtml += `</svg>`;
  container.innerHTML = svgHtml;
}

/* ==========================================================================
   APLICACIÓN DE TEMAS, TEXTOS Y MODOS
   ========================================================================== */
function aplicarTema() {
  document.body.classList.toggle("light", theme === "light");
  const icono = $("iconoTema");
  if (icono) icono.textContent = theme === "light" ? "☀️" : "🌙";
  const btn = $("btnTema");
  if (btn) btn.title = theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro";
}

function aplicarColorMode() {
  document.body.classList.remove("color-mode-familia", "color-mode-bloque", "color-mode-estado");
  document.body.classList.add(`color-mode-${colorMode}`);
  const sel = $("colorMode");
  if (sel) sel.value = colorMode;
  construirLeyenda();
}

function aplicarTextos() {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.dataset.i18n;
    if (T()[k] && typeof T()[k] === "string") el.textContent = T()[k];
  });

  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const k = el.dataset.i18nPh;
    if (T()[k] && typeof T()[k] === "string") el.placeholder = T()[k];
  });

  $("buscador").placeholder = T().search;
  $("lang").value = lang;
  $("iconoSonido").textContent = soundEnabled ? "🔊" : "🔇";
  $("btnSonido").title = soundEnabled ? "Sonido: Activado" : "Sonido: Desactivado";

  construirFiltros();
  construirLeyenda();
  actualizarContador(datos.filter(visible).length);
  actualizarScore();

  if (elementoActual && gameMode) {
    $("juegoPista").textContent = T().pista(elementoActual);
  }
}

/* ==========================================================================
   CONSTRUCCIÓN DE FILTROS & LEYENDA
   ========================================================================== */
function construirFiltros() {
  const iconMap = {
    solido: "🧊",
    liquido: "💧",
    gas: "💨",
    desconocido: "❓"
  };

  $("filtrosEstado").innerHTML = Object.entries(T().estados).map(([k, v]) => {
    const n = datos.filter(e => e.estado === k).length;
    const act = estSel === k ? " activo" : "";
    const icon = iconMap[k] || "⚛️";
    return `<button class="chip estado-${k}${act}" data-est="${k}" title="Filtrar por estado ${v}">
      <span class="chip-dot" style="background: var(--estado-${k})"></span>
      <span>${icon} ${v}</span>
      <span class="chip-count">(${n})</span>
    </button>`;
  }).join("");

  document.querySelectorAll("#filtrosEstado .chip").forEach(ch => {
    ch.onclick = () => {
      AudioSynth.click();
      estSel = estSel === ch.dataset.est ? "" : ch.dataset.est;
      construirFiltros();
      filtrar();
    };
  });
}

function construirLeyenda() {
  const leyenda = $("leyenda");
  if (!leyenda) return;

  if (colorMode === "familia") {
    leyenda.innerHTML = Object.entries(T().familias).map(([k, v]) => {
      const n = datos.filter(e => e.familia === k).length;
      const act = famSel === k ? " activo" : "";
      return `<button class="chip fam-${k}${act}" data-fam="${k}">
        <span class="chip-dot" style="background: var(--fam-${k})"></span>
        <span>${v}</span>
        <span class="chip-count">(${n})</span>
      </button>`;
    }).join("");

    document.querySelectorAll("#leyenda .chip").forEach(ch => {
      ch.onclick = () => {
        AudioSynth.click();
        famSel = famSel === ch.dataset.fam ? "" : ch.dataset.fam;
        construirLeyenda();
        filtrar();
      };
      // Previsualización al pasar el ratón (hover)
      ch.onmouseenter = () => resaltarFamilia(ch.dataset.fam);
      ch.onmouseleave = () => quitarResalte();
    });
  } else if (colorMode === "bloque") {
    leyenda.innerHTML = Object.entries(T().bloques).map(([k, v]) => {
      const n = datos.filter(e => e.bloque === k).length;
      const act = bloqueSel === k ? " activo" : "";
      return `<button class="chip bloque-${k}${act}" data-bloque="${k}">
        <span class="chip-dot" style="background: var(--bloque-${k})"></span>
        <span>${v}</span>
        <span class="chip-count">(${n})</span>
      </button>`;
    }).join("");

    document.querySelectorAll("#leyenda .chip").forEach(ch => {
      ch.onclick = () => {
        AudioSynth.click();
        bloqueSel = bloqueSel === ch.dataset.bloque ? "" : ch.dataset.bloque;
        construirLeyenda();
        filtrar();
      };
      ch.onmouseenter = () => resaltarBloque(ch.dataset.bloque);
      ch.onmouseleave = () => quitarResalte();
    });
  } else if (colorMode === "estado") {
    const iconMap = { solido: "🧊", liquido: "💧", gas: "💨", desconocido: "❓" };
    leyenda.innerHTML = Object.entries(T().estados).map(([k, v]) => {
      const n = datos.filter(e => e.estado === k).length;
      const act = estSel === k ? " activo" : "";
      const icon = iconMap[k] || "";
      return `<button class="chip estado-${k}${act}" data-est="${k}">
        <span class="chip-dot" style="background: var(--estado-${k})"></span>
        <span>${icon} ${v}</span>
        <span class="chip-count">(${n})</span>
      </button>`;
    }).join("");

    document.querySelectorAll("#leyenda .chip").forEach(ch => {
      ch.onclick = () => {
        AudioSynth.click();
        estSel = estSel === ch.dataset.est ? "" : ch.dataset.est;
        construirFiltros();
        construirLeyenda();
        filtrar();
      };
      ch.onmouseenter = () => resaltarEstado(ch.dataset.est);
      ch.onmouseleave = () => quitarResalte();
    });
  }
}

function resaltarFamilia(fam) {
  if (famSel || gameMode) return;
  document.querySelectorAll(".elemento[data-numero]").forEach(el => {
    el.classList.toggle("atenuado", el.dataset.familia !== fam);
  });
}

function resaltarBloque(bloque) {
  if (bloqueSel || gameMode) return;
  document.querySelectorAll(".elemento[data-numero]").forEach(el => {
    el.classList.toggle("atenuado", el.dataset.bloque !== bloque);
  });
}

function resaltarEstado(estado) {
  if (estSel || gameMode) return;
  document.querySelectorAll(".elemento[data-numero]").forEach(el => {
    el.classList.toggle("atenuado", el.dataset.estado !== estado);
  });
}

function quitarResalte() {
  if (famSel || bloqueSel || estSel || gameMode) {
    filtrar();
    return;
  }
  document.querySelectorAll(".elemento").forEach(el => el.classList.remove("atenuado"));
}

/* ==========================================================================
   RENDERIZADO DE LA TABLA Y SUS CASILLAS
   ========================================================================== */
function tarjeta(e) {
  const d = document.createElement("button");
  const adivinado = acertados.has(e.numero);

  d.className = `elemento fam-${e.familia} bloque-${e.bloque} estado-${e.estado}` +
    (gameMode && !adivinado ? " juego-oculto" : "") +
    (gameMode && adivinado ? " acertada" : "");

  d.setAttribute("role", "gridcell");
  d.tabIndex = 0;
  d.dataset.numero = e.numero;
  d.dataset.grupo = e.grupo;
  d.dataset.periodo = e.periodo;
  d.dataset.bloque = e.bloque;
  d.dataset.familia = e.familia;
  d.dataset.estado = e.estado;
  d.setAttribute("aria-label", `${nombre(e)}, ${e.simbolo}, #${e.numero}`);

  if (gameMode && !adivinado) {
    d.innerHTML = `
      <div class="elem-top"><span class="num">${e.numero}</span></div>
      <div class="sim">?</div>
      <div class="nom">···</div>
    `;
  } else {
    d.innerHTML = `
      <div class="elem-top">
        <span class="num">${e.numero}</span>
        <span class="masa">${e.masa}</span>
      </div>
      <div class="sim">${e.simbolo}</div>
      <div class="nom">${nombre(e)}</div>
      <span class="dot-estado" style="background: var(--estado-${e.estado})"></span>
    `;
  }

  // Crosshair / Resalte de eje de fila y columna
  d.onmouseenter = () => {
    const colH = document.querySelector(`.header-grupo[data-grupo="${e.grupo}"]`);
    const rowH = document.querySelector(`.header-periodo[data-periodo="${e.periodo}"]`);
    if (colH) colH.classList.add("axis-highlight");
    if (rowH) rowH.classList.add("axis-highlight");
  };

  d.onmouseleave = () => {
    document.querySelectorAll(".axis-highlight").forEach(x => x.classList.remove("axis-highlight"));
  };

  d.onclick = () => {
    AudioSynth.click();
    mostrar(e);
  };

  d.onkeydown = ev => {
    if (ev.key === "Enter" || ev.key === " ") {
      ev.preventDefault();
      AudioSynth.click();
      mostrar(e);
    }
  };

  return d;
}

function render() {
  const tabla = $("tabla"), lan = $("lantanidos"), act = $("actinidos");
  tabla.innerHTML = "";
  lan.innerHTML = "";
  act.innerHTML = "";

  // Esquina superior izquierda
  const corner = document.createElement("div");
  corner.className = "tabla-corner";
  corner.innerHTML = `<span>G→</span><span>P↓</span>`;
  tabla.appendChild(corner);

  // Cabeceras de Grupos (1 al 18) en la fila 1
  for (let g = 1; g <= 18; g++) {
    const gh = document.createElement("div");
    gh.className = "header-grupo";
    gh.dataset.grupo = g;
    gh.style.gridColumn = g + 1;
    gh.style.gridRow = 1;
    gh.innerHTML = `<span class="g-num">${g}</span><span class="g-cas">${CAS_GRUPOS[g - 1]}</span>`;
    tabla.appendChild(gh);
  }

  // Cabeceras de Periodos (1 al 7) en la columna 1
  for (let p = 1; p <= 7; p++) {
    const ph = document.createElement("div");
    ph.className = "header-periodo";
    ph.dataset.periodo = p;
    ph.style.gridColumn = 1;
    ph.style.gridRow = p + 1;
    ph.textContent = p;
    tabla.appendChild(ph);
  }

  // Elementos de la tabla
  datos.forEach(e => {
    e.bloque = getBlock(e);
    const esF = e.familia === "lantanido" || e.familia === "actinido";
    const t = tarjeta(e);

    if (!esF) {
      t.style.gridColumn = e.grupo + 1;
      t.style.gridRow = e.periodo + 1;
      tabla.appendChild(t);
    } else {
      (e.familia === "lantanido" ? lan : act).appendChild(t);
    }
  });

  // Marcadores de hueco La-Lu y Ac-Lr en la tabla principal
  const hueco1 = document.createElement("button");
  hueco1.className = "elemento elem-placeholder fam-lantanido bloque-f-elem" + (gameMode ? " juego-oculto" : "");
  hueco1.style.gridColumn = 3 + 1; // Grupo 3
  hueco1.style.gridRow = 6 + 1;    // Periodo 6
  hueco1.innerHTML = gameMode
    ? `<div class="elem-top"><span class="num">57–71</span></div><div class="sim">?</div><div class="nom">···</div>`
    : `<div class="elem-top"><span class="num">57–71</span></div><div class="sim">La–Lu</div><div class="nom">Lantánidos</div>`;
  hueco1.onclick = () => {
    AudioSynth.click();
    gameMode
      ? document.querySelector(".bloque-f").scrollIntoView({ behavior: "smooth" })
      : mostrarGrupo("lan");
  };
  hueco1.dataset.fam = "lantanido";
  tabla.appendChild(hueco1);

  const hueco2 = document.createElement("button");
  hueco2.className = "elemento elem-placeholder fam-actinido bloque-f-elem" + (gameMode ? " juego-oculto" : "");
  hueco2.style.gridColumn = 3 + 1; // Grupo 3
  hueco2.style.gridRow = 7 + 1;    // Periodo 7
  hueco2.innerHTML = gameMode
    ? `<div class="elem-top"><span class="num">89–103</span></div><div class="sim">?</div><div class="nom">···</div>`
    : `<div class="elem-top"><span class="num">89–103</span></div><div class="sim">Ac–Lr</div><div class="nom">Actínidos</div>`;
  hueco2.onclick = () => {
    AudioSynth.click();
    gameMode
      ? document.querySelector(".bloque-f").scrollIntoView({ behavior: "smooth" })
      : mostrarGrupo("act");
  };
  hueco2.dataset.fam = "actinido";
  tabla.appendChild(hueco2);

  filtrar();
}

/* ==========================================================================
   FILTRADO Y BÚSQUEDA
   ========================================================================== */
function visible(e) {
  const q = $("buscador").value.trim().toLowerCase();
  const c = famSel;
  const s = estSel;
  const b = bloqueSel;

  if (c && e.familia !== c) return false;
  if (s && e.estado !== s) return false;
  if (b && e.bloque !== b) return false;

  if (q) {
    const qNorm = normaliza(q);
    const nEs = normaliza(e.nombre_es);
    const nEn = normaliza(e.nombre_en);
    const sim = normaliza(e.simbolo);
    const num = String(e.numero);
    const masa = String(e.masa);

    if (!nEs.includes(qNorm) && !nEn.includes(qNorm) && sim !== qNorm && num !== qNorm && !masa.startsWith(qNorm)) {
      return false;
    }
  }
  return true;
}

function filtrar() {
  if (gameMode) {
    document.querySelectorAll(".elemento").forEach(el => el.classList.remove("atenuado"));
    return;
  }

  let n = 0;
  document.querySelectorAll(".elemento[data-numero]").forEach(el => {
    const e = datos.find(x => x.numero === +el.dataset.numero);
    const ok = e && visible(e);
    el.classList.toggle("atenuado", !ok);
    if (ok) n++;
  });

  document.querySelectorAll(".elem-placeholder").forEach(h => {
    const ok = datos.some(e => e.familia === h.dataset.fam && visible(e));
    h.classList.toggle("atenuado", !ok);
  });

  actualizarContador(n);
}

function actualizarContador(n) {
  $("contador").textContent = T().contador(n, datos.length || 118);
}

function normaliza(s) {
  return (s || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/* ==========================================================================
   MODAL DE DETALLE DEL ELEMENTO
   ========================================================================== */
function mostrar(e) {
  if (gameMode && !acertados.has(e.numero)) {
    mostrarPregunta(e);
    return;
  }

  elementoActual = e;
  $("detalleLista").classList.remove("oculto");
  $("juegoZona").classList.add("oculto");
  $("grupoZona").classList.add("oculto");
  $("modalFooter").classList.remove("oculto");

  document.querySelectorAll(".elemento.seleccionado").forEach(x => x.classList.remove("seleccionado"));
  document.querySelector(`.elemento[data-numero="${e.numero}"]`)?.classList.add("seleccionado");

  // Badges y navegación superior
  $("dCategoriaTag").textContent = T().familias[e.familia] || e.familia;
  $("dBloqueTag").textContent = T().bloques[e.bloque] || `Bloque ${e.bloque}`;
  $("dNavIndex").textContent = `#${e.numero} / 118`;

  // Hero Card de Símbolo
  $("dNumero").textContent = `#${e.numero}`;
  $("dMasaPill").textContent = `${e.masa} u`;
  $("dSimbolo").textContent = e.simbolo;
  $("dNombre").textContent = nombre(e);
  $("dNombreEn").textContent = lang === "es" ? e.nombre_en : e.nombre_es;

  // Visualizador del Modelo Atómico de Bohr
  renderBohrModel(e);

  // Grilla de Propiedades Físico-Químicas
  $("dMasa").textContent = `${e.masa} u`;
  $("dEstado").textContent = T().estados[e.estado] || e.estado;
  $("dGrupo").textContent = lang === "es"
    ? `Grupo ${e.grupo}, Periodo ${e.periodo}`
    : `Group ${e.grupo}, Period ${e.periodo}`;
  $("dConfig").textContent = e.configuracion || "—";
  $("dUso").textContent = lang === "es" ? e.uso_es : e.uso_en;
  $("dCur").textContent = lang === "es" ? e.curiosidad_es : e.curiosidad_en;

  // Enlace a Wikipedia
  const wiki = $("dWiki");
  if (wiki) {
    const wname = lang === "es" ? e.nombre_es : e.nombre_en;
    const base = lang === "es" ? "https://es.wikipedia.org/wiki/" : "https://en.wikipedia.org/wiki/";
    wiki.href = base + encodeURIComponent(wname);
  }

  $("modal").classList.remove("oculto");
}

function mostrarGrupo(cual) {
  const lan = cual === "lan";
  elementoActual = null;
  document.querySelectorAll(".elemento.seleccionado").forEach(x => x.classList.remove("seleccionado"));

  $("detalleLista").classList.remove("oculto");
  $("juegoZona").classList.add("oculto");
  $("grupoZona").classList.remove("oculto");
  $("modalFooter").classList.add("oculto");

  $("dCategoriaTag").textContent = lan ? T().familias["lantanido"] : T().familias["actinido"];
  $("dBloqueTag").textContent = T().bloques["f"];
  $("dNavIndex").textContent = lan ? "57–71" : "89–103";

  $("dNumero").textContent = lan ? "57–71" : "89–103";
  $("dMasaPill").textContent = "15 elementos";
  $("dSimbolo").textContent = lan ? "La–Lu" : "Ac–Lr";
  $("dNombre").textContent = lan ? T().lanTitulo : T().actTitulo;
  $("dNombreEn").textContent = lan ? T().lanRango : T().actRango;

  // Placeholder Bohr para grupo completo
  $("bohrCanvasWrap").innerHTML = `<div style="font-size:2.8rem;text-align:center;">🧪</div>`;
  $("bohrTotalElec").textContent = "Bloque f";
  $("bohrShellsBreakdown").textContent = lan ? "Orbitales 4f progresivos" : "Orbitales 5f radiactivos";

  $("dMasa").textContent = "—";
  $("dEstado").textContent = T().estados["solido"];
  $("dGrupo").textContent = lang === "es"
    ? (lan ? "Grupo 3, Periodo 6" : "Grupo 3, Periodo 7")
    : (lan ? "Group 3, Period 6" : "Group 3, Period 7");
  $("dConfig").textContent = lan ? "[Xe] 4f¹⁻¹⁴ 5d⁰⁻¹ 6s²" : "[Rn] 5f¹⁻¹⁴ 6d⁰⁻² 7s²";
  $("dUso").textContent = lan ? T().lanUso : T().actUso;
  $("dCur").textContent = lan ? T().lanCur : T().actCur;

  const wiki = $("dWiki");
  if (wiki) {
    const wname = lan ? T().lanWiki : T().actWiki;
    const base = lang === "es" ? "https://es.wikipedia.org/wiki/" : "https://en.wikipedia.org/wiki/";
    wiki.href = base + encodeURIComponent(wname);
  }

  $("modal").classList.remove("oculto");
}

/* ==========================================================================
   NAVEGACIÓN ENTRE ELEMENTOS EN EL MODAL (← / →)
   ========================================================================== */
function navegarElemento(delta) {
  if (!elementoActual) return;
  let num = elementoActual.numero + delta;
  if (num > 118) num = 1;
  if (num < 1) num = 118;
  const sig = datos.find(x => x.numero === num);
  if (sig) {
    AudioSynth.click();
    mostrar(sig);
  }
}

/* ==========================================================================
   NOTIFICACIÓN TOAST
   ========================================================================== */
function showToast(msg) {
  const toast = $("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove("oculto");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add("oculto");
  }, 2200);
}

/* ==========================================================================
   ELEMENTO ALEATORIO (🎲)
   ========================================================================== */
function elementoAleatorio() {
  if (!datos.length) return;
  AudioSynth.dice();
  const randNum = Math.floor(Math.random() * datos.length) + 1;
  const e = datos.find(x => x.numero === randNum);
  if (e) {
    mostrar(e);
    showToast(`🎲 #${e.numero} ${nombre(e)} (${e.simbolo})`);
  }
}

/* ==========================================================================
   MODO JUEGO / QUIZ
   ========================================================================== */
function iniciarJuego() {
  gameMode = true;
  document.body.classList.add("game-on");
  $("gameBar").classList.remove("oculto");
  $("modal").classList.add("oculto");
  elementoActual = null;
  render();
  actualizarScore();
}

function salirJuego() {
  gameMode = false;
  document.body.classList.remove("game-on");
  $("gameBar").classList.add("oculto");
  $("modal").classList.add("oculto");
  elementoActual = null;
  render();
}

function reiniciarJuego() {
  acertados = new Set();
  intentosJuego = 0;
  rachaJuego = 0;
  elementoActual = null;
  $("modal").classList.add("oculto");
  render();
  actualizarScore();
}

function revelarTodo() {
  datos.forEach(e => acertados.add(e.numero));
  elementoActual = null;
  $("modal").classList.add("oculto");
  render();
  actualizarScore();
}

function actualizarScore() {
  const total = datos.length || 118;
  const ok = acertados.size;
  const prec = intentosJuego > 0 ? Math.round((ok / intentosJuego) * 100) : 100;
  const pct = Math.round((ok / total) * 100);

  if ($("gScore")) $("gScore").textContent = `${ok} / ${total} (${pct}%)`;
  if ($("gIntentos")) $("gIntentos").textContent = `${intentosJuego}`;
  if ($("gPrecision")) $("gPrecision").textContent = `${prec}%`;
  if ($("gRacha")) $("gRacha").textContent = `${rachaJuego}`;
  if ($("gameProgressFill")) $("gameProgressFill").style.width = `${pct}%`;
}

function mostrarPregunta(e) {
  elementoActual = e;
  document.querySelectorAll(".elemento.seleccionado").forEach(x => x.classList.remove("seleccionado"));
  document.querySelector(`.elemento[data-numero="${e.numero}"]`)?.classList.add("seleccionado");

  $("dCategoriaTag").textContent = T().game;
  $("dBloqueTag").textContent = `Grupo ${e.grupo}, Periodo ${e.periodo}`;
  $("dNavIndex").textContent = `#${e.numero}`;

  $("dNumero").textContent = `#${e.numero}`;
  $("dMasaPill").textContent = `${e.masa} u`;
  $("dSimbolo").textContent = "?";
  $("dNombre").textContent = T().guessTitle;
  $("dNombreEn").textContent = "···";

  // Modelo de Bohr en la pregunta como pista visual
  renderBohrModel(e);

  $("detalleLista").classList.add("oculto");
  $("juegoZona").classList.remove("oculto");
  $("grupoZona").classList.add("oculto");
  $("modalFooter").classList.add("oculto");

  $("juegoPista").textContent = T().pista(e);
  $("adivinanza").value = "";
  const m = $("mensajeJuego");
  m.textContent = "";
  m.className = "juego-mensaje";

  $("modal").classList.remove("oculto");
  setTimeout(() => $("adivinanza").focus(), 60);
}

function comprobarIntento() {
  if (!elementoActual || !gameMode) return;
  const val = normaliza($("adivinanza").value);
  if (!val) return;

  const e = elementoActual;
  const ok = val === normaliza(e.simbolo) ||
    val === normaliza(e.nombre_es) ||
    val === normaliza(e.nombre_en);

  intentosJuego++;
  const m = $("mensajeJuego");
  const el = document.querySelector(`.elemento[data-numero="${e.numero}"]`);

  if (ok) {
    AudioSynth.correct();
    acertados.add(e.numero);
    rachaJuego++;
    dispararConfeti();

    if (el) {
      el.classList.remove("juego-oculto");
      el.classList.add("acertada");
      el.innerHTML = `
        <div class="elem-top"><span class="num">${e.numero}</span><span class="masa">${e.masa}</span></div>
        <div class="sim">${e.simbolo}</div>
        <div class="nom">${nombre(e)}</div>
      `;
    }

    m.textContent = T().correct + (acertados.size === datos.length ? " " + T().win : "");
    m.className = "juego-mensaje ok";
    actualizarScore();
    elementoActual = null;
    setTimeout(() => {
      if (!elementoActual) $("modal").classList.add("oculto");
    }, 700);
  } else {
    AudioSynth.wrong();
    rachaJuego = 0;
    m.textContent = T().wrong;
    m.className = "juego-mensaje ko";
    if (el) {
      el.classList.add("fallo");
      setTimeout(() => el.classList.remove("fallo"), 500);
    }
    actualizarScore();
  }
}

function darPista() {
  if (!elementoActual && gameMode) {
    // Si no hay modal abierto, abrir un elemento pendiente al azar
    const pendientes = datos.filter(x => !acertados.has(x.numero));
    if (pendientes.length) {
      const p = pendientes[Math.floor(Math.random() * pendientes.length)];
      mostrarPregunta(p);
    }
    return;
  }
  if (elementoActual) {
    const famNombre = T().familias[elementoActual.familia];
    showToast(T().hintFamily(famNombre));
  }
}

/* ==========================================================================
   COPIAR FICHA AL PORTAPAPELES
   ========================================================================== */
function copiarFicha() {
  if (!elementoActual) return;
  const e = elementoActual;
  const text = `${nombre(e)} (${e.simbolo}) — #${e.numero}
${T().masa}: ${e.masa} u | ${T().estado}: ${T().estados[e.estado]} | ${T().familias[e.familia]}
${T().grupo}: ${e.grupo}, ${e.periodo} | ${T().bloques[e.bloque]}
${T().configuracion}: ${e.configuracion}
${T().uso}: ${lang === "es" ? e.uso_es : e.uso_en}
${T().curiosidad}: ${lang === "es" ? e.curiosidad_es : e.curiosidad_en}`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(T().copyOk);
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(str) {
  const ta = document.createElement("textarea");
  ta.value = str;
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    showToast(T().copyOk);
  } catch (err) {
    showToast("Error al copiar");
  }
  document.body.removeChild(ta);
}

/* ==========================================================================
   INICIALIZACIÓN & LISTENERS
   ========================================================================== */
function init() {
  // Idioma
  $("lang").value = lang;
  $("lang").onchange = e => {
    lang = e.target.value;
    localStorage.setItem("tp-lang", lang);
    aplicarTextos();
    render();
  };

  // Modo de color
  $("colorMode").value = colorMode;
  $("colorMode").onchange = e => {
    colorMode = e.target.value;
    localStorage.setItem("tp-color-mode", colorMode);
    aplicarColorMode();
  };

  // Tema claro/oscuro
  $("btnTema").onclick = () => {
    theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("tp-theme", theme);
    aplicarTema();
  };

  // Sonido
  $("btnSonido").onclick = () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem("tp-sound", soundEnabled);
    $("iconoSonido").textContent = soundEnabled ? "🔊" : "🔇";
    $("btnSonido").title = soundEnabled ? "Sonido: Activado" : "Sonido: Desactivado";
    if (soundEnabled) AudioSynth.click();
  };

  // Elemento Aleatorio
  $("btnAleatorio").onclick = elementoAleatorio;

  // Búsqueda y Limpieza
  $("buscador").oninput = filtrar;
  $("limpiar").onclick = () => {
    AudioSynth.click();
    $("buscador").value = "";
    famSel = "";
    estSel = "";
    bloqueSel = "";
    construirLeyenda();
    construirFiltros();
    filtrar();
  };

  // Modal y Navegación
  $("cerrar").onclick = () => {
    $("modal").classList.add("oculto");
    elementoActual = null;
  };
  $("modalBackdrop").onclick = () => {
    $("modal").classList.add("oculto");
    elementoActual = null;
  };
  $("btnPrevElem").onclick = () => navegarElemento(-1);
  $("btnNextElem").onclick = () => navegarElemento(1);
  $("btnCopiarFicha").onclick = copiarFicha;

  // Modo Juego
  $("modoJuego").onchange = e => {
    e.target.checked ? iniciarJuego() : salirJuego();
  };
  $("reiniciarJuego").onclick = reiniciarJuego;
  $("revelarTodo").onclick = revelarTodo;
  $("btnPista").onclick = darPista;
  $("comprobar").onclick = comprobarIntento;
  $("adivinanza").addEventListener("keydown", e => {
    if (e.key === "Enter") comprobarIntento();
  });

  $("verElementos").onclick = () => {
    $("modal").classList.add("oculto");
    document.querySelector(".bloque-f").scrollIntoView({ behavior: "smooth" });
  };

  // Atajos de Teclado Globales
  document.addEventListener("keydown", e => {
    const isModalOpen = !$("modal").classList.contains("oculto");

    if (e.key === "Escape") {
      if (isModalOpen) {
        $("modal").classList.add("oculto");
        elementoActual = null;
      } else {
        $("buscador").value = "";
        filtrar();
      }
    } else if (e.key === "ArrowLeft" && isModalOpen && !gameMode) {
      navegarElemento(-1);
    } else if (e.key === "ArrowRight" && isModalOpen && !gameMode) {
      navegarElemento(1);
    } else if (e.key === "/" && !isModalOpen && document.activeElement !== $("buscador")) {
      e.preventDefault();
      $("buscador").focus();
    } else if ((e.key === "r" || e.key === "R") && !isModalOpen && document.activeElement !== $("buscador")) {
      elementoAleatorio();
    }
  });

  // Carga de datos
  if (typeof DATOS_EMBEBIDOS !== "undefined" && Array.isArray(DATOS_EMBEBIDOS)) {
    datos = DATOS_EMBEBIDOS;
    aplicarTema();
    aplicarColorMode();
    aplicarTextos();
    render();
  } else {
    fetch("data.json")
      .then(r => {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(j => {
        datos = j;
        aplicarTema();
        aplicarColorMode();
        aplicarTextos();
        render();
      })
      .catch(err => {
        $("tabla").innerHTML = `<p style="grid-column:1/-1;padding:2rem;text-align:center;">No se pudo cargar data.json (${err.message}). Ejecuta: <code>python3 -m http.server</code></p>`;
      });
  }
}

init();
