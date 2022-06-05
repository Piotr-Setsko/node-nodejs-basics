import { writeFile } from 'fs/promises';

export const create = async () => {
  try {
    const content = 'I am fresh and young';
    await writeFile('./files/fresh.txt', content, { flag: 'wx+' });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

create();
