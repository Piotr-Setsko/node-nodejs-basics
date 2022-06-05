import { createUnzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

export const decompress = async () => {
  try {
    const ____dirname = path.dirname(fileURLToPath(import.meta.url));
    const inputPath = path.join(____dirname, '/files/archive.gz');
    const outputPath = path.join(____dirname, '/files/fileToCompress.txt');
    const unzip = createUnzip();
    const input = createReadStream(inputPath);
    const output = createWriteStream(outputPath);

    await pipeline(input, unzip, output);
  } catch (error) {
    console.log(error);
  }
};

decompress();
