"use strict"
let pointsTouchedTimes
function solve1(input) {
    const inputLength = input.length
    if (inputLength == 1)
        return 0
    const middle = parseInt(inputLength / 2)
    input.sort()
    let result = []
    for (let i = 0; i < input.length; i++) {
        const position = input[i];
        result.push(input.reduce((x, y) => { return x + Math.abs(y - position) }, 0))
    }
    result.sort((a, b) => a - b)
    return result[0]
}

function solve2(input) {
}

module.exports = { solve1, solve2 }