# AstroAtlas — Contexto actualizado (May 2026, v747)

> **NOTA:** La parte vieja de este documento (de v382) está desactualizada. Lo que sigue arriba refleja el estado actual del proyecto.

## TL;DR — Estado actual

- App pasó de PWA-only a **PWA + Capacitor APK Android** (carpeta hermana `moon_tracker_capacitor/` para builds, `moon_tracker_complete/` para PWA con git remote).
- `index.html` ahora ~37k líneas (~3.3MB), bilingüe ES/EN, incluye widget Android, alarma de sueños, dictado de voz nativo, TTS nativo, notificaciones locales, geolocalización via plugin nativo.
- **Versión actual: v747.**
- Usuario: Naguall (bearman, campoltro@gmail.com). Idioma principal: español. Testea en Android.

## Dos repos hermanos

| Carpeta | Rol | Git remote | Live |
|---|---|---|---|
| `moon_tracker_capacitor/` (este) | Source de la APK Capacitor | **sin remote** (intencional) | — |
| `moon_tracker_complete/` | PWA push GitHub Pages | `https://github.com/naguall/astro-atlas.git` | `https://naguall.github.io/astro-atlas/` |

Ambas viven en `/Users/ahointento/Dropbox/SILENT RIVER/APPS/MOON TRACKER CLAUDE SPACE/`.

## Source de verdad → flujo de sync

`docs/index.html` de **moon_tracker_capacitor** es la fuente. Cualquier cambio se replica a:
1. `moon_tracker_capacitor/www/index.html` — vía `node build.js` (copia con transform `/astro-atlas/` → `/`)
2. `moon_tracker_complete/docs/index.html` — copia directa (mantiene `/astro-atlas/`)
3. `moon_tracker_complete/www/index.html` — copia directa (paths root)

```bash
# Sync completo + build APK
cd moon_tracker_capacitor
node build.js                       # docs/ → www/
cp docs/index.html ../moon_tracker_complete/docs/index.html
cp www/index.html ../moon_tracker_complete/www/index.html
cp docs/capacitor-bridge.js ../moon_tracker_complete/docs/capacitor-bridge.js
cp docs/capacitor-bridge.js ../moon_tracker_complete/www/capacitor-bridge.js
npx cap sync android
cd android && ./gradlew assembleDebug
# APK queda en: android/app/build/outputs/apk/debug/app-debug.apk

# PWA push (desde moon_tracker_complete)
cd ../../moon_tracker_complete
git add -A && git commit -m "v74X: <descripción>" && git push
```

## Versionado actual
- `<script>window.APP_VERSION = 'v747';</script>` (línea 12 de docs/index.html)
- `sw.js`: `const CACHE_NAME = 'astro-atlas-v747';`
- Versión bumpeada en 4 lugares al cambiar: `docs/index.html`, `www/index.html` (×2 carpetas), `docs/sw.js`, `www/sw.js` (×2 carpetas)

## Reglas de trabajo con Naguall (críticas)
1. **NUNCA inventar información.** Si no sabés, preguntá.
2. **Listar TODOS los pedidos** al recibirlos. Confirmar la lista. Reportar ✅/❌ por cada uno al final.
3. **Mostrar screenshots/previews** visuales cuando hacés cambios de UI.
4. **NUNCA tocar áreas no pedidas.** Si dice "estaba bien" → revertir inmediatamente.
5. **Aplicar cambios a AMBAS versiones**: docs/ (PWA) y www/ (APK).
6. **Numerar tareas antes**, reportar ✅/❌ al terminar, indicar versión a pushear.
7. **No inventar logos/iconos**. Si reemplazás un asset visual, preguntá primero o usá el original.

## Polyfills de capacitor-bridge.js (críticos para WebView)
- `window.Notification` → `@capacitor/local-notifications`
- `window.speechSynthesis` + `SpeechSynthesisUtterance` → `@capacitor-community/text-to-speech`
- `window.SpeechRecognition` + `webkitSpeechRecognition` → `@capacitor-community/speech-recognition` (v747)
- `navigator.geolocation.getCurrentPosition` + `watchPosition` → `@capacitor/geolocation` (v747)
- `window.MoonSyncNative.updateWidgetData()` → custom Java plugin `WidgetBridge` (escribe SharedPrefs del widget Android)

## Plugins Capacitor instalados (package.json)
- @capacitor/{app, core, geolocation, haptics, ios, keyboard, local-notifications, motion, network, push-notifications, splash-screen, status-bar, android}
- @capacitor-community/text-to-speech
- @capacitor-community/speech-recognition (v747 — falta `npm install` + `cap sync` en Mac antes de compilar)

