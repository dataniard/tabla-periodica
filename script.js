const TEXTOS = {
  es: {
    title: "Tabla Periódica Interactiva",
    subtitle: "Pulsa cualquier elemento para ver sus propiedades",
    search: "Buscar por nombre, símbolo o número…",
    clear: "Limpiar",
    todasFam: "Todas las familias",
    todosEst: "Todos los estados",
    masa: "Masa atómica", estado: "Estado", grupo: "Grupo / Periodo",
    uso: "Usos",
    footer: "118 elementos · Datos educativos · Abre con un servidor local: python3 -m http.server",
    contador: n => `${n} elementos`,
    familias: {"no-metal":"No metal","gas-noble":"Gas noble","metal-alcalino":"Metal alcalino","alcalinoterreo":"Alcalinotérreo","metaloide":"Metaloide","halogeno":"Halógeno","metal-transicion":"Metal de transición","metal-postransicion":"Metal postransición","lantanido":"Lantánido","actinido":"Actínido"},
    estados: {solido:"Sólido",liquido:"Líquido",gas:"Gas",desconocido:"Desconocido"},
    game: "🎮 Juego",
    restart: "Reiniciar juego",
    giveUp: "Rendirse",
    check: "Comprobar",
    guessPh: "Escribe símbolo o nombre…",
    scoreLabel: "Aciertos",
    attemptsLabel: "Intentos",
    accuracyLabel: "Precisión",
    guessTitle: "¿Qué elemento es?",
    correct: "¡Correcto! 🎉",
    wrong: "Fallaste, inténtalo de nuevo ❌",
    win: "¡Completado! 🎉 ¡Enhorabuena!",
    revealed: "Tablero revelado",
    pista: e => `#${e.numero} · ${TEXTOS.es.familias[e.familia]} · Grupo ${e.grupo}, Periodo ${e.periodo} · ${e.masa} u`
  },
  en: {
    title: "Interactive Periodic Table",
    subtitle: "Click any element to see its properties",
    search: "Search by name, symbol or number…",
    clear: "Clear",
    todasFam: "All families",
    todosEst: "All states",
    masa: "Atomic mass", estado: "State", grupo: "Group / Period",
    uso: "Uses",
    footer: "118 elements · Educational data · Open with a local server: python3 -m http.server",
    contador: n => `${n} elements`,
    familias: {"no-metal":"Nonmetal","gas-noble":"Noble gas","metal-alcalino":"Alkali metal","alcalinoterreo":"Alkaline earth","metaloide":"Metalloid","halogeno":"Halogen","metal-transicion":"Transition metal","metal-postransicion":"Post-transition metal","lantanido":"Lanthanide","actinido":"Actinide"},
    estados: {solido:"Solid",liquido:"Liquid",gas:"Gas",desconocido:"Unknown"},
    game: "🎮 Game",
    restart: "Restart game",
    giveUp: "Give up",
    check: "Check",
    guessPh: "Type symbol or name…",
    scoreLabel: "Hits",
    attemptsLabel: "Attempts",
    accuracyLabel: "Accuracy",
    guessTitle: "Which element is it?",
    correct: "Correct! 🎉",
    wrong: "Wrong, try again ❌",
    win: "Completed! 🎉 Well done!",
    revealed: "Board revealed",
    pista: e => `#${e.numero} · ${TEXTOS.en.familias[e.familia]} · Group ${e.grupo}, Period ${e.periodo} · ${e.masa} u`
  }
};

let datos = [];
let lang = localStorage.getItem("tp-lang") || "es";
let gameMode = false;
let acertados = new Set();
let intentosJuego = 0;
let elementoActual = null;
const $ = id => document.getElementById(id);
const T = () => TEXTOS[lang];
const nombre = e => lang === "es" ? e.nombre_es : e.nombre_en;

function aplicarTextos() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.dataset.i18n;
    if (T()[k] && typeof T()[k] === "string") el.textContent = T()[k];
  });
  $("buscador").placeholder = T().search;
  $("lang").value = lang;
  const adv = $("adivinanza");
  if (adv) adv.placeholder = T().guessPh;
  construirFiltros();
  construirLeyenda();
  actualizarContador(datos.filter(visible).length);
  actualizarScore();
  if (elementoActual && gameMode) $("juegoPista").textContent = T().pista(elementoActual);
}

function construirFiltros() {
  const fc = $("filtroFamilia"), fe = $("filtroEstado");
  const vc = fc.value || "", ve = fe.value || "";
  fc.innerHTML = `<option value="">${T().todasFam}</option>` +
    Object.entries(T().familias).map(([k,v]) => `<option value="${k}">${v}</option>`).join("");
  fe.innerHTML = `<option value="">${T().todosEst}</option>` +
    Object.entries(T().estados).map(([k,v]) => `<option value="${k}">${v}</option>`).join("");
  if ([...fc.options].some(o => o.value === vc)) fc.value = vc;
  if ([...fe.options].some(o => o.value === ve)) fe.value = ve;
}

