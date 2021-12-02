"use strict"
function solve1(input) {
    if (input.length < 2)
        return 0

    let normalized = []
    for (let i = 1; i < input.length; i++) {
        if (input[i] > input[i - 1])
            normalized.push(input[i])
    }
    return normalized.length
}

function solve2(input) {
    if (input.length < 4)
        return 0

    let normalized = []
    for (let i = 2; i < input.length; i++) {
        normalized.push(input[i - 2] + input[i - 1] + input[i])
    }
    return solve1(normalized)
}

module.exports = { solve1, solve2 }