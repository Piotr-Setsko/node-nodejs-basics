import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';
import path from 'path';

export const calculateHash = async () => {
  const ____dirname = path.dirname(fileURLToPath(import.meta.url))
  const pathFile = path.join(____dirname, '/files/fileToCalculateHashFor.txt');
  const hash = createHash('sha256');

  await readFile(pathFile).then((data) => {
    const result = hash.update(data).digest('hex');
    console.log(result);
  });
};

calculateHash();
