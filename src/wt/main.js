import { Worker, isMainThread } from 'worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';
import os from 'os';

export const performCalculations = async () => {
  try {
    const firstNumber = 10;
    const cpuCores = os.cpus();
    const ____dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathWorker = path.join(
      ____dirname,
      '/worker.js'
    );

    await Promise.all(
      cpuCores.map((item, i) => {
        let number = firstNumber + i;
        return new Promise((res, rej) => {
          const worker = new Worker(pathWorker, {
            workerData: { n: number }
          });
          worker.once('message', (result) =>
            res({ status: 'resolved', data: result })
          );
          worker.on('error', (error) => rej({ status: 'error', data: null }));
        });
      })
    ).then((data) => {
      console.log(data);
    });
  } catch (error) {
    console.log(error);
  }
};

performCalculations();
