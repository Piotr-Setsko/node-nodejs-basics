import { Transform } from 'stream';
import { pipeline } from 'node:stream/promises';

export const transform = async () => {
  try {
    const transformStream = new Transform();
    const input = process.stdin;
    const output = process.stdout;

    transformStream._transform = (chunk, encoding, callback) => {
      transformStream.push(chunk.toString().split('').reverse().join(''));
      callback();
    };

    await pipeline(input, transformStream, output);
  } catch (error) {
    console.log(error);
  }
};

transform();
