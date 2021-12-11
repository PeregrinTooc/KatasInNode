"use strict";
const parser = require("../../modules/adventOfCode2021/fileParser")
const path = require("path")
const testFile = path.resolve("./tests/adventOfCode2021/input/day6.txt")
const acceptanceTestInput = parser.parseToStringArray(testFile)
const puzzleInputFile = path.resolve("./modules/adventOfCode2021/input/day6.txt")
const puzzleInput = parser.parseToStringArray(puzzleInputFile)

const solver = require("../../modules/adventOfCode2021/day6")

function getInput(input) {
    let result = []
    input.forEach(s => {
        s.split(',').forEach(c =>
            result.push(parseInt(c)))
    }
    )
    return result
}

test('getInput should transform the input', () => {
    expect(getInput(acceptanceTestInput)).toEqual([3, 4, 3, 1, 2])
})

test("solver 1 should exist", () => {
    expect(solver.solve1).toBeDefined()
})
test("solver 1 takes a list and a number of ticks", () => {
    expect(solver.solve1([1], 0)).toBe(1)
    expect(solver.solve1([0, 1], 0)).toBe(2)
    expect(solver.solve1([0, 1], 1)).toBe(3)
    expect(solver.solve1([1], 1)).toBe(1)
    expect(solver.solve1([7], 8)).toBe(2)
})
test("solver 1 should pass acceptance test", () => {
    expect(solver.solve1(getInput(acceptanceTestInput), 80)).toBe(5934)
})

test("solver 1 should solve the puzzle", () => {
    expect(solver.solve1(getInput(puzzleInput), 80)).toBe(352195)
})
test("solver 2 should pass acceptance test", () => {
    expect(solver.solve1(getInput(acceptanceTestInput), 256)).toBe(26984457539)
})
test("solver 2 should solve the puzzle", () => {
    expect(solver.solve1(getInput(puzzleInput), 256)).toBe(1600306001288)
})