## Trampas conocidas
- `setCellSize()` pisa inline `grid-template-columns` en `.days-container` al cargar. Cambiar # cols requiere editar **3 lugares**.
- `getStellium(today)` es lista hardcoded; para detección dinámica combinar con `detectAspectPatterns()`. El banner v747 ya hace fallback.
- **Modal `display:flex` inline sobrevive a `classList.remove('show')`**. Siempre limpiar inline (`modal.style.display='none'`) al cerrar. Bug recurrente.
- WebView keyboard resize → no re-renderizar calendario al height-only change con input activo (v745 fix en `_handleOrientationResize`).
- Firebase Auth `signInWithPopup` y `signInWithRedirect` ambos fallan en WebView. Google Identity Services tampoco carga (origin `https://localhost`).

## Custom Java (android/app/src/main/java/com/astrocurrents/app/)
- `LunarWidgetProvider.java` — widget home screen
- `MoonCalc.java` — synodic month math (29.53d)
- `SunCalc.java` — NOAA solar equations (sunrise/sunset)
- `WidgetBridgePlugin.java` — Capacitor plugin: JS → SharedPrefs → widget refresh

## Estado v747 (bugfixes esta versión)
1. ✅ Splash Android 12+ → SplashScreen API (styles.xml + splash_icon.xml usando PNG real)
2. ✅ X cerrar Mi Ubicación — fix `style.display:'none'` al close
3. ✅ Mapa Leaflet refresca al GPS — `initLocMap()` ahora se llama en openLocationSelector + setView en setUserLocation
4. ✅ Icono adaptive con el PNG real de AstroAtlas (X azul) — adaptive-icon usa `drawable/ic_launcher_foreground_bitmap.xml` que wrappea `@mipmap/ic_launcher_foreground`
5. ✅ Notif sync — `LocalNotifications.removeAllDeliveredNotifications()` al abrir history
6. ✅ Hoy auto-nav próx semana lunar — findNearestNewMoon adelanta si ≤3 días al próximo NM
7. ✅ Aspectos modal multi-open — reset display + reflow + cleanup inline
8. ✅ Avanzado signos vs años — `_renderSigns2026View` faltaba `activeYear` param (ReferenceError silencioso)
9. ✅ Alarma voz stop + grabar — overlay con botón STOP grande + voice detection con mic
10. ✅ Botón micro dictar — polyfill SpeechRecognition nativo (requiere `npm install` + cap sync)
11. ⚠️ Google Calendar — **workaround temporal**: confirm() y abrir PWA en Chrome externo via `App.openUrl`. Solución real pendiente (ver abajo).
12. ✅ Stellium 13 May en banner lunar/solar — fallback dinámico si getStellium null

## Cambios Android nativos v747
- `AndroidManifest.xml`: RECORD_AUDIO, MODIFY_AUDIO_SETTINGS, `<queries>` para RecognitionService
- `values/styles.xml`: Theme.SplashScreen con windowSplashScreenBackground/Icon
- `values/colors.xml`: splash_bg_dark `#02020F`
- `drawable/splash_icon.xml`: bitmap del PNG real
- `mipmap-anydpi-v26/ic_launcher.xml` + `ic_launcher_round.xml`: adaptive icon

## Pendiente "real" (requiere setup nuevo)
- **Google Calendar nativo**: integrar `@capacitor-firebase/authentication`:
  1. `npm install @capacitor-firebase/authentication firebase`
  2. Crear proyecto Firebase, agregar app Android (package `com.astrocurrents.app`)
  3. Descargar `google-services.json` → `android/app/`
  4. `./gradlew signingReport` para SHA-1 → agregar a Firebase
  5. OAuth client en Google Cloud Console
  6. Adaptar `gcalSignIn()` (línea 8086) y `_signInGoogle()` (línea 37455+) a usar el plugin
- **Icon assets regenerados** vía Android Studio Image Asset Studio (los PNGs actuales son del proyecto Capacitor inicial — funcionan pero quizás se ven blandos a alta densidad)

## Comandos útiles

```bash
# Validar sintaxis JS de index.html
python3 -c "
import re
with open('docs/index.html') as f: html=f.read()
scripts=re.findall(r'<script(?![^>]*\\bsrc=)[^>]*>([\\s\\S]*?)</script>', html)
open('/tmp/x.js','w').write('\\n;//---\\n'.join(scripts))
" && node --check /tmp/x.js

# Validar bridge
node --check docs/capacitor-bridge.js

# Ver últimos commits PWA
cd ../moon_tracker_complete && git log --oneline -10
```

