import { calculate, calculateSum, calculateTimes } from "../src/calculate";

test('calculate sum for 3 number', () => {
    const input = [1, 2, 3]
    expect(calculateSum(input)).toBe(6);
});

test('calculate sum for 4 number', () => {
    const input = [4, 4, 4, 4]
    expect(calculateSum(input)).toBe(16);
});

test('calculate times for 3 number', () => {
    const input = [1, 2, 3]
    expect(calculateTimes(input)).toBe(6);
});

test('calculate sum for 4 number', () => {
    const input = [4, 4, 4, 4]
    expect(calculateTimes(input)).toBe(256);
});

test('calculate support sum', () => {
    const input = [1, 2, 3, 4]
    expect(calculate('+', input)).toBe(10);
})

test('calculate support times', () => {
    const input = [1, 2, 3, 4]
    expect(calculate('*', input)).toBe(24);
})