"use strict"
function solve1(input) {
    let { numbers, boards } = input
    while (numbers.length > 0) {
        let number = numbers.shift()
        for (let i = 0; i < boards.length; i++) {
            boards[i] = boards[i].map((line) => line.map(n => n == number ? 0 : n))
            if (boardHasWon(boards[i])) {
                let remainingNumbers = calculateSumOfRemainingNumbers(boards[i])
                return number * remainingNumbers
            }
        }
    }
}

function solve2(input) {
    let { numbers, boards } = input
    while (numbers.length > 0) {
        let number = numbers.shift()
        let winners = []
        for (let i = 0; i < boards.length; i++) {
            boards[i] = boards[i].map((line) => line.map(n => n == number ? 0 : n))
            if (boardHasWon(boards[i])) {
                if (boards.length == 1) {
                    let remainingNumbers = calculateSumOfRemainingNumbers(boards[i])
                    return number * remainingNumbers
                }
                else {
                    winners.push(i)
                }
            }
        }
        winners.forEach(index => boards.splice(index, 1))
        if (boards.length == 1) {
            console.log(boards[0])
        }
    }
}

const calculateSum = (x, y) => x + y
const id = x => x

function calculateSumOfRemainingNumbers(board) {
    let remainingNumbers = 0
    return board.reduce((sum, line) => sum + line.reduce(calculateSum, 0), 0)
}

function hasRowMarked(board) {
    return board.filter(line => line.reduce(calculateSum) == 0).length > 0
}

function boardHasWon(board) {
    return hasRowMarked(board) || hasRowMarked(invertBoard(board))
}

function invertBoard(board) {
    let invertedBoard = []
    for (let i = 0; i < 5; i++) {
        invertedBoard.push([])
        for (let j = 0; j < 5; j++) {
            invertedBoard[i].push(board[j][i])
        }
    }
    return invertedBoard
}




module.exports = { solve1, solve2 }

