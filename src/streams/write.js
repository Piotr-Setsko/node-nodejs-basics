import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

export const write = async () => {
  try {
    const path = './files/fileToWrite.txt';
    const input = process.stdin;
    const output = createWriteStream(path);

    await pipeline(input, output);    
  } catch (error) {
    console.log(error);
  }
};

write();
