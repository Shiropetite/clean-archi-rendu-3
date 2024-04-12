export const calculate = (operation: string, arrayNumber: number[]): number => {
  if (operation === '+') {
    return calculateSum(arrayNumber);
  } 
  return calculateTimes(arrayNumber);
}

export const calculateSum = (data: number[]): number => {
  return data.reduce((acc, curr) => acc + curr, 0);
}

export const calculateTimes = (data: number[]): number => {
  return data.reduce((acc, curr) => acc * curr, 1);
}