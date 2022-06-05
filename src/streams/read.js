import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import path from 'path';

export const read = async () => {
  try {
    const ____dirname = path.dirname(fileURLToPath(import.meta.url))
    const pathFile = path.join(____dirname, '/files/fileToRead.txt');
    const input = createReadStream(pathFile);
    const output = process.stdout;

    await pipeline(input, output);
  } catch (error) {
    console.log(error);
  }
};

read();
