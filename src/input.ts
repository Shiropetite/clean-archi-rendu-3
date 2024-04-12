
import * as fs from 'fs';

export const getArgs = (args: string[]) => {
  return {
    fileName: args[1],
    operation: args[2], 
  }
}

export const verifyArgs = (args: string[]): void => {
  if (args.length === 0) {
    throw new Error('No arguments provided');
  }

  if (args.length > 3) {
    throw new Error('Too many arguments provided');
  }

  if (args[0] !== 'calc') {
    throw new Error('Invalid operation');
  }

  if (!['+', '*'].includes(args[2])) {
    throw new Error('Invalid operation');
  }
};

export const readCsv = (fileName: string): string => {
  return fs.readFileSync(fileName, 'utf-8');
};

export const parseDataToArrayNumber = (data: string): number[] => {
  return data.split('\n').join('').split('\r').map(Number);
};

