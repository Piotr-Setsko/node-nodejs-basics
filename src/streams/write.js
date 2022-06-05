import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import path from 'path';

export const write = async () => {
  try {
    const ____dirname = path.dirname(fileURLToPath(import.meta.url))
    const pathFile = path.join(____dirname, '/files/fileToWrite.txt');
    const input = process.stdin;
    const output = createWriteStream(pathFile);

    await pipeline(input, output);    
  } catch (error) {
    console.log(error);
  }
};

write();
