/**
 * Types:
 * 
 * Roll => Number[5]
 * Scorecard => Number[13]
 */

/**
 * Finds the highest scoring play for this roll.
 * @param {Number[5]} roll 
 * @param {Number[13]} scorecard 
 * @returns {[Number, Number]} [play, value]
 */
export function score(roll, scorecard) {
    // Sanity checks. Do the inputs look right?
    if (typeof roll !== 'object' 
        || roll.length != 5
        || typeof scorecard !== 'object'
        || scorecard.length != 13) {
            throw `"score" called with invalid inputs: roll=${roll}, scorecard=${scorecard}`;
    }

    // Step 1: turn the scorecard values into an array that looks like:
    // Type: [play, previouslyScoredValue]
    let scorecardWithIndices = scorecard.map((v, idx) => [idx, v]);

    // Step 2: Filter out the plays we've already scored, then score our new roll on those plays
    // Type: [play, value]
    let scoredPlays = scorecardWithIndices
        .filter(([play, previouslyScoredValue]) => previouslyScoredValue == null)
        .map(([play, _]) => [play, scorePlay(roll, play)]);

    // Step 3: Return the highest scoring play
    let plays = scoredPlays.concat().sort(([play1, score1], [play2, score2]) => score2 - score1);
    let bestPlay = plays[0];
    return bestPlay;
}

export function scorePlay(roll, play) {
    /*
     * Sanity check: do the inputs look right?
     */
    if (typeof roll !== 'object'
        || roll.length !== 5
        || typeof play !== 'number'
        || play > 12
        || play < 0) {
            throw `"scorePlay" called with invalid inputs: roll=${roll}, play=${play}`;
        }

    let score;

    switch (play) {
        /*
         * UPPER SECTION
         */
        case 0: // Aces
        score = roll.filter(v => v === 1).length * 1;
        break;

        case 1: // Twos
        score = roll.filter(v => v === 2).length * 2;
        break;

        case 2: // Threes
        score = roll.filter(v => v === 3).length * 3;
        break;

        case 3: // Fours
        score = roll.filter(v => v === 4).length * 4;
        break;

        case 4: // Fives
        score = roll.filter(v => v === 5).length * 5;
        break;

        case 5: // Sixes
        score = roll.filter(v => v === 6).length * 6;
        break;

        /*
         * LOWER SECTION
         */
        case 6: // 3 of a kind
        // Any 3 of a kinds?
        if (roll.some(v => roll.filter(vv => vv === v).length >= 3)) {
            score = roll.reduce((a, b) => a + b, 0);
        } else {
            score = 0;
        }
        break;

        case 7: // 4 of a kind
        // Any 4 of a kinds?
        if (roll.some(v => roll.filter(vv => vv === v).length >= 4)) {
            score = roll.reduce((a, b) => a + b, 0);
        } else {
            score = 0;
        }
        break;

        case 8: // Full house
        // Honestly the hardest case
        // Step 1: Are there only 2 values in the roll?
        let values = [...new Set(roll)];
        if (values.length === 2) {
            // Take the count of the first value in the roll
            let count = roll.filter(v => v === values[0]).length;
            // Are there 2 or 3 of it?
            if (count === 2 || count === 3) {
                // That's a full house!
                score = 25;
                break;
            }
        }

        // No full house :(
        score = 0;
        break;

        case 9: // Small straight
        // Step 1: sort values in roll and find the start of the possible straight
        var sortedRoll = [...new Set(roll.concat().sort())];
        var start = sortedRoll[0];

        // Step 2: Is there a small straight?
        if (sortedRoll[1] === start + 1
            && sortedRoll[2] === start + 2
            && sortedRoll[3] === start + 3) {
                score = 30;
        } else {
            score = 0;
        }

        break;

        case 10: // Large straight
        // Step 1: sort values in roll and find the start of the possible straight
        var sortedRoll = [...new Set(roll.concat().sort())];
        var start = sortedRoll[0];

        // Step 2: Is there a large straight?
        if (sortedRoll[1] === start + 1
            && sortedRoll[2] === start + 2
            && sortedRoll[3] === start + 3
            && sortedRoll[4] === start + 4) {
                score = 40;
        } else {
            score = 0;
        }

        break;

        case 11: // Yahtzee
        // Step 1: how many values are there in the roll?
        let numValues = [...new Set(roll)].length;
        // step 2: If it's just 1, then we're good!
        if (numValues === 1) {
            score = 50;
        } else {
            score = 0;
        }
        break;

        case 12: // Chance
        score = roll.reduce((a, b) => a + b, 0);
        break;
    }

    return score;
}