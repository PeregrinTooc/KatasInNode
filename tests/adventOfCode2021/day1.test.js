"use strict";
const solver = require("../../modules/adventOfCode2021/day1")
const parser = require("../../modules/adventOfCode2021/fileParser")
const path = require("path")
const testFile = path.resolve("./tests/adventOfCode2021/input/day1.txt")
const acceptanceTestInput = parser.parseToIntegerArray(testFile)
const puzzleInputFile = path.resolve("./modules/adventOfCode2021/input/day1.txt")
const puzzleInput = parser.parseToIntegerArray(puzzleInputFile)
test("solver 1 should count increases", () => {
    expect(solver.solve1([111])).toBe(0)
    expect(solver.solve1([111, 112])).toBe(1)
    expect(solver.solve1([111, 112, 113])).toBe(2)
    expect(solver.solve1([111, 112, 112, 113])).toBe(2)
    expect(solver.solve1([111, 112, 110, 110, 111])).toBe(2)
})

test("solver 1 should pass acceptance test", () => {
    expect(solver.solve1(acceptanceTestInput)).toBe(7)
})

test("solver 1 should solve the puzzle", () => {
    expect(solver.solve1(puzzleInput)).toBe(1557)
})



test("solver 2 should count sliding increases", () => {
    expect(solver.solve2([1, 1, 1])).toBe(0)
    expect(solver.solve2([1, 1, 1, 2])).toBe(1)
})
test("solver 2 should pass acceptance test", () => {
    expect(solver.solve2(acceptanceTestInput)).toBe(5)
})

test("solver 2 should solve the puzzle", () => {
    expect(solver.solve2(puzzleInput)).toBe(1608)
})
