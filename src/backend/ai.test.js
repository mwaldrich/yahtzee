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

test('simulate 3 turns', () => {
    let backend = new Backend();

    console.log("Turn #1!")
    console.log(`State: ${backend.nextTurn()}`)

    console.log("Turn #2!")
    console.log(`State: ${backend.nextTurn()}`)

    console.log("Turn #3!")
    console.log(`State: ${backend.nextTurn()}`)
})