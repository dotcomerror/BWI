const fs = require('fs');

const files = [
  'src/www/js/bonziData.js',
  'src/www/js/bonziDataBees.js',
  'src/www/js/bonziHandler.js',
  'src/www/js/helpers.js',
  'src/www/js/bonzi.es2015',
  'src/www/js/main.js',
  'src/www/js/ads.js',
  'src/www/js/loader.js',
  'src/www/js/touchHandler.js'
];

let combined = '';
files.forEach(f => {
  if (fs.existsSync(f)) {
    combined += fs.readFileSync(f, 'utf8') + '\n';
  }
});

fs.writeFileSync('build/www/js/script.min.js', combined);
console.log('✓ Build complete');
