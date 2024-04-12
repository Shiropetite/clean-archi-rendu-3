import { calculate } from "./calculate";
import { showMessage } from "./output";
import { getArgs, parseDataToArrayNumber, readCsv, verifyArgs } from "./input";

const args = process.argv.slice(2);

const processArgs = () => {
  verifyArgs(args);
  const { fileName, operation } = getArgs(args);
  
  const data = readCsv(fileName);
  const arrayNumber = parseDataToArrayNumber(data);

  showMessage(arrayNumber, operation);
};

const main = () => {
  try {
    processArgs();
  } catch (error: any) {
    console.error(error.message);
    process.exit(1);
  }
};

main();