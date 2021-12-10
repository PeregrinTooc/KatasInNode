"use strict"
let pointsTouchedTimes
function solve1(fish, ticks) {
    let fishesList = fish.map(x => x)
    let iterations = ticks
    let nextList = []
    while (iterations-- > 0) {
        fishesList.forEach(
            n => {
                if (n > 0)
                    nextList.push(n - 1)
                else
                    nextList.push(6, 8)
            }
        )
        fishesList = nextList
        nextList = []
    }
    return fishesList.length
}


module.exports = { solve1 }