## Memoria de sesiones Cowork previas
Si interesa más contexto histórico, archivos en `/Users/ahointento/Library/Application Support/Claude/local-agent-mode-sessions/.../memory/`:
- `feedback_no_hallucinations.md` — nunca inventar
- `feedback_track_all_requests.md` — listar todos los pedidos
- `feedback_show_previews.md` — mostrar previews
- `feedback_confirm_before_extra_changes.md` — no tocar áreas no pedidas
- `feedback_task_list_and_version.md` — numerar tareas + versión
- `feedback_sync_pwa_apk.md` — sync ambas versiones
- `feedback_no_touch_working.md` — si dice "estaba bien" revertir
- `user_device.md` — Android, no iPhone
- `project_git_path.md`, `project_widget.md`, `project_setcellsize.md`

Lo crítico ya está incorporado arriba.

---

## (Sección legacy — v382, mantener solo por contexto histórico)

# Astro Current — Proyecto PWA Lunar/Solar/Astrológico

## Qué es Astro Current
PWA de una sola página (`index.html`, ~23000 líneas) para seguimiento lunar, solar y astrológico. Incluye calendarios, brújula lunar, mapas 2D/3D, aspectos planetarios, integración con Google Calendar, diario personal y lecturas de IA.

## Reglas críticas del proyecto

### Antes de cualquier cambio
1. **Siempre leer el código relevante** antes de editar — la app es un solo archivo enorme y el contexto es vital
2. **Mostrar los prompts de IA** al usuario antes de modificarlos (son los personas en `_aiPersonas`)
3. **Preguntar antes de cambiar** la brújula/compass — el usuario ha calibrado manualmente muchos valores
4. **No agregar emojis ni iconos** al crear elementos nuevos en la UI — mantener texto limpio. Solo usar emojis donde ya existen

### Versionado
- `APP_VERSION` en `index.html` y `CACHE_NAME` en `sw.js` **deben coincidir siempre**
- Formato: `'v382'` en index.html, `'astro-current-v382'` en sw.js
- Incrementar en cada commit
- **Al inicio de cada chat**: decirle al usuario cuál es la versión actual (leer `APP_VERSION` de index.html)
- **Al terminar cada commit**: informar la nueva versión claramente en el chat
- **Después de cada commit**: presentar `index.html` como archivo clickeable en el chat usando `present_files` para que el usuario pueda ver los cambios sin hacer push

### Git
- Push no funciona desde la VM de Cowork (proxy bloquea). Decirle al usuario que haga push desde su máquina:
  ```
  cd ~/Dropbox/SILENT\ RIVER/MOON\ TRACKER\ CLAUDE\ SPACE/moon_tracker_complete && git push
  ```

## Arquitectura

### Archivos principales
- `index.html` — TODO el código (HTML + CSS + JS, ~23000 líneas). No hay archivos separados de JS o CSS
- `sw.js` — Service Worker, solo cachea assets. `CACHE_NAME` debe coincidir con `APP_VERSION`
- `lunar-data.js` — Datos lunares opcionales (override de nuevas lunas)
- `manifest.json` — PWA manifest
- `prompts/` — Prompts de IA históricos (v1, v2-energy, v3-shadow)
- `ai-proxy/` — Proxy para llamadas a APIs de IA

### Estructura dentro de index.html (secciones importantes por línea aprox)

| Sección | Línea aprox | Descripción |
|---------|-------------|-------------|
| Manifest/meta | 1-20 | Head, título, manifest |
| CSS styles | 20-680 | Todos los estilos inline |
| Header/nav HTML | 680-720 | Botones de modo (Lunar, Solar, Gregorian, S.S.) |
| astronomy-engine | 684 | CDN script para cálculos astronómicos |
| Lunas nuevas builtin | 1846-1862 | `_newMoonDatesBuiltin` array UTC |
| Google Calendar fetch | 4334-4430 | `gcalFetchEvents()` — parsea eventos de GCal |
| AI Interpretations | 6060-6400 | `fetchAIInterpretation()`, `openInterpretationChat()`, `deleteInterpChat()` |
| Compass/Brújula | 6958-7470 | Variables, `_startCompass()`, `_renderCompass()`, mapas 2D/3D |
| Solar signs 2026 | 9027-9040 | `solarSigns2026[]` array con fechas, colores, símbolos |
| switchToSolarMode | 9724-9751 | Cambia a modo solar |
| Banner HOY | 11196-11330 | `updateCurrentDayInfoForMode()` — banner superior con eventos, HOY, aspectos |
| renderSolarCalendar | 16296-16343 | Genera grid del calendario solar |
| renderSolarInfoPanel | 16345-16629 | Panel info solar con mapa SVG (PESADO — ya optimizado v382) |
| Full moon dates | 16686-16693 | `_fullMoonDates2026[]` array UTC |
| getMoonEventForDate | 16696-16710 | Detecta si un día es luna llena o nueva |
| generateSolarWeeks | 16712+ | Genera las semanas/decanos del calendario solar |
| refreshAllLiveData | 17632 | Refresca posición sublunar |
| AI Persona Registry | ~22319 | `_aiPersonas[]` — `energy-reader` y `shadow-mirror` con `buildPrompt()` |
| APP_VERSION | ~21080 | `const APP_VERSION = 'vXXX'` |

