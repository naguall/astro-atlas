/**
 * Astro Currents — Capacitor Native Bridge
 *
 * Detects if running inside Capacitor and provides native APIs:
 * - Push Notifications (FCM on Android, APNs on iOS)
 * - Geolocation (native GPS)
 * - Device Motion (accelerometer/compass)
 * - Haptic feedback
 * - Status bar control
 * - App lifecycle events
 * - Keyboard handling
 * - Network status
 *
 * Falls back gracefully to web APIs when running as PWA.
 */

(function() {
    'use strict';

    // ── Detect Capacitor ──
    var isCapacitor = typeof window.Capacitor !== 'undefined' && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform();
    var platform = isCapacitor ? window.Capacitor.getPlatform() : 'web';

    window.MoonSyncNative = {
        isNative: isCapacitor,
        platform: platform, // 'ios', 'android', or 'web'
        ready: false,
        pushToken: null
    };

    if (!isCapacitor) {
        // Running as PWA — no bridge needed, web APIs handle everything
        window.MoonSyncNative.ready = true;
        console.log('[MoonSync] Running as PWA (web mode)');
        return;
    }

    console.log('[MoonSync] Running as native app on: ' + platform);

    // ══════════════════════════════════════════
    // PUSH NOTIFICATIONS (FCM / APNs)
    // ══════════════════════════════════════════

    var PushNotifications = null;
    try {
        PushNotifications = window.Capacitor.Plugins.PushNotifications;
    } catch(e) {}

    /**
     * Register for push notifications.
     * Call this after user grants permission.
     * Returns a promise that resolves with the FCM/APNs token.
     */
    window.MoonSyncNative.registerPush = function() {
        if (!PushNotifications) {
            console.warn('[MoonSync] PushNotifications plugin not available');
            return Promise.reject('Plugin not available');
        }

        return new Promise(function(resolve, reject) {
            // Request permission first
            PushNotifications.requestPermissions().then(function(result) {
                if (result.receive === 'granted') {
                    // Register with OS
                    PushNotifications.register();
                } else {
                    reject('Permission denied');
                }
            }).catch(reject);

            // Listen for registration success
            PushNotifications.addListener('registration', function(token) {
                console.log('[MoonSync] Push token: ' + token.value);
                window.MoonSyncNative.pushToken = token.value;
                // Store for later use (send to your server)
                localStorage.setItem('pushToken', token.value);
                localStorage.setItem('pushPlatform', platform);
                resolve(token.value);
            });

            // Registration error
            PushNotifications.addListener('registrationError', function(error) {
                console.error('[MoonSync] Push registration error:', error);
                reject(error);
            });

            // Notification received while app is in foreground
            PushNotifications.addListener('pushNotificationReceived', function(notification) {
                console.log('[MoonSync] Push received (foreground):', notification);
                _handlePushForeground(notification);
            });

            // User tapped on a notification
            PushNotifications.addListener('pushNotificationActionPerformed', function(action) {
                console.log('[MoonSync] Push action:', action);
                _handlePushTap(action.notification);
            });
        });
    };

    /**
     * Handle foreground push: show in-app banner
     */
    function _handlePushForeground(notification) {
        var title = notification.title || 'Astro Currents';
        var body = notification.body || '';
        var data = notification.data || {};

        // Create in-app notification banner
        var banner = document.createElement('div');
        banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;padding:12px 16px;padding-top:max(12px,env(safe-area-inset-top));background:linear-gradient(135deg,rgba(15,17,55,0.98),rgba(30,20,70,0.98));border-bottom:2px solid rgba(102,126,234,0.5);box-shadow:0 4px 20px rgba(0,0,0,0.5);animation:slideDown 0.3s ease;cursor:pointer;';
        banner.innerHTML = '<div style="display:flex;align-items:center;gap:10px;">' +
            '<span style="font-size:1.3em;">🌙</span>' +
            '<div style="flex:1;min-width:0;">' +
            '<div style="font-weight:700;font-size:0.85em;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + title + '</div>' +
            '<div style="font-size:0.78em;color:rgba(255,255,255,0.6);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + body + '</div>' +
            '</div>' +
            '<span style="color:rgba(255,255,255,0.3);font-size:1.1em;padding:4px;">✕</span>' +
            '</div>';

        banner.onclick = function() {
            banner.style.opacity = '0';
            banner.style.transition = 'opacity 0.3s';
            setTimeout(function() { if (banner.parentNode) banner.remove(); }, 300);
            // Navigate based on notification data
            if (data.screen) _navigateToScreen(data.screen);
        };

        document.body.appendChild(banner);

        // Auto-dismiss after 5 seconds
        setTimeout(function() {
            if (banner.parentNode) {
                banner.style.opacity = '0';
                banner.style.transition = 'opacity 0.3s';
                setTimeout(function() { if (banner.parentNode) banner.remove(); }, 300);
            }
        }, 5000);

        // Store in notification history
        _storeNotification(title, body, data);
    }

    /**
     * Handle push tap: navigate to relevant screen
     */
    function _handlePushTap(notification) {
        var data = notification.data || {};
        if (data.screen) _navigateToScreen(data.screen);
    }

    function _navigateToScreen(screen) {
        switch(screen) {
            case 'lunar': if (typeof switchToLunarMode === 'function') switchToLunarMode(); break;
            case 'solar': if (typeof switchToSolarMode === 'function') switchToSolarMode(); break;
            case 'astro': if (typeof switchToPersonalMode === 'function') switchToPersonalMode(); break;
            case 'social': if (typeof switchToSocialMode === 'function') switchToSocialMode(); break;
            case 'gregorian': if (typeof switchToGregorianMode === 'function') switchToGregorianMode(); break;
        }
    }

    function _storeNotification(title, body, data) {
        try {
            var hist = JSON.parse(localStorage.getItem('notifHistory') || '[]');
            var now = new Date();
            hist.unshift({
                title: title,
                body: body,
                data: data,
                timestamp: now.toISOString(),
                localDate: now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0')
            });
            if (hist.length > 50) hist = hist.slice(0, 50);
            localStorage.setItem('notifHistory', JSON.stringify(hist));
        } catch(e) {}
    }

    // ══════════════════════════════════════════
    // GEOLOCATION (Native GPS)
    // ══════════════════════════════════════════

    var Geolocation = null;
    try {
        Geolocation = window.Capacitor.Plugins.Geolocation;
    } catch(e) {}

    /**
     * Get current position using native GPS.
     * Falls back to web API if plugin unavailable.
     */
    window.MoonSyncNative.getCurrentPosition = function(opts) {
        if (!Geolocation) {
            // Fallback to web API
            return new Promise(function(resolve, reject) {
                navigator.geolocation.getCurrentPosition(
                    function(pos) { resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude, accuracy: pos.coords.accuracy }); },
                    reject,
                    opts || { enableHighAccuracy: true, timeout: 10000 }
                );
            });
        }

        return Geolocation.getCurrentPosition(opts || {
            enableHighAccuracy: true,
            timeout: 10000
        }).then(function(pos) {
            return { lat: pos.coords.latitude, lon: pos.coords.longitude, accuracy: pos.coords.accuracy };
        });
    };

    /**
     * Watch position changes (for compass, etc.)
     */
    window.MoonSyncNative.watchPosition = function(callback, opts) {
        if (!Geolocation) {
            // Fallback
            var watchId = navigator.geolocation.watchPosition(
                function(pos) { callback({ lat: pos.coords.latitude, lon: pos.coords.longitude, accuracy: pos.coords.accuracy }); },
                function(err) { console.warn('[MoonSync] Geo error:', err); },
                opts || { enableHighAccuracy: true }
            );
            return { remove: function() { navigator.geolocation.clearWatch(watchId); } };
        }

        return Geolocation.watchPosition(opts || { enableHighAccuracy: true }, function(pos, err) {
            if (pos) callback({ lat: pos.coords.latitude, lon: pos.coords.longitude, accuracy: pos.coords.accuracy });
        });
    };

    // ══════════════════════════════════════════
    // DEVICE MOTION (Compass / Accelerometer)
    // ══════════════════════════════════════════

    var Motion = null;
    try {
        Motion = window.Capacitor.Plugins.Motion;
    } catch(e) {}

    /**
     * Start listening to device orientation (compass heading).
     * Provides alpha (compass heading), beta (tilt front/back), gamma (tilt left/right).
     */
    window.MoonSyncNative.watchOrientation = function(callback) {
        if (!Motion) {
            // Fallback to web DeviceOrientation API
            var handler = function(e) {
                callback({
                    alpha: e.alpha, // compass heading (0-360)
                    beta: e.beta,   // tilt front/back (-180 to 180)
                    gamma: e.gamma, // tilt left/right (-90 to 90)
                    webkitCompassHeading: e.webkitCompassHeading || null
                });
            };
            window.addEventListener('deviceorientation', handler);
            return { remove: function() { window.removeEventListener('deviceorientation', handler); } };
        }

        return Motion.addListener('orientation', function(event) {
            callback({
                alpha: event.alpha,
                beta: event.beta,
                gamma: event.gamma,
                webkitCompassHeading: null
            });
        });
    };

    /**
     * Start listening to accelerometer data.
     */
    window.MoonSyncNative.watchAcceleration = function(callback) {
        if (!Motion) {
            var handler = function(e) {
                callback({ x: e.accelerationIncludingGravity.x, y: e.accelerationIncludingGravity.y, z: e.accelerationIncludingGravity.z });
            };
            window.addEventListener('devicemotion', handler);
            return { remove: function() { window.removeEventListener('devicemotion', handler); } };
        }

        return Motion.addListener('accel', function(event) {
            callback({ x: event.acceleration.x, y: event.acceleration.y, z: event.acceleration.z });
        });
    };

    // ══════════════════════════════════════════
    // HAPTICS
    // ══════════════════════════════════════════

    var Haptics = null;
    try {
        Haptics = window.Capacitor.Plugins.Haptics;
    } catch(e) {}

    window.MoonSyncNative.vibrate = function(style) {
        if (!Haptics) {
            // Fallback to web vibrate
            if (navigator.vibrate) navigator.vibrate(style === 'heavy' ? 100 : 30);
            return;
        }
        switch(style) {
            case 'heavy': Haptics.impact({ style: 'HEAVY' }); break;
            case 'medium': Haptics.impact({ style: 'MEDIUM' }); break;
            case 'light': Haptics.impact({ style: 'LIGHT' }); break;
            case 'success': Haptics.notification({ type: 'SUCCESS' }); break;
            case 'warning': Haptics.notification({ type: 'WARNING' }); break;
            case 'error': Haptics.notification({ type: 'ERROR' }); break;
            default: Haptics.impact({ style: 'LIGHT' }); break;
        }
    };

    // ══════════════════════════════════════════
    // STATUS BAR
    // ══════════════════════════════════════════

    var StatusBar = null;
    try {
        StatusBar = window.Capacitor.Plugins.StatusBar;
    } catch(e) {}

    if (StatusBar) {
        StatusBar.setStyle({ style: 'DARK' }).catch(function(){});
        StatusBar.setBackgroundColor({ color: '#07092a' }).catch(function(){});
    }

    // ══════════════════════════════════════════
    // APP LIFECYCLE
    // ══════════════════════════════════════════

    var App = null;
    try {
        App = window.Capacitor.Plugins.App;
    } catch(e) {}

    if (App) {
        // Handle back button on Android
        App.addListener('backButton', function(data) {
            // Check if any modal is open — close it instead of exiting
            var modals = document.querySelectorAll('.modal.show, [id$="Modal"].show, [id$="Modal"][style*="display: flex"], [id$="Modal"][style*="display:flex"]');
            var closedOne = false;
            modals.forEach(function(m) {
                if (!closedOne) {
                    m.classList.remove('show');
                    m.style.display = 'none';
                    closedOne = true;
                }
            });

            // Check AI chat
            var aiChat = document.getElementById('aiChatModal');
            if (!closedOne && aiChat && aiChat.classList.contains('open')) {
                aiChat.classList.remove('open');
                closedOne = true;
            }

            // If nothing was closed and we can go back, exit
            if (!closedOne) {
                if (data.canGoBack) {
                    window.history.back();
                } else {
                    App.exitApp();
                }
            }
        });

        // Resume: refresh data when app comes back to foreground
        App.addListener('appStateChange', function(state) {
            if (state.isActive) {
                console.log('[MoonSync] App resumed — refreshing...');
                // Trigger a calendar refresh if the function exists
                if (typeof renderCalendar === 'function') {
                    try { renderCalendar(); } catch(e) {}
                }
            }
        });
    }

    // ══════════════════════════════════════════
    // KEYBOARD
    // ══════════════════════════════════════════

    var Keyboard = null;
    try {
        Keyboard = window.Capacitor.Plugins.Keyboard;
    } catch(e) {}

    if (Keyboard) {
        Keyboard.addListener('keyboardWillShow', function(info) {
            document.body.style.paddingBottom = info.keyboardHeight + 'px';
        });
        Keyboard.addListener('keyboardWillHide', function() {
            document.body.style.paddingBottom = '';
        });
    }

    // ══════════════════════════════════════════
    // NETWORK STATUS
    // ══════════════════════════════════════════

    var Network = null;
    try {
        Network = window.Capacitor.Plugins.Network;
    } catch(e) {}

    if (Network) {
        Network.addListener('networkStatusChange', function(status) {
            console.log('[MoonSync] Network:', status.connected ? 'online' : 'offline');
            window.MoonSyncNative.isOnline = status.connected;
            // Show offline banner
            var existing = document.getElementById('offlineBanner');
            if (!status.connected) {
                if (!existing) {
                    var banner = document.createElement('div');
                    banner.id = 'offlineBanner';
                    banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:99999;padding:8px;background:rgba(255,107,107,0.9);color:#fff;text-align:center;font-size:0.8em;font-weight:600;';
                    banner.textContent = (typeof currentLang !== 'undefined' && currentLang === 'es') ? '📡 Sin conexión — algunos datos pueden no estar actualizados' : '📡 Offline — some data may not be up to date';
                    document.body.appendChild(banner);
                }
            } else {
                if (existing) existing.remove();
            }
        });

        // Check initial status
        Network.getStatus().then(function(status) {
            window.MoonSyncNative.isOnline = status.connected;
        }).catch(function(){});
    }

    // ══════════════════════════════════════════
    // SPLASH SCREEN
    // ══════════════════════════════════════════

    var SplashScreen = null;
    try {
        SplashScreen = window.Capacitor.Plugins.SplashScreen;
    } catch(e) {}

    // Hide splash after app is fully loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            if (SplashScreen) {
                SplashScreen.hide().catch(function(){});
            }
            window.MoonSyncNative.ready = true;
            console.log('[MoonSync] Native bridge ready ✓');
        }, 500);
    });

    // ══════════════════════════════════════════
    // AUTO-REGISTER PUSH (if user had previously granted permission)
    // ══════════════════════════════════════════

    if (PushNotifications && localStorage.getItem('pushToken')) {
        // Re-register silently on app launch
        setTimeout(function() {
            PushNotifications.requestPermissions().then(function(result) {
                if (result.receive === 'granted') {
                    PushNotifications.register();
                }
            }).catch(function(){});
        }, 2000);
    }

})();
