import { parseDataToArrayNumber, readCsv } from "../src/input";

test('read csv file', () => {
  const fileName = 'tests/samples/sample1.csv'
  expect(readCsv(fileName)).toBe('1\r\n1');
});

test('parse data to array number', () => {
  const data = '1\r\n1';
  expect(parseDataToArrayNumber(data)).toEqual([1, 1]);
});


test('parse data to array number', () => {
  const data = '1\r\n4\r\n5';
  expect(parseDataToArrayNumber(data)).toEqual([1, 4, 5]);
});
