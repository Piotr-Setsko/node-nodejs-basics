import { rename as renameFs, access } from 'fs/promises';

export const rename = async () => {
  const oldPath = 'files/wrongFilename.txt';
  const newPath = 'files/properFilename.md';

  try {
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
