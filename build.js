#!/usr/bin/env node
/**
 * Astro Currents — Build script for Capacitor
 * Copies all web assets to www/ directory
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const WWW = path.join(ROOT, 'www');

// Files to copy to www/
const FILES = [
    'index.html',
    'lunar-data.js',
    'ai-adapter.js',
    'custom-messages.js',
    'knowledge-graph.js',
    'knowledge-graph-part2.js',
    'knowledge-graph-part3.js',
    'learner-profile.js',
    'NEW_PERSONAS.js',
    'PERSONA_6_UNIFICADA.js',
    'manifest.json',
    'sw.js',
    'capacitor-bridge.js'
];

// Directories to copy
const DIRS = ['icons'];

// Ensure www/ exists
if (!fs.existsSync(WWW)) {
    fs.mkdirSync(WWW, { recursive: true });
}

// Copy files
let copied = 0;
FILES.forEach(function(file) {
    var src = path.join(ROOT, file);
    var dst = path.join(WWW, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dst);
        console.log('  ✓ ' + file);
        copied++;
    } else {
        console.log('  ⊘ ' + file + ' (not found, skipping)');
    }
});

// Copy directories recursively
function copyDir(src, dst) {
    if (!fs.existsSync(src)) return 0;
    if (!fs.existsSync(dst)) fs.mkdirSync(dst, { recursive: true });
    var count = 0;
    fs.readdirSync(src).forEach(function(item) {
        var s = path.join(src, item);
        var d = path.join(dst, item);
        if (fs.statSync(s).isDirectory()) {
            count += copyDir(s, d);
        } else {
            fs.copyFileSync(s, d);
            count++;
        }
    });
    return count;
}

DIRS.forEach(function(dir) {
    var n = copyDir(path.join(ROOT, dir), path.join(WWW, dir));
    console.log('  ✓ ' + dir + '/ (' + n + ' files)');
    copied += n;
});

console.log('\n🌙 Build complete: ' + copied + ' files → www/\n');
