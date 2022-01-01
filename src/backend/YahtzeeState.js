export default class YahtzeeState {

    /**
     * Array of length 6. Represents the scores for
     * the upper section.
     * 
     * upper[0] is the aces score
     * upper[1] is the twos score
     * ...
     * upper[5] is the sixes score
     */
    upper = [null, null, null, null, null, null];

    /**
     * Array of length 7. Represents the scores for
     * the lower section.
     * 
     * lower[0] is the 3 of a kind score
     * lower[1] is the 4 of a kind score
     * lower[2] is the full house score
     * lower[3] is the small straight score
     * lower[4] is the large straight score
     * lower[5] is the yahtzee score
     * lower[6] is the chance score
     */
    lower = [null, null, null, null, null, null];

    constructor(upper, lower) {
        if (upper) {
            this.upper = upper;
        }
        if (lower) {
            this.lower = lower;
        }
    }

    /**
     * Convert a backend scorecard into a YahtzeeState.
     * @param {Number[13]} card 
     * @returns {YahtzeeState}
     */
    static fromBackend(card) {
        let yahtzeeState = new YahtzeeState();
        yahtzeeState.upper = card.slice(0, 6);
        yahtzeeState.lower = card.slice(6);
        return yahtzeeState;
    }

}