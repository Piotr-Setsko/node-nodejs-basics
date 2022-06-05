import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

export const spawnChildProcess = async (args) => {
  try {
    const ____dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathFile = path.join(____dirname, '/files/script.js');
    fork(pathFile, [...args]);
  } catch (error) {
    console.log(error);
  }
};

spawnChildProcess(process.argv);
