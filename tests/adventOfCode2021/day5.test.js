"use strict";
const parser = require("../../modules/adventOfCode2021/fileParser")
const path = require("path")
const testFile = path.resolve("./tests/adventOfCode2021/input/day5.txt")
const acceptanceTestInput = parser.parseToStringArray(testFile)
const puzzleInputFile = path.resolve("./modules/adventOfCode2021/input/day5.txt")
const puzzleInput = parser.parseToStringArray(puzzleInputFile)

const solver = require("../../modules/adventOfCode2021/day5")

class point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    toString() {
        return `x : ${this.x}, y : ${this.y}`
    }
}

class line {
    constructor(start, end) {
        return { start: start, end: end };
    }
}

function createLine(x1, y1, x2, y2) {
    return new line(new point(x1, y1), new point(x2, y2))
}

function getInput(input) {
    let result = []
    input.forEach(s => {
        let points = s.split(` -> `)
        let startPoint = points[0].split(',')
        let endPoint = points[1].split(',')
        result.push(createLine(parseInt(startPoint[0]), parseInt(startPoint[1]), parseInt(endPoint[0]), parseInt(endPoint[1])))
    }
    )
    return result
}

test("solver 1 should exist", () => {
    expect(solver.solve1).toBeDefined()
})
test("solver 1 should count overlaps", () => {
    expect(solver.solve1([createLine(0, 0, 0, 1)])).toBe(0)
    expect(solver.solve1([createLine(0, 0, 0, 1), createLine(0, 0, 0, 1)])).toBe(2)
})
test("solver 1 should ignore diagonals", () => {
    expect(solver.solve1([createLine(0, 0, 0, 1), createLine(0, 0, 1, 1)])).toBe(0)
})
test("solver 1 should ignore lines without intersections", () => {
    expect(solver.solve1([
        createLine(0, 0, 0, 1),
        createLine(0, 0, 0, 1),
        createLine(2, 2, 2, 3)])).toBe(2)
})
test("solver 1 should take longer lines into account", () => {
    expect(solver.solve1([
        createLine(0, 0, 0, 3),
        createLine(0, 0, 0, 2)])).toBe(3)
})
test("solver 1 should take horizontal lines into account", () => {
    expect(solver.solve1([
        createLine(0, 0, 1, 0),
        createLine(1, 0, 0, 0)])).toBe(2)
})

test("getInput should convert to array of lines", () => {
    expect(solver.solve1(getInput(['0,0 -> 0,1', '0,0 -> 0,1']))).toBe(2)
})


test("solver 1 should pass acceptance test", () => {
    expect(solver.solve1(getInput(acceptanceTestInput))).toBe(5)
})

test("solver 1 should solve the puzzle", () => {
    expect(solver.solve1(getInput(puzzleInput))).toBe(5306)
})
test("solver 2 should exist", () => {
    expect(solver.solve2).toBeDefined()
})

test("solver 2 should take diagonals into account", () => {
    expect(solver.solve2([
        createLine(0, 0, 1, 0),
        createLine(0, 0, 1, 1)])).toBe(1)
    expect(solver.solve2([
        createLine(0, 0, 1, 0),
        createLine(0, 1, 1, 0)])).toBe(1)
    expect(solver.solve2([
        createLine(1, 0, 1, 3),
        createLine(0, 0, 2, 2)])).toBe(1)
    expect(solver.solve2([
        createLine(1, 0, 1, 3),
        createLine(2, 2, 0, 0)])).toBe(1)
    expect(solver.solve2([
        createLine(1, 0, 1, 3),
        createLine(0, 2, 2, 0)])).toBe(1)
    expect(solver.solve2([
        createLine(1, 0, 1, 3),
        createLine(2, 0, 0, 2)])).toBe(1)
})

test("solver 2 should pass acceptance test", () => {
    expect(solver.solve2(getInput(acceptanceTestInput))).toBe(12)
})
test("solver 2 should solve the puzzle", () => {
    expect(solver.solve2(getInput(puzzleInput))).toBe(17787)
})



