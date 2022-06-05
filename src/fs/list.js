import { readdir } from 'fs/promises';

export const list = async () => {
  try {
    const path = 'files';
    await readdir(path).then((files) => {
      for (const file of files) console.log(file);
    });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

list();