function construirLeyenda() {
  $("leyenda").innerHTML = Object.entries(T().familias).map(([k,v]) =>
    `<button class="chip fam-${k.replace(/-/g,"-")}" data-fam="${k}">${v}</button>`).join("");
  document.querySelectorAll("#leyenda .chip").forEach(ch => {
    ch.onclick = () => {
      $("filtroFamilia").value = $("filtroFamilia").value === ch.dataset.fam ? "" : ch.dataset.fam;
      filtrar();
    };
  });
}

function tarjeta(e) {
  const d = document.createElement("button");
  const adivinado = acertados.has(e.numero);
  d.className = `elemento fam-${e.familia}` + (gameMode && !adivinado ? " juego-oculto" : "") + (gameMode && adivinado ? " acertada" : "");
  d.style.gridColumn = e.grupo;
  d.style.gridRow = e.periodo;
  d.setAttribute("role", "gridcell");
  d.tabIndex = 0;
  d.dataset.numero = e.numero;
  if (gameMode && !adivinado) {
    d.innerHTML = `<span class="num">${e.numero}</span><span class="sim">?</span>`;
  } else {
    d.innerHTML = `<span class="num">${e.numero}</span><span class="sim">${e.simbolo}</span><span class="nom">${nombre(e)}</span>`;
  }
  d.onclick = () => mostrar(e);
  d.onkeydown = ev => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); mostrar(e); } };
  return d;
}

function render() {
  const tabla = $("tabla"), lan = $("lantanidos"), act = $("actinidos");
  tabla.innerHTML = ""; lan.innerHTML = ""; act.innerHTML = "";
  datos.forEach(e => {
    const esF = e.familia === "lantanido" || e.familia === "actinido";
    const t = tarjeta(e);
    if (!esF) { t.style.gridColumn = e.grupo; t.style.gridRow = e.periodo; tabla.appendChild(t); }
    else { t.style.gridColumn = ""; t.style.gridRow = ""; (e.familia === "lantanido" ? lan : act).appendChild(t); }
  });
  // Marcadores de hueco La-Lu y Ac-Lr en la tabla principal
  const hueco1 = document.createElement("div");
  hueco1.className = "elemento fam-lantanido";
  hueco1.style.gridColumn = 3; hueco1.style.gridRow = 6;
  hueco1.innerHTML = `<span class="sim">57–71</span><span class="nom">La–Lu</span>`;
  hueco1.onclick = () => document.querySelector(".bloque-f").scrollIntoView({behavior:"smooth"});
  const hueco2 = hueco1.cloneNode(true);
  hueco2.className = "elemento fam-actinido";
  hueco2.style.gridRow = 7;
  hueco2.innerHTML = `<span class="sim">89–103</span><span class="nom">Ac–Lr</span>`;
  hueco2.onclick = hueco1.onclick;
  tabla.appendChild(hueco1); tabla.appendChild(hueco2);
  filtrar();
}

function visible(e) {
  const q = $("buscador").value.trim().toLowerCase();
  const c = $("filtroFamilia").value, s = $("filtroEstado").value;
  if (c && e.familia !== c) return false;
  if (s && e.estado !== s) return false;
  if (q && !(e.nombre_es.toLowerCase().includes(q) || e.nombre_en.toLowerCase().includes(q) ||
    e.simbolo.toLowerCase() === q || String(e.numero) === q)) return false;
  return true;
}

function filtrar() {
  if (gameMode) {
    document.querySelectorAll(".elemento[data-numero]").forEach(el => el.classList.remove("atenuado"));
    return;
  }
  let n = 0;
  document.querySelectorAll(".elemento[data-numero]").forEach(el => {
    const e = datos.find(x => x.numero === +el.dataset.numero);
    const ok = visible(e);
    el.classList.toggle("atenuado", !ok);
    if (ok) n++;
  });
  actualizarContador(n);
}

function actualizarContador(n) { $("contador").textContent = T().contador(n); }

function mostrar(e) {
  if (gameMode && !acertados.has(e.numero)) { mostrarPregunta(e); return; }
  $("detalleLista").classList.remove("oculto");
  $("juegoZona").classList.add("oculto");  document.querySelectorAll(".elemento.seleccionado").forEach(x => x.classList.remove("seleccionado"));
  document.querySelector(`.elemento[data-numero="${e.numero}"]`)?.classList.add("seleccionado");
  $("dSimbolo").textContent = e.simbolo;
  $("dSimbolo").className = `d-simbolo fam-${e.familia}`;
  $("dNumero").textContent = "#" + e.numero;
  $("dNombre").textContent = nombre(e);
  $("dFamilia").textContent = T().familias[e.familia];
  $("dMasa").textContent = e.masa + " u";
  $("dEstado").textContent = T().estados[e.estado];
  $("dGrupo").textContent = lang === "es" ? `Grupo ${e.grupo}, Periodo ${e.periodo}` : `Group ${e.grupo}, Period ${e.periodo}`;
  $("dUso").textContent = lang === "es" ? e.uso_es : e.uso_en;
  $("dCur").textContent = "💡 " + (lang === "es" ? e.curiosidad_es : e.curiosidad_en);
  $("modal").classList.remove("oculto");
}

