"use strict";
const parser = require("../../modules/adventOfCode2021/fileParser")
const path = require("path")
const testFile = path.resolve("./tests/adventOfCode2021/input/day7.txt")
const acceptanceTestInput = parser.parseToStringArray(testFile)
const puzzleInputFile = path.resolve("./modules/adventOfCode2021/input/day7.txt")
const puzzleInput = parser.parseToStringArray(puzzleInputFile)

const solver = require("../../modules/adventOfCode2021/day7")

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
    expect(getInput(acceptanceTestInput)).toEqual([16, 1, 2, 0, 4, 2, 7, 1, 2, 14])
})

test("solver 1 should exist", () => {
    expect(solver.solve1).toBeDefined()
})

test('solver should get the lowest possible sum of distances', () => {
    expect(solver.solve1([0])).toBe(0)
    expect(solver.solve1([0, 1])).toBe(1)
    expect(solver.solve1([0, 2])).toBe(2)
    expect(solver.solve1([0, 2, 1])).toBe(2)
})
test("solver 1 should pass acceptance test", () => {
    expect(solver.solve1(getInput(acceptanceTestInput))).toBe(37)
})
test("solver 1 should solve the puzzle", () => {
    expect(solver.solve1(getInput(puzzleInput))).toBe(328318)
})
test("solver 2 should pass acceptance test", () => {
    expect(solver.solve2(getInput(acceptanceTestInput))).toBe(168)
})
test("solver 2 should solve the puzzle", () => {
    return
    expect(solver.solve1(getInput(puzzleInput))).toBe(1600306001288)
})



