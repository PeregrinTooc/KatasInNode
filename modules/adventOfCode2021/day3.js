"use strict"
function solve1(input) {
    let half = input.length / 2
    let count = []
    for (let index = 0; index < input[0].length; index++) {
        count.push(0)
    }
    input.forEach(element => {
        for (let index = 0; index < 5; index++) {
            count[index] += parseInt(element.charAt(index))
        }
    });
    let gamma = ""
    let epsilon = ""
    count.forEach((element) => {
        element > half ? gamma += "1" : gamma += "0"
        element > half ? epsilon += "0" : epsilon += "1"
    })
    return parseInt(epsilon, 2) * parseInt(gamma, 2)
}


function solve2(input) {
}

module.exports = { solve1, solve2 }