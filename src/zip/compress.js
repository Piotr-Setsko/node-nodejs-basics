import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';


export const compress = async () => {
  try {
    const ____dirname = path.dirname(fileURLToPath(import.meta.url))
    const inputPath = path.join(____dirname, '/files/fileToCompress.txt');
    const outputPath = path.join(____dirname, '/files/archive.gz');
    const gzip = createGzip();
    const input = createReadStream(inputPath);
    const output = createWriteStream(outputPath);

    await pipeline(input, gzip, output);
  } catch (error) {
    console.log(error);
  }
};

compress();
