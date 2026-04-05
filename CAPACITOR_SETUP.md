# Astro Current — Capacitor Setup Guide

## Estructura del Proyecto

```
moon_tracker_complete/
├── index.html              ← App principal (PWA)
├── capacitor-bridge.js     ← Bridge nativo (push, GPS, motion, haptics)
├── capacitor.config.json   ← Config de Capacitor
├── build.js                ← Script que copia todo a www/
├── package.json            ← Dependencias npm
├── www/                    ← Directorio web para Capacitor (generado por build)
├── android/                ← Proyecto Android Studio
├── ios/                    ← Proyecto Xcode
└── sw.js                   ← Service Worker (PWA)
```

## Requisitos

- Node.js 18+
- npm 9+
- Android Studio (para Android)
- Xcode 15+ (para iOS, solo en Mac)
- CocoaPods (para iOS): `sudo gem install cocoapods`

## Comandos Principales

```bash
# Instalar dependencias
npm install

# Build: copiar archivos a www/
npm run build

# Sincronizar con plataformas nativas
npm run cap:sync    # equivale a: npm run build && npx cap sync

# Abrir en Android Studio
npm run cap:open:android

# Abrir en Xcode
npm run cap:open:ios

# Correr en dispositivo/emulador
npm run cap:run:android
npm run cap:run:ios
```

## Setup Push Notifications

### Android (Firebase Cloud Messaging)

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Crea un proyecto o usa el existente de Astro Current
3. Agrega una app Android con package name: `com.astrocurrent.app`
4. Descarga `google-services.json`
5. Copia el archivo a: `android/app/google-services.json`
6. El proyecto Android ya tiene los plugins configurados

### iOS (Apple Push Notification Service)

1. En tu Apple Developer Account, habilita Push Notifications para tu App ID
2. Genera un certificado APNs o una key (.p8)
3. En Firebase Console, agrega la app iOS con bundle ID: `com.moonsync.app`
4. Sube el certificado/key APNs a Firebase > Project Settings > Cloud Messaging
5. Descarga `GoogleService-Info.plist`
6. Copia a: `ios/App/App/GoogleService-Info.plist`
7. En Xcode: Target > Signing & Capabilities > + Push Notifications

## Cómo funciona el Bridge

El archivo `capacitor-bridge.js` detecta automáticamente si la app corre como nativa o como PWA:

- **Nativo**: usa los plugins de Capacitor (push real, GPS nativo, haptics, etc.)
- **PWA**: fallback a las APIs web existentes (Web Push, navigator.geolocation, etc.)

### APIs disponibles:

```javascript
// Verificar si es nativo
window.MoonSyncNative.isNative     // true/false
window.MoonSyncNative.platform     // 'ios', 'android', 'web'

// Push Notifications
window.MoonSyncNative.registerPush()  // Returns Promise<token>

// Geolocation
window.MoonSyncNative.getCurrentPosition()  // Returns Promise<{lat, lon, accuracy}>
window.MoonSyncNative.watchPosition(cb)     // Returns watcher with .remove()

// Device Motion / Compass
window.MoonSyncNative.watchOrientation(cb)  // Returns watcher with .remove()
window.MoonSyncNative.watchAcceleration(cb) // Returns watcher with .remove()

// Haptics
window.MoonSyncNative.vibrate('light')    // light, medium, heavy, success, warning, error
```

## Workflow de Desarrollo

1. Edita `index.html` y los JS como siempre
2. `npm run cap:sync` para copiar cambios a las plataformas
3. `npm run cap:open:android` o `cap:open:ios` para compilar
4. Para la PWA web, sigue usando el mismo flujo (git push a GitHub Pages)

## Notas Importantes

- `capacitor.config.json` > `appId` debe coincidir con tu package name en las tiendas
- El `APP_VERSION` en `index.html` y `CACHE_NAME` en `sw.js` deben coincidir
- Los push tokens se guardan automáticamente en Firestore (`pushTokens/{uid}`)
- Android Back Button: cierra modals antes de salir de la app
- Status Bar: color oscuro (#07092a) para coincidir con el tema de la app
