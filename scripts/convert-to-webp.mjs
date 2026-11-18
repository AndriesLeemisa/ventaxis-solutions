import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');

async function convertAll() {
  const files = fs.readdirSync(imagesDir);
  console.log(`Found ${files.length} files in ${imagesDir}`);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const baseName = path.basename(file, ext);
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(imagesDir, `${baseName}.webp`);

      const inputStats = fs.statSync(inputPath);
      await sharp(inputPath)
        .webp({ quality: 85, effort: 4 })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const saving = (((inputStats.size - outputStats.size) / inputStats.size) * 100).toFixed(1);
      console.log(`✓ ${file} (${(inputStats.size / 1024).toFixed(0)} KB) -> ${baseName}.webp (${(outputStats.size / 1024).toFixed(0)} KB) [${saving}% saved]`);
    }
  }
}

convertAll().catch(console.error);
