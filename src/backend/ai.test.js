// Testing

import { allKeepMasks, Backend } from "./ai"

test('allKeepMasks looks ok', () => {
    const masks = allKeepMasks();
    console.log(`All Keep Masks: ${JSON.stringify(masks)}`)
    expect(masks.length).toBe(32);

    let totalTrues = 0;
    masks.forEach(mask => mask.forEach(v => {
        if (v) {
            totalTrues += 1;
        }
    }))
    expect(totalTrues).toBe(80);
})

function printNextTurnState(state) {
    console.log(`Backend state:
    scorecard\t=> ${JSON.stringify(state[0])}
    current roll\t=> ${JSON.stringify(state[1])}
    current play\t=> ${JSON.stringify(state[2])}
    goal roll\t=> ${JSON.stringify(state[3])}
    goal play\t=> ${JSON.stringify(state[4])}
    actual play\t=> ${JSON.stringify(state[5])}
    rolls remaining\t=> ${JSON.stringify(state[6])}
    total score\t=>${state[0].reduce((a, b) => a + b, 0)}
    `)
}

test('simulate 1 round', () => {
    let backend = new Backend();

    console.log("Turn #1!")
    printNextTurnState(backend.nextTurn());

    console.log("Turn #2!")
    printNextTurnState(backend.nextTurn());

    console.log("Turn #3!")
    printNextTurnState(backend.nextTurn());

    console.log("Turn #4!")
    printNextTurnState(backend.nextTurn());
})

test('simulate entire game', () => {
    let backend = new Backend();

    let state;

    for (let turn = 0; ; turn++) {
        if (state && state[0].every(v => v !== null)) {
            break;
        }
        console.log(`Turn #${turn}!`)
        printNextTurnState(backend.nextTurn());
    }

    console.log(`Game finished!`)
})