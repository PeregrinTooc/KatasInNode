"use strict";
const parser = require("../../modules/adventOfCode2021/fileParser")
const path = require("path")
const testFile = path.resolve("./tests/adventOfCode2021/input/day3.txt")
const acceptanceTestInput = parser.parseToStringArray(testFile)
const puzzleInputFile = path.resolve("./modules/adventOfCode2021/input/day3.txt")
const puzzleInput = parser.parseToStringArray(puzzleInputFile)

const solver = require("../../modules/adventOfCode2021/day3")

test("solver 1 should exist", () => {
    expect(solver.solve1).toBeDefined()
})
test("solver 1 should accept an array", () => {
    expect(solver.solve1(["00001", "11111", "00000"])).toBe(1 * 30)
    expect(solver.solve1(["00011", "11111", "00000"])).toBe(3 * 28)
})
test("solver 1 should pass acceptance test", () => {
    expect(solver.solve1(acceptanceTestInput)).toBe(198)
})
test("solver 1 should handle longer input", () => {
    expect(solver.solve1([
        "000110010001",
        "101000110000",
        "000110010111"])).
        toBe(parseInt("000110010001", 2) * parseInt("111001101110", 2))
})
test("solver 1 should solve the puzzle", () => {
    expect(solver.solve1(puzzleInput)).toBe(2954600)
})
test("solver 2 should exist", () => {
    expect(solver.solve2).toBeDefined()
})
test("solver 2 should calculate life support", () => {
    expect(solver.solve2(["000", "111", "000"])).toBe(0 * 7)
    expect(solver.solve2(["001", "111", "001"])).toBe(1 * 7)
    expect(solver.solve2(["001", "111", "011"])).toBe(3 * 7)
    expect(solver.solve2(["001", "010", "111", "100"])).toBe(7 * 1)
})
test("solver 2 should pass acceptance test", () => {
    expect(solver.solve2(acceptanceTestInput)).toBe(230)
})
test("solver 2 should solve the puzzle", () => {
    expect(solver.solve2(puzzleInput)).toBe(1662846)
})


