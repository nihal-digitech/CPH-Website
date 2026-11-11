import { readdir } from 'node:fs/promises';
import { extname, join, parse } from 'node:path';
import sharp from 'sharp';

const directories = ['public/images/categories', 'public/images/showroom'];
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png']);

async function optimiseDirectory(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const sources = entries
    .filter((entry) => entry.isFile() && supportedExtensions.has(extname(entry.name).toLowerCase()))
    .map((entry) => join(directory, entry.name));

  await Promise.all(
    sources.map(async (source) => {
      const destination = join(directory, `${parse(source).name}.webp`);
      await sharp(source)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 82, effort: 5 })
        .toFile(destination);
      console.log(`Optimised ${source} → ${destination}`);
    }),
  );
}

await Promise.all(directories.map(optimiseDirectory));
