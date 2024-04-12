import { add, subtract } from '../src/calculator';

test('add function adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
});

test('subtract function subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
});