const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\LOQ\\.gemini\\antigravity-ide\\brain\\5a4a07bd-787e-4e26-84be-e20de369da7f';
const maps = [
  ['phuket_krabi_1787395972446.jpg', 'public/images/destinations/phuket.jpg'],
  ['pattaya_beach_1787395997700.jpg', 'public/images/destinations/pattaya.jpg'],
  ['langkawi_skybridge_1787396019317.jpg', 'public/images/destinations/langkawi.jpg'],
  ['danang_hands_bridge_1787396103302.jpg', 'public/images/destinations/danang.jpg'],
  ['halong_bay_junk_1787396122324.jpg', 'public/images/destinations/hanoi.jpg'],
  ['delhi_india_gate_1787396148383.jpg', 'public/images/destinations/delhi-manali.jpg'],
  ['kasol_parvati_valley_1787396172553.jpg', 'public/images/destinations/kasol.jpg'],
  ['jaipur_amer_fort_1787396196622.jpg', 'public/images/destinations/golden-triangle.jpg'],
  ['delhi_red_fort_1787396223642.jpg', 'public/images/college/agra-delhi.jpg'],
  ['gulmarg_snow_gondola_1787396251198.jpg', 'public/images/college/kashmir-shikara.jpg'],
  ['jaisalmer_camel_safari_1787396279068.jpg', 'public/images/college/rajasthan-forts.jpg']
];

for (const [src, dest] of maps) {
  const srcPath = path.join(srcDir, src);
  const destPath = path.resolve(__dirname, '..', dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> ${dest}`);
  } else {
    console.log(`Not found: ${srcPath}`);
  }
}
