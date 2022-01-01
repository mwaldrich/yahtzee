import { score, scorePlay } from "./scoring";
import YahtzeeState from "./YahtzeeState";

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

    // 2^5 because:
    // 2 possibilities for each die: keep or reroll?
    // 5 different dice
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


/**
 * Returns a FRESH new roll.
 * @returns Roll
 */
function freshRoll() {
    return reroll([1, 1, 1, 1, 1], [false, false, false, false, false]);
}

export class Backend {
    constructor() {
        this.turnNumber = 1;
        this.rollsRemaining = 3;

        // The initial roll
        this.roll = [1, 1, 1, 1, 1];

        // Empty scorecard
        this.scorecard = [null, null, null, null, null, null, null, null, null, null, null, null, null];
    }

    nextTurn() {
        // have to return: 
        // - scoreCard
        // - currentRoll
        // - currentPlay
        // - goalRoll
        // - goalPlay
        // - actualPlay
        // - rollsRemaining

        let currentPlay, goalRoll, goalPlay, actualPlay;

        // If we are out of rolls, the turn is over!
        if (this.rollsRemaining == 0) {
            currentPlay = score(this.roll, this.scorecard)[0];
            goalRoll = this.roll;
            goalPlay = currentPlay;
            actualPlay = currentPlay;
            this.calculatedPlay = null;

            // process the next turn
            this.processNextTurn();
        } else {
            // If 3 rolls are remaining, start us out with a fresh roll
            if (this.rollsRemaining == 3) {
                this.roll = freshRoll();
            }

            // If there was a previous play calculated, perform it.
            // Then get to work on the next one.
            if (this.calculatedPlay) {
                this.roll = reroll(this.roll, this.calculatedPlay);
            }

            // Find the next play
            let [keep, gRoll, gPlay] = this.minmax();
            goalRoll = gRoll;
            goalPlay = gPlay;
            currentPlay = score(this.roll, this.scorecard)[0];
            this.calculatedPlay = keep;
            actualPlay = null;
            this.rollsRemaining--;
        }

        return [
            YahtzeeState.fromBackend(this.scorecard),
            this.roll,
            currentPlay,
            goalRoll,
            goalPlay,
            actualPlay,
            this.rollsRemaining,
        ];
    }

    /**
     * Performs 1-level min-max on the current yahtzee state.
     * This means analyze the different ways to reroll, and select
     * the one that gives you:
     * 1. the highest minimum
     * 2. the lowest maximum
     * 
     * @returns keep mask, goal roll, and goal play
     */
    minmax() {
        // keepmask -> [[score, roll]]
        let plays = {};


        // Iterate through all keep masks
        let keepMasks = allKeepMasks();
        for (let keepIdx = 0; keepIdx < 32; keepIdx++) {
            let keep = keepMasks[keepIdx];
            plays[keepIdx] = [];

            // Iterate through changing every die value.
            // Calculate the minimum and maximums inside.
            for (let first = 1; first < 6; first++) {
                for (let second = 1; second < 6; second++) {
                    for (let third = 1; third < 6; third++) {
                        for (let fourth = 1; fourth < 6; fourth++) {
                            for (let fifth = 1; fifth < 6; fifth++) {
                                // reroll
                                let r = [
                                    keep[0]? this.roll[0] : first,
                                    keep[1]? this.roll[1] : second,
                                    keep[2]? this.roll[2] : third,
                                    keep[3]? this.roll[3] : fourth,
                                    keep[4]? this.roll[4] : fifth,
                                ];

                                // score
                                let s = score(r, this.scorecard)[1];

                                // add to plays
                                plays[keepIdx].push([s, r])
                            }
                        }
                    }
                }
            }
        }
        // console.error(`Plays: ${JSON.stringify(plays)}`)


        // keepmask -> [[score, roll]]
        // let plays = {};

        // [[keepmask, min, max, goalRoll]]
        let sortedKeeps = [];

        // Figure out minimum and maximum scores for each play
        for (let keepIdx = 0; keepIdx < 32; keepIdx++) {
            let keep = keepMasks[keepIdx];
            let min = Number.MAX_SAFE_INTEGER;
            let max = Number.MIN_SAFE_INTEGER;
            let goalRoll;

            for (let play of plays[keepIdx]) {
                if (play[0] < min) {
                    min = play[0];
                }

                if (play[0] > max) {
                    /* console.log(`New max found play=${JSON.stringify(play)}`) */
                    max = play[0];
                    goalRoll = play[1];
                }
            }

            sortedKeeps.push([keep, min, max, goalRoll]);
        }

        // Find the play with the highest minimum and the lowest maximum
        sortedKeeps
            .sort(([a, min1, max1, c], [d, min2, max2, f]) => {
                /** This is where the magic happens */
                let minDiff = min2 - min1;
                if (minDiff !== 0) {
                    return minDiff;
                } else {
                    return max2 - max1;
                }
            });

        /* console.error(`Sorted keeps: ${JSON.stringify(sortedKeeps, null, 2)}`) */

        // SELECT THE PLAY
        let finalPlay = sortedKeeps[0];

        return [finalPlay[0], finalPlay[3], score(finalPlay[3], this.scorecard)[0]];
    }

    /**
     * Processes a NEW TURN. This means when you are out of rolls and commit
     * your play to the scorecard.
     */
    processNextTurn() {
            // Commit play to scorecard.
            let play = score(this.roll, this.scorecard);
            this.scorecard[play[0]] = play[1];

            // Deal with other state
            this.turnNumber++;
            this.roll = freshRoll();
            this.rollsRemaining = 3;
    }

}
