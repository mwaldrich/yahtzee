

// Testing

import { score, scorePlay } from "./scoring";

// Aces
test('5 aces', () => {
    expect(scorePlay([1, 1, 1, 1, 1], 0)).toBe(5);
});
test('4 aces', () => {
    expect(scorePlay([1, 3, 1, 1, 1], 0)).toBe(4);
});
test('mixed aces', () => {
    expect(scorePlay([6, 1, 5, 4, 1], 0)).toBe(2);
});
test('no aces', () => {
    expect(scorePlay([6, 5, 4, 3, 2], 0)).toBe(0);
});

// Sixes
test('5 sixes', () => {
    expect(scorePlay([6, 6, 6, 6, 6], 5)).toBe(30);
});
test('4 sixes', () => {
    expect(scorePlay([6, 5, 6, 6, 6], 5)).toBe(24);
});
test('mixed sixes', () => {
    expect(scorePlay([1, 4, 6, 3, 2], 5)).toBe(6);
});
test('no sixes', () => {
    expect(scorePlay([5, 4, 4, 2, 1], 5)).toBe(0);
});

// Play #6: 3 of a kind
test('Play #6: 3 of a kind: 6s', () => {
    expect(scorePlay([1, 1, 6, 6, 6], 6)).toBe(20);
});
test('Play #6: 3 of a kind: 2s', () => {
    expect(scorePlay([2, 1, 2, 1, 2], 6)).toBe(8);
});
test('Play #6: 3 of a kind: no 3 of a kind', () => {
    expect(scorePlay([5, 5, 4, 4, 1], 6)).toBe(0);
});

// Play #7: 4 of a kind
test('Play #7: 4 of a kind: 6s', () => {
    expect(scorePlay([6, 1, 6, 6, 6], 7)).toBe(25);
});
test('Play #7: 4 of a kind: 2s', () => {
    expect(scorePlay([2, 2, 1, 2, 2], 7)).toBe(9);
});
test('Play #7: 4 of a kind: no 4 of a kind', () => {
    expect(scorePlay([5, 5, 4, 5, 4], 7)).toBe(0);
});

// Play #8: Full house
test('Play #8: Full house: 1s and 2s', () => {
    expect(scorePlay([1, 2, 2, 1, 1], 8)).toBe(25);
});
test('Play #8: Full house: 5s and 3s', () => {
    expect(scorePlay([5, 3, 5, 3, 5], 8)).toBe(25);
});
test('Play #8: Full house: no full house', () => {
    expect(scorePlay([5, 5, 3, 3, 2], 8)).toBe(0);
});

// Play #9: Small straight
test('Play #9: Small straight: starting at 1', () => {
    expect(scorePlay([4, 3, 2, 6, 1], 9)).toBe(30);
});
test('Play #9: Small straight: starting at 2', () => {
    expect(scorePlay([5, 2, 4, 3, 2], 9)).toBe(30);
});
test('Play #9: Small straight: starting at 3', () => {
    expect(scorePlay([5, 6, 4, 3, 6], 9)).toBe(30);
});
test('Play #9: Small straight: no small straight', () => {
    expect(scorePlay([1, 2, 3, 5, 6], 9)).toBe(0);
});

// Play #10: Large straight
test('Play #10: Large straight: starting at 1', () => {
    expect(scorePlay([1, 5, 4, 3, 2], 10)).toBe(40);
});
test('Play #10: Large straight: starting at 2', () => {
    expect(scorePlay([6, 2, 5, 4, 3], 10)).toBe(40);
});
test('Play #10: Large straight: no large straight', () => {
    expect(scorePlay([1, 2, 3, 5, 6], 10)).toBe(0);
});

// Play #11: Yahtzee!!!!!!!!!!!
test('Play #11: Yahtzee!!!!!!: 1s', () => {
    expect(scorePlay([1, 1, 1, 1, 1], 11)).toBe(50);
});
test('Play #11: Yahtzee!!!!!!: 2s', () => {
    expect(scorePlay([2, 2, 2, 2, 2], 11)).toBe(50);
});
test('Play #11: Yahtzee!!!!!!: 3s', () => {
    expect(scorePlay([3, 3, 3, 3, 3], 11)).toBe(50);
});
test('Play #11: Yahtzee!!!!!!: 4s', () => {
    expect(scorePlay([4, 4, 4, 4, 4], 11)).toBe(50);
});
test('Play #11: Yahtzee!!!!!!: 5s', () => {
    expect(scorePlay([5, 5, 5, 5, 5], 11)).toBe(50);
});
test('Play #11: Yahtzee!!!!!!: 6s', () => {
    expect(scorePlay([6, 6, 6, 6, 6], 11)).toBe(50);
});
test('Play #11: Yahtzee!!!!!!: no yahtzee', () => {
    expect(scorePlay([1, 2, 3, 5, 6], 11)).toBe(0);
});
test('Play #11: Yahtzee!!!!!!: 4 of a kind', () => {
    expect(scorePlay([6, 6, 6, 6, 1], 11)).toBe(0);
});

// Play #12: Chance
test('Play #12: Chance: #1', () => {
    expect(scorePlay([1, 1, 1, 1, 1], 12)).toBe(5);
});
test('Play #12: Chance: #2', () => {
    expect(scorePlay([6, 2, 5, 4, 3], 12)).toBe(20);
});
test('Play #12: Chance: #3', () => {
    expect(scorePlay([6, 6, 6, 6, 6], 12)).toBe(30);
});
test('Play #12: Chance: #4', () => {
    expect(scorePlay([5, 4, 3, 2, 1], 12)).toBe(15);
});