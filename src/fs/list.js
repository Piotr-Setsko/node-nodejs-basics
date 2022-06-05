import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

export const list = async () => {
  try {
    const ____dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathDir = path.join(____dirname, '/files');
    
    await readdir(pathDir).then((files) => {
      for (const file of files) console.log(file);
    });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

list();
