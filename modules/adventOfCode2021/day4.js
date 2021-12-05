"use strict"
function solve1(input) {
    let { numbers, boards } = input
    while (true) {
        if (numbers.length == 0) { return }
        let number = numbers.shift()
        for (let i = 0; i < boards.length; i++) {
            boards[i] = boards[i].map((line) => line.map(n => n == number ? 0 : n))
            if (hasRowMarked(boards[i]) || hasRowMarked(invertBoard(boards[i]))) {
                let remainingNumbers = 0
                boards[i].forEach(line => {
                    remainingNumbers += line.reduce((x, y) => x + y, 0)
                })
                return number * remainingNumbers
            }
        }
    }

    function hasRowMarked(board) {
        return board.filter(line => line.reduce((x, y) => x + y) == 0).length > 0
    }
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

function solve2(input) {
}


module.exports = { solve1, solve2 }

