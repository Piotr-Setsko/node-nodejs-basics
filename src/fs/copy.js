import { mkdir, readdir, copyFile, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

export const copy = async () => {
  try {
    const ____dirname = path.dirname(fileURLToPath(import.meta.url))
    const pathDir = path.join(____dirname, '/files');
    const pathNewDir = path.join(____dirname, '/files_copy');
    
    const dir = access(pathDir);
    const newDir = mkdir(pathNewDir);
    const files = readdir(pathDir);

    await Promise.all([dir, newDir, files]).then((data) => {
      for (const file of data[2])
        copyFile(`${pathDir}/${file}`, `${pathNewDir}/${file}`);
    });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

copy();
