# Tabla Periódica Interactiva · Edición Moderna & Elegante

Explorador científico y educativo de alta precisión de los 118 elementos químicos reconocidos por la IUPAC. Con interfaz moderna, visualizador orbital atómico de Bohr interactivo, modos de color dinámicos, sistema de audio nativo y modo juego/quiz.

🌐 **Demo**: [https://dataniard.github.io/tabla-periodica/](https://dataniard.github.io/tabla-periodica/)

---

## ✨ Características Principales

- **Diseño Moderno & Elegante**:
  - Estética *Glassmorphism* con efectos de desenfoque de fondo y luces ambientales (*Glow*).
  - **☀️ Tema Claro & 🌙 Tema Oscuro (Obsidian Glow)** con paletas de alto contraste calibradas.
  - Tipografía refinada: *Plus Jakarta Sans* para lectura limpia y *JetBrains Mono* para métricas y datos cuánticos.
  - Cabeceras completas de **Grupos (1 a 18 / IA a VIIIA)** y **Periodos (1 a 7)** con sistema de mira telescópica (*axis highlight*) al pasar el cursor.

- **🔬 Visualizador del Modelo Atómico de Bohr**:
  - Representación interactiva SVG con capas de electrones en rotación concéntrica continua.
  - Cálculo dinámico del desglose de electrones por capa cuántica ($K, L, M, N, O, P, Q$) a partir de la configuración electrónica.

- **🎨 Modos de Coloración Dinámicos**:
  - **Familia Química**: 10 familias con leyenda interactiva y previsualización al pasar el ratón.
  - **Bloque orbital ($s, p, d, f$)**: Visualización clara de los bloques cuánticos de la tabla periódica.
  - **Estado de agregación**: Sólido, Líquido, Gas y Desconocido a 20 °C.

- **Ficha Integral de Elementos**:
  - Masa atómica, configuración electrónica completa, grupo, periodo, bloque y estado.
  - Usos y aplicaciones en la vida cotidiana e industria aeroespacial, energética y médica.
  - Curiosidades científicas y datos históricos.
  - Navegación secuencial inmediata con botones `‹` `›` y flechas del teclado (`←` `→`).
  - Botón **📋 Copiar ficha** al portapapeles formateada para notas y resúmenes.
  - Enlace directo al artículo correspondiente en **Wikipedia** en español o inglés.
  - Tarjetas panorámicas para Lantánidos (57–71) y Actínidos (89–103).

- **🎮 Modo Quiz / Trivia con Gamificación**:
  - Adivina el elemento por símbolo, nombre o posición.
  - Estadísticas en tiempo real: aciertos, porcentaje de precisión, intentos y **🔥 contador de racha**.
  - Barra de progreso visual animada.
  - Botón **💡 Pista** contextual.
  - **Confeti festivo** en el lienzo (Canvas) y efectos de sonido en victorias.

- **🔊 Audio Synthesizer Nativo**:
  - Efectos sonoros sintetizados en tiempo real mediante **Web Audio API** (sin librerías externas ni archivos de audio pesados).
  - Interruptor de sonido accesible en la barra superior.

- **⌨️ Atajos de Teclado**:
  - `/` : Activar buscador al instante.
  - `R` : Descubrir un elemento aleatorio.
  - `Esc` : Cerrar modal o limpiar búsqueda.
  - `←` / `→` : Navegar entre elementos cuando el modal está abierto.

- **🌐 Bilingüe**: Español e Inglés con conmutación en caliente y persistencia de preferencias en `localStorage`.

- **📁 Versión Standalone Todo-en-Uno**:
  - `tabla-periodica-completa.html` incluye todos los estilos, datos y lógica incrustados para funcionar directamente sin servidor (`file://`).

---

## 🚀 Uso Local

Puedes probar la versión modular iniciando un servidor HTTP local sencillo:

```bash
# Con Python
python3 -m http.server 8000

# Con Node.js
npx serve .
```

Abre [http://localhost:8000](http://localhost:8000) en tu navegador.

O simplemente haz doble clic en `tabla-periodica-completa.html` para abrirlo directamente en cualquier navegador sin instalar nada.

---

## 📂 Estructura del Repositorio

| Archivo | Descripción |
|---|---|
| `index.html` | Estructura semántica, controles de navegación y modal |
| `styles.css` | Sistema de diseño moderno, variables CSS, animaciones y temas |
| `script.js` | Modelo de Bohr, motor de quiz, sintetizador de audio y lógica i18n |
| `data.json` | Base de datos de los 118 elementos con configuraciones y textos |
| `tabla-periodica-completa.html` | Distribución autónoma offline lista para usar sin servidor |

---

## 📜 Licencia & Fines Educativos

Proyecto de código abierto desarrollado con fines educativos y de divulgación científica.
