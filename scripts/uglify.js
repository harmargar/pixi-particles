const fs = require('fs');
const path = require('path');
const UglifyJS = require('uglify-js');

const inputPath = 'bin/phaser-particles.js';
const outputPath = 'bin/Phaser-particles.min.js';

const inputContent = fs.readFileSync(inputPath, 'utf8');

const result = UglifyJS.minify(inputContent, {});

fs.writeFileSync(outputPath, result.code, 'utf8');