### Librerías externas
- **astronomy-engine** v2.1.19 (CDN) — Cálculos astronómicos: `Astronomy.MakeTime()`, `.Illumination()`, `.Equator()`, `.SearchRiseSet()`, `.Horizon()`, `.EclipticGeoMoon()`
- No hay frameworks JS — todo es vanilla JavaScript

### Modos de calendario
1. **Lunar** — Semanas lunares de luna nueva a luna nueva, días 1-29
2. **Solar** — Signos zodiacales con 3 decanos de ~10 días
3. **Gregoriano** — Calendario estándar mensual
4. **Sistema Solar** — Vista del sistema solar

### Brújula lunar (sección crítica ~6958-7470)
- **Heading**: iOS usa `webkitCompassHeading`, Android usa `deviceorientationabsolute` para norte magnético real
- **Tilt**: `beta` directamente, smoothing 0.15
- **Heading smoothing**: Factor 0.2, maneja wraparound 0°/360°
- **Barra de altitud**: 0° = teléfono plano = CENTRO de la barra. Escala -90° a +90°
- **Mapa 2D**: Equirectangular con punto sublunar animado
- **Mapa 3D**: Globo ortográfico rotado hacia punto sublunar, con continentes SVG
- **NO cambiar la calibración** de la brújula sin confirmación del usuario — fue calibrada en 5+ iteraciones

### Google Calendar
- Fetch via `gcalFetchEvents()` línea ~4334
- **Bug resuelto v379**: Fechas all-day se parsean como local (no UTC) para evitar off-by-one en zonas UTC-negativas
- Eventos se guardan en `gcalEvents{}` indexados por `getDateKey(date)`

### Interpretaciones IA
- 2 personas: `energy-reader` (lecturas energéticas) y `shadow-mirror` (sombra/espejo)
- **REGLA CRÍTICA: Todos los chats de IA deben persistir en localStorage** vinculados al perfil del usuario. Solo se borran cuando el usuario lo solicita explícitamente (botón Borrar). Nunca auto-borrar chats.
- `chatId` es un hash determinístico de `profileId + prompt` — el mismo aspecto/planeta siempre reabre el mismo chat con su historial completo
- Chats guardados en localStorage con `getInterpChatKey(chatId)` → `interp_chat_` + chatId
- `saveInterpChat(chatId, data)` guarda, `getInterpChat(chatId)` recupera, `deleteInterpChat(chatId)` borra con confirmación
- Cada interpretación tiene botones: Chat (continuar conversación), Guardar (como lectura), Compartir, Borrar
- Interpretaciones de ciclos cósmicos se cachean con `saveInterpCache()` → `interp_` + profilePrefix + key
- Cartas de retorno solar/lunar: cada aspecto es clickeable y abre su propia interpretación AI con chat persistente

### Panel solar (rendimiento)
- `renderSolarInfoPanel()` es la función más pesada — genera SVG con continentes, terminator día/noche, trayectoria solar
- **Optimizado en v382**: terminator 5° bandas (antes 2°), trayectoria 30min steps (antes 10min), closest approach 30min (antes 15min)
- Se ejecuta con `setTimeout 80ms` para dejar que la grid del calendario se pinte primero

## Datos astronómicos hardcoded
- Lunas nuevas 2024-2027: `_newMoonDatesBuiltin` (línea 1846)
- Lunas llenas 2026: `_fullMoonDates2026` (línea 16686)
- Signos solares 2026: `solarSigns2026` (línea 9027) — con fechas exactas de inicio/fin
- Eventos astronómicos 2026: `astronomicalEvents2026` (línea 9046) — equinoccios y solsticios

## Preferencias del usuario
- Idioma principal: español (Costa Rica)
- Zona horaria: UTC-6 (Costa Rica)
- Ubicación default: lat 9.93, lon -84 (Costa Rica)
- El usuario prueba en Android — tener en cuenta `deviceorientationabsolute`
- Pide ver prompts de IA antes de cambiarlos
- Prefiere iteraciones pequeñas y probar en el teléfono entre cambios
