import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

export const calculateHash = async () => {
  const path = './files/fileToCalculateHashFor.txt';
  const hash = createHash('sha256');

  await readFile(path).then((data) => {
    const result = hash.update(data).digest('hex');
    console.log(result);
  });
};

calculateHash();
