const CACHE_NAME = 'moon-sync-v136';
const ASSETS = [
  '/moon-sync/',
  '/moon-sync/index.html',
  '/moon-sync/lunar-data.js',
  '/moon-sync/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// When user clicks a notification, open app and clear badge
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    self.registration.getNotifications().then(notifications => {
      notifications.forEach(n => n.close());
      if ('clearAppBadge' in self.navigator) { return self.navigator.clearAppBadge().catch(()=>{}); }
    }).then(() => {
      return clients.matchAll({type: 'window', includeUncontrolled: true}).then(cls => {
        if (cls.length > 0) { return cls[0].focus(); }
        return clients.openWindow('/moon-sync/');
      });
    })
  );
});

// Listen for messages from the page to clear all notifications + badge
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'CLEAR_BADGES') {
    // Step 1: Close ALL existing notifications
    self.registration.getNotifications().then(notifications => {
      notifications.forEach(n => n.close());
    }).then(() => {
      // Step 2: Clear via Badging API
      if ('clearAppBadge' in self.navigator) { self.navigator.clearAppBadge().catch(()=>{}); }
      if ('setAppBadge' in self.navigator) { self.navigator.setAppBadge(0).catch(()=>{}); }
      // Step 3: Android trick — show a silent notification and immediately close it
      // This forces the launcher to recount notifications (will find 0)
      return self.registration.showNotification('', {
        tag: 'badge-clear',
        silent: true,
        badge: '',
        timestamp: 0
      });
    }).then(() => {
      // Close the dummy notification immediately
      return self.registration.getNotifications({tag: 'badge-clear'});
    }).then(ns => {
      ns.forEach(n => n.close());
      // Final badge clear after dummy is closed
      if ('clearAppBadge' in self.navigator) { self.navigator.clearAppBadge().catch(()=>{}); }
      if ('setAppBadge' in self.navigator) { self.navigator.setAppBadge(0).catch(()=>{}); }
    }).catch(() => {});
  }
});

// Also clear badge when a notification is dismissed by swiping
self.addEventListener('notificationclose', e => {
  self.registration.getNotifications().then(notifications => {
    if (notifications.length === 0) {
      if ('clearAppBadge' in self.navigator) { self.navigator.clearAppBadge().catch(()=>{}); }
      if ('setAppBadge' in self.navigator) { self.navigator.setAppBadge(0).catch(()=>{}); }
    }
  });
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // External images (NASA, Wikimedia): pass through directly without modifying request mode
  // IMPORTANT: <img> tags use no-cors mode; creating new Request() switches to cors and breaks it
  if (url.includes('upload.wikimedia.org') || url.includes('science.nasa.gov')) {
    return; // Let browser handle natively — no SW interception
  }
  // External APIs: network only
  if (url.includes('open-meteo.com') || url.includes('fonts.googleapis.com') || url.includes('earthquake.usgs.gov')) {
    e.respondWith(
      fetch(new Request(url, {method: 'GET', headers: e.request.headers}))
        .catch(() => new Response('{"error":"offline"}', {status: 503, headers: {'Content-Type':'application/json'}}))
    );
    return;
  }
  // All app files: NETWORK FIRST, fallback to cache (ensures updates arrive)
  e.respondWith(
    fetch(e.request).then(resp => {
      const clone = resp.clone();
      caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
      return resp;
    }).catch(() => caches.match(e.request))
  );
});
