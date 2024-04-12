import { createMessage } from "../src/output";

test('final message', () => {
  const arrayNumber = [1, 1];
  expect(createMessage(arrayNumber, '+')).toBe('        1\n        +1 (= 2)\n        -------\ntotal = 2 (addition)');
});
