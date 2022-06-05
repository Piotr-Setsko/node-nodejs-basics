import { mkdir, readdir, copyFile, access, stat } from 'fs/promises';

export const copy = async () => {
  try {
    const dir = access('./files');
    const newDir = mkdir('files_copy');
    const files = readdir('./files');

    await Promise.all([dir, newDir, files]).then((data) => {
      for (const file of data[2])
        copyFile(`files/${file}`, `files_copy/${file}`);
    });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

copy();
