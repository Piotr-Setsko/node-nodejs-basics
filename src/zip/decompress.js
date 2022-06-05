import { createUnzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';

export const decompress = async () => {
  try {
    const inputPath = './files/archive.gz';
    const outputPath = './files/fileToCompress.txt';
    const unzip = createUnzip();
    const input = createReadStream(inputPath);
    const output = createWriteStream(outputPath);

    await pipeline(input, unzip, output);
  } catch (error) {
    console.log(error);
  }
};

decompress();