function normaliza(s) {
  return (s || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function totalElementos() { return datos.length || 118; }

function actualizarScore() {
  const total = totalElementos();
  const ok = acertados.size;
  const prec = intentosJuego > 0 ? Math.round((ok / intentosJuego) * 100) : 0;
  if ($("gScore")) $("gScore").textContent = `${T().scoreLabel}: ${ok} / ${total}`;
  if ($("gIntentos")) $("gIntentos").textContent = `${T().attemptsLabel}: ${intentosJuego}`;
  if ($("gPrecision")) $("gPrecision").textContent = `${T().accuracyLabel}: ${prec} %`;
}

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

function revelarCasilla(numero) {
  const el = document.querySelector(`.elemento[data-numero="${numero}"]`);
  const e = datos.find(x => x.numero === numero);
  if (!el || !e) return;
  el.classList.remove("juego-oculto");
  el.classList.add("acertada");
  el.innerHTML = `<span class="num">${e.numero}</span><span class="sim">${e.simbolo}</span><span class="nom">${nombre(e)}</span>`;
}

function mostrarPregunta(e) {
  elementoActual = e;
  document.querySelectorAll(".elemento.seleccionado").forEach(x => x.classList.remove("seleccionado"));
  document.querySelector(`.elemento[data-numero="${e.numero}"]`)?.classList.add("seleccionado");
  $("dSimbolo").textContent = "?";
  $("dSimbolo").className = "d-simbolo";
  $("dNumero").textContent = "#" + e.numero;
  $("dNombre").textContent = T().guessTitle;
  $("dFamilia").textContent = "";
  $("detalleLista").classList.add("oculto");
  $("juegoZona").classList.remove("oculto");
  $("juegoPista").textContent = T().pista(e);
  $("adivinanza").value = "";
  const m = $("mensajeJuego");
  m.textContent = "";
  m.className = "juego-mensaje";
  $("modal").classList.remove("oculto");
  setTimeout(() => $("adivinanza").focus(), 50);
}

function comprobarIntento() {
  if (!elementoActual || !gameMode) return;
  const val = normaliza($("adivinanza").value);
  if (!val) return;
  const e = elementoActual;
  const ok = val === normaliza(e.simbolo) || val === normaliza(e.nombre_es) || val === normaliza(e.nombre_en);
  intentosJuego++;
  const m = $("mensajeJuego");
  const el = document.querySelector(`.elemento[data-numero="${e.numero}"]`);
  if (ok) {
    acertados.add(e.numero);
    revelarCasilla(e.numero);
    m.textContent = T().correct + (acertados.size === totalElementos() ? " " + T().win : "");
    m.className = "juego-mensaje ok";
    actualizarScore();
    elementoActual = null;
    setTimeout(() => { if (!elementoActual) $("modal").classList.add("oculto"); }, 900);
  } else {
    m.textContent = T().wrong;
    m.className = "juego-mensaje ko";
    if (el) {
      el.classList.add("fallo");
      setTimeout(() => el.classList.remove("fallo"), 600);
    }
    actualizarScore();
  }
}

function init() {
  $("lang").value = lang;
  $("lang").onchange = e => { lang = e.target.value; localStorage.setItem("tp-lang", lang); aplicarTextos(); render(); };
  $("buscador").oninput = filtrar;
  $("filtroFamilia").onchange = filtrar;
  $("filtroEstado").onchange = filtrar;
  $("limpiar").onclick = () => { $("buscador").value = ""; $("filtroFamilia").value = ""; $("filtroEstado").value = ""; filtrar(); };
  $("cerrar").onclick = () => { $("modal").classList.add("oculto"); elementoActual = null; };
  $("modal").addEventListener("click", e => { if (e.target.id === "modal") { $("modal").classList.add("oculto"); elementoActual = null; } });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { $("modal").classList.add("oculto"); elementoActual = null; } });
  $("modoJuego").onchange = e => { e.target.checked ? iniciarJuego() : salirJuego(); };
  $("reiniciarJuego").onclick = reiniciarJuego;
  $("revelarTodo").onclick = revelarTodo;
  $("comprobar").onclick = comprobarIntento;
  $("adivinanza").addEventListener("keydown", e => { if (e.key === "Enter") comprobarIntento(); });

  fetch("data.json")
    .then(r => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
    .then(j => { datos = j; aplicarTextos(); render(); })
    .catch(err => {
      $("tabla").innerHTML = `<p style="grid-column:1/-1">No se pudo cargar data.json (${err.message}). Abre con: <code>python3 -m http.server</code></p>`;
    });
}
init();
