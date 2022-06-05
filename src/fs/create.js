import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

export const create = async () => {
  try {
    const ____dirname = path.dirname(fileURLToPath(import.meta.url))
    const pathFile = path.join(____dirname, '/files/fresh.txt');

    const content = 'I am fresh and young';
    await writeFile(pathFile, content, { flag: 'wx+' });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

create();
