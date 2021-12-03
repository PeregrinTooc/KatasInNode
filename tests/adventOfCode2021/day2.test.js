"use strict";
const parser = require("../../modules/adventOfCode2021/fileParser")
const path = require("path")
const testFile = path.resolve("./tests/adventOfCode2021/input/day2.txt")
const acceptanceTestInput = parser.parseToStringArray(testFile)
const puzzleInputFile = path.resolve("./modules/adventOfCode2021/input/day2.txt")
const puzzleInput = parser.parseToStringArray(puzzleInputFile)

const solver = require("../../modules/adventOfCode2021/day2")

test("solver 1 should exist", () => {
    expect(solver.solve1).toBeDefined()
})
test("solver 1 should accept array of directions", () => {
    expect(solver.solve1(["down 5", "forward 1"])).toBe(5)
})
test("solver 1 should add the downs", () => {
    expect(solver.solve1(["down 5", "down 5", "forward 1"])).toBe(10)
})
test("solver 1 should even out the downs and ups", () => {
    expect(solver.solve1(["down 10", "up 5", "forward 1"])).toBe(5)
})

test("solver 1 should multiply forward position and depth", () => {
    expect(solver.solve1(["down 1", "forward 2"])).toBe(2)
})

test("solver 1 should pass acceptance test", () => {
    expect(solver.solve1(acceptanceTestInput)).toBe(150)
})
test("solver 1 should solve the puzzle", () => {
    expect(solver.solve1(puzzleInput)).toBe(1938402)
})

test("solver 2 should calculate position", () => {
    expect(solver.solve2(["down 1", "forward 1"])).toBe(1)
    expect(solver.solve2(["forward 1", "down 1", "forward 1"])).toBe(2)
    expect(solver.solve2(["forward 1", "down 1", "forward 1", "up 2", "forward 1"])).toBe(0)
})

test("solver 2 should pass acceptance test", () => {
    expect(solver.solve2(acceptanceTestInput)).toBe(900)
})
test("solver 2 should solve the puzzle", () => {
    expect(solver.solve2(puzzleInput)).toBe(1947878632)
})


