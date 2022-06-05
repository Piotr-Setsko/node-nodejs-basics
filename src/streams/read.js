import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

export const read = async () => {
  try {
    const path = 'files/fileToRead.txt';
    const input = createReadStream(path);
    const output = process.stdout;

    await pipeline(input, output);
  } catch (error) {
    console.log(error);
  }
};

read();
