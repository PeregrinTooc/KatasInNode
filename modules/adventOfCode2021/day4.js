"use strict"
function solve1(input) {
    let { numbers, boards, markedBoards } = mapInput(input)
    console.log(numbers)
    while (numbers.length > 0) {
        let number = numbers.shift()
        for (let i = 0; i < boards.length; i++) {
            markedBoards[i] = markedBoards[i].map((line, j) => line.map((b, k) => { return b || boards[i][j][k] == number }))
            if (boardHasWon(markedBoards[i])) {
                let remainingNumbers = calculateSumOfRemainingNumbers(boards[i], markedBoards[i])
                console.log(boards[i])
                console.log(number)
                return number * remainingNumbers
            }
        }
    }
}

function solve2(input) {
    let { numbers, boards, markedBoards } = mapInput(input)
    while (numbers.length > 0) {
        let number = numbers.shift()
        let winners = []
        for (let i = 0; i < boards.length; i++) {
            markedBoards[i] = markedBoards[i].map((line, j) => line.map((b, k) => { return b || boards[i][j][k] == number }))
            if (boardHasWon(markedBoards[i])) {
                if (boards.length == 1) {
                    let remainingNumbers = calculateSumOfRemainingNumbers(boards[i], markedBoards[i])
                    console.log(number)
                    console.log(boards[0])
                    return number * remainingNumbers
                }
                else {
                    winners.push(i)
                }
            }
        }
        winners.forEach(index => boards.splice(index, 1))
        winners.forEach(index => markedBoards.splice(index, 1))
    }
}

function mapInput({ numbers, boards }) {
    let markedBoards = boards.map(board => board.map(line => line.map(x => false)))
    return { numbers, boards, markedBoards }
}

function calculateSumOfRemainingNumbers(board, markedBoard) {
    return board.reduce((sum, line, i) => sum + line.reduce((x, y, j) => {
        return markedBoard[i][j] ? x : x + y
    }, 0), 0)
}

function hasRowMarked(board) {
    for (let i = 0; i < board.length; i++) {
        const line = board[i];
        let marked = true;
        for (let j = 0; j < line.length; j++) {
            if (!line[j]) {
                marked = false
                break
            }
        }
        if (marked) {
            return true
        }
    }
    return false
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

