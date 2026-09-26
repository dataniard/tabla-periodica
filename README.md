# Tabla Periódica Interactiva

Proyecto dedicado a facilitar el estudio de la tabla periódica y sus elementos: explora los 118 elementos, consulta sus propiedades, practica con el modo juego y cambia entre tema claro y oscuro.

🌐 Demo: https://dataniard.github.io/tabla-periodica/

## Qué incluye

- **Tabla interactiva** con los 118 elementos: símbolo, nombre, masa atómica, familia, grupo, periodo y estado.
- **Buscador y filtros** por nombre, símbolo, número, familia y estado, con leyenda por familias.
- **Ficha de cada elemento** con usos, curiosidades y enlace a su artículo de Wikipedia (según idioma).
- **Fichas de grupo** para Lantánidos (57–71) y Actínidos (89–103).
- **🎮 Modo juego**: todas las casillas en blanco para adivinar símbolo o nombre, con puntuación, intentos y precisión.
- **☀️/🌙 Tema claro y oscuro** (estilo Fisher en modo claro), con preferencia guardada.
- **Bilingüe** español / inglés.
- **`tabla-periodica-completa.html`**: versión de un solo fichero (sin servidor, funciona con `file://`).

## Uso local

```bash
python3 -m http.server
```

Abre http://localhost:8000 en el navegador.

## Estructura

| Fichero | Descripción |
|---|---|
| `index.html` | Estructura principal |
| `styles.css` | Estilos, temas y modo juego |
| `script.js` | Lógica, i18n y juego |
| `data.json` | Datos educativos de los 118 elementos |
| `tabla-periodica-completa.html` | Todo lo anterior en un solo HTML |

## Datos

Contenido con fines educativos.
