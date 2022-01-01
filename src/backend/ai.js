import { score, scorePlay } from "./scoring";

/**
 * Types:
 * 
 * Roll => Number[5]
 * Scorecard => Number[13]
 */

/**
 * Generate a random single die roll.
 * 
 * () -> Number
 */
export function randomDie() {
    //        random num between 0 and 5 + 1 = random num between 1 and 6
    return Math.floor(Math.random() * 6) + 1;
}

/**
 * Rerolls a given roll, keeping the dice specified in the keep bitmask.
 * A new roll is returned, and the original is not mutated.
 * @param {Number[5]} roll 
 * @param {Boolean[5]} keep 
 * @returns {Number[5]} new roll
 */
export function reroll(roll, keep) {
    let newRoll = roll.concat();

    for (let i = 0; i < 5; i++) {
        if (!keep[i]) {
            newRoll[i] = randomDie();
        }
    }

    return newRoll;
}

/**
 * Generate all the different combinations of keeping/rerolling dice in your hand.
 * There are exactly 32 different ways to reroll.
 * 
 * @returns Array<Array<Boolean>>
 */
export function allKeepMasks() {
    let keepMasks = [];

    for (let i = 0; i < 32 /* 2^5 */; i++) {
        keepMasks.push([
            (i & 0b00001) === 1,
            ((i & 0b00010) >> 1) === 1,
            ((i & 0b00100) >> 2) === 1,
            ((i & 0b01000) >> 3) === 1,
            ((i & 0b10000) >> 4) === 1,
        ]);
    }

    return keepMasks;
}

