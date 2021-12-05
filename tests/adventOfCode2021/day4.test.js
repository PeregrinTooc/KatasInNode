"use strict";
const parser = require("../../modules/adventOfCode2021/fileParser")
const path = require("path")
const testFile = path.resolve("./tests/adventOfCode2021/input/day4.txt")
const acceptanceTestInput = parser.parseToStringArray(testFile)
const puzzleInputFile = path.resolve("./modules/adventOfCode2021/input/day4.txt")
const puzzleInput = parser.parseToStringArray(puzzleInputFile)

const solver = require("../../modules/adventOfCode2021/day4")

function getInput(input) {
    const numbers = input.shift().split(',').map(s => parseInt(s))
    let rawBoards = input.filter(s => s.trim() !== '')
    let boards = []
    for (let i = 0; i < rawBoards.length; i += 5) {
        let n = boards.push([])
        for (let j = 0; j < 5; j++) {
            boards[n - 1].push([])
            for (let k = 0; k < 13; k += 3) {
                boards[n - 1][j].push(parseInt(rawBoards[i + j].slice(k, k + 2).trim()))
            }
        }
    }
    return { numbers, boards }
}

test("solver 1 should exist", () => {
    expect(solver.solve1).toBeDefined()
})
test("solver 1 should accept numbers and boards", () => {
    let board = [[1, 1, 1, 1, 1]]
    const line = [2, 2, 2, 2, 2]
    for (let i = 0; i < 4; i++) {
        board.push(line)
    }
    expect(solver.solve1({ numbers: [1], boards: [board] })).toBe(40)
})
test("solver 1 should halt only if a row is complete", () => {
    let board = [[1, 1, 1, 1, 1]]
    const line = [2, 2, 2, 2, 2]
    for (let i = 0; i < 4; i++) {
        board.push(line)
    }
    let invertedBoard = []
    for (let i = 0; i < 5; i++) {
        invertedBoard.push([])
        for (let j = 0; j < 5; j++) {
            invertedBoard[i].push(board[j][i])
        }
    }
    expect(solver.solve1({ numbers: [1], boards: [invertedBoard] })).toBe(40)
})
test("solver 1 should halt only if a line is complete", () => {
    let board = [[1, 1, 1, 1, 3]]
    const line = [2, 2, 2, 2, 2]
    for (let i = 0; i < 4; i++) {
        board.push(line)
    }
    expect(solver.solve1({ numbers: [1, 3], boards: [board] })).toBe(120)
})
test("solver 1 should calculate for winning board", () => {
    let board0 = [[1, 1, 1, 1, 4]]
    const line = [2, 2, 2, 2, 2]
    for (let i = 0; i < 4; i++) {
        board0.push(line)
    }
    let board1 = [[1, 1, 1, 1, 3]]
    for (let i = 0; i < 4; i++) {
        board1.push(line)
    }
    expect(solver.solve1({ numbers: [1, 3], boards: [board0, board1] })).toBe(120)
})

test('getInput should calculate correct input', () => {
    let input = getInput(['1,2,3', '', '22 13 17 11  0', ' 8  2 23  4 24', '21  9 14 16  7', ' 6 10  3 18  5', ' 1 12 20 15 19'])
    expect(input.numbers).toEqual([1, 2, 3])
    expect(input.boards).toEqual([[[22, 13, 17, 11, 0], [8, 2, 23, 4, 24], [21, 9, 14, 16, 7], [6, 10, 3, 18, 5], [1, 12, 20, 15, 19]]])
})
test("solver 1 should pass acceptance test", () => {
    expect(solver.solve1(getInput(acceptanceTestInput))).toBe(4512)
})

test("solver 1 should solve the puzzle", () => {
    expect(solver.solve1(getInput(puzzleInput))).toBe(63552)
})
test("solver 2 should exist", () => {
    expect(solver.solve2).toBeDefined()
})

test("solver 2 should pass acceptance test", () => {
    expect(solver.solve2(getInput(acceptanceTestInput))).toBe(1924)
})
test("solver 2 should solve the puzzle", () => {
    expect(solver.solve2(getInput(puzzleInput))).toBe(1662846)
})