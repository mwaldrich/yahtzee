// Testing

import { allKeepMasks } from "./ai"

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