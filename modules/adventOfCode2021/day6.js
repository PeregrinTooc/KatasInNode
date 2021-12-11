"use strict"
let pointsTouchedTimes
function solve1(fish, ticks) {
    let fishReproductions = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    fish.forEach(i => fishReproductions[i]++)
    while (ticks-- > 0) {
        let copy = fishReproductions.map(x => x)
        fishReproductions[8] = copy[0]
        fishReproductions[7] = copy[8]
        fishReproductions[6] = copy[0] + copy[7]
        fishReproductions[5] = copy[6]
        fishReproductions[4] = copy[5]
        fishReproductions[3] = copy[4]
        fishReproductions[2] = copy[3]
        fishReproductions[1] = copy[2]
        fishReproductions[0] = copy[1]
    }
    return fishReproductions.reduce((n, m) => n + m)
}


module.exports = { solve1 }