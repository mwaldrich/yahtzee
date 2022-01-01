export function playToString(play) {
    switch (play) {
        case 0: return "Aces";
        case 1: return "Twos";
        case 2: return "Threes";
        case 3: return "Fours";
        case 4: return "Fives";
        case 5: return "Sixes";
        case 6: return "Three of a Kind";
        case 7: return "Four of a Kind";
        case 8: return "Full House";
        case 9: return "Small Straight";
        case 10: return "Large Straight";
        case 11: return "Yahtzee!";
        case 12: return "Chance";
    }
}