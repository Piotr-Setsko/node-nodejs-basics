import { rm } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

export const remove = async () => {
  try {
    const ____dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathFile = path.join(____dirname, '/files/fileToRemove.txt');
    
    await rm(pathFile);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

remove();
