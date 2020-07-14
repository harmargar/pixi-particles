#!/usr/bin/env node
var fs = require('fs');
var path = require('path');

const dtsFile = path.resolve(`bin/phaser-particles.d.ts`);
let dtsContent = fs.readFileSync(dtsFile, 'utf8');
dtsContent = dtsContent.replace(/namespace phaserparticles/g, 'module Phaser.particles');
fs.writeFileSync(dtsFile, dtsContent, 'utf8');
