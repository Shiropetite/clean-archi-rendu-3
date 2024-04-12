import { calculate } from "./calculate";

export const getOperationLabel = (operation: string): string => {
  if (operation === '+') {
    return 'addition';
  }
  if (operation === '*') {
    return 'multiplication';
  }
  return '';
}

export const createMessage = (arrayNumber: number[], operation: string): string => {
  let message = `        ${arrayNumber[0]}\n`;

  for (let i = 1; i < arrayNumber.length; i++) {
    const currentResult = calculate(operation, arrayNumber.slice(0, i + 1));
    message += `        ${operation}${arrayNumber[i]} (= ${currentResult})\n`;
  }
  message += `        -------\n`;
  message += `total = ${calculate(operation, arrayNumber)} (${getOperationLabel(operation)})`;
  return message;
}

export const showMessage = (arrayNumber: number[], operation: string): void => {
  const message = createMessage(arrayNumber, operation);
  console.log(message);
};