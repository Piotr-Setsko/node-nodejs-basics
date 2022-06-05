import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';

export const compress = async () => {
  try {
    const inputPath = './files/fileToCompress.txt';
    const outputPath = './files/archive.gz';
    const gzip = createGzip();
    const input = createReadStream(inputPath);
    const output = createWriteStream(outputPath);

    await pipeline(input, gzip, output);
  } catch (error) {
    console.log(error);
  }
};

compress();
