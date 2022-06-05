import { readFile } from 'fs/promises';

export const read = async () => {
  try {
    const path = 'files/fileToRead.txt';
    await readFile(path, 'utf8').then((data) => {
      console.log(data);
    });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

read();
