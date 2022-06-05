import { rename as renameFs, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

export const rename = async () => {
  try {
    const ____dirname = path.dirname(fileURLToPath(import.meta.url))
    const oldPath = path.join(____dirname, '/files/wrongFilename.txt');
    const newPath = path.join(____dirname, '/files/properFilename.md');


    await access(newPath).then(
      () => {
        throw new Error('FS operation failed');
      },
      () => {
        return;
      }
    );
    await renameFs(oldPath, newPath);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

rename();
