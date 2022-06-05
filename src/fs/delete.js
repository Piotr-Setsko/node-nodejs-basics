import { rm } from 'fs/promises';

export const remove = async () => {
  const path = 'files/fileToRemove.txt';
  try {
    await rm(path);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

remove